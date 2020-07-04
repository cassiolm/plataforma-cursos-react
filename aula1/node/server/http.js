// requisita o módulo  HTTP do Node.js
const http = require('http');

// cria a aerofunction, que é mais rapida e utiliza o => em fez da palavra function // Essa funçao trata as requisicoes de forma generica
const requisicaoPadrao = (_, resposta) => {
    resposta.writeHead(200,{'Content-type': 'text/html'});
    resposta.write('<h1>Texto a ser exibido no browser</h1>');
    resposta.end();
}

//cria o servidor com o tratamento das requisicoes feitas pela nossa aplicacao
const server = http.createServer(requisicaoPadrao);

//roda o servidor na porta 3000 e ao concluir a subida, informa via funcao anônima
server.listen(3000, ()=> {
    console.log('servidor no ar na porta 3000')
});