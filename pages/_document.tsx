import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {

  render() {
    return (
      <Html lang="pt-br">
        <script
          dangerouslySetInnerHTML={{
            __html: `
            <script async src="https://www.googletagmanager.com/gtag/js?id=G-QVD92GD18Z"></script>
            <script>
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
            
              gtag('config', 'G-QVD92GD18Z');
            </script>
              `,
          }}
        />
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