# :package: Desafio técnico: ABAS - DEV-FRONTEND
por João Lage

<p align="center">
   <img src="http://img.shields.io/static/v1?label=STATUS&message=EM%20DESENVOLVIMENTO&color=RED&style=for-the-badge"/>
</p>

### Tópicos

- [Descrição do projeto](#books-descrição-do-projeto)

- [Melhorias possíveis](#construction-melhorias-possíveis)

- [Stacks utilizadas](#books-stacks-utilizadas)

- [Etapa mais desafiadora](#%EF%B8%8F-etapa-mais-desafiadora)

- [Abrir e rodar o projeto](#%EF%B8%8F-abrir-e-rodar-o-projeto)

- [Deploy na Vercel](#deploy)

- [Feedback sobre o desafio](#recycle-feedback-sobre-o-desafio)



# :books: Descrição do Projeto

Desafio técnico da empresa ABAS que consiste em criar um app para o cadastro de contas bancárias pessoais.

O que foi realizado:
- [x] Uso do framework Next.js para ter:
   * Agilidade de desenvolvimento através da divisão do código.
   * Otimizado para tráfego orgânico e com ótima experiência ao usuário.
   * Carregamento acelerado.
- [x] Setup do projeto com arquitetura de software.
- [x] Dockerizar aplicação.
- [x] Tipagem de todos arquivos.
- [x] Adicionar linter ao projeto.
- [x] Deploy cloud na Vercel.
- [X] Responsividade da aplicação para dispositivos movéis e desktop.
- [X] Componentização das partes de cada tela do projeto.

Dentro do que foi requerido para o projeto:
- [X] Tela Inicial: A tela inicial deverá listar todas as contas bancárias cadastradas na aplicação.
- [X] No topo da tela inicial deverá possuir um botão para cadastrar uma nova conta bancária. Ao clicar neste botão o usuário deverá ser direcionado para __Tela de Listagem __
- [X] As contas cadastradas deverão ser exibidas abaixo do botão de cadastrar nova conta e ficarão armazenadas no local storage do dispositivo. O cadastro das contas serão realizadas conforme as funcionalidades descritas abaixo.
- [X] Se não existir conta cadastrada deverá exibir uma mensagem de que não existe conta cadastrada logo abaixo ao botão de cadastro de nova conta do topo da tela.

- [X] Tela de Listagem: Apresentar um tela de listagem de todos os bancos para que seja selecionado um banco para o cadastro.
- [x] Para listagem de todos os bancos deverá ser utilizada a api pública: https://brasilapi.com.br/api/banks/v1.
- [x] No topo da tela de listagem, deverá existir um campo com um botão para consulta do banco pelo código do banco. Este campo receberá o código do banco e ao clicar no botão irá apresentar apenas o banco consultado na tela de listagem. Para consultar o banco através do código deverá ser utilizada a api pública: https://brasilapi.com.br/api/banks/v1/{code}.
- [x] Ao clicar em um banco da tela de listagem o usuário deverá ser redirecionado para a para __Tela de Cadastro __.

   Tela de Cadastro: Cadastro da conta.
- [x] Nesta tela deverá exibir todas as informações do banco retornadas pela api.
- [x] Abaixo das informações do banco deverá existir dois campos para o usuário informar a agencia e conta de cadastro.
- [x] Abaixo dos campos deverá possuir um botão para cadastrar a conta.
- [x] O cadastro da conta deverá ser armazenado no local storage do dispositivo - Armazenar (Codigo do Banco, Agencia e Conta).

# :construction: Melhorias possíveis:

- Testes para as rotas e os requisitos do projeto (pretendo ainda realizar estes testes).
- Criar uma tela de login e cadastro de usuário.
- Adicionar um banco de dados MongoDB a aplicação e salvar os dados de cada usuário.
- Utilizar o Railway para criar o banco de dados mencionado e criar um Back-end para as requisições e assim salvar dados do usuário.
- Utilizar o Figma para otimizar a experiência do usuário e design da aplicação.


# :books: Stacks utilizadas

### Front-end
- [ReactJs](https://pt-br.reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [NextJS](https://nextjs.org/)
- [MUI](https://mui.com/)
- [Bootstrap](https://getbootstrap.com/)



# Etapa mais desafiadora

- Utilizar o TypeScript com excelência e tipar corretamente para assim melhorar a manutenibilidade e ter facilidade para implentar novas features.
- Garantir que todas as funções estão se comunicando com coerência e gerando os resultados esperados.
- Utilizar corretamente o inifinite scroller e corrigir todos os bugs decorrentes ao longo do desenvolvimento da aplicação.
- Correção de bugs ao longo do desenvolvimento através de diversos testes utilizando cada rota da aplicação.

#  :deploy: <img src="https://cdn.changelog.com/uploads/icons/news_sources/qGw/icon_small.png?v=63692097118" width='40px'/> &nbsp;Deploy no Vercel
* A API foi colocada online através do Next.js e do Vercel que trabalham juntos, o uso do Next fez com que o deploy da aplicação fosse mais fácil e de fácil manutenibilidade.
* Endereço online da aplicação: https://joao-lage-test-abas.vercel.app/




# 🛠️ Abrir e rodar o projeto

1. Clone o repositório
  * `git clone git@github.com:JoaoPedroLage/ABAS---TEST-DEV-FRONTEND.git`
  * Entre na pasta do repositório que você acabou de clonar:

2. Instale as dependências e inicialize
  * Instale as dependências no back-end:
    * `yarn/npm install`
  * Inicialize o projeto:
   * `yarn/npm dev`

# :recycle: Feedback sobre o desafio

- Para esse desafio tomei a decisão de me inspirar na página da ABAS do setor financeiro, https://abas.online/segmento/financeiro/, utilizei cores, fontes e até ícones no meu projeto inspiradas nas dessa página, estudei sobre a empresa, procurando adaptar o meu projeto e as minhas ideias no formato da empresa.
- Utilizei o Figma como Scrum e criei um link para convidados, https://trello.com/invite/b/VVWOYs9m/ATTI5b0c5eda261ca1741265894010b3b0c6758945F3/abas-test-dev-frontend, para assim os avaliadores acompanharem meu processo e minha organização. Demonstro assim meu gosto por metodologias agéis e organização de squads.
- Gostei muito do meu desenvolvimento e da proposta desse projeto, pretendo adaptá-lo e colocar no meu portfólio. Agradeço imensamente pela oportunidade e todo aprendizado que desenvolvi nesse projeto.
