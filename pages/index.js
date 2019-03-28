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
        <li>
          <ul>
            <img src='../static/images/icons/economistes.svg' />
            <h3>Economistes & chercheurs</h3>
            <p>Utilisez des systèmes socio-fiscaux déjà modélisés et codez vos réformes.
Faites des simulations individuelles et sur des populations en important vos propres données.</p>
          </ul>
          <ul>
            <img src='../static/images/icons/admin.svg' />
            <h3>Administrations publiques</h3>
            <p>Mutualisez vos efforts de mise à jour grâce au modèle contributif d’OpenFisca. 
Echangez sur une même base avec d’autres administrations publiques.</p>
          </ul>
          <ul>
           <img src='../static/images/icons/dev.svg' />
            <h3>Développeurs & équipes d'innovation</h3>
            <p>Interrogez l’API sans installation ou hébergez votre propre instance.
Créez des produits qui interrogent l’ensemble des règles socio-fiscales avec Python3.</p>
          </ul>
        </li>
        <a className="btn-medium" href="showcase">Voir des projets</a>
    </section>
    <section className="how">
      <h2>Comment ça marche ?</h2>
      <p>OpenFisca est un projet Open Source libre et gratuit, modulable et réutilisable. Il permet de modéliser le code législatif en code informatique, pour améliorer la transparence et l’accès à la loi.</p>

      <li>
        <ul>Utilisez un système socio-fiscal existant</ul>
        <ul>Codez votre propre système</ul>
        <ul>Améliorez le code d’un système existant</ul>
        <a className="btn-medium">Qu'est-ce qu'un système socio-fiscal ?</a>
      </li>

      <li>
        <ul>Importez des données</ul>
        <ul>Calculez une situation ou écrivez et simulez une réforme</ul>
        <ul>Codez des extensions</ul>
        <a className="btn-medium" href="http://openfisca.org/doc">Lire la documentation</a>
      </li>

    </section>
    <section className="who">
       <h2>Une communauté open source internationale</h2>
      <p>OpenFisca a des contributeurs dans 8 pays !
Rejoignez une communauté d’économistes, de chercheurs, de développeurs et d’experts des droits sociaux qui s’engagent dans la transformation de la loi en code informatique !</p>
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
