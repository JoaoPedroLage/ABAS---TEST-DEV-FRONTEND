# :package: Desafio técnico: ABAS - DEV-FRONTEND
por João Lage

<p align="center">
   <img src="http://img.shields.io/static/v1?label=STATUS&message=EM%20DESENVOLVIMENTO&color=RED&style=for-the-badge"/>
</p>

### Tópicos

- [Descrição do projeto](#man_dancing-descrição-do-projeto)

- [Melhorias possíveis](#construction-melhorias-possíveis)

- [Stacks utilizadas](#books-stacks-utilizadas)

- [Etapa mais desafiadora](#%EF%B8%8F-etapa-mais-desafiadora)

- [Abrir e rodar o projeto](#%EF%B8%8F-abrir-e-rodar-o-projeto)

- [Deploy na Vercel](#%EF%B8%8F-deploy-vercel)

- [Feedback sobre o desafio](#recycle-feedback-sobre-o-desafio)



# :man_dancing: Descrição do Projeto

Desafio técnico da empresa ABAS que consiste em criar um app para o cadastro de contas bancárias pessoais.

O que foi realizado:
- [x] Setup do projeto com arquitetura de software
- [x] Configuração do banco de dados
- [x] Dockerizar aplicação
- [x] Tipar todos arquivos corretamente
- [x] Criar classes abstratas para o modelo MSC (models, services e controllers )
- [x] Adicionar linter ao projeto
- [x] Fazer validações com Zod
- [x] CRUD de clientes
- [x] CRUD de carrinhos
- [x] CRUD de ingressos para os eventos
- [x] Servidor cloud EC2 na AWS
- [X] Criação de ingressos só pode ser feita por um usuário administrador



# :construction: Melhorias possíveis:

- Testes para o back-end.
- Melhorar a tipagem dos objetos que os métodos das classes recebem.
- Implementar mais validações e mensagens de erro para as requisições do usuário.
- Implentar uma interface funcional no front-end para ser amigável e interessante ao usuário/clientes.



# :books: Stacks utilizadas

### Front-end
- [ReactJs](https://pt-br.reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [NextJS](https://nextjs.org/)
- [MUI](https://mui.com/)
- [Bootstrap](https://getbootstrap.com/)



# Etapa mais desafiadora

- Utilizar o TypeScript com excelencia e aplicar POO para criar uma aplicação de fácil manutenibilidade e com facilidade para implentar novas features.
- Garantir que todas as funções estão se comunicando com coerência e gerando os resultados esperados.
- Aprender sobre AWS e o seu ecossistema.

#  <img src="https://dqw5z6tkg7aeo.cloudfront.net/icon/d88319dfa5d204f019b4284149886c59-7d586ea82f792b61a8c87de60565133d.svg"/> &nbsp;Servidor AWS
* A API foi colocada online através do serviço EC2 (Amazon Elastic Compute Cloud) da AWS que criou um servidor online que também possui um banco de dados para guardar as informações.
* Endereço da API online: http://18.228.192.201:3001
* Teste uma requisição para a rota `tickets` no seguinte endereço:
http://18.228.192.201:3001/tickets



# 🛠️ Abrir e rodar o projeto

1. Clone o repositório
  * `git clone git@github.com:JoaoPedroLage/RadarFit-Olimpiadas-Joao-Lage.git`
  * Entre na pasta do repositório que você acabou de clonar:
    * `cd backend`

2. Instale as dependências e inicialize
  * Instale as dependências no back-end:
    * `npm install`
  * Inicialize o projeto:
    * Inicialize o seu servidor MySQL
    * Coloque as suas variáveis de ambiente em um arquivo `.env` com base no `.env.example` e `também diretamente em back-end\src\database\config\config.ts`.
    * Na pasta do back-end execute no seu terminal `npm start` (o back-end começará a rodar na porta 3001, o script irá popular um banco de dados com base nas variáveis de ambiente).
    * Caso o `npm start` não rode corretamente, siga com seguintes comandos:
  * `cd scripts`
  * `chmod +x tsc_eval.sh`
  * `chmod +x reset-db-dev.sh`
  * tente o: `npm start` novamente
  * ainda não funcionou? Siga com:
  * `npm run build`
  * `npm run db:reset`
  * `npm run dev`

# :recycle: Feedback sobre o desafio

- A configuração do servidor na AWS foi um grande desafio pra mim, visto que ainda não havia criado um servidor com as ferramentas da AWS, acredito que com com a ajuda de um Senior Lead eu consegueria realizar essa tarefa com mais destreteza e eficiência.
- Outro ponto que gostaria de expor, é que eu me identifiquei de verdade com a empresa e a proposta de trabalho, como mencionei na entrevista, o que mais prezo em um emprego é um ambiente de trabalho seguro e confortável para eu poder ser o mais produtivo possível, eu sinceramente, senti que a PM Capital passa esse sentimento, desde já agradeço a oportunidade.
- No mais, foi um ótimo desafio. Coloquei em prática muitos dos meus conhecimentos do NodeJs, TypeScript e POO.
