import Head from 'next/head'
import GlobalStyle from '../components/GlobalStyle'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Piwik from '../components/Piwik'

import i18n from './i18n';
import { withNamespaces } from 'react-i18next';


const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
}

const Cookies =  withNamespaces()(
  ({t}, props) => (
  <div className="content">
    <p>
      Lorsque vous visitez ce site web, nous laissons un petit fichier texte (un "cookie") sur votre ordinateur.
      Cela nous permet de mesurer combien de visites nous avons et quelles sont les pages les plus regardées.
    </p>
    <div id="iframe-container">
      <iframe style={{backgroundColor: '#9a9a9a24', width: '70%', border: 'none', padding: '1em 2em 0 2em'}} 
        src="https://stats.data.gouv.fr/index.php?module=CoreAdminHome&action=optOut&language=fr"></iframe>
    </div>
    <h2>Ce site web n&#39;indique pas de bannière de consentement aux cookies. Pourquoi ?</h2>
    <p>
      <a href="https://matomo.org/">Matomo</a> - notre service de suivi - est configuré en conformité 
        avec les règles de gestion de "Cookies" de la <a href="https://www.cnil.fr/fr/solutions-pour-les-cookies-de-mesure-daudience">CNIL</a> 
        des autorités françaises (Matomo anonymise votre adresse IP de façon à rendre impossible le lien entre votre visite et vous-même).
    </p>
    <h2>Je contribue à vos données. Puis-je y accéder ?</h2>
    <p>
      Bien sûr ! Les données d&#39;analyse d&#39;OpenFisca sont librement disponible ici : 
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

export default withNamespaces()(({t}) => (
  <div>
        <Head>
          <title>{t('title')}</title>
          <meta name="viewport" key="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <Header page="cookies" title="Informatique & libertés" />
        <Cookies />
        <Footer />
        <GlobalStyle />
        <Piwik page="cookies"/>
    </div>
)
