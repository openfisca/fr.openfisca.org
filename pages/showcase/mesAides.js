import asset from 'next/asset'
import GlobalStyle from '../../components/GlobalStyle'
import Header from "../../components/Header"
import Footer from "../../components/Footer"
import ProjectDesc from "../../components/ProjectDesc"
import ProjectAttribute from "../../components/ProjectAttribute"
import Piwik from "../../components/Piwik"

const Mesaides = () => (
    <div className='content'>
    <a className="outline" href="/showcase/" >Retour</a>
      <ProjectDesc img="/static/projects/mesaides.png" baseline="MesAides est un simulateur de droit aux aides sociales." desc1="Développé par BetaGouv, l’équipe d’innovation du gouvernement français"
desc2="Mes Aides informe les citoyens français de leur éligibilité aux aides sociales nationales et régionales. En moins de 7 minutes, le service donne une réponse sur l’éligibilité à 30 aides."
desc3="S’appuie également sur des extensions sur-mesure développées par l’équipe : implémentation d’aides locales (Paris, Brest), création d’outils comme le traceur, outil de debug qui permet de naviguer plus facilement dans un calcul OpenFisca." button="voir le site"/>

    <section>
    <h2>Caractéristiques du projet</h2>
      <ProjectAttribute 
      imgapi="/static/icons/circle/api.svg" api="utilise l'API Web"
      imgcountry="/static/icons/circle/france.svg" country="interroge le système France"
      imgsimulation="/static/icons/circle/simindividuelle.svg" simulation="produit une simulation individuelle"
      imgperimetre="/static/icons/circle/perimetre.svg" perimetre="utilise le périmètre de la loi lié aux prestations sociales"
      imgpoweredby="/static/icons/circle/admin.svg" poweredby="porté par l'administration publique"
      />
  </section>

  <style jsx>{`

  .outline {
    color: #656565;
    padding: 0 1% 0 1%;
    border-color: #656565;
    border-radius: 25px;
  }

`}</style>

</div>

)
export default () => (
    <div>
      <GlobalStyle/>
      <Header page='mesaides' title='Mes Aides' />
      <Mesaides />
      <Footer />
      <Piwik page='mesaides'/>
    </div>
  )
  