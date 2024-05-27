import React from 'react';
import Script from 'next/script';

const GoogleAds = ({ conversionId }: { conversionId: string }) => (
  <>
    <Script
      id="google-ads-script"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','${conversionId}');
        `,
      }}
    />
    <Script
      id="gtag-init"
      strategy="afterInteractive"
      src={`https://www.googletagmanager.com/gtag/js?id=AW-16557313988`}
    />
    <Script
      id="gtag-config"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'AW-16557313988');
        `,
      }}
    />
  </>
);

export default GoogleAds;
