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
        </body>
      </Html>
    );
  }
}

export default MyDocument;
