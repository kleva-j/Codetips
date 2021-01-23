import Head from "next/head";
import Header from "./Header";
import Footer from './Footer';

export default function Layout({
  children,
  pageTitle,
  description,
  twitterHandle='',
  currentURL='',
  previewImage='',
  siteName='',
  path
}) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <title>{pageTitle}</title>
        
        <meta httpEquiv="X-UA-Compatible" content="IE-edge" />
        <meta httpEquiv="Content-Security-Policy" content="script-src 'self'" />
        
        <meta property="og:title" content={pageTitle} key="ogtitle" />
        <meta property="og:description" content={description} key="ogdesc" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary" key="twcard" />
        <meta name="twitter:title" content="Codetips" key="" />
        <meta name="twitter:description" content="Codetips." key="twdesc" />
        <meta name="twitter:image" content={previewImage} key="twimage" />
        <meta name="twitter:creator" content={twitterHandle} key="twhandle" />

        {/*  OG */}
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="description" content="Codetips provide code samples and tutorials to improve developer experience using different web technologies." />
        <meta property="og:url" content={currentURL} key="ogurl" />
        <meta property="og:site_name" content={siteName} key="ogsitename" />
        <meta property="og:image" content={previewImage} key="ogimage" />
        <meta property="og:image:type" content="image/jpg" key="ogimage" />

        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-TileImage" content="/static/ms-icon-144x144.png" />
        <meta name="theme-color" content="#ffffff" />

        {/* Links */}
        <link rel="apple-touch-icon" sizes="57x57" href="/static/apple-icon-57x57.png" />
        <link rel="apple-touch-icon" sizes="60x60" href="/static/apple-icon-60x60.png" />
        <link rel="apple-touch-icon" sizes="72x72" href="/static/apple-icon-72x72.png" />
        <link rel="apple-touch-icon" sizes="76x76" href="/static/apple-icon-76x76.png" />
        <link rel="apple-touch-icon" sizes="114x114" href="/static/apple-icon-114x114.png" />
        <link rel="apple-touch-icon" sizes="120x120" href="/static/apple-icon-120x120.png" />
        <link rel="apple-touch-icon" sizes="144x144" href="/static/apple-icon-144x144.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="/static/apple-icon-152x152.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/static/apple-icon-180x180.png" />
        <link rel="icon" type="image/png" sizes="192x192"  href="/static/android-icon-192x192.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/static/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="96x96" href="/static/favicon-96x96.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/static/favicon-16x16.png" />
        <link rel="manifest" href="/static/manifest.json" />
        <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap" rel="stylesheet"></link>

      </Head>

      <section className="bg-gray-900">
        <Header path={path} />
        <section className="flex justify-end pt-16">
          {children}
        </section>
        <Footer />
      </section>
    </>
  );
}
