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
    `}</style>
  </div>
  )

export default () => (
  <div>
    <GlobalStyle/>
    <Header page="status" title='Etat des services' />
    <Status />
    <Footer />
    <Piwik page='status'/>
  </div>
)
