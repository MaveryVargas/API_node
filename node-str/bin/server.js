//criando o servidor web
'use strict' //ajuda com criterios do JS.
const app = require ('../source/app'); // aqui importa as informações do arquivo app.js
const debug = require ('debug')('nodestr:server');
const http = require ('http'); // -> usar o "require" para importar os pacotes. Se colocar sem o caminho, ele busca diretamente do node_modules.

const port = normalizePort(process.env.PORT || '3000'); //chamada da função. Ele busca uma porta pelo proprio azure por exemplo, caso nao venha nada, ele utiliza porta = 3000
app.set('port', port); // aqui a gente setou a porta. 

const server = http.createServer(app); //aqui e URL para o acesso.

server.listen(port);
server.on('error', onError); // server.on ('evento',metodo)
server.on('listening', onListening);
console.log("Api funfando na porta" + port);


//Função que normaliza a porta que ira usar, não é recomendado manter um numero fixo. a função foi retirada do modulo express
function normalizePort(val)
{
    //tentando converter um valor para um inteiro.
    const port = parseInt(val,10) 
    if(isNaN(port))
    {
        return val;
    }
    if (port >=0)
    {
        return port;
    }

    return false;
}

//Criando funções para gerenciar erro do servidor.
function onError(error)
{
    if(error.syscall !== 'listen')
    {
        throw error;
    }

    const bind = typeof port === 'string' ?
        'Pipe' + port :
        'Port' + port;
    
    switch (error.code) //switch case classico, tem a documentação de erros do node pela internet ai
    {
        case 'EACESS': //erro de acesso
            console.error (bind + ' requires elevated privileges');
            process.exit(1);
            break;
        
        case 'EADDRINUSE':
            console.error (bind + ' is already in use');
            process.exit(1);
            break;
        
        default:
            throw error;
    }
}
//função criada com informações do servidor para executar o debug
function onListening()
{
    const addr = server.address();
    const bind = typeof addr === 'string'
        ? 'pipe ' + addr
        : 'port ' + addr.port;
    debug('Listening on '+ bind);

}

