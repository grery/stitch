/** 
*    Sets up the app client's endpoint, authentication and error handling.
*/

import { ApolloClient, ApolloLink, InMemoryCache, HttpLink } from "@apollo/client";
import { setContext } from "apollo-link-context";
import { onError } from "apollo-link-error";
import { properties } from '../properties'

/**
 *  For the purposes of this exercise makes use of a properties type to store endpoint
 */
const httpLink = new HttpLink({
    uri: properties.STITCH_ENDPOINT,
    fetchOptions: {
        mode: 'no-cors',
    }
});

/**
 * Used to wrap the app to catch and log any GraphQL errors or network errors that occurred
 * For this exercise it simply logs to console.  In the real world it would probably log to file
 * or a dedicated logging stream
 */


const errorLink = onError(({ graphQLErrors, networkError }) => {
    if (graphQLErrors)
        graphQLErrors.forEach(({ message, locations, path }) =>
            console.log(
                `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
            )
        );
    if (networkError) console.log(`[Network error]: ${networkError}`);
});

/** 
    Provides authentication headers for the client request    
    For the purposes of this exercise this function makes use of a properties type to store the auth token.
    Please provide your personal token as an argument to properties.STITCH_USER_TOKEN in src/utils/properties.ts
    In the real world this function should be invoking a call to a key management service to retrieve secrets
    The function has been typed as {any} as a workaround for this issue https://github.com/apollographql/apollo-client/issues/6011    
    @returns {any} a header authorization construct either populated with a token or not
*/
const authLink: any = setContext((_, { headers }) => {
    // get the authentication token from local storage if it exists
    const token = properties.STITCH_USER_TOKEN;
    // return the headers to the context so httpLink can read them
    return {
        headers: {
            ...headers,
            authorization: token ? "Bearer " + token : "",
        }
    };
});

/**
 * Provides an instance of ApolloClient that is used to query the Stitch graphql api
 * @param {InMemoryCache} a caching option based on preference
 * @param {ApolloLink} in this case consisting of endpoint, auth and error handling settings
 * @returns {ApolloClient} a graphql client for the Stitch API 
 */
export const stitchClient = new ApolloClient({
    cache: new InMemoryCache(),
    link: ApolloLink.from([
        errorLink,
        authLink,
        httpLink,
    ])
});
