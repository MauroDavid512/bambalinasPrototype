const { Router } = require('express')
const { Producer } = require('../db')
//const { getProducers, createOrLoginProducer, updateProducer, deleteProducer} = require('./utils/producers')
const router = Router();

router.get('/', async (req, res) => {
    try {
        const {id, type, category, user} = req.query
        let info = await getProducers(id, type, category, user)
        res.status(200).json(info)
    } catch (error) {
        res.status(404).json({ error: error.message })
    }
})


router.post('/create', async (req, res) => {
    try {
        const data = req.body
        createProducer(data)
        res.status(200).json(`Productora ${data.title} creado exitosamente`)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
})


router.delete('/delete/:id', async (req, res) => {
    try {
        const { id } = req.params;
        deleteProducer(id)
        res.status(200).json("Articulo eliminado")
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
})

router.put('/update/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const producer = await getProducers(parseInt(id))
        const data = req.body;
        console.log("data en ruta ---> "+data)
        await updateProducer(parseInt(id), data)
        const producerUpdated = await getProducers(id)
        if (producer == producerUpdated) {
            throw new Error('No se realizaron cambios en el usuario')
        }
        res.status(200).json("Cambios realizados")
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
})

router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params
        let info = await getProducers(id)
        res.status(200).json(info)
    } catch (error) {
        res.status(404).json({ error: error.message })
    }
})



module.exports = router