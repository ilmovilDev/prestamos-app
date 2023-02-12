const express = require('express');
require('dotenv').config();

// crear el server de express
const app = express()

// directorio public
//app.use( express.static('public') );


// rutas
app.get('/', ( req, res ) => {

    //console.log('se requiere el /')
    res.json({
        ok: true,
        msg: 'app-get'
    })

})



// escuchar peticiones
app.listen( process.env.PORT , () => {
    console.log(`servidor corriendo en puerto ${ process.env.PORT }`)
})