import Head from 'next/head'

const GlobalStyle = () => (
  <div>
    <Head></Head>
    <link rel="stylesheet" media="screen" href="https://fontlibrary.org/face/lato" type="text/css"/>
    <style jsx global>{`
    #content{
      max-width: 42em;
      margin: auto;
      padding: 0 3em 1em 3em;
      font-size: 100%;
      font-family: "LatoRegular", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    }
      body {
        background: #fff;
      }
      p{
        "LatoRegular", Roboto, Helvetica, Arial, sans-serif
    }
      h1{
        font-family: "LatoBold", Roboto, Helvetica, Arial, sans-serif
      }
      h2{
        font-family: "LatoBold", Roboto, Helvetica, Arial, sans-serif
        color: #6D69FB;
      }

    `}</style>
  </div>
)

export default GlobalStyle
