import asset from 'next/asset'
import GlobalStyle from '../../components/GlobalStyle'
import Header from "../../components/Header"
import Footer from "../../components/Footer"
import Piwik from "../../components/Piwik"
import ProjectDesc from "../../components/ProjectDesc"

const Ratesrebates = () => (
  <div className='content'>
    <section className="desc">
      <ProjectDesc img="../static/images/projects/ratesrebates.png" 
      baseline="Prototyper le versement automatique d’une aide sociale." 
      desc="Produit par Lab Inno NZ, l’équipe d’innovation du gouvernement néo-zélandais, ce prototype vise à faciliter le versement automatique de l’aide Rates Rebates pour le public senior. 
      L’équipe a intégralement modélisé le système socio-fiscal néo-zélandais. 
      Rates Rebates a été prototypé en 2018." 
      href="https://www.digital.govt.nz/blog/making-it-easier-the-rates-rebates-story-so-far/"
      textlink="Lire l'étude"/>
    </section>

    <section>
      <h2>Caractéristiques du projet</h2>
      <ul className='attributes'>
        <li className="flex-item3"><img src="../../static/images/icons/python.svg" /><p className="Caption">Utilise l'API Python</p>
        </li>
        <li className="flex-item3"><img src="../../static/images/icons/python.svg" /><p className="Caption">Utilise l'API Python</p>
        </li>
        <li className="flex-item3"><img src="../../static/images/icons/python.svg" /><p className="Caption">Utilise l'API Python</p>
        </li>
        <li className="flex-item3"><img src="../../static/images/icons/python.svg" /><p className="Caption">Utilise l'API Python</p>
        </li>
        <li ><img src="../../static/images/icons/python.svg" /><p className="Caption">Utilise l'API Python</p>
        </li>
      </ul>
    </section>

</div>
)
export default () => (
    <div>
      <GlobalStyle/>
      <Header />
      <Ratesrebates />
      <Footer />
      <Piwik page='ratesrebates'/>
    </div>
  )
  