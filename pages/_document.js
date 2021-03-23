import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head />
        <body className="dark:bg-gray-900 font-mono text-blue-900 dark:text-blue-50 bg-gray-50 p-0 m-0 min-h-screen min-w-screen outline-none">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
