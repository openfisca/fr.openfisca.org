import { withNamespaces } from "react-i18next"
import Theme from "components/Theme"
import "styles/theme.scss"


const Status =  withNamespaces("status")(
    ({t}, props) => (
        <Theme page={page} title={t('title')}>
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
        </Theme>
    )
)


export default Status
