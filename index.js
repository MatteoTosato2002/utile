const express = require("express")
const app = new express()
const path = require("path")
app.use(express.static(path.join(__dirname, "public")))
app.use(require("body-parser").json())

const data = [1, 2, 3, 4, 5, 6, 7]
const pari = data.filter(e => (e-1)%2)
const dipari = data.filter(e => e%2)
const somma = data.reduce((acc, e) => {
  acc += e
  return acc
}, 0)

// localhost:8080/?name=pippo
app.get("/", (req, res) => {
  // QUESTA é UNA QUERY STRING
  const query = req.query  // { name: "pippo" }

  // QUESTI SONO GLI HEADERS
  const headers = req.headers // headers della richiesta

  res.send("<h1>Ciao " + query.name + "</h1>") // manda una risposta
})

// localhost:8080/post/1
app.get("/post/:id", (req, res) => {
  // QUESTI SONO I PARAMETRI
  const params = req.params // { id: 1 }

  res.send("Il parametro inserito è:" + params.id)
})

// Endpoint in post
app.post("/nome", (req, res) => {
  // QUESTI è IL BODY DELLA REQUEST
  const body = req.body  // body della request

  res.send("Esempio di endpoint in post")
})

// Endpoint che restituisce la pagina HTMl che è presente in public e si chiama index.html
app.get("/html", (req, res) => {

  res.sendFile(path.join(__dirname, "public/main.html"))
})

app.listen(8080, console.log("Server port: 8080 \nServer link: http://localhost:8080"))
