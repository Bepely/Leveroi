
import { Provider } from "react-redux";
import store from "../src/redux/store/store";



import Head from "next/head"
import Script from "next/script"

import '../src/styles/major.css'
import '../src/styles/home/home.css'






const MyApp = ({ Component, pageProps }) => {

    return (
    <>
    
    <Head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
    </Head>
    <Script strategy="afterInteractive" src="https://www.googletagmanager.com/gtag/js?id=G-SYQLMD869K"/>


    <Provider store={store}>
        <Component {...pageProps} />
    </Provider>
    </>
    )
  }
  export default MyApp