import asset from 'next/asset'
import GlobalStyle from '../components/GlobalStyle'
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
      #iframe-container {
        display: flex;
        flex-direction: row;
        justify-content: center;
      }
    `}</style>
  </div>
  )

export default () => (
  <div>
    <GlobalStyle/>
    <Header />
    <Contribuer />
    <Partners />
    <Footer />
    <Piwik page='contribuer'/>
  </div>
)
