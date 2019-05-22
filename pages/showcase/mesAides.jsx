import Head from 'next/head'
import GlobalStyle from '../../components/GlobalStyle'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import ProjectDesc from '../../components/ProjectDesc'
import ProjectAttribute from '../../components/ProjectAttribute'
import Piwik from '../../components/Piwik'
import { withNamespaces } from 'react-i18next';


const Mesaides =  withNamespaces("mesaides")(
    ({t}, props) => (
    <div className="content">
        <a className="outline" href="/showcase/" >{t('back')}</a>
        <ProjectDesc img="/static/projects/mesaides.png" baseline={t('baseline')} desc1={t('desc1')}
            desc2={t('desc2')}
            desc3={t('desc3')} url="http://mes-aides.gouv.fr/" textlink={t('textlink')}/>

        <section>
            <h2>{t('car')}</h2>
            <ProjectAttribute
                imgapi="/static/icons/circle/api.svg" api={t('api')}
                imgcountry="/static/icons/circle/france.svg" country={t('country')}
                imgsimulation="/static/icons/circle/simindividuelle.svg" simulation={t('simulation')}
                imgperimetre="/static/icons/circle/perimetre.svg" perimetre={t('perimetre')}
                imgpoweredby="/static/icons/circle/admin.svg" poweredby={t('desc3')}
            />
        </section>

        <style jsx>{`

            .outline {
              color: #656565;
              padding: 0 1% 0 1%;
              border-color: #656565;
              border-radius: 25px;
              max-width: 4em;
            }

        `}</style>

    </div>
    )
)


export default withNamespaces("mesaides")(({t}) => (
    <div>
        <Head>
          <title>{t('title')}</title>
          <meta name="viewport" key="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <GlobalStyle/>
        <Header page="mesaides" title="MesAides" />
        <Mesaides />
        <Footer />
        <Piwik page="mesaides"/>
    </div>
    )
)
