import { withNamespaces } from "react-i18next"

import Layout from "layouts/Layout"
import CardProject from "components/CardProject"


function Showcase() {
    const projectList = [
        {
            href="mesAides",
            img="/static/projects/mesaides.png",
            title={t('title-mesaides')},
            desc={t('desc-mesaides')}, 
            attribute1={t('fr')},
            attribute2={t('apiweb')},
            attribute3={t('social')}
        },
        {
            href="lexImpact",
            img="/static/projects/leximpact.png",
            title={t('title-lex')},
            desc={t('desc-lex')}, 
            attribute1={t('fr')},
            attribute2={t('apipython')},
            attribute3={t('reforms')}
        },
        {
            href="taxIpp",
            img="/static/projects/taxipp.png",
            title={t('title-tax')},
            desc={t('desc-tax')}, 
            attribute1={t('fr')},
            attribute2={t('apipython')},
            attribute3={t('reforms')}
        },
        {
            href="ratesRebates",
            img="/static/projects/ratesrebates.png",
            title={t('title-rates')},
            desc={t('desc-rates')}, 
            attribute1={t('nz')},
            attribute2={t('apiweb')},
            attribute3={t('social')}
        },
        {
            href="fastoche",
            img="/static/projects/fastoche.png",
            title={t('title-fastoche')},
            desc={t('desc-fastoche')}, 
            attribute1={t('fr')},
            attribute2={t('apiweb')},
            attribute3={t('social')}
        }
    ]

    return withNamespaces("showcase")(
        <Layout page="showcase" title={t('title')}>
            <div className="content">
                <ul className="flex__container">
                    {projectList.map(project => (
                        <li className="flex__item" key={project.title}>
                            <a href={project.href}>
                                <CardProject
                                    img={project.img}
                                    title={project.title}
                                    desc={project.desc}
                                    attribute1={project.attribute1}
                                    attribute2={project.attribute2}
                                    attribute3={project.attribute3}
                                />
                            </a>
                        </li>
                    ))}
                </ul>
            </div>


            <style jsx>
                {`
                    li {
                        list-style: none;
                    }

                    .flex__container {
                        display: flex;
                        flex-wrap: wrap;
                    }

                    @media (max-width: 720px) {
                        #content {
                            padding: 0 1em 1em 1em;
                        }
                    }
                `}
            </style>
        </Layout>
    )
}


export default Showcase
