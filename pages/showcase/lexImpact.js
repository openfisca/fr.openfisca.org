import asset from 'next/asset'
import GlobalStyle from '../../components/GlobalStyle'
import Header from "../../components/Header"
import Footer from "../../components/Footer"
import Piwik from "../../components/Piwik"
import ProjectDesc from "../../components/ProjectDesc"

const Leximpact = () => (
  <div className='content'>
  <div className='row'>
  <ProjectDesc img="../static/images/projects/leximpact.png" 
  baseline="MesAides est un simulateur de droit aux aides sociales." 
  desc="Développé par BetaGouv, l’équipe d’innovation du gouvernement français
Mes Aides informe les citoyens français de leur éligibilité aux aides sociales nationales et régionales. En moins de 7 minutes, le service donne une réponse sur l’éligibilité à 30 aides.
S’appuie également sur des extensions sur-mesure développées par l’équipe : implémentation d’aides locales (Paris, Brest), création d’outils comme le traceur, outil de debug qui permet de naviguer plus facilement dans un calcul OpenFisca." button="voir le site"/>
 </div>
 <div className='row'>
 </div>

</div>
)
export default () => (
    <div>
      <GlobalStyle/>
      <Header page='leximpact' title='LexImpact' />
      <Leximpact />
      <Footer />
      <Piwik page='leximpact'/>
    </div>
  )
  