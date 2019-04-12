import asset from 'next/asset'
import GlobalStyle from '../../components/GlobalStyle'
import Header from "../../components/Header"
import Footer from "../../components/Footer"
import Piwik from "../../components/Piwik"
import ProjectDesc from "../../components/ProjectDesc"
import ProjectAttribute from "../../components/ProjectAttribute"


const Leximpact = () => (
  <div className='content'>

  <a className="outline" href="/showcase/" >Retour</a>

  <ProjectDesc img="/static/projects/leximpact.png" 
  baseline="Simuler l’impact des projets de réformes socio-fiscales sur les citoyens" 
  desc1="Soutenu par Etalab dans le cadre du programme EIG (Entrepreneur d’Intérêt Général), l’équipe travaille en collaboration avec les administrateurs de l’Assemblée Nationale."

  desc2="Le projet vise à outiller les administrateurs de l’Assemblée Nationale et les députés pour simuler l’impact de réforme avant de procéder à son vote. "
  
  desc3="LexImpact a débuté en 2019 et est en construction."
  button="Visiter LexImpact"/>
  
 <section>
    <h2>Caractéristiques du projet</h2>
      <ProjectAttribute 
      imgapi="/static/icons/circle/api.svg" api="API Web"
      imgcountry="/static/icons/circle/nz.svg" country="interroge le système néo-zélandais"
      imgsimulation="/static/icons/circle/simindividuelle.svg" simulation="Simulation individuelle"
      imgperimetre="/static/icons/circle/perimetre.svg" perimetre="Impôts"
      imgpoweredby="/static/icons/circle/admin.svg" poweredby="API Web"
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
      <Header page='leximpact' title='LexImpact' />
      <Leximpact />
      <Footer />
      <Piwik page='leximpact'/>
    </div>
  )
  