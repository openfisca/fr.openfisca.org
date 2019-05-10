import { withNamespaces } from "react-i18next"

import Layout from "layouts/Layout"
import Partners from "components/Partners"


function contribute() {
    return withNamespaces("contribute")(
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

                <style jsx>
                    {`
                        #iframe-container {
                          display: flex;
                          flex-direction: row;
                          justify-content: center;
                        }

                        a {
                          color: #6d69fb;
                        }
                    `}
                </style>
            </div>
            <Partners />
        </Layout>
    )
}


export default contribute
