import asset from 'next/asset'

import Header from "../components/Header"
import Footer from "../components/Footer"
import Hero from "../components/Hero"
import Piwik from "../components/Piwik"

const Communaute = () => (
  <div id='content'>
    <h1>Communauté</h1>
    <h2>Qui sommes-nous ?</h2>
    <p>
     OpenFisca est une communauté Open Source soutenue par Beta Gouv & Etalab, deux équipes d’innovation au sein du gouvernement français. 
     En 2019, OpenFisca est utilisée par 10 pays dans le monde (France, Côte d’Ivoire, Espagne, Italie, Mali, Nouvelle Zélande, Sénégal & Tunisie). 
     Plus de 70 personnes ont rejoint cette aventure. Ils contribuent, s’entraident et participent chaque jour à améliorer le code d’OpenFisca.    
    </p>

    <h2>Echanger avec la communauté</h2>
    <p>
      Vous souhaitez présenter OpenFisca à quelqu’un ? 
      Vous voulez convaincre quelqu’un de l’utiliser ? 
      Vous écrivez un article à propos d’OpenFisca ? 
      Utilisez ce document de présentation.
    </p>
    
    <h2>Réutiliser OpenFisca</h2>
    <p>
OpenFisca utilise la licence AGPL. 
Vous pouvez utilisez ces éléments pour citer OpenFisca dans le produit que vous avez créé. 
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
    <Header />
    <Communaute />
    <Footer />
    <Piwik page='community'/>
  </div>
)
