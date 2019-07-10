import { withNamespaces } from "react-i18next"

const CardResource = ({ t, ...props }) => (
    <div className="card-container">
        <div className="card-desc">
            <a className="categorie">{props.categorie}</a>
            <p className="medium">
                <img className="flag" src={props.img} alt="" />
                {props.title}
            </p>
            <p className="small">{props.desc}</p>
        </div>
        <div className="card-links">
            {props.linkexplorer && <a href={props.linkexplorer}>{t("explore")}</a>}
            <a href={props.linkgit}>{t("see-github")}</a>
        </div>

        <style jsx>
            {`
                .card-container {
                    background-color: #ffffff;
                    box-shadow: 0px 0px 6px #bcbcc6;
                    border-radius: 2%;
                    display: flex;
                    flex-direction: column;
                    text-align: left;
                    width: 100%;
                    justify-content: space-between;
                }

                .card-desc {
                    text-align: left;
                    padding-left: 4%;
                    padding-right: 4%;
                }

                .card-desc > p {
                    white-space: normal;
                }

                .card-links {
                    padding: 4%;
                    display: flex;
                    justify-content: space-between;
                    flex-direction: row;
                    background-color: #6d69fb;
                    font-size: 1em;
                }

                .categorie {
                    font-family: asapmedium;
                    font-size: 0.75em;
                    color: #000;
                    background-color: #E5E5E5;
                    border: solid 0px;
                    margin-top: 4%;
                    padding: 1%;
                    border-radius: 4px;
                }

                .flag {
                    width: 3em;
                    padding-right: 1em;
                }
            `}
        </style>
    </div>
)

export default withNamespaces("components")(CardResource)
