import Head from 'next/head'

const GlobalStyle = () => (
  <div>
    <Head></Head>
    <link rel="stylesheet" media="screen" href="https://fontlibrary.org/face/lato" type="text/css"/>
    <style jsx global>{`

      #content{
        margin: auto;
        padding: 0 3em 1em 3em;
      }

      // fonts
      body {
        color: #424242;
      }
      p{
        font-family: "LatoRegular", Arial, Helvetica, sans-serif
      }
      h1{
        font-family: "LatoBold", arial, helvetica, sans-serif;
        font-size: 3em;
        text-align: center
      }
      h2{
        font-family: "LatoBold", arial, helvetica, sans-serif;
        font-size: 2em;
        color: #6D69FB;
      }
      h3{
        font-family: "LatoBold", arial, helvetica, sans-serif;
        font-size: 1.5em;
      }

      // couleurs
      .primary{
        color: #424242;
      }

      .secondary{
        color: #00BAAF;
      }

      // responsive

      @media (max-width: 720px) {
				header{
					flex-direction: column;
				}
				ul {
        padding: 0;
        flex-direction: column;
        align-items: center;
				}
			}
    `}</style>
  </div>
)

export default GlobalStyle
