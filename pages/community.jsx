import { withNamespaces } from "react-i18next"

import Layout from "layouts/Layout"
import asset from "next/asset"


function community() {
    return withNamespaces("community")(
        <Layout page="community" title={t('title')}>
            <div className="content">
                <section>
                    <h2>{t('title-who')}</h2>
                    <div className="flex__container">
                        <div className="flex__item50">
                            <p>
                                {t('content-who-1')}
                                <a href="https://beta.gouv.fr/">BetaGouv</a> & <a href="https://www.etalab.gouv.fr/">Etalab</a>
                                {t('content-who-2')}
                                <br/>
                                <br/>
                                {t('content-who-3')}
                                <br/>
                                <br/>
                                {t('content-who-4')}
                            </p>
                        </div>
                        <div className="flex__item50">
                            <img src={asset("/images/community.png")} alt="" />
                        </div>
                    </div>
                </section>

                <section>
                    <h2>{t('title-reach')}</h2>
                    <div className="flex__column">
                        <div className="flex__item50">
                            <p>{t('content-reach')}</p>
                        </div>
                        <a className="btn medium" href="https://forms.gle/XFxiFvfaAa6w7LGy7">
                            {t('btn-slack')}
                        </a>
                    </div>
                </section>

                <section>
                    <h2>{t('title-contact')}</h2>
                    <div className="flex__column">
                        <div className="flex__item50">
                            <p>{t('content-contact')}</p>
                        </div>
                        <div>
                            <a
                                className="btn medium"
                                href="mailto:%63%6fn&#116;&#97;%63%74&#64;%6f%70%65%6efi&#115;&#99;a%2e&#111;&#114;&#103;"
                            >
                                {t('link-contact')}
                            </a>
                        </div>
                    </div>
                </section>

                <style jsx>
                    {`
                        p a {
                            color: #6d69fb;
                            margin: 0;
                        }

                        medium {
                          display: flex;
                        }

                        @media(min-width: 40rem) {
                          .flex__item50 {
                            width: 50%;
                            padding-left: 1rem;
                            display: flex;
                        }
                    `}
                </style>
            </div>
        </Layout>
    )
}


export default community
