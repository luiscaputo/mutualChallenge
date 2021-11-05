# MutualChallenge
### __Documentação da API__:
_base url_ : `http://localhost:8080/`
  1. npm install ou yarn para instalar as depêndencias
  2. yarn typeorm migration:run para criar as tabelas no banco de dados
  3. No terminal execute: `yarn typeorm migration:run`
  4. Dentro do directorio `src/insomnia/insomnia.json`
    Exportar esse ficheiro lá no insominia do seu computador
  5. No terminal: `yarn dev` ou `npm run dev`
  6. Testar as rotas no insomnia
  
  ### __Rodando no Docker__
  Basta abrir o terminal no diretorio do projecto e rodar o seguinte:
   1. `docker-compose build/sudo docker-compose build`  -  no windows/Linux
   2. `docker-compose up -d/sudo docker-compose up -d` -  Para rodar a o container em backGround
   3. `docker-compose up/docker-compose up`  -  Para rodar a aplicação também
   4. Rode um `docker ps/sudo docker ps`  -  Para verificar se os containers estão rodando
   5. Testar os endpoints
 ## __Tecnologias/Ferramentas usadas__
  
  - NodeJs
  - TypeScript
  - Sqlite3
  - typeorm
  - docker
  - Lint
  - Prettier
  - Insomnia
  
  _By: luiscaputo_
