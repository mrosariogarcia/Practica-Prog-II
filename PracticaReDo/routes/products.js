const express = require('express'); // requiere la aplicacion Express
const router = express.Router(); //  sirve para definir rutas en una aplicación Express
const db = require("../db/index"); // requiere la "base de datos" que vamos a utilizar

// Utilizando la variable de router del punto b escribe una ruta que al ingresar en /products envíe al navegador la lista completa de autos.
router.get('/', function(req, res){
    return res.send(db.autos)
})

// Ruta parametizada que envie la coleccion de autos buscada
router.get('/brand/:brand', function(req,res){
    let marca = req.params.brand;
    let coleccion = []

    for (let i = 0; i < db.lista.length; i++) {
        if (db.lista[i].marca == marca) {
            coleccion.push(db.lista[i])
        }
    }
    
        if (coleccion.length == 0) {
            return res.send("No tenemos disponibles autos de esa marca")
        }
        
        else{
            return res.send(coleccion)
        }
})

// COLOR
router.get('/color/:color', function(req,res){
    let color = req.params.color;
    let coleccion = []

    for (let i = 0; i < db.lista.length; i++) {
        if (db.lista[i].color == color) {
            coleccion.push(db.lista[i])
        }
    }
    
        if (coleccion.length == 0) {
            return res.send("No tenemos disponibles autos de ese color")
        }
        
        else{
            return res.send(coleccion)
        }
})

// MODELO
router.get('/model/:model', function(req,res){
    let model = req.params.model;
    let coleccion = []

    for (let i = 0; i < db.lista.length; i++) {
        if (db.lista[i].modelo == model) {
            coleccion.push(db.lista[i])
        }
    }
    
        if (coleccion.length == 0) {
            return res.send("No tenemos disponibles autos de ese modelo")
        }
        
        else{
            return res.send(coleccion)
        }
})

// AÑ0
router.get('/anio/:anio', function(req,res){
    let anio = req.params.anio;
    let coleccion = []

    for (let i = 0; i < db.lista.length; i++) {
        if (db.lista[i].anio == anio) {
            coleccion.push(db.lista[i])
        }
    }
    
        if (coleccion.length == 0) {
            return res.send("No tenemos disponibles autos de esa marca")
        }
        
        else{
            return res.send(coleccion)
        }
})

module.exports = router;