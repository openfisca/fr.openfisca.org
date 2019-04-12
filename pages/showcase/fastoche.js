import asset from 'next/asset'
import GlobalStyle from '../../components/GlobalStyle'
import Header from "../../components/Header"
import Footer from "../../components/Footer"
import Piwik from "../../components/Piwik"
import ProjectDesc from "../../components/ProjectDesc"
import ProjectAttribute from "../../components/ProjectAttribute"


const Fastoche = () => (
  <div className='content'>
    <a className="outline" href="../showcase/" >Retour</a>

  <ProjectDesc img="../static/projects/fastoche.png" baseline="MesAides est un simulateur de droit aux aides sociales." desc1="Développé par PayBoost, un acteur privé du paiement en ligne."
  desc2="Fastoch€ est une application qui joue le rôle d’un coach d’épargne en reliant les comptes bancaires et en informant l’utilisateur sur son reste à vivre. 
  Il permet aussi d’indiquer à l’utilisateur qu’il a droit à certaines aides sociales et à le diriger vers les administrations responsables du versement de ces aides. "

desc3="Fastoch€ a été lancé en 2018." button="voir le site"/>

 <section>
    <h2>Caractéristiques du projet</h2>
      <ProjectAttribute 
      imgapi="../static/icons/circle/api.svg" api="API Web"
      imgcountry="../static/icons/circle/nz.svg" country="interroge le système néo-zélandais"
      imgsimulation="../static/icons/circle/simindividuelle.svg" simulation="Simulation individuelle"
      imgperimetre="../static/icons/circle/perimetre.svg" perimetre=" Web"
      imgpoweredby="../static/icons/circle/admin.svg" poweredby="API Web"
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
      <Header page='fastoche' title='Fastoch€'/>
      <Fastoche />
      <Footer />
      <Piwik page='fastoche'/>
    </div>
  )
  