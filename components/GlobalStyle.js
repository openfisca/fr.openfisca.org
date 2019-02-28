import Head from 'next/head'

const GlobalStyle = () => (
  <div>
    <Head></Head>
    <style jsx global>{`
      body {
        background: #000;
      }
    `}</style>
  </div>
)

export default GlobalStyle
