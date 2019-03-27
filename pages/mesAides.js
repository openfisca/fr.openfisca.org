import asset from 'next/asset'
import GlobalStyle from '../components/GlobalStyle'
import Header from "../components/Header"
import Footer from "../components/Footer"
import Piwik from "../components/Piwik"

const mesaides = () => (
    <div className='content'>
    
    </div>
)
export default () => (
    <div>
      <GlobalStyle/>
      <Header page="mesaides" title='Mes Aides' />
      <mesAides />
      <Footer />
      <Piwik page='mesaides'/>
    </div>
  )
  