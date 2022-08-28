import { Head, Html, Main, NextScript } from 'next/document'

export default function Document() {
    return(    <Html>
    <Head>

<link
href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css"
rel="stylesheet"
integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6"
crossorigin="anonymous"
/>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css" />
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css" />
<script src="https://cdn.plot.ly/plotly-latest.min.js"></script>
    </Head>
    <body>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
			<span class="text-capitalize ps-3">
				<a class="navbar-brand text-primary fw-bold" href="/"> <img src="/bitcoin.png" />&nbsp;&nbsp;BTC Chart </a>
			</span>
		</nav>
    <Main />
    <NextScript />
    </body>
    </Html>
    )

}