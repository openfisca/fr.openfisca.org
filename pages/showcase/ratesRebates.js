import asset from 'next/asset'
import GlobalStyle from '../../components/GlobalStyle'
import Header from "../../components/Header"
import Footer from "../../components/Footer"
import Piwik from "../../components/Piwik"
import ProjectDesc from "../../components/ProjectDesc"
import ProjectAttribute from "../../components/ProjectAttribute"

const Ratesrebates = () => (
  <div className='content'> 
      <a className="outline" href="../showcase" >Retour</a>

      <ProjectDesc img="../static/projects/ratesrebates.png" 
      baseline="Prototyper le versement automatique d’une aide sociale." 
      desc1="Produit par Lab Inno NZ, l’équipe d’innovation du gouvernement néo-zélandais, ce prototype vise à faciliter le versement automatique de l’aide Rates Rebates pour le public senior." 
      desc2="L’équipe a intégralement modélisé le système socio-fiscal néo-zélandais."
      desc3="Rates Rebates a été prototypé en 2018."
      href="https://www.digital.govt.nz/blog/making-it-easier-the-rates-rebates-story-so-far/"
      textlink="Lire l'étude"/>

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
      <Header  page='ratesrebates' title='Rates rebates' />
      <Ratesrebates/>
      <Footer />
      <Piwik page='ratesrebates'/>
    </div>
  )
  