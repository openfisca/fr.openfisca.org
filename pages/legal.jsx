import { withNamespaces } from "react-i18next"
import Layout from "layouts/Layout"


function legal() {
    return (
        withNamespaces("legal")(
            <Layout page="legal" title={t('title')}>
                <div className="content">
                    <h2>{t('director')}</h2>
                    <p>
                        {t('director-address-1')}
                        <br />
                        <a href="https://www.etalab.gouv.fr">{t('director-address-2')}</a>
                        <br />
                        {t('director-address-3')}
                        <br />
                        {t('director-address-4')}            
                    </p>

                    <h2>{t('host')}</h2>
                    <p>
                        {t('host-address-1')}
                        <br />
                        {t('host-address-2')}
                        <br />
                        {t('host-address-3')}
                        <br />
                    </p>
                </div>
            </Layout>
        )
    )
}


export default legal
