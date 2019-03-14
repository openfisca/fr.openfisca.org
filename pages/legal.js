import asset from "next/asset"
import GlobalStyle from "../components/GlobalStyle"
import Header from "../components/Header"
import Footer from "../components/Footer"
import Piwik from "../components/Piwik"

const Legal = () => (
  <div id='content'>
    <h1>Mentions légales</h1>
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
      #content{
        max-width: 42em;
        margin: auto;
        padding: 0 3em 1em 3em;
        font-size: 120%;
        font-family: "Helvetica Neue",-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
      }

      #iframe-container {
        display: flex;
        flex-direction: row;
        justify-content: center;
      }

      h1 {
         text-align: center;
         margin-top: 2em;
         margin-bottom: 2em;
       }

      h2 {
        margin-top: 2em;
        margin-bottom: 1em;
        font-weight: normal;
        color: #1e3242;
      }

      p {
        font-weight: 300;
      }

      a {
        text-decoration: underline;
        color: #2b6a8d;
      }

      @media (max-width: 720px) {
        #content {
          padding: 0 1em 1em 1em;
        }
      }
    `}</style>
  </div>
  )

export default () => (
  <div>
    <GlobalStyle/>
    <Header page="legal" />
    <Legal />
    <Footer />
    <Piwik page='legal'/>
  </div>
)
