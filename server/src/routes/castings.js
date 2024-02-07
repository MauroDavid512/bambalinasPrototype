const { Router } = require('express')
const { Casting } = require('../db')
//const { getCastings, createCasting, updateCasting, deleteCasting} = require('./utils/castings')
const router = Router();

router.get('/', async (req, res) => {
    try {
        const {id, type, category, user} = req.query
        let info = await getCastings(id, type, category, user)
        res.status(200).json(info)
    } catch (error) {
        res.status(404).json({ error: error.message })
    }
})


router.post('/create', async (req, res) => {
    try {
        const data = req.body
        createCasting(data)
        res.status(200).json(`Casting ${data.title} creado exitosamente`)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
})


router.delete('/delete/:id', async (req, res) => {
    try {
        const { id } = req.params;
        deleteCasting(id)
        res.status(200).json("Casting eliminado")
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
})

router.put('/update/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const casting = await getCastings(parseInt(id))
        const data = req.body;
        console.log("data en ruta ---> "+data)
        await updateCasting(parseInt(id), data)
        const castingUpdated = await getCastings(id)
        if (casting == castingUpdated) {
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
        let info = await getCastings(id)
        res.status(200).json(info)
    } catch (error) {
        res.status(404).json({ error: error.message })
    }
})



module.exports = router