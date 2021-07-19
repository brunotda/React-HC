# React Básico

Treinamento Hiring Coders 07/2021 
 - Instalar node (junto com npm)
 - Opcional utilizar yarn no lugar do npm
 - create-react-app fonte base disponibilizado pelo facebook para instalar todos os recursos necessários.
 - JSX termo utilizado para fazer referencia ao HTML dentro do js.
 - Javascript dentro do JSX deve ser dentro do chaves {}.
 - class é uma palavra reservada, devendo ser utilizada no html como className

## Instalar
Instalar através do comando npx (comando para executar comando de fonte externa)
`npx create-react-app <name>` - alterar <name>

Para validar instalação executar o comando, acesse a pasta criada e execute o comando
`npm start`

Configura Typescript com algumas regras pré-definidas
`tsc --init`

### Pacotes
- Instalar pacote axios para requisições "ajax" `npm install axios`
- Instalar pacote controle de paginas/rotas `react-router-dom`
- Instalar pacote style components `styled-components`

## Anotações
`props` - Utilizado para captura de propriedades
- Return só pode retornar um bloco portanto todos elementos devem estar dentro de uma unica marcação (ex.: div) ou fragment (<> </>) para retornar somente os elementos.
- ClassComponents não é mais recomendado, utilize hooks.
- Componentes Controlados / Controled Components
- Para importar pacote no react: `import axios from 'axios'`;
- Para importar arquivs no react: `import style from '.\style.css'`;
- Hook `useEffect` acompanha se a variavel foi alterada e dispara uma função;
- Hook `useState` acomapanha o estado;
- Utilizar `Link` do react-router-dom para redirecionar sem refresh.

## Boas práticas
- Pasta 'pages' para todas as páginas
- Adicionar pastas para cada página e incluir arquivo index.js
- Pasta 'components' para todos componentes isolados


