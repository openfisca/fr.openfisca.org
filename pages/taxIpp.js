import asset from 'next/asset'
import GlobalStyle from '../components/GlobalStyle'
import Header from "../components/Header"
import Partners from "../components/Partners"
import Footer from "../components/Footer"
import Piwik from "../components/Piwik"

const taxipp = () => (
    <div className='content'>
    </div>
)
export default () => (
    <div>
      <GlobalStyle/>
      <Header />
      <taxIpp />
      <Partners/>
      <Footer />
      <Piwik page='taxipp'/>
    </div>
  )
  