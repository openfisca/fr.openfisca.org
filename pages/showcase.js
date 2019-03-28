import asset from 'next/asset'
import GlobalStyle from "../components/GlobalStyle"
import Header from "../components/Header"
import Footer from "../components/Footer"
import Piwik from "../components/Piwik"
import CardProject from "../components/CardProject"
import Link from 'next/link'


const Showcase = () => (
  <div className='content'>
     
      <ul className="container">
        <li className="flex-item3"><a href="showcase/mesAides" ><CardProject img="../static/images/projects/mesaides.png" title="MesAides" desc="sort desc"  /></a></li>
        <li className="flex-item3"><a href="showcase/lexImpact" ><CardProject img="../static/images/projects/leximpact.png" title="LexImpact" desc="sort desc"   /></a></li>
        <li className="flex-item3"><a href="showcase/taxIpp" ><CardProject img="../static/images/projects/taxipp.png" title="Tax IPP" desc="sort desc"   /></a></li>
        <li className="flex-item3"><a href="showcase/ratesRebates" ><CardProject img="../static/images/projects/ratesrebates.png" title="Rates Rebates" desc="sort desc"   /></a></li>
        <li className="flex-item3"><a href="showcase/fastoche" ><CardProject img="../static/images/projects/fastoche.png" title="Fastoch€" desc="sort desc"   /></a></li>
      </ul>

    <style jsx>{`

li {
  list-style: none;
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
    <GlobalStyle/>
    <Header page='showcase' title='Projets' />
    <Showcase />
    <Footer />
    <Piwik page='showcase'/>
  </div>
)
