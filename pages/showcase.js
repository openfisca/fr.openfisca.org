import asset from 'next/asset'
import GlobalStyle from "../components/GlobalStyle"
import Header from "../components/Header"
import Footer from "../components/Footer"
import Piwik from "../components/Piwik"
import CardProject from "../components/CardProject"
import Link from 'next/link'


const Showcase = () => (
  <div className='content'>
     
      <ul className="flex-container">
        <li><a href="mesAides" ><CardProject img="../static/images/projects/mesaides.png" title="MesAides" desc="sort desc"  /></a></li>
        <li><a href="lexImpact" ><CardProject img="../static/images/projects/leximpact.png" title="LexImpact" desc="sort desc"   /></a></li>
        <li><a href="taxIpp" ><CardProject img="../static/images/projects/taxipp.png" title="Tax IPP" desc="sort desc"   /></a></li>
        <li><a href="ratesRebates" ><CardProject img="../static/images/projects/ratesrebates.png" title="Rates Rebates" desc="sort desc"   /></a></li>
        <li><a href="fastoche" ><CardProject img="../static/images/projects/fastoche.png" title="Fastoch€" desc="sort desc"   /></a></li>
      </ul>

    <style jsx>{`

      #iframe-container {
        display: flex;
        flex-direction: row;
        justify-content: center;
      }

      .flex-container {
        display: flex;
        justify-content: left;
        display: flex;
        flex-wrap: wrap;
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
