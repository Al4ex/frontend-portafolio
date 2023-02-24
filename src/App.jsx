
import Portafolio from './components/Portafolio'
import "./App.css";
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';
const url = import.meta.env.VITE_GRAPHQLURL
const client = new ApolloClient({
  uri: url,
  cache: new InMemoryCache()
});
function App() {

  return (
    <ApolloProvider client={client}>
      <Portafolio/>
    </ApolloProvider>
  )
}

export default App
