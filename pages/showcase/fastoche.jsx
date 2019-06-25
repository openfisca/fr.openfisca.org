import Head from 'next/head'
import GlobalStyle from '../../components/GlobalStyle'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Piwik from '../../components/Piwik'
import ProjectDesc from '../../components/ProjectDesc'
import ProjectAttribute from '../../components/ProjectAttribute'

// the hoc
import { withNamespaces } from 'react-i18next';


const Fastoche =  withNamespaces("fastoche")(
    ({t}, props) => (
    <div className="content">
        <a className="back" href="/showcase/" >{t('back')}</a>

        <ProjectDesc img="/static/projects/fastoche.png" baseline={t('baseline')} 
            desc1={t('desc1')}
            desc2={t('desc2')}
            desc3={t('desc3')} 
            url="https://www.fastoche.fr/" 
            textlink={t('textlink')} />

        <section>
            <h2>{t('car')}</h2>
            <ProjectAttribute
                imgapi="/static/icons/circle/api.svg" api={t('api')}
                imgcountry="/static/icons/circle/france.svg" 
                country={t('country')}
                imgsimulation="/static/icons/circle/simindividuelle.svg" 
                simulation={t('simulation')}
                imgperimetre="/static/icons/circle/perimetre.svg" 
                perimetre={t('perimetre')}
                imgpoweredby="/static/icons/circle/startup.svg" 
                poweredby={t('poweredby')}
            />
        </section>
    </div>
    )
)

export default withNamespaces("fastoche")(({t}) => (
    <div>
        <Head>
        <title>{t('title')}</title>
        <meta name="viewport" key="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <GlobalStyle/>
        <Header page="fastoche" title={t('fastoche:title')}/>
        <Fastoche />
        <Footer />
        <Piwik page="fastoche"/>
    </div>
    )
)
