//criando o servidor web
'use strict' //ajuda com criterios do JS.
const http = require ('http'); // -> usar o "require" para importar os pacotes. Se colocar sem o caminho, ele busca diretamente do node_modules.
const debug = require ('debug')('nodestr:server');
const express = require ('express'); //express é necessario para usar os MVC's Models e talz...

const app = express(); // aqui a gente seta pra usar o modelo MVC.
const port = 3000;
app.set('port', port); // aqui a gente setou a porta. 

const server = http.createServer(app); //aqui e URL para o acesso.
const router = express.Router();

const route = router.get('/', (req,res,next)  => {
    res.status(200).send
    ({
        title:"Node store API",
        version:"0.0.1"
    })

});
app.use('/', route);
server.listen(port);
console.log("Api funfando na porta" + port);