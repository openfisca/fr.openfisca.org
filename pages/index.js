import asset from 'next/asset'
import GlobalStyle from '../components/GlobalStyle'
import Piwik from "../components/Piwik"
import Partners from "../components/Partners"
import Footer from "../components/Footer"
import Hero from "../components/Hero"

const Home = () => (
  <div className="content">
    <div id="outils">
      <h2>Tout ce que vous pouvez faire avec OpenFisca</h2>
      <ul className="flex-container">
        <li className="flex-item">
          <h3>API Web</h3>
          <p>L'API REST et ses endpoints permet de consulter les données OpenFisca ou d'effectuer des calculs sur la legislation Française.</p>
          <a className="cta" href="https://fr.openfisca.org/legislation/swagger">Interroger</a>
        </li>
        <li className="flex-item">
          <h3>Legislation Explorer</h3>
          <p>Ce site propose toutes les données et calculs disponibles dans OpenFisca avec un moteur de recherche.</p>
          <a className="cta" href="https://fr.openfisca.org/legislation">Explorer</a>
        </li>
        <li className="flex-item">
          <h3>Documentation</h3>
          <p>Entièrement en anglais, elle explique comment modéliser un ajout à la législation ou une réforme. </p>
          <a className="cta" href="https://openfisca.org/doc">Découvrir</a>
        </li>
        <li className="flex-item">
          <h3>Code source</h3>
          <p>L'ensemble du code d'OpenFisca-France peut être lu, forké et cloné depuis la plateforme GitHub.</p>
          <a className="cta" href="https://github.com/openfisca/openfisca-france">Contribuer</a>
        </li>
      </ul>
    </div>

    <div id='commencer'>
      <h2>Débuter avec OpenFisca</h2>
      <p>En ligne ou en local, différentes méthodes pour interagir avec OpenFisca :</p>
      <ul className="flex-container">
        <li className="flex-item">
          Une API Web publique
          <p>Sans installation</p>
          <p>Interrogez OpenFisca-France sur des situations d'individus ou de familles. pour commencer, consultez <a href="https://fr.openfisca.org/legislation/swagger">la documentation interactive</a>.</p>
        </li>
        <li className="flex-item">
          Des Notebooks Jupyter
          <p>Sans installation</p>
          <p>
            Lancez des simulations sur le modèle actuel ou modélisez vos propres réformes. Nous proposons des <a href="https://github.com/openfisca/tutorial/tree/master/notebooks">tutoriels</a> tels que ce <a href="https://mybinder.org/v2/gh/openfisca/tutorial/master?filepath=notebooks/getting_started.ipynb">notebook</a> utilisable dans votre navigateur via <a href="https://mybinder.org/">binder</a>.
          </p>
        </li>
        <li className="flex-item">
          Une API Python
          <p>Customisez et servez votre instance d'Openfisca-France. Après avoir <a href="https://github.com/openfisca/openfisca-france#installation">installé OpenFisca-France</a>, nous proposons <a href="https://github.com/openfisca/tutorial">un ensemble de tutoriels</a> en python.</p>
        </li>
      </ul>


    </div>

    <section>
      <h2>Réutilisations</h2>
      <p>Des services variés font appel à OpenFisca France :</p>
      <ul className="flex-container">
        <li className="flex-item">
          <h3>Simulateur Mes Aides</h3>
          <img alt='Mes Aides' src={asset("/images/mes-aides.png")}/>
          <a href="https://mes-aides.gouv.fr">Simuler vos aides</a>
        </li>
        <li className="flex-item">
          <h3>Portail National des Droits Sociaux</h3>
          <img alt='MFRB' src={asset('/images/logo-pnds.png')}/>
          <a href="https://www.mesdroitssociaux.gouv.fr">Visiter le portail</a>
        </li>
        <li className="flex-item">
          <h3>Publication du MFRB</h3>
          <img alt='MFRB' src={asset("/images/logo_mfrb.png")}/>
          <a href="https://www.revenudebase.info/2017/04/07/apprehender-cout-dun-revenu-de-base">Lire la publication</a>
        </li>
      </ul>
    </section>

    <div id="introduction">
      <h2>Qui sommes nous ?</h2>
      <p>OpenFisca est un moteur ouvert de microsimulation du système socio-fiscal.</p>
      <p>À travers OpenFisca France, une communauté de développeurs, économistes, enseignants, instituts d'études et de recherche
       enrichissent et améliorent les modèles de simulation du système socio-fiscal français.</p>
      <p>Un de ses objectifs est d’aider les citoyens à mieux comprendre les réformes qui impactent leur vie quotidienne.</p>
      <p>OpenFisca et OpenFisca France sont des projets libres.
        Cela signifie que vous pouvez utiliser les logiciels associés, les installer, étudier leur code source, les modifier, les redistribuer de la façon que vous souhaitez.
        Une seule condition est imposée : les travaux dérivés d’OpenFisca doivent eux aussi être libres.</p>
      <p>Cette contrainte permet à la communauté de grandir à travers des améliorations constantes du moteur de calcul, des mises à jour des systèmes représentés et des nouveaux usages.</p>
    </div>

    <style jsx>{`
      #content{
        padding: 0 3em 0 3em;
        font-size: 120%;
        font-family: "Helvetica Neue",-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
      }

      ul {
        margin: auto;
        padding: 1em;
        list-style-type: none;
      }

      p {
        font-weight: 300;
      }

      p + p {
        margin-top: 0;
      }

      a {
        text-decoration: underline;
        color: #2b6a8d;
      }

      img {
        width: 10em;
      }

      .flex-item {
        background-color: #9a9a9a24;
        display: flex;
        flex-flow: column;
        justify-content: space-between;
        align-items: center;
        border: 1px solid transparent;
        margin: 1em;
        padding: 0.5em;
        max-width: 20%;
        min-width: 20em;
      }

      .flex-container {
        display: flex;
        justify-content: center;
        margin: auto;
        padding: 1em;
        display: flex;
        flex-wrap: wrap;
      }

      .cta {
        color: #ffffff;
        background-color: #2b6a8d;
        border-color: #2b6a8d;
        border: 1px solid transparent;
        border-radius: .2em;
        display: inline-block;
        padding: .3em 1em;
        margin: 0;
        font-weight: 400;
        line-height: 1.5;
        text-align: center;
        white-space: nowrap;
        vertical-align: middle;
        text-decoration: none;
        transition: filter 0.2s;
      }

      .logo {
        background-color:transparent
      }

      @media (max-width: 720px) {
        #content {
          padding: 0 1em 0 1em;
        }
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
