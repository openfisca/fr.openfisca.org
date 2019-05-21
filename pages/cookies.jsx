import Head from 'next/head'
import GlobalStyle from '../components/GlobalStyle'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Piwik from '../components/Piwik'

import i18n from './i18n';
import { withNamespaces } from 'react-i18next';


const Cookies =  withNamespaces("cookies")(
  ({t}, props) => (
    <div className="content">
      <p>{t('content')}</p>
      <div id="iframe-container">
        <iframe style={{backgroundColor: '#9a9a9a24', width: '70%', border: 'none', padding: '1em 2em 0 2em'}} 
          src="https://stats.data.gouv.fr/index.php?module=CoreAdminHome&action=optOut&language=fr"></iframe>
      </div>
      <h2>{t('title-why')}</h2>
      <p>
        <a href="https://matomo.org/">Matomo</a> - notre service de suivi - est configuré en conformité 
          avec les règles de gestion de "Cookies" de la <a href="https://www.cnil.fr/fr/solutions-pour-les-cookies-de-mesure-daudience">CNIL</a> 
          des autorités françaises (Matomo anonymise votre adresse IP de façon à rendre impossible le lien entre votre visite et vous-même).
      </p>
      <h2>{t('title-public')}</h2>
      <p>
        {t('content-public')} 
        <a href="https://stats.data.gouv.fr/index.php?module=CoreHome&action=index&idSite=4&period=range&date=previous30#?module=Dashboard&action=embeddedIndex&idSite=4&period=range&date=previous30&idDashboard=1">stats.data.gouv.fr</a>
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


export default withNamespaces("cookies")(({t}) => (
  <div>
        <Head>
          <title>{t('title')}</title>
          <meta name="viewport" key="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <Header page="cookies" title={t('cookies:title')} />
        <Cookies />
        <Footer />
        <GlobalStyle />
        <Piwik page="cookies"/>
    </div>
  )
)
