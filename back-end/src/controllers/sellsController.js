const connection = require('../database/connection')

module.exports = {
    async index(req, res) {
        const { page = 1 } = req.query;

        const [count] = await connection('sells').count()
        res.header('X-Total-Count', count['count(*)']);

        const sells = await connection('sells')
            .join('clients', 'clients.id', '=', 'sells.client_id')
            .limit(5)
            .offset((page - 1) * 5)
            .select([
                'sells.*',
                'clients.name',
                'clients.phone',
                'clients.adress'
            ])
        return res.json(sells)
    },
    async create(req, res) {
        const { vencimento, value, client_id } = req.body;
        const [id] = await connection('sells').insert({
            vencimento,
            value,
            client_id
        })
        return res.json({ id })

    },
    async delete(req, res) {
        const { id } = req.params;
        const { client_id } = req.body

        const sells = await connection('sells')
            .where('id', id)
            .select('client_id')
            .first();


        if (sells.client_id !== client_id) {

            return res.status(401).json({ error: 'Operation Not Permitted Id' })
        }
        await connection('sells').where('id', id).delete();
        return res.status(204).send();
    }

}