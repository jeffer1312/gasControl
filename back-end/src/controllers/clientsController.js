const connection = require('../database/connection')

module.exports = {
    async index(req, res) {
        const clients = await connection('clients').select('*');
        return res.json(clients)
    },
    async create(req, res) {
        const { name, phone, adress } = req.body;
        const clients = await connection('clients').where('name', name).select('*');
        await connection('clients').insert({
            name,
            phone,
            adress
        })
        return res.json(clients)
            //return res.status(201).json({ message: 'cadastrado com sucesso' })
    },



}