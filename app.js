const express = require('express')
const app = express()
const port = 3001
const bodyParser = require('body-parser');
const cors = require('cors');
app.use(cors());
//aplicação pelo método get vai buscar a rota 
// localhost:3000/
// Configura o body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
//Arquivo com rotas para o cadastro de livros
const livros = require('./routes/livros');
const autores = require('./routes/autores');
const editoras = require('./routes/editoras');

//identificação da rota e da const (require) associada
//localhost:3000/livros
app.use('/livros',livros);
app.use('/autores',autores);
app.use('/editoras',editoras);


//a rota /livros retorna a lista dos livros cadastrados em formato json
app.use(express.json())

app.get('/', (req, res) => {
  res.send('teste Fernando!')
})



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})



  