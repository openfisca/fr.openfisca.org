import asset from "next/asset"
import GlobalStyle from "../components/GlobalStyle"
import Link from 'next/link'
import Header from "../components/Header"
import Footer from "../components/Footer"
import Piwik from "../components/Piwik"
import CardResources from "../components/CardResources";

const Resources = () => (
  <div className='content'>
    <ul className="flex__container">
      <li className="flex__item"><a href="resources/countrypackages" ><CardResources img="../static/icons/world.svg" title="Système socio-fiscal" desc="Accédez aux systèmes déjà modélisés ou créez votre propre système socio-fiscal." attribute="Voir les 10 modèles"  /></a></li>
    
      <li className="flex__item"><a href="resources/legex" ><CardResources img="../static/icons/dev.svg" title="Explorateur de législation" desc="Naviguez parmi les variables et paramètres d’un système, obtenez la formule associée et la référence de loi."  attribute="Explorer"/></a></li>

    </ul>
  
    <style jsx>{`

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
    <Header page="resources" title='Ressources' />
    <Resources />
    <Footer />
    <Piwik page='resources'/>
  </div>
)
