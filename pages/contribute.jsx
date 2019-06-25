import Head from 'next/head'
import GlobalStyle from '../components/GlobalStyle'
import Header from '../components/Header'
import Partners from '../components/Partners'
import Footer from '../components/Footer'
import Piwik from '../components/Piwik'
import { withNamespaces } from 'react-i18next';


const Contribuer =  withNamespaces("contribute")(
  ({t}, props) => (
    <div className="content">
      <h2>{t('title-suggest')}</h2>
      <p>{t('content-suggest')}</p>

      <h2>{t('title-share')}</h2>
      <p>
      {t('content-share')}
      </p>

      <h2>{t('title-reuse')}</h2>
      <p>
      {t('content-share')}
      </p>


      <style jsx>{`
        #iframe-container {
          display: flex;
          flex-direction: row;
          justify-content: center;
        }

        a {
          color: #6d69fb;
        }
      `}</style>
    </div>
  )
)

export default withNamespaces("contribute")(({t}) => (
  <div>
        <Head>
            <title>{t('title')}</title>
            <meta name="viewport" key="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <GlobalStyle/>
        <Header page="contribute" title={t('title')} />
        <Contribuer />
        <Partners />
        <Footer />
        <Piwik page="contribute"/>
    </div>
  )
)
