# Configuração do Frontend Apollo React

Este guia fornece instruções detalhadas para configurar o frontend utilizando React com Apollo Client no ambiente Linux.

## Pré-requisitos

- Ter o Node.js e npm instalados.
- Opcionalmente, ter o Git instalado, se preferir clonar repositórios.
- Ter um terminal de sua preferência (por exemplo: Terminal, iTerm, etc.).

## Instalação

- **Clonagem do repositório (opcional):**

```bash
git clone git@github.com:marvindev2022/react-apollo-client.git
```

- **Acessar o diretório do projeto:**

```bash
cd apollo-react
```

- **Instalação das dependências:**

```bash
npm install
```

## Execução

- **Iniciar o servidor de desenvolvimento:**

```bash
npm run dev
```

Este comando iniciará o servidor de desenvolvimento. Basta abrir [http://localhost:5173](http://localhost:5173) no seu navegador para visualizar o aplicativo em execução.

## Build

- **Gerar uma versão de produção do aplicativo:**

```bash
npm run build
```

Este comando criará uma pasta `build` contendo os arquivos otimizados para produção.

## Uso

Este aplicativo pode ser utilizado para interagir com o backend Apollo Server. Aqui estão alguns exemplos de como enviar consultas (queries) e mutações:

### Consulta (Query)

**URL da Rota:**

```plaintext
POST http://localhost:4000/graphql
```

**Corpo da Requisição:**

```gql
query {
  books {
    id
    title
    author
  }
}
```

**Headers (opcional):**
  
- Content-Type: application/json

**Envio da Requisição:**

Esta consulta GraphQL será enviada para recuperar todos os livros.

### Mutação

**URL da Rota:**

```plaintext
POST http://localhost:4000/graphql
```

**Corpo da Requisição:**

```gql
mutation {
  addBook(title: "Novo Livro", author: "Novo Autor") {
    id
    title
    author
  }
}
```

**Headers (opcional):**
  
- Content-Type: application/json

**Envio da Requisição:**

Esta mutação GraphQL adicionará um novo livro com o título "Novo Livro" e o autor "Novo Autor".

Certifique-se de substituir os valores dos campos de título e autor conforme necessário.

### Detalhes sobre o `useMutation` e o `refetchQueries`

O `useMutation` é um hook fornecido pelo pacote `@apollo/client` que permite realizar mutações GraphQL no Apollo Client. Ele retorna uma tupla com duas posições: a primeira posição contém a função para executar a mutação e a segunda posição contém um objeto com opções adicionais, como `refetchQueries`.

O `refetchQueries` é uma opção que permite especificar quais queries devem ser recarregadas automaticamente após a conclusão da mutação. No exemplo fornecido, após adicionar um novo livro usando a mutação `ADD_BOOK`, a query `GET_BOOKS` é automaticamente recarregada para atualizar a lista de livros exibida no front-end.

### Detalhes sobre o Cliente Apollo

O Cliente Apollo é uma instância do Apollo Client configurada para se conectar ao servidor GraphQL. Ele é criado usando o construtor `ApolloClient` e recebe um objeto de opções que define o URI do endpoint GraphQL e a configuração do cache. No exemplo fornecido, o cliente está configurado para se conectar ao endpoint `http://localhost:4000/graphql` e usar um cache em memória (`InMemoryCache`).

### Configuração do Apollo Provider

O Apollo Provider é um componente de contexto fornecido pelo Apollo Client que envolve toda a aplicação React. Ele fornece acesso ao cliente Apollo em todos os componentes filhos, permitindo que eles realizem consultas e mutações GraphQL. No exemplo fornecido, o componente `App` está envolto pelo `ApolloProvider`, que por sua vez também está envolto pelo `ClientProvider` (um provedor de contexto personalizado definido no contexto `apolloContext`). Isso garante que o cliente Apollo e o contexto personalizado estejam disponíveis em toda a aplicação.

## Detalhes Adicionais

### `useMutation` e `refetchQueries`

O `useMutation` é um hook fornecido pelo pacote `@apollo/client` que permite realizar mutações GraphQL no Apollo Client. Ele retorna uma tupla com duas posições: a primeira posição contém a função para executar a mutação e a segunda posição contém um objeto com opções adicionais, como `refetchQueries`. O `refetchQueries` permite especificar quais queries devem ser recarregadas automaticamente após a conclusão da mutação.

### Cliente Apollo

O Cliente Apollo é uma instância do Apollo Client configurada para se conectar ao servidor GraphQL. Ele é criado usando o construtor `ApolloClient` e recebe um objeto de opções que define o URI do endpoint GraphQL e a configuração do cache.