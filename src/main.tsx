import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import App from './App';
import "./index.css";
import ReactDOM from 'react-dom';
import { ClientProvider } from './context/apolloContext';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql', 
  cache: new InMemoryCache()
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <ClientProvider>
      <App />
    </ClientProvider>
  </ApolloProvider>,
  document.getElementById('root')
);
