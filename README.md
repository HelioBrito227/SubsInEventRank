# Ranqueamento de inscrições em evento via link

## Funcionalidade da aplicação

A aplicação é um simulacro de um ranking de inscrições em um evento utilizando links.
Um usuário ao se cadastrar no evento pode utilizar seu id como referência para outros usuários se inscreverem, fazendo com que o referenciado ganhe uma pontuação de acordo com a quantidade de pessoas que utilizaram seu link.

## Pré-requisitos

É necessário possuir o docker instalado em máquina, para utilizar a o comando:
```
docker compose up
```
Iniciando os bancos de dados utilizados pela aplicação.

É necessário um arquivo .env na raiz para a configuação de variáveis locais que serão utilizadas na aplicação
 As variáveis necessáris são:
 
 `PORT` Com a porta que será utilizada para acessar os endpoints.
 
 `WEB_URL` Endereço ficticio que é utilizado pela aplicação para o redirecionamento após uma funcionalidade de endpoint.

 `POSTGRES_URL` Com os dados de conexão ao banco PostgreSQL, dados podem ser conseguidos no arquivo docker compose.

 `REDIS_URL` Com os dados de conexão ao banco Redis, dados podem ser conseguidos no arquivo docker compose.

## Comandos para funcionamento

Antes de inicializar o projeto são necessários alguns comandos para o funcionamento do emsmo:

### `npm i`
Ele irá instalar os modulos necessários para o funcionamento da aplicação.

### `npm run build`
Ele traduz a aplicação de Typescript para Javascript, permitindo a execução mais rápida da aplicação.

### `node --env-file .env dist/server.mjs`
O comando irá iniciar a aplicação, utilizando o arquivo .env para a configuração de variáveis de ambiente

## Documentação
Com a aplicação em funcionamento o endereço [http://localhost:{PORT}/docs](http://localhost:{PORT}/docs) irá exibir a tela de documentação dos endpoints disponíveis, incluindo parâmetros de cada endpoint, respostas esperadas, e testes de endpoint na própria página.

## Funcionamento da aplcação
Podem ser utilizadas ferramentas como Postman e Insomnia para o teste desses endpoints 

## Tecnologias utilizadas na aplicação
Docker: Com as imagens de bancos de dados utilizados

PostgreSQL: Banco de dados principal, com a tabela de subscriber que é utilizada para armazenar dados de inscritos no evento

Redis : Banco de dados utilizado para armazenar resultados das consultas aos endpoints da aplicação, utilizando as funções disponibilizados por ele

Fastify: Framework para o desenvolvimento da aplicação

Zod: Utilizado na validação e serialização de dados 

Drizzle: Para comunicação entre a aplicação e o banco de dados PostgreSQL

Node.js: Ambiente de execução da aplicação

Typescript: Linguagem utilizada para a escrita do código em si


## To-Do

- [ ] Tradução de funções e outros textos da aplicação para português.
- [ ] Deploy da aplicação em ambiente online para facilitar o uso da mesma.

