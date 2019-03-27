import asset from 'next/asset'
import GlobalStyle from '../components/GlobalStyle'
import Header from "../components/Header"
import Footer from "../components/Footer"
import Piwik from "../components/Piwik"

const Fastoche = () => (
    <div className='content'>
    </div>
)
export default () => (
    <div>
      <GlobalStyle/>
      <Header />
      <Fastoche />
      <Footer />
      <Piwik page='fastoche'/>
    </div>
  )
  