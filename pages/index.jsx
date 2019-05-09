import Head from 'next/head'
import GlobalStyle from '../components/GlobalStyle'
import Piwik from '../components/Piwik'
import Partners from '../components/Partners'
import Footer from '../components/Footer'
import Hero from '../components/Hero'

const Home = () => (
  <div className="content">
    <section>
      <h2>Tout ce que vous pouvez faire avec OpenFisca !</h2>
      <div>
        <ul className="flex__container">
          <li className="card">
            <h3><img src="/static/icons/economistes.svg" alt=""/>Économistes & chercheurs</h3>
            Utilisez des systèmes socio-fiscaux déjà modélisés et codez vos réformes.
            Faites des simulations individuelles et sur des populations en important vos propres données.
          </li>
          <li className="card">
            <h3 className=""><img className="" src="/static/icons/admin.svg" alt=""/>Administrations publiques</h3>
            Mutualisez vos efforts de mise à jour grâce au modèle contributif d’OpenFisca.
            Échangez sur une même base avec d’autres administrations publiques.
          </li>
          <li className="card">
            <h3><img src="/static/icons/dev.svg" alt=""/>Développeurs & équipes d&#39;innovation</h3>
            Interrogez l&#39;API sans installation ou hébergez votre propre instance.
            Créez des produits qui interrogent l&#39;ensemble des règles socio-fiscales avec Python3.
          </li>
        </ul>
        <a className="btn medium" href="/showcase/">Voir des projets</a>
      </div>
    </section>
    <section>
      <h2>Comment ça marche ?</h2>
      <p>
        OpenFisca est un projet Open Source libre et gratuit, modulable et réutilisable. 
        Il permet de modéliser le code législatif en code informatique, pour améliorer la transparence et l’accès à la loi.
      </p>
      <div className="flex__container">
        <div className="flex__item50">
          <img src="/static/images/openlaw.png" alt=""/>
        </div>
        <div className="flex__item50">
          <ul>
            <li>Utilisez un système socio-fiscal existant</li>
            <li>Codez votre propre système</li>
            <li>Améliorez le code d’un système existant</li>
            <a className="btn medium" href="resources">Voir les systèmes socio-fiscaux</a>
          </ul>
        </div>
      </div>
    </section>
    <section className="flex__container">
      <div className="flex__item50">
        <div className="flex__column">
          <ul>
            <li>Importez des données</li>
            <li>Calculez une situation ou écrivez et simulez une réforme</li>
            <li>Codez des extensions</li>
            <a className="btn medium" href="https://fr.openfisca.org/legislation/swagger">Tester l&#39;API web</a>
          </ul>
        </div>
      </div>
      <div className="flex__item50" >
        <img src="/static/images/api.png" alt="" />
      </div>
    </section>

    <section>
      <h2>Une communauté open source internationale</h2>
      <div className="flex__container"> 
        <div className="flex__item50">
          <p>
            OpenFisca a des contributeurs partout dans le monde !
            Rejoignez une communauté d&#39;économistes, de chercheurs, de développeurs et d’experts des droits sociaux qui s&#39;engagent dans la transformation de la loi en code informatique !
          </p>
        </div>
        <div className="flex__item50">
          <img src="/static/images/community.png" alt=""/>
        </div>
      </div>
    </section>

    <style jsx>{`

      section {
        margin-bottom: 6em;
      }

      li {
        list-style: none;
      }

      .card img {
        width: 3em;
      }

      .card h3 {
        display: flex;
      }

      .flex__item50 li {
        list-style-image : url(/static/items/bullet.svg);
        padding: 1rem;
      }

      .flex__column {
        display: flex;
        flex-direction: column;
        padding-left: 1rem;
      }

      @media(max-width: 50rem) { //small screen (50rem = 600px with font 12)
        .flex__container {
          flex-flow: row wrap;
        }
      } 

      @media(min-width: 75rem) { //wide screen (75rem = 900px with font 12)
        .flex__item50 {
          width: 50%;
          padding-left: 1rem;
          display: flex;
        }
      }

    `}</style>
  </div>
)

export default () => (
  <div>
    <Head>
      <title>Accueil</title>
      <meta name="viewport" key="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <GlobalStyle/>
    <Hero/>
    <Home />
    <Partners />
    <Footer />
    <Piwik page="HomePage"/>
  </div>
)
