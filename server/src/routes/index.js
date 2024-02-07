const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();
const artist = require('./artists')
const producer = require('./producers')
const casting = require('./castings')

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use('/artist', artist )
router.use('/producer', producer)
router.use('/casting', casting)





module.exports = router;
