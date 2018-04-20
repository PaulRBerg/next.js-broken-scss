/* eslint-disable quotes,no-mixed-spaces-and-tabs */
import React from 'react'
import Document, { Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
	render() {
		return (
			<html>
			<Head>
				<meta charSet="utf-8"/>
				<title>DagHub | Buy/Sell Nano, Iota & Byteball</title>
				<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
				<meta name="theme-color" content="#0099D0"/>

				<meta property="og:site_name" content="DagHub"/>
				<meta property="og:title" content="DagHub - Buy/Sell Nano, Iota & Byteball"/>
				<meta property="og:description" content="Fiat On-Ramp for Nano, Iota and Byteball"/>
				<meta property="og:image" content="https://i.imgur.com/Tvvy8kq.png"/>
				<meta property="og:url" content="https://daghub.io"/>
				<meta property="og:type" content="website"/>

				<meta property="twitter:app:id:googleplay" name="twitter:app:id:googleplay" content="com.daghub.android"/>
				<meta property="twitter:app:id:iphone" name="twitter:app:id:iphone" content="886427730"/>
				<meta property="twitter:app:id:ipad" name="twitter:app:id:ipad" content="886427730"/>
				<meta property="twitter:app:name:googleplay" name="twitter:app:name:googleplay" content="DagHub - Buy/Sell Nano, Iota & Byteball"/>
				<meta property="twitter:app:name:ipad" name="twitter:app:name:ipad" content="DagHub - Buy/Sell Nano, Iota & Byteball"/>
				<meta property="twitter:app:name:iphone" name="twitter:app:name:iphone" content="DagHub - Buy/Sell Nano, Iota & Byteball"/>
				<meta property="twitter:card" name="twitter:card" content="summary"/>
				<meta property="twitter:creator" name="twitter:creator" content="@daghub_io"/>
				<meta property="twitter:description" name="twitter:description" content="Fiat On-Ramp for Nano, Iota and Byteball"/>
				<meta property="twitter:image" name="twitter:image" content="https://i.imgur.com/Tvvy8kq.png"/>
				<meta property="twitter:site" name="twitter:site" content="@daghub_io"/>
				<meta property="twitter:title" name="twitter:title" content="DagHub - Buy/Sell Nano, Iota & Byteball"/>

				<script dangerouslySetInnerHTML={{__html: `
						(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
						new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
						j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
						'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
						})(window,document,'script','dataLayer','GTM-N8Q7WDJ');
					`}}/>

				<link rel="shortcut icon" type="image/x-icon" href={"/static/favicon.ico"}/>
				<link rel="icon" type="image/x-icon" href={"/static/favicon.ico"}/>

				<link rel="stylesheet" type="text/css" href={"/static/css/vendors/bootstrap.min.css"}/>
				<link rel="stylesheet" type="text/css" href={"/static/css/vendors/sanitize.min.css"}/>
				<link rel="stylesheet" type="text/css" href={"/static/css/vendors/animate.min.css"}/>
				<link rel="stylesheet" type="text/css" href={"/_next/static/style.css"}/>
			</Head>
			<body>
			<noscript dangerouslySetInnerHTML={{__html: `
						<iframe
							src="https://www.googletagmanager.com/ns.html?id=GTM-N8Q7WDJ"
							height="0"
							width="0"
							style="display:none;visibility:hidden"/>
						`}}/>
			<Main/>
			<NextScript/>
			<script type="text/javascript" src={"/static/js/vendors/amplitude.js"}/>
			</body>
			</html>
		)
	}
}