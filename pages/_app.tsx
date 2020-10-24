import { AppProps } from 'next/app';
import { wrapper } from "../src/store";
import '../src/ui/templates/default.scss';

const App: React.FC = ({ Component, pageProps }: AppProps) => {
  return (
      <>
        <Component {...pageProps} />
      </>
    )
}

export default wrapper.withRedux(App);
