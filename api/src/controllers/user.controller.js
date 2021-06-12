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

// // ==> Método responsável por sortear um par de 'User':
// exports.sortUserPair = async (req, res) => {
//     const response = await db.query(`SELECT * FROM users ORDER BY RANDOM() LIMIT 3`)

//     return res.status(200).send(response.rows);
// }