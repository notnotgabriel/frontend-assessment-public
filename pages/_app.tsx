import {QueryProvider} from '../src/core/infra/QueryProvider'

import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return <QueryProvider><Component {...pageProps} /></QueryProvider>;
}

export default MyApp;
