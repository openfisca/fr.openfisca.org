import Head from 'next/head'
import GlobalStyle from '../components/GlobalStyle'
import Header from '../components/Header'
import Partners from '../components/Partners'
import Footer from '../components/Footer'
import Piwik from '../components/Piwik'
import { withNamespaces } from 'react-i18next';


const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
}

const Contribuer =  withNamespaces()(
  ({t}, props) => (
  <div className="content">
    <h2>Suggérer ou ajouter des contenus</h2>
    <h3>Ce site - tout comme ce projet - est contributif !</h3>
    <p>
      Vous avez besoin d’un outil ? Il vous manque un élément d’information ? Vous avez une suggestion ?
      Vous pouvez contribuer via GitHub en créant un outil pour tous - en proposant une modification de contenu ou un ajout.
      Si vous n’êtes pas en mesure de contribuer, parlez-en la communauté via Slack ou dites-le nous par email !
      Peut-être que d’autres membres ont le même besoin que vous.
    </p>

    <h2>Parler d&#39;OpenFisca</h2>
    <p>
      Vous souhaitez présenter OpenFisca à quelqu&#39;un ?
      Vous voulez convaincre quelqu&#39;un de l&#39;utiliser ?
      Vous écrivez un article à propos d&#39;OpenFisca ?
      Utilisez notre <a href="https://drive.google.com/open?id=1eGa4PphlDCSzhGSTFDhG6CGRafJi6cAj3vlD7wNw2NM">document de présentation.</a>
    </p>

    <h2>Réutiliser OpenFisca</h2>
    <p>
      OpenFisca utilise la licence AGPL 3.0.
      Merci de citer OpenFisca lors de vos réutilisations !
      Vous pouvez avoir le détail de nos règles de réutilisations sur <a href="https://openfisca.org/doc/publishing.html">la documentation</a>.
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
        <GlobalStyle/>
        <Header page="contribute" title="Contribuer" />
        <Contribuer />
        <Partners />
        <Footer />
        <Piwik page="contribute"/>
    </div>
)
