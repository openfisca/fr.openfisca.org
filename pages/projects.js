import asset from 'next/asset'
import GlobalStyle from "../components/GlobalStyle"
import Header from "../components/Header"
import Footer from "../components/Footer"
import Piwik from "../components/Piwik"

const Projects = () => (
  <div className='content'>
    <h1>Projets</h1>


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
    <Header />
    <Projects />
    <Footer />
    <Piwik page='projects'/>
  </div>
)
