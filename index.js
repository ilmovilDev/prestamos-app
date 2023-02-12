const express = require('express')

// crear el server de express
const app = express()



// rutas
app.get('/', ( req, res ) => {

    console.log('se requiere el /')

})



// escuchar peticiones
app.listen( process.env.PORT , () => {
    console.log(`servidor corriendo en puerto ${ process.env.PORT }`)
})