import Head from 'next/head'
import GlobalStyle from '../components/GlobalStyle'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Piwik from '../components/Piwik'

const Legal = () => (
    <div className="content">
        <h2>Responsable de la publication</h2>
        <p>
      Laure Lucchesi<br />
      Directrice d’Etalab<br />
      20, avenue de Ségur<br />
      75007 Paris<br />
            <a href="https://www.etalab.gouv.fr">https//www.etalab.gouv.fr</a>
        </p>

        <h2>Hébergeur</h2>
        <p>
      Netlify<br />
      2325 3rd St Suite 215<br />
      San Francisco, CA 94107, États-Unis<br />
        </p>

        <style jsx>{`

    `}</style>
    </div>
)

export default () => (
    <div>
        <Head>
            <title>Mentions légales</title>
            <meta name="viewport" key="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <GlobalStyle/>
        <Header title="Mentions légales" page="legal" />
        <Legal />
        <Footer />
        <Piwik page="legal"/>
    </div>
)
