import { ApolloClient, InMemoryCache } from "@apollo/client";

const Client = new ApolloClient ({
    uri:'https://pidus.fiberfoxtrading.com/graphql',
    cache: new InMemoryCache()
})

export default Client;