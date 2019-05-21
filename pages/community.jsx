import Head from 'next/head'
import asset from 'next/asset'
import GlobalStyle from '../components/GlobalStyle'
import Header from '../components/Header'
import Partners from '../components/Partners'
import Footer from '../components/Footer'
import Piwik from '../components/Piwik'

// the hoc
import { withNamespaces } from 'react-i18next';

const Communaute =  withNamespaces("community")(
    ({t}, props) => (
    <div className="content">
        <section>
            <h2>{t('title-who')}</h2>
            <div className="flex__container">
                <div className="flex__item50">
                    <p>{t('content-who')}</p>
                </div>
                <div className="flex__item50">
                    <img src={asset('/images/community.png')} alt=""/>
                </div>
            </div>
        </section>

        <section>
            <h2>{t('title-reach')}</h2>
            <div className="flex__column">
                <div className="flex__item50">
                    <p>{t('content-reach')}</p>
                </div>
                <a className="btn medium" href="https://forms.gle/XFxiFvfaAa6w7LGy7">Rejoindre le Slack</a>
            </div>
        </section>

        <section>
            <h2>{t('title-contact')}</h2>
            <div className="flex__column">
                <div className="flex__item50">
                    <p>{t('content-contact')}</p>
                </div>
                <div>
                    <a className="btn medium" href="mailto:%63%6fn&#116;&#97;%63%74&#64;%6f%70%65%6efi&#115;&#99;a%2e&#111;&#114;&#103;">Contact</a>
                </div>
            </div>
        </section>

        <section>
            <h2>Restez informés</h2>
            <div className="flex__column">
                <div className="flex__item50">
                    <p>
                        Vous pouvez vous abonner à notre newsletter mensuelle pour recevoir les actualités et les changements majeurs opérés sur OpenFisca.
                    </p>
                </div>
                <a className="btn medium">Recevoir la Newsletter</a>
            </div>
        </section>


        <style jsx>{`
            medium {
              display: flex;
            }

            @media(min-width: 40rem) {
              .flex__item50 {
                width: 50%;
                padding-left: 1rem;
                display: flex;
            }
        `}</style>
    </div>
    )
)

export default withNamespaces("community")(({t}) => (
    <div>
        <Head>
            <title>{t('title')}</title>
            <meta name="viewport" key="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <GlobalStyle/>
        <Header page="community" title="{t('community:title')}" />
        <Communaute />
        <Partners/>
        <Footer />
        <Piwik page="community"/>
    </div>
    )
)
