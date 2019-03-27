import asset from "next/asset"
import GlobalStyle from "../components/GlobalStyle"
import Header from "../components/Header"
import Footer from "../components/Footer"
import Piwik from "../components/Piwik"
import CardResources from "../components/CardResources";

const Resources = () => (
  <div className='content'>
    <section>
     
     <ul className="flex-container">
       <li><Link href="../projects/mesAides" /><CardResources img="../static/images/projects/mesaides.png" title="MesAides" desc="sort desc"  /></li>
       <li><Link href="../projects/mesAides" /><CardResources img="../static/images/projects/leximpact.png" title="LexImpact" desc="sort desc"   /></li>
     </ul>

    </section>


    <style jsx>{`
      #iframe-container {
        display: flex;
        flex-direction: row;
        justify-content: center;
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
    <Header page="resources" title='Ressources' />
    <Resources />
    <Footer />
    <Piwik page='resources'/>
  </div>
)
