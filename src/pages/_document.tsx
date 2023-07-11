import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* start of google tag manager */}
        <script>(function(w,d,s,l,i){w[l] = w[l] || [];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-KMB77VZ');</script>
        {/* end of tag manager */}
        <!-- Google tag (gtag.js) -->
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-RFTZMWZN13"></script>
        <script>
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-RFTZMWZN13');
        </script>
      </Head>
      <body>

        <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-KMB77VZ"
          height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>

        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
