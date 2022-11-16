import { ApolloClient, InMemoryCache } from '@apollo/client'

export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.hygraph.com/v2/claivzwc22b4901tccbcs9a08/master',
    cache: new InMemoryCache()
})