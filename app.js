const express = require("express")
const app = express ()
const cors = require("cors")
const axios = require("axios")
const usuarios = "https://api-books-ac3j.onrender.com/users"
const books = "https://api-books-ac3j.onrender.com/books"

app.use(cors())


app.get ('/users', async (req, res) =>{
    try{
        const response = await axios.get(usuarios)
        res.json(response.data)

    } catch (error){
        res.status(404).json("Usuarios no encontrados")
           
    }
})

app.get ('/books', async (req, res) =>{
    try{
        const response = await axios.get(books)
        res.json(response.data)

    } catch (error){
        res.status(404).json("Libro no encontrado")
           
    }
})

app.get ('/users/:id', async (req, res) =>{
    const reqID = req.params.id
    try{
        const response = await axios.get(usuarios)
        res.json(response.data)

    } catch (error){
        res.status(404).json("Usuarios no encontrados")
           
    }
})





app.listen(3000, () =>{
    console.log("El servidor esta escuchando en el puerto http://localhost:3000")
})

