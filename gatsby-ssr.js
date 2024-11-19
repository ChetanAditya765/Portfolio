/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

// You can delete this file if you're not using it
import React from 'react';
import { ServerStyleSheet } from 'styled-components';

// Wraps the root element with React Strict Mode
export const wrapRootElement = ({ element }) => <React.StrictMode>{element}</React.StrictMode>;

// Add styled-components ServerStyleSheet for SSR
export const onRenderBody = ({ setHeadComponents }) => {
  const sheet = new ServerStyleSheet();
  const styleTags = sheet.getStyleElement();
  setHeadComponents([styleTags]);
};
