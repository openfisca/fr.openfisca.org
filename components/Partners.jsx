import asset from "next/asset"
import { withNamespaces } from "react-i18next"

const Partners = ({ t }) => (
    <div className="content">
        <h2>{t("partners")}</h2>
        <ul className="flex__container">
            <li className="flex-item logo">
                <img alt="IPP" src={asset("/images/logo-ipp.png")} />
            </li>
            <li className="flex-item logo">
                <img alt="Etalab" src={asset("/images/logo-etalab.png")} />
            </li>
            <li className="flex-item logo">
                <img alt="MSA" src={asset("/images/logo-msa.svg")} />
            </li>
            <li className="flex-item logo">
                <img alt="beta.gouv.fr" src={asset("/images/logo-betagouv-url.svg")} />
            </li>
            <li className="flex-item logo">
                <img alt="IDEP" src={asset("/images/logo-idep.png")} />
            </li>
            <li className="flex-item logo">
                <img alt="France Stratégie" src={asset("/images/logo-france-strategie.jpg")} />
            </li>
        </ul>

        <style jsx>
            {`
                div {
                    padding: 0 3em 0 3em;
                }

                ul {
                    margin: auto;
                    padding: 1em;
                    list-style-type: none;
                }

                img {
                    width: 7.5em;
                }

                .flex-item {
                    display: flex;
                    flex-flow: column;
                    justify-content: space-between;
                    border: 1px solid transparent;
                    margin: 1em 0;
                    max-width: 15%;
                    min-width: 10em;
                }

                .flex__container {
                    display: flex;
                    margin: auto;
                    padding: 1em;
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: flex-start;
                }

                @media (max-width: 720px) {
                    .flex__container {
                        flex-direction: column;
                        justify-content: flex-start;
                    }

                    .flex-item {
                        width: 100%;
                        min-width: 100%;
                        margin: 1em auto 1em auto;
                    }
                }
            `}
        </style>
    </div>
)

export default withNamespaces("components")(Partners)
