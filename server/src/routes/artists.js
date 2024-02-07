const { Router } = require('express')
const { Artist } = require('../db')
const { getArtists, createOrLoginArtist, updateArtist, deleteArtist} = require('./utils/artists')
const router = Router();

router.get('/', async (req, res) => {
    try {
        const {id, type, category, user} = req.query
        let info = await getArtists(id, type, category, user)
        res.status(200).json(info)
    } catch (error) {
        res.status(404).json({ error: error.message })
    }
})


router.post('/create', async (req, res) => {
    try {
        const data = req.body
        createOrLoginArtist(data)
        res.status(200).json(`Articulo ${data.title} creado exitosamente`)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
})


router.delete('/delete/:id', async (req, res) => {
    try {
        const { id } = req.params;
        deleteArtist(id)
        res.status(200).json("Articulo eliminado")
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
})

router.put('/update/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const Artist = await getArtists(parseInt(id))
        const data = req.body;
        console.log("data en ruta ---> "+data)
        await updateArtist(parseInt(id), data)
        const ArtistUpdated = await getArtists(id)
        if (Artist == ArtistUpdated) {
            throw new Error('No se realizaron cambios en el usuario')
        }
        res.status(200).json("Cambios realizados")
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
})

router.get('/search/:str', async (req, res) => {
    try{
        const {str} = req.params;
        const info = await search(str);
        res.status(200).json(info)
    }catch(error){
        res.status(400).json({ error: error.message })
    }
})


router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params
        let info = await getArtists(id)
        res.status(200).json(info)
    } catch (error) {
        res.status(404).json({ error: error.message })
    }
})



module.exports = router