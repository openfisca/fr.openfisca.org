import asset from 'next/asset'
import GlobalStyle from "../components/GlobalStyle"

import Header from "../components/Header"
import Footer from "../components/Footer"
import Hero from "../components/Hero"
import Piwik from "../components/Piwik"

const Status = () => (
  <div className='content'>
    <h1>Etat des services</h1>
    <div id='iframe-container'>
      <iframe style={{backgroundColor: '#9a9a9a24', width:'100%', height: '63em', border: 'none', padding: '1em 2em 0 2em'}} src="https://status.openfisca.org"></iframe>
    </div>

    <style jsx>{`
      #content{
        max-width: 84em;
        margin: auto;
        padding: 0 3em 1em 3em;
        font-size: 120%;
        font-family: "Helvetica Neue",-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
      }

      #iframe-container {
        display: flex;
        flex-direction: row;
        justify-content: center;
      }

      h1 {
         text-align: center;
         margin-top: 2em;
         margin-bottom: 2em;
       }

      h2 {
        margin-top: 2em;
        margin-bottom: 1em;
        font-weight: normal;
        color: #1e3242;
      }

      p {
        font-weight: 300;
      }

      a {
        text-decoration: underline;
        color: #2b6a8d;
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
    <Status />
    <Footer />
    <Piwik page='status'/>
  </div>
)
