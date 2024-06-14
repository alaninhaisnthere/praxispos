import React from 'react';
import Script from 'next/script';

const GoogleAnalytics = ({ conversionId }: { conversionId: string }) => (
  <>
     {/* google tag script */}
     <Script
      src="https://www.googletagmanager.com/gtag/js?id=G-ESTDBVPXJ9"
      strategy="lazyOnload"
      async
    />
    <Script
      id="google-analytics-config"
      strategy="lazyOnload"
      dangerouslySetInnerHTML={{
        __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-ESTDBVPXJ9');
        `,
      }}
    />
  </>
);

export default GoogleAnalytics;
