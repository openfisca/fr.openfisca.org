import Head from 'next/head'
import GlobalStyle from '../components/GlobalStyle'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Piwik from '../components/Piwik'

const Start = () => (
    <div className="content">

        <style jsx>{`

      #iframe-container {
        display: flex;
        flex-direction: row;
        justify-content: center;
      }

      @media (max-width: 720px) {
        #content {
          padding: 0 1em 1em 1em;
        }
      }
    `}</style>
    </div>
)

export default () => (
    <div>
        <Head>
            <title>Commencer</title>
            <meta name="viewport" key="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <GlobalStyle/>
        <Header page="start" title="Commencer" />
        <Start />
        <Footer />
        <Piwik page="start"/>
    </div>
)
