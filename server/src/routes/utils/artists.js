const axios = require('axios')
const { Artist } = require('../../db.js')

// Create artist


const getArtists = async (id) => {
    try {
        if (id) {
            const artist = await Artist.findAll({
                where: { id: id }
            })
            if (artist.lenght != 0) {
                return artist[0]
            } else {
                throw new Error("No existe el usuario")
            }
        } else {
            const artists = await artist.findAll()
            return artists
        }
    } catch (error) {
        console.log("Error in getartists " + error.message)
    }
}

const createOrLoginArtist = async (data) => {
    try {
        const {name, email, id, img, lastName } = data
        let artists = await getArtists()
        let artist = artists.filter(e => e.id == id)
        console.log(artist)
        if(artist.length !== 0){
            return artist[0]

        }else{
            const newartist = await Artist.create({
                name,
                email,
                id,
                img,
                lastName
            })
            return newartist
        }


    } catch (error) {
        console.log("Error in createartist " + error.message)
    }
}

const updateArtist = async (id, data) => {
    try {
        const allartists = await getArtists()
        const artist = allartists.filter((e) => e.id === id)
        await artist[0].update({
            ...artist,
            ...data
        })
    } catch (error) {
        console.log('Error en funcion updateartist ' + error.message)
    }
}

const deleteArtist = async (id) => {
    try {
        let artist = await Artist.destroy({
            where: { id: id }
        })
    } catch (error) {
        console.log(`Error al eliminar el usuario ${error.message}`)
    }
}





module.exports = {
    getArtists,
    createOrLoginArtist,
    updateArtist,
    deleteArtist
}