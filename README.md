# test-back
API desenvolvida para criação de NFt's consumindo a API do Pinata.

## Instalação

   yarn install

## Executar a aplicação

   yarn dev

## Executar testes

   yarn test 
   
# REST API

  As especificações da API estão descritas abaixo.
  
## Rotas 

### Autenticação administrador
  
`- (POST) http://localhost:3333/auth`
- Rota para obter token de acesso.

      Body - {
              "user_admin": "",
              "password_admin": ""
              }
      
      Credenciais se encontram no .env
   
### Criação de asset

`(POST) http://localhost:3333/assets` 
- Rota para criação de asset.
     
      Body - {
              "name": "",
              "description": "",
              "image": ""
              }

      A imagem deve estar na pasta raiz ./images, colocar o nome e extensão. Exemplo: test.png
     
### Listar todos os assets
`(GET) http://localhost:3333/assets` 
- Lista todos os assets da aplicação.
     
### Criação de uma nova nft
`(POST) http://localhost:3333/nfts` 
- Criar uma nova nft.
     
        Body - {
              "qtd_nfts": "",
	            "asset_id": "",
              }
        
        Será gerado a quantidade de nfts informado na requisição, deve ser um asset_id existente na tabela assets.
 
### Listar todos as nfts
`(GET) http://localhost:3333/nfts` 
- Lista todas as nfts da aplicação.
     

## Variáveis .env

- PORT: porta da aplicação
- PINATA_API_KEY: chave da API do pinata
- PINATA_SECRET_API_KEY: chave secreta da API do pinata.
- SECRET_TOKEN: token secreto do JWT.
- USER_ADMIN: usuário para credencial na API.
- PASSWORD_ADMIN: senha para o usuário da API.

## TypeORM comandos.

- Configurar as credenciais do banco no arquivo ormconfig.json.

- Execute yarn typeorm migrate:run - Subir as migrations
