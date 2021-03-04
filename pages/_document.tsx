import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {

  render() {
    return (
      <Html lang="pt-br">
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-QVD92GD18Z"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
          
            gtag('config', 'G-QVD92GD18Z');
              `,
          }}
        />
        <meta name="google-site-verification" content="bCgF986MCL-BnVaW2bc95HNwlSoiKdUD1UTTXUzpPco" />
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument