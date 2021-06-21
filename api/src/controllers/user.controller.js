const nodemailer = require('nodemailer');
require("dotenv").config()

const db = require("../config/database");

// ==> Método responsável por criar um novo 'User':
exports.createUser = async (req, res) => {
    const { username, useremail } = req.body;
    const { rows } = await db.query(
        `INSERT INTO users (username, useremail) VALUES ($1, $2)`,
        [username, useremail]
    );

    return res.status(201).send({
        message: "User added successfully!",
        body: {
            user: { username, useremail }
        },
    });
};

// ==> Método responsável por listar todos os 'Users':
exports.listAllUsers = async (req, res) => {
    const response = await db.query('SELECT * FROM users ORDER BY username ASC');

    return res.status(200).send(response.rows);
};

// ==> Método responsável por realizar o sorteio todos os 'Users':
exports.sortUsers = async (req, res) => {
    const response = await db.query('SELECT * FROM users ORDER BY random()');

    return res.status(200).send(response.rows);
};

// ==> Método responsável por selecionar 'User' pelo 'Id':
exports.findUserById = async (req, res) => {
    const userId = parseInt(req.params.id);
    const response = await db.query('SELECT * FROM users WHERE user_id = $1', [userId]);

    return res.status(200).send(response.rows);
};

// ==> Método responsável por atualizar um 'User' pelo 'Id':
exports.updateUserById = async (req, res) => {
    const userId = parseInt(req.params.id);
    const { username, useremail } = req.body; const response = await db.query(
        "UPDATE users SET username = $1, useremail = $2 WHERE user_id = $3",
        [username, useremail, userId]);

    return res.status(200).send({ message: "User Updated Successfully!" });
};

// ==> Método responsável por deletar um 'User' pelo 'Id':
exports.deleteUserById = async (req, res) => {
    const userId = parseInt(req.params.id);
    await db.query('DELETE FROM users WHERE user_id = $1', [userId]);
    return res.status(200).send({ message: 'User deleted successfully!', userId });
}

exports.sendEmail = async (req, res) => {
    const { name, email, amigo } = req.body;

    const transport = nodemailer.createTransport({
        host:  process.env.SMTP_HOST,
        port:  process.env.SMTP_PORT,
        auth: {
          user:  process.env.SMTP_USER,
          pass:  process.env.SMTP_PASSWORD
        }
    });

    const mailOptions = {
        from: '"Example Team" <from@example.com>',
        to: email,
        subject: 'Amigo Secreto App',
        // text: `Olá ${name}! Você está participando do Amigo Secreto App! Seu amigo secreto é ${amigo}`,
        context: {name, amigo},
        html: `Olá ${name}! Você está participando do Amigo Secreto App! Seu amigo secreto é ${amigo}`
    };

    transport.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message sent: %s', info.messageId);
    });
};
