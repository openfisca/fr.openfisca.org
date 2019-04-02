import asset from 'next/asset'
import GlobalStyle from "../components/GlobalStyle"
import Header from "../components/Header"
import Partners from "../components/Partners"
import Footer from "../components/Footer"
import Piwik from "../components/Piwik"

const Communaute = () => (
  <div className='content'>

    <div className="flex__container">
     <h2>Qui sommes-nous ?</h2>
      <div classname="flex-item2">
        OpenFisca est une communauté Open Source soutenue par Beta Gouv & Etalab, deux équipes d’innovation au sein du gouvernement français.
        En 2019, OpenFisca est utilisée par 10 pays dans le monde (France, Côte d’Ivoire, Espagne, Italie, Mali, Nouvelle Zélande, Sénégal & Tunisie).
        Plus de 70 personnes ont rejoint cette aventure. Ils contribuent, s’entraident et participent chaque jour à améliorer le code d’OpenFisca.
        <a className="btn medium">Rejoindre le Slack</a>
      </div>
      <div classname="flex-item2">
        <img src={asset('/images/community.png')} />
      </div>
    </div>


    <div className='flex__container'>
     <h2>Echanger la communauté</h2>
      <div classname="flex-item1">
      OpenFisca est une communauté Open Source soutenue par Beta Gouv & Etalab, deux équipes d’innovation au sein du gouvernement français.
      En 2019, OpenFisca est utilisée par 10 pays dans le monde (France, Côte d’Ivoire, Espagne, Italie, Mali, Nouvelle Zélande, Sénégal & Tunisie).
      Plus de 70 personnes ont rejoint cette aventure. Ils contribuent, s’entraident et participent chaque jour à améliorer le code d’OpenFisca.
      <a className="btn medium">Voir le GitHub</a>
      </div>
    </div>

    <div className='contact'>
    <h2>Ecrivez-nous</h2>
    <p>
    </p>
    </div>
    <div className='news'>
    <h2>Restez informés</h2>
      <p>
    Vous pouvez vous abonner à notre newsletter mensuelle pour recevoir les actualités et les changements majeurs opérés sur OpenFisca.
      </p>
      <a className="btn medium">Recevoir la Newsletter</a>

    </div>

    <style jsx>{`

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
