import Head from 'next/head'
import GlobalStyle from '../../components/GlobalStyle'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Piwik from '../../components/Piwik'
import ProjectDesc from '../../components/ProjectDesc'
import ProjectAttribute from '../../components/ProjectAttribute'

// the hoc
import { withNamespaces } from 'react-i18next';

const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
}
const Ratesrebates =  withNamespaces()(
    ({t}, props) => (
    <div className="content">
        <a className="back" href="/showcase/" >Retour</a>

        <ProjectDesc img="/static/projects/ratesrebates.png"
            baseline="Prototyper le versement automatique d’une aide sociale."
            desc1="Produit par Lab Inno NZ, l’équipe d’innovation du gouvernement néo-zélandais, ce prototype vise à faciliter le versement automatique de l’aide Rates Rebates pour le public senior."
            desc2="L’équipe a intégralement modélisé le système socio-fiscal néo-zélandais."
            desc3="Rates Rebates a été prototypé en 2018."
            url="https://www.digital.govt.nz/blog/making-it-easier-the-rates-rebates-story-so-far/"
            textlink="Lire l'étude"/>

        <section>
            <h2>Caractéristiques du projet</h2>
            <ProjectAttribute
                imgapi="/static/icons/circle/api.svg" api="utilise l'API Web"
                imgcountry="/static/icons/circle/nz.svg" country="interroge le système Nouvelle-Zélande"
                imgsimulation="/static/icons/circle/simindividuelle.svg" simulation="produit une simulation individuelle"
                imgperimetre="/static/icons/circle/perimetre.svg" perimetre="utilise le périmètre de la loi lié aux prestations sociales"
                imgpoweredby="/static/icons/circle/admin.svg" poweredby="porté par une administration publique"
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
        <Header  page="ratesrebates" title="Rates rebates" />
        <Ratesrebates/>
        <Footer />
        <Piwik page="ratesrebates"/>
    </div>
)
)
