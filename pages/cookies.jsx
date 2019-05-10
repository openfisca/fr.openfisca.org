import {withNamespaces} from "react-i18next"
import {french} from "../i18n"

import Layout from "layouts/Layout"


function Cookies() {
    return withNamespaces ("cookies") (
        <Layout page="cookies" title={t('title')}>
            <div className="content">
                <p>{t('content')}</p>
                <div className="iframe-container">
                    <iframe
                        style={{
                            backgroundColor: '#9a9a9a24',
                            width: '70%',
                            border: 'none',
                            padding: '1em 2em 0 2em',
                        }}
                        src={
                            french ()
                                ? "https://stats.data.gouv.fr/index.php?module=CoreAdminHome&action=optOut&language=fr"
                                : "https://stats.data.gouv.fr/index.php?module=CoreAdminHome&action=optOut&language=en"
                        }
                    />
                </div>
                <h2>{t('title-why')}</h2>
                <p>
                    <a href="https://matomo.org/">Matomo</a>
                    {t('content-why-1')}
                    {
                        french ()
                        ? <a href="https://www.cnil.fr/fr/solutions-pour-les-cookies-de-mesure-daudience">
                            CNIL
                          </a>
                        : ""
                    }
                    {t('content-why-2')}
                </p>
                <h2>{t('title-public')}</h2>
                <p>
                    {t('content-public')}
                    <a href="https://stats.data.gouv.fr/index.php?module=CoreHome&action=index&idSite=4&period=range&date=previous30#?module=Dashboard&action=embeddedIndex&idSite=4&period=range&date=previous30&idDashboard=1">
                        stats.data.gouv.fr
                    </a>
                </p>
            </div>

            <style jsx>
                {`
                    a {
                        color: #6d69fb;
                        margin: 0;
                    }

                    .iframe-container {
                        display: flex;
                        flex-direction: row;
                        justify-content: center;
                    }
                `}
            </style>
        </Layout>
    )
}


export default Cookies
