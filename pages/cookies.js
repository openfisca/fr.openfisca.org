import asset from 'next/asset'

import Header from "../components/Header"
import Footer from "../components/Footer"
import Hero from "../components/Hero"

const Cookies = () => (
  <div id='content'>
    <h1>Cookies et option de retrait</h1>
    <p>
      Lorsque vous visitez ce site web, nous laissons un petit fichier texte (un "cookie") sur votre ordinateur.
      Cela nous permet de mesurer combien de visites nous avons et quelles sont les pages les plus regardées.
    </p>
    <div id='iframe-container'>
      <iframe class="optout" style={{backgroundColor: '#9a9a9a24', width:'70%', border: 'none', padding: '1em 2em 0 2em'}} src="https://stats.data.gouv.fr/index.php?module=CoreAdminHome&action=optOut&language=fr"></iframe>
    </div>
    <h2>Ce site web n'indique pas de bannière de consentement aux cookies. Pourquoi ?</h2>
    <p>
      <a href='https://matomo.org/'>Matomo</a>- notre service de suivi - est configuré en conformité avec les règles de gestion de "Cookies" de la <a href='https://www.cnil.fr/fr/solutions-pour-les-cookies-de-mesure-daudience'>CNIL</a> des autorités françaises
      (Matomo anonymise votre adresse IP de façon à rendre impossible le lien entre votre visite et vous-même).
    </p>
    <h2>Je contribue à vos données. Puis-je y accéder ?</h2>
    <p>
      Bien sûr ! Les données d'analyse d'OpenFisca sont librement disponible ici : <a href='http://stats.data.gouv.fr/index.php?module=CoreHome&action=index&idSite=4&period=range&date=previous30#?module=Dashboard&action=embeddedIndex&idSite=4&period=range&date=previous30&idDashboard=1'>stats.data.gouv.fr</a>
    </p>
 
    <style jsx>{` 
      #content{
        max-width: 42em;
        margin: auto;
        padding: 1 3em 1 3em;
        font-size: 120%;
        font-family: "Helvetica Neue",-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
      }
      #iframe-container{
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

      ul {
        margin: auto;
        padding: 1em;
        list-style-type: none;
      }

      p {
        font-weight: 300; 
      }

      .flex-item {
        background-color: #9a9a9a24;
        display: flex;
        flex-flow: column;
        justify-content: flex-start;
        align-items: center;
        border: 1px solid transparent;
        margin: 1em;
        padding: 0.5em;
        max-width: 20%;
        min-width: 20em;
      }

      .flex-container {
        display: flex;
        justify-content: center;
        margin: auto;
        padding: 1em;
        display: flex;
        flex-wrap: wrap;
      }

      .cta {
        color: #ffffff;
        background-color: #2b6a8d;
        border-color: #2b6a8d;
        border: 1px solid transparent;
        border-radius: .2em;
        display: inline-block;
        padding: .3em 1em;
        margin: 0;
        font-weight: 400;
        line-height: 1.5;
        text-align: center;
        white-space: nowrap;
        vertical-align: middle;
        text-decoration: none;
        transition: filter 0.2s;
      }
      .reference {
        text-decoration: underline;
        color: #2b6a8d;
      }
      .logo{
        background-color:transparent
      }
      img {
        width: 10em;
      }

      @media (max-width: 1100px) {
        .cta {
          padding-left: 1em;
          padding-right: 1em;
        }
        .flex-container{
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        .flex-item{
          width: 100%;
        }
      }
      `}</style>
  </div>
  )

export default () => (
  <div>
    <Header />
    <Cookies />
    <Footer />
  </div>
)
