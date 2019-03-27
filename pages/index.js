import asset from 'next/asset'
import GlobalStyle from '../components/GlobalStyle'
import Piwik from "../components/Piwik"
import Partners from "../components/Partners"
import Footer from "../components/Footer"
import Hero from "../components/Hero"

const Home = () => (
  <div className="content">
    <section className="what">
      <h2>Tout ce que vous pouvez faire avec OpenFisca !</h2>
      
    </section>
    <section className="what">
     <h2>Comment ça marche ?</h2>

    </section>
    <section className="what">
     <h2>Une communauté open source internationale</h2>
    </section>

    <style jsx>{`


      @media (max-width: 720px) {

        .cta {
          padding-left: 1em;
          padding-right: 1em;
        }
        .flex-container{
          flex-direction: column;
          align-items: center;
        }
        .flex-item{
          width: 100%;
          min-width: 100%;
          margin: 1em auto 1em auto
        }
      }
    `}</style>
  </div>
  )

export default () => (
  <div>
    <GlobalStyle/>
    <Hero/>
    <Home />
    <Partners />
    <Footer />
    <Piwik page="HomePage"/>
  </div>
)
