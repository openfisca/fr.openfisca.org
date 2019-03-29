import asset from 'next/asset'
import GlobalStyle from '../components/GlobalStyle'
import Piwik from "../components/Piwik"
import Partners from "../components/Partners"
import Footer from "../components/Footer"
import Hero from "../components/Hero"

const Home = () => (
  <div className="content">
    <section className="who">
      <h2>Tout ce que vous pouvez faire avec OpenFisca !</h2>
        <ul className="flex-container">
          <li className="flex-item3">
            <h3>            <img src='../static/images/icons/economistes.svg' />
Economistes & chercheurs</h3>
            Utilisez des systèmes socio-fiscaux déjà modélisés et codez vos réformes.
            Faites des simulations individuelles et sur des populations en important vos propres données.
          </li>
          <li className="flex-item3">
            <h3>            <img src='../static/images/icons/admin.svg' />
Administrations publiques</h3>
            Mutualisez vos efforts de mise à jour grâce au modèle contributif d’OpenFisca. 
            Echangez sur une même base avec d’autres administrations publiques.
          </li>
          <li className="flex-item3">
            <h3><img src='../static/images/icons/dev.svg' />Développeurs & équipes d'innovation</h3>
            Interrogez l’API sans installation ou hébergez votre propre instance.
            Créez des produits qui interrogent l’ensemble des règles socio-fiscales avec Python3.
          </li>
        </ul>
        <a className="btn medium" href="showcase">Voir des projets</a>
    </section>


    <section className="how">
      <h2>Comment ça marche ?</h2>
      <div className="flex-container">
      <p>OpenFisca est un projet Open Source libre et gratuit, modulable et réutilisable. Il permet de modéliser le code législatif en code informatique, pour améliorer la transparence et l’accès à la loi.</p>

      <div className="flex-item2">
       <img src="../static/images/openlaw.png" />
     </div>

      <div className="flex-item2">

        <ul>
          <li>Utilisez un système socio-fiscal existant</li>
          <li>Codez votre propre système</li>
          <li>Améliorez le code d’un système existant</li>
          <a className="btn medium">Qu'est-ce qu'un système socio-fiscal ?</a>
        </ul>
      </div>
     </div>
 
     <section className="flex-container">
        <div className="flex-item2">
          <ul>
            <li>Importez des données</li>
            <li>Calculez une situation ou écrivez et simulez une réforme</li>
            <li>Codez des extensions</li>
          </ul>
          <a className="btn medium" href="http://openfisca.org/doc">Lire la documentation</a>
        </div>
        <div className="flex-item2">
          <img src="../static/images/api.png" />
        </div>
      </section>
    </section>

    <section className="flex-container">
      <div className="flex-item2">
       <h2>Une communauté open source internationale</h2>
        <p>OpenFisca a des contributeurs dans 8 pays !
Rejoignez une communauté d’économistes, de chercheurs, de développeurs et d’experts des droits sociaux qui s’engagent dans la transformation de la loi en code informatique !</p>
      </div>
      <div className="flex-item2">
        <img src="../static/images/community.png" />
      </div>
    </section>

    <style jsx>{`
      li{
        list-style: none;
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
