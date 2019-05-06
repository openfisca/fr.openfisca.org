import Head from 'next/head'
import asset from 'next/asset'
import GlobalStyle from '../components/GlobalStyle'
import Header from '../components/Header'
import Partners from '../components/Partners'
import Footer from '../components/Footer'
import Piwik from '../components/Piwik'

const Communaute = () => (
    <div className="content">
        <section>
            <h2>Qui sommes-nous ?</h2>
            <div className="flex__container">
                <div className="flex__item50">
                    <p>
                        OpenFisca est une communauté Open Source soutenue par Beta Gouv & Etalab, deux équipes d’innovation au sein du gouvernement français.
                        En 2019, OpenFisca est utilisée par 7 pays dans le monde (France, Espagne, Italie, Nouvelle Zélande, Sénégal & Tunisie).
                        Plus de 70 personnes ont rejoint cette aventure. Ils contribuent, s’entraident et participent chaque jour à améliorer le code d’OpenFisca.
                    </p>
                </div>
                <div className="flex__item50">
                    <img src={asset('/images/community.png')} alt=""/>
                </div>
            </div>
        </section>

        <section>
            <h2>Échanger avec la communauté</h2>
            <div className="flex__column">
                <div className="flex__item50">
                    <p>
                        Lorsque vous travaillez sur un projet utilisant OpenFisca, vous êtes le bienvenue sur notre Slack ! Vous pourrez y demander de l’aide, des conseils et rencontrer les autres membres de la communauté.
                        Avant de vous inviter sur le Slack, nous vous demandons simplement de répondre à quelques questions sur votre projet.
                    </p>
                </div>
                <a className="btn medium" href="https://forms.gle/XFxiFvfaAa6w7LGy7">Rejoindre le Slack</a>
            </div>
        </section>

        <section>
            <h2>Écrivez-nous</h2>
            <div className="flex__column">
                <div className="flex__item50">
                    <p>Pour toute question ou pour toute demande de collaboration, n&#39;hésitez pas à nous joindre par email.</p>
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

export default () => (
    <div>
        <Head>
            <title>Communauté</title>
            <meta name="viewport" key="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <GlobalStyle/>
        <Header page="community" title="Communauté" />
        <Communaute />
        <Partners/>
        <Footer />
        <Piwik page="community"/>
    </div>
)
