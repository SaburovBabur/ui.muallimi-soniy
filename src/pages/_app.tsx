import type { AppProps } from "next/app";
import { DM_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import Head from "next/head";
import Script from "next/script";
import "@/styles/tailwind.css";

const dm_sans = DM_Sans({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        {/* <!-- Primary Meta Tags --> */}
        <title>Hakim Shoshiy - Yaseen.uz ⚡</title>
        <meta property="og:image" content="/bg.png" />
        <meta name="title" content="Hakim Shoshiy - Yaseen.uz ⚡" />
        <meta name="description" content="Hakim Shoshiy - Yaseen.uz" />

        {/* <!-- Twitter --> */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://www.Hakim Shoshiy - Yaseen.uz/"
        />
        <meta property="twitter:title" content="Hakim Shoshiy - Yaseen.uz ⚡" />
        <meta
          property="twitter:description"
          content="Hakim Shoshiy - Yaseen.uz"
        />
        <meta property="twitter:image" content="/bg.png" />
      </Head>

      <Script
        src={`
	
						(function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
						m[i].l=1*new Date();
						for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
						k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
						(window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
					 
						ym(93345331, "init", {
							 clickmap:true,
							 trackLinks:true,
							 accurateTrackBounce:true,
							 webvisor:true
						});
						   
							`}
      />

      <div className={dm_sans.className}>
        <Component {...pageProps} />

        <Analytics />
      </div>
    </>
  );
}
