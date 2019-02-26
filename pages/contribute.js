import asset from 'next/asset'

import Header from "../components/Header"
import Partners from "../components/Partners"
import Footer from "../components/Footer"
import Hero from "../components/Hero"
import Piwik from "../components/Piwik"

const Contribuer = () => (
  <div id='content'>
    <h1>Contribuer</h1>
    <h2>Suggérer ou ajouter des contenus</h2>
    <h3>Ce site - tout comme ce projet - est contributif !</h3>
    <p>
      Vous avez besoin d’un outil ? Il vous manque un élément d’information ? Vous avez une suggestion ?
      Vous pouvez contribuer via GitHub en créant un outil pour tous - en proposant une modification de contenu ou un ajout.  
      Si vous n’êtes pas en mesure de contribuer, parlez-en la communauté via Slack ou dites-le nous par email ! 
      Peut-être que d’autres membres ont le même besoin que vous.
    </p>

    <h2>Parler d'OpenFisca</h2>
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
    <Contribuer />
    <Partners />
    <Footer />
    <Piwik page='contribuer'/>
  </div>
)
