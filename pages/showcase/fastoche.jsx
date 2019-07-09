import { withNamespaces } from "react-i18next"

import Layout from "layouts/Layout"
import ProjectDesc from "components/ProjectDesc"
import ProjectAttribute from "components/ProjectAttribute"


const Fastoche = ({t}) => (
    <Layout page="fastoche" title={t('title')}>
        <div className="content">
            <a className="outline" href="/showcase/">
                {t('back')}
            </a>

            <ProjectDesc
                img="/static/projects/fastoche.png"
                baseline={t('baseline')}
                desc1={t('desc1')}
                desc2={t('desc2')}
                desc3={t('desc3')}
                url="https://www.fastoche.fr/"
                textlink={t('textlink')}
            />

            <section>
                <h2>{t('car')}</h2>
                <ProjectAttribute
                    imgapi="/static/icons/circle/api.svg"
                    api={t('api')}
                    imgcountry="/static/icons/circle/france.svg"
                    country={t('country')}
                    imgsimulation="/static/icons/circle/simindividuelle.svg"
                    simulation={t('simulation')}
                    imgperimetre="/static/icons/circle/perimetre.svg"
                    perimetre={t('perimetre')}
                    imgpoweredby="/static/icons/circle/startup.svg"
                    poweredby={t('poweredby')}
                />
            </section>
        </div>

        <style jsx>
            {`
                .outline {
                    color: #656565;
                    padding: 0 1% 0 1%;
                    border: #656565 1px solid;
                    border-radius: 25px;
                    max-width: 4em;
                }
            `}
        </style>
    </Layout>
)


export default withNamespaces("fastoche")(Fastoche)
