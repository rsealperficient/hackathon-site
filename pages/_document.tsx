import Document, { Html, Head, Main, NextScript } from 'next/document';
import Boxever from '../components/Boxever/Boxever';

class MyDocument extends Document {
  // eslint-disable-next-line
  static async getInitialProps(ctx: any) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render(): JSX.Element {
    return (
      <Html>
        <Head />
        <body>
          <Main />
          <NextScript />
          <Boxever
            clientKey="psfu6uh05hsr9c34rptlr06dn864cqrx"
            apiTargetEndPoint="https://api.boxever.com/v1.2"
            cookieDomain="localhost"
          />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
