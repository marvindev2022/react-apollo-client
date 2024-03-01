import { gql } from "@apollo/client";

const formDefault = {
    title: "",
    author: ""
}

const GET_BOOKS = gql`
  query {
    books {
      id
      title
      author
    }
  }
`;

const ADD_BOOK = gql`
  mutation AddBook($title: String!, $author: String!) {
    addBook(title: $title, author: $author) {
      id
      title
      author
    }
  }
`;

const REMOVE_BOOK = gql`
    mutation RemoveBook($id: ID!) {
        removeBook(id: $id) {
        id
        }
    }
    `;
const UPDATE_BOOK = gql`
    mutation UpdateBook($id: ID!, $title: String!, $author: String!) {
        updateBook(id: $id, title: $title, author: $author) {
        id
        title
        author
        }
    }
    `;


export { formDefault, GET_BOOKS, ADD_BOOK, REMOVE_BOOK, UPDATE_BOOK };