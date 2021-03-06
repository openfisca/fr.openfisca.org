import { withNamespaces } from "react-i18next"

import Layout from "layouts/Layout"
import CardResource from "components/CardResource"

const Resources = ({ t }) => {
    const resourceList = [
        {
            categorie: t('type-model'),
            img: "/static/icons/france.svg",
            title: t("system-fr"),
            desc: t("$t(content-fr) $t(desc-fr)"),
            linkexplorer: "https://fr.openfisca.org/legislation",
            linkgit: "https://github.com/openfisca/openfisca-france",
        },
        {
            categorie: t('type-model'),
            img: "/static/icons/nz.svg",
            title: t("system-nz"),
            desc: t("desc-nz"),
            linkexplorer: "https://www.rules.nz",
            linkgit: "https://github.com/ServiceInnovationLab/openfisca-aotearoa",
        },
        {
            categorie: t('type-model'),
            img: "/static/icons/barcelona.svg",
            title: t("system-ba"),
            desc: t("desc-ba"),
            linkgit: "https://github.com/lesmevesajudes/openfisca-barcelona",
        },
        {
            categorie: t('type-model'),
            img: "/static/icons/tunisia.svg",
            title: t("system-tn"),
            desc: t("desc-tn"),
            linkgit: "https://github.com/openfisca/openfisca-tunisia",
        },
        {
            categorie: t('type-model'),
            img: "/static/icons/italy.svg",
            title: t("system-it"),
            desc: t("desc-it"),
            linkgit: "https://github.com/openfisca/openfisca-italy",
        },
        {
            categorie: t('type-model'),
            img: "/static/icons/senegal.svg",
            title: t("system-sn"),
            desc: t("desc-sn"),
            linkgit: "https://github.com/openfisca/openfisca-senegal",
        },
        {
            categorie: t('type-model'),
            img: "/static/icons/galle.svg",
            title: t("system-au"),
            desc: t("desc-au"),
            linkgit: "https://github.com/digitalnsw/openfisca-nsw",
        },
    ]

    return (
        <Layout page="resources" title={t("title")}>
            <div className="content">
                <ul className="flex__container">
                    {resourceList.map(resource => (
                        <li className="flex__item" key={resource.title}>
                            <CardResource
                                categorie={resource.categorie}
                                img={resource.img}
                                title={resource.title}
                                desc={resource.desc}
                                linkexplorer={resource.linkexplorer}
                                linkgit={resource.linkgit}
                            />
                        </li>
                    ))}
                </ul>
            </div>

            <style jsx>
                {`
                    .flex__container {
                        flex-wrap: wrap;
                    }

                    @media (min-width: 40rem) {
                        .flex__item:nth-child(3n + 1) {
                            padding-left: 0;
                        }
                    }
                `}
            </style>
        </Layout>
    )
}

export default withNamespaces("resources")(Resources)
