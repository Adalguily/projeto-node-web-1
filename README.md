instalei npm init também o node.js, coloquei os comando git, como os comandos
![alt text]({50BD748F-6991-4047-85DF-ECC747BB5856}.png)


Veja o exmeplo funcionando:
![alt text]({550A9182-3D37-44D2-8B8D-0AF4ACB7B3B9}.png)

eu criei um repositorio projeto-node-web-1
e inclui o repositorio remoto no meu projeto

git remote add origin https://github.com/Adalguily/projeto-node-web-1.git

o comando acima faz associar um repositório local a um repositório remoto.

git branch -M main, esse comando criar uma branch chamada "main", branch(ou seja, branches seria uma especie de ramificações designar ramos de trabalhos)

git push -u origin main este sicroniza o repositório remoto com o repositório local, sempre irei fazer isso quando tiver "coisas novas" no código quando sincronizar com repositório remoto


o API REST define como as aplicações se comunicam entre si. Em APIs REST, as informações são sempre processadas e manipuladas no backend. O front-end envia uma solicitação (requisição) para o backend, que, por sua vez, executa as operações necessárias, como acessar um banco de dados, processar dados, ou realizar cálculos. A resposta do backend é então enviada de volta para o front-end.

Vamos iniciar a integração com o banco de dados Knex.

o comando npm install knex sqlite3, instala o knex

coloquei um arquivo knexfile.js e coloquei uma programação nele, que estava descrito no pdf, la constava client, connection, filename: meu banco
e uso de algo nulo como verdadeiro

tive que remover a pasta node modules, que deu problema no github e utilizei esse comando para tirar a pasta:

git rm -r --cached node_modules

o foi criado o arquivo gitignore, este serve para colocar os arquivos no historico do node modules 

foi adicionado a programação de tabela usuarios que consta id, nome, email, senha e mostra Tabela Criada

foi colocado um insert da tabela anterior e onde o usuario coloca suas informaçoes e depois será confirmado que foi inserido


consulta de dados 
mostra ao usuario como ele colocou os seus dados


filtrando dados
mostra como ele colocou o seu email e nome como link de acesso aos seus dados

atualizando dados
este reintegrar qualquer modificação feita pelo usuario para atualizar qualquer mudança feita por ele

remoção de dados
este caso o usuario queira excluir algo este faz a remoção

finalizando a conexão com o banco

este encerra as ações feitas pelo usuario, quando completada


no db.js faz o require, que server para importar módulos externos de um programa, requerer

no segundo ele monta a tabela com as informações do usuario para banco de dados, tabelar

no terceiro ele consta que o usuario foi criado e depois é postado no portal 3000 , confirmar e postar

pode-se entender que seria uma copia dos comandos anterios, entretanto foi mando para um portal onde o usuario poderá vizualizar o que foi feito via internet

Criei uma conta no postman uma request chamada projeto1 que continha vizualização do usuario e criação do usuario,

Criei uma conta no postman, fiz um projeto para vizualizar e criar usuario

![alt text]({5070CBF9-7636-4CA3-903D-C96DFFAC4629}.png), não funciona devido não existir rotas, criação de usuario e outras identificações

![alt text]({6861B7F7-7C74-46D4-B576-B1F900CF2772}.png), ainda não tem rotas


irei colocar o comando:
npm install express knex sqlite3 jsonwebtoken bcryptjs

este faz que instala seis pacotes JavaScript essenciais para desenvolvimento web e segurança: Express, Knex, SQLite3, Jsonwebtoken e Bcryptjs. Este comando é usado para adicionar e importar esses pacotes para um projeto Node.js, permitindo que você utilize suas funcionalidades em seu código.

os dois ultimos faz uma biblioteca de tokens e de senhas, devidos os outros já estarem instalados.

o primeiro requer o cliente do sqlite3 e o nome do blog
e trata com nulidade 

foi dado um erro depois foi corrigido, identificado o erro, as "coisas" começaram a rodar de maneira adequada. e foi comitadado o erro

![alt text]({939CDE83-8DDF-4CC5-B39C-9A5F63A8822D}.png)

![alt text]({983BD526-8A2F-475E-9C4A-372F71A29D16}.png)

agora esta de acordo com o pdf, sugerido do professor


agora será feita a tabela o programa API para tokens e com recursos de bibliotecas

segundamente criado o indez para o cadastro do usuario e login

depois a criação de rotas para a inscrição e login

apos colocado o anterior, coloca-se a middleware de autenficação, para exibir token não enviado e token invalido, caso de errado

por ultimo proteção de rotas, e tambem exiber mensagem criada, mensagem usuario, mensagem id, mensagem texto e mensagem data_postagem

seguindo o API, com cadastro, login e autentificação, postagem e leitura de mensagens
