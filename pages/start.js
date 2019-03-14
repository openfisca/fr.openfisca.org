import asset from 'next/asset'
import GlobalStyle from "../components/GlobalStyle"
import Header from "../components/Header"
import Footer from "../components/Footer"
import Piwik from "../components/Piwik"

const Start = () => (
  <div id='content'>
    <h1>Commencer</h1>


    <style jsx>{`
      #content{
        max-width: 42em;
        margin: auto;
        padding: 0 3em 1em 3em;
      }

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
    <Start />
    <Footer />
    <Piwik page='start'/>
  </div>
)
