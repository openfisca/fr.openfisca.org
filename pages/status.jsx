import Head from 'next/head'
import GlobalStyle from '../components/GlobalStyle'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Piwik from '../components/Piwik'

// the hoc
import { withNamespaces } from 'react-i18next';

const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
}

const Status =  withNamespaces()(
    ({t}, props) => (
    <div className="content">
        <h1>{t('title')}</h1>
        <div id="iframe-container">
            <iframe style={{backgroundColor: '#9a9a9a24', width: '100%', height: '63em', border: 'none', padding: '1em 2em 0 2em'}} 
            src="https://status.openfisca.org"></iframe>
        </div>

        <style jsx>{`
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
        <Header page="status" title="{t('title')}" />
        <Status />
        <Footer />
        <Piwik page="status"/>
    </div>
    )
)
