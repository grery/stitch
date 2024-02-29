/**
 * The application root
 *  Renders the elements required into a base document in hierarchy that styles the page, provides a graphql client provider and applies a react mode.
 */


import React, { DOMElement } from 'react';
import { createRoot } from 'react-dom/client'
import GlobalStyles from './styles';
import Pages from './pages';
import { ApolloProvider } from "@apollo/client";
import { stitchClient } from "./utils/apollo-clients"


const root = createRoot(document.getElementById('root')!);

root.render(
  <React.StrictMode>
    <ApolloProvider client={stitchClient}>
      <GlobalStyles />
      <Pages />
    </ApolloProvider>
  </React.StrictMode>
);