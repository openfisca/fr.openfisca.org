import { withNamespaces } from "react-i18next"

import Layout from "layouts/Layout"
import Partners from "components/Partners"


function Contribute(props) {
    const {t} = props
    return (
        <Layout page="contribute" title={t('title')}>
            <div className="content">
                <h2>{t('title-suggest')}</h2>
                <p>{t('content-suggest')}</p>

                <h2>{t('title-share')}</h2>
                <p>
                    {t('content-share')}
                    <a href="https://drive.google.com/open?id=1eGa4PphlDCSzhGSTFDhG6CGRafJi6cAj3vlD7wNw2NM">
                        {t('content-share-link')}
                    </a>
                </p>

                <h2>{t('title-reuse')}</h2>
                <p>
                    {t('content-share')}
                    <a href="https://openfisca.org/doc/publishing.html">
                        {t('content-share-link')}
                    </a>
                </p>
            </div>
            <Partners />

            <style jsx>
                {`
                    a {
                        color: #6d69fb;
                    }
                `}
            </style>
        </Layout>
    )
}


export default withNamespaces("contribute")(Contribute)
