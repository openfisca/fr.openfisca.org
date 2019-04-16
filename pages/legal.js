import asset from "next/asset"
import GlobalStyle from "../components/GlobalStyle"
import Header from "../components/Header"
import Footer from "../components/Footer"
import Piwik from "../components/Piwik"

const Legal = () => (
  <div className='content'>
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
      GitHub, Inc<br />
      88 Colin P Kelly Jr St<br />
      San Francisco, CA 94107 - United States<br />
      +1 (877) 448-4820
    </p>

    <style jsx>{`

    `}</style>
  </div>
  )

export default () => (
  <div>
    <GlobalStyle/>
    <Header title="Mentions légales" page="legal" />
    <Legal />
    <Footer />
    <Piwik page='legal'/>
  </div>
)
