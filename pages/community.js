import asset from 'next/asset'
import GlobalStyle from "../components/GlobalStyle"
import Header from "../components/Header"
import Partners from "../components/Partners"
import Footer from "../components/Footer"
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
      #iframe-container {
        display: flex;
        flex-direction: row;
        justify-content: center;
      }

      a {
        text-decoration: underline;
        color: #2b6a8d;
      }
    `}</style>
  </div>
  )

export default () => (
  <div>
    <GlobalStyle/>
    <Header />
    <Communaute />
    <Partners/>
    <Footer />
    <Piwik page='community'/>
  </div>
)
