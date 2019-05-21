import Head from 'next/head'
import GlobalStyle from '../../components/GlobalStyle'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Piwik from '../../components/Piwik'
import ProjectDesc from '../../components/ProjectDesc'
import ProjectAttribute from '../../components/ProjectAttribute'

// the hoc
import { withNamespaces } from 'react-i18next';

const Fastoche =  withNamespaces()(
    ({t}, props) => (
    <div className="content">
        <a className="back" href="/showcase/" >Retour</a>

        <ProjectDesc img="/static/projects/fastoche.png" baseline="Fastoch€ est un coach d'épargne." desc1="Développé par PayBoost, un acteur privé du paiement en ligne."
            desc2="Fastoch€ est une application qui joue le rôle d’un coach d’épargne en reliant les comptes bancaires et en informant l’utilisateur sur son reste à vivre.
  Il permet aussi d’indiquer à l’utilisateur qu’il a droit à certaines aides sociales et à le diriger vers les administrations responsables du versement de ces aides. "

            desc3="Fastoch€ a été lancé en 2018." url="https://www.fastoche.fr/" textlink="Visiter Fastoch€"/>

        <section>
            <h2>Caractéristiques du projet</h2>
            <ProjectAttribute
                imgapi="/static/icons/circle/api.svg" api="utilise l'API Web"
                imgcountry="/static/icons/circle/france.svg" country="interroge le système France"
                imgsimulation="/static/icons/circle/simindividuelle.svg" simulation="produit une simulation individuelle"
                imgperimetre="/static/icons/circle/perimetre.svg" perimetre="utilise le périmètre de la loi lié aux prestations sociales"
                imgpoweredby="/static/icons/circle/startup.svg" poweredby="porté par une start-up privée"
            />
        </section>
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
        <Header page="fastoche" title="Fastoch€"/>
        <Fastoche />
        <Footer />
        <Piwik page="fastoche"/>
    </div>
)
)