import asset from 'next/asset'
import GlobalStyle from "../components/GlobalStyle"
import Header from "../components/Header"
import Partners from "../components/Partners"
import Footer from "../components/Footer"
import Piwik from "../components/Piwik"

const Communaute = () => (
  <div className='content'>
    <section className='qui'>
     <h2>Qui sommes-nous ?</h2>
      <p>
     OpenFisca est une communauté Open Source soutenue par Beta Gouv & Etalab, deux équipes d’innovation au sein du gouvernement français. 
     En 2019, OpenFisca est utilisée par 10 pays dans le monde (France, Côte d’Ivoire, Espagne, Italie, Mali, Nouvelle Zélande, Sénégal & Tunisie). 
     Plus de 70 personnes ont rejoint cette aventure. Ils contribuent, s’entraident et participent chaque jour à améliorer le code d’OpenFisca.    
      </p>
      <a className="btn medium">Rejoindre le Slack</a>

    </section>
    <section className='echanger'>
     <h2>Echanger avec la sommes-nous ?</h2>
      <p>
     OpenFisca est une communauté Open Source soutenue par Beta Gouv & Etalab, deux équipes d’innovation au sein du gouvernement français. 
     En 2019, OpenFisca est utilisée par 10 pays dans le monde (France, Côte d’Ivoire, Espagne, Italie, Mali, Nouvelle Zélande, Sénégal & Tunisie). 
     Plus de 70 personnes ont rejoint cette aventure. Ils contribuent, s’entraident et participent chaque jour à améliorer le code d’OpenFisca.    
      </p>
      <a className="btn medium">Voir le GitHub</a>
    </section>
    <section className='contact'>
    <h2>Ecrivez-nous</h2>
    <p>
    </p>
    </section>
    <section className='news'>
    <h2>Restez informés</h2>
      <p>
    Vous pouvez vous abonner à notre newsletter mensuelle pour recevoir les actualités et les changements majeurs opérés sur OpenFisca.    
      </p>
      <a className="btn medium">Recevoir la Newsletter</a>

    </section>

    <style jsx>{`
      #iframe-container {
        display: flex;
        flex-direction: row;
        justify-content: center;
      }
    `}</style>
  </div>
  )

export default () => (
  <div>
    <GlobalStyle/>
    <Header page="community" title='Communauté' />
    <Communaute />
    <Partners/>
    <Footer />
    <Piwik page='community'/>
  </div>
)
