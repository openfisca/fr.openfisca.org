
import { withNamespaces } from "react-i18next"

import Layout from "layouts/Layout"


function Status(props) {
    const {t} = props
    return (
        <Layout page="status" title={t('title')}>
            <div className="content">
                <h1>{t('title')}</h1>
                <div id="iframe-container">
                    <iframe
                        title={t('title')}
                        src="https://status.openfisca.org"
                        style={{
                            backgroundColor: "#9a9a9a24",
                            width: "100%",
                            height: "63em",
                            border: "none",
                            padding: "1em 2em 0 2em",
                        }}
                    />
                </div>
            </div>
        </Layout>
    )
}


export default withNamespaces("status")(Status)
