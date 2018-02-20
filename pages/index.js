import asset from 'next/asset'

import Header from "../components/Header"
import Footer from "../components/Footer"
import Hero from "../components/Hero"

const Home = () => (
  <div id='content'>
    <div id='outils'>
      <h2>Les outils à votre disposition</h2>
      <ul>
        <li className='column'>
          <a className='cta' href='https://legislation.openfisca.fr/swagger'>API web</a>
          <p>et ses endpoints permet de consulter les données OpenFisca ou d'effectuer des calculs</p>
        </li>
        <li className='column'>
          <a className='cta' href='https://legislation.openfisca.fr'>Legislation Explorer</a>
          <p>propose une documentation des données et calculs disponibles dans OpenFisca avec un moteur de recherche</p>
        </li>
        <li className='column'>
          <a className='cta' href='https://openfisca.org/doc'>Documentation</a>
          <p>en anglais, elle explique comment modéliser un ajout à la législation ou une réforme</p>
        </li>
        <li className='column'>
          <a className='cta' href='https://github.com/openfisca/openfisca-france'>Code source</a>
          <p>sur la plateforme GitHub</p>
        </li>
      </ul>
      
    </div>

    <div id='commencer'>
      <h2>Débuter avec OpenFisca</h2>
      <p>OpenFisca peut être utilisé par deux moyens :</p>
      <ul>
        <li>
          Une API Web
          <p>Pour utiliser l'API Web, nous avons mis en place <a className='reference' href='https://legislation.openfisca.fr/swagger'>une documentation interactive</a>.</p>
        </li>
        <li>
          Une API Python
          <p>Pour apprendre à utiliser l'API Python, nous proposons <a className='reference' href='https://github.com/openfisca/tutorial'>un ensemble de tutoriels</a> sur un dépôt dédié.</p>
        </li>
      </ul>
      
      
    </div>

    <section>
      <h2>Réutilisations</h2>
      <ul>
        <li><a className='cta' href='https://beta.gouv.fr/startup/mes-aides'>Simulateur Mes Aides</a></li>
        <li><a className='cta' href='https://www.mesdroitssociaux.gouv.fr'>Portail National des Droits Sociaux</a></li>
        <li><a className='cta' href='http://www.revenudebase.info/2017/04/07/apprehender-cout-dun-revenu-de-base'>Publication du MFRB</a></li>
      </ul>
    </section>

    <div id='introduction'>
      <h2>Qui sommes nous ?</h2>
      <p>OpenFisca est un moteur ouvert de microsimulation du système socio-fiscal.</p>
      <p>A travers OpenFisca France, une communauté de développeurs, économistes, enseignants, instituts d'études et de recherche
       enrichissent et améliorent les modèles de simulation du système socio-fiscal français.</p>
      <p>Un de ses objectifs est d’aider les citoyens à mieux comprendre les réformes qui impactent leur vie quotidienne.</p>
      <p>OpenFisca et OpenFisca France sont des projets libres.
        Cela signifie que vous pouvez utiliser les logiciels associés, les installer, étudier leur code source, les modifier, les redistribuer de la façon que vous souhaitez.</p>
      <p>Une seule condition est imposée : les travaux dérivés d’OpenFisca doivent eux aussi être libres.</p>
      <p>Cette contrainte permet à la communauté de grandir à travers des améliorations constantes du moteur de calcul, des mises à jour des systèmes représentés et des nouveaux usages.</p>
    </div>


    <div>
      <h2>Nos partenaires</h2>
      <ul>
        <li><img alt='IPP' src={asset('/images/logo-ipp.png')} /></li>
        <li><img alt='Etalab' src={asset('/images/logo-etalab.png')} /></li>
        <li><img alt='MSA' src={asset('/images/logo-msa.svg')} /></li>
        <li><img alt='beta.gouv.fr' src={asset('/images/logo-betagouv-url.svg')} /></li>
        <li><img alt='IDEP' src={asset('/images/logo-idep.png')} /></li>
        <li><img alt='France Stratégie' src={asset('/images/logo-france-strategie.jpg')} /></li>
      </ul>
    </div>

    <style jsx>{`
      
      #content{
        margin: 0;
        width: 100%;
        font-size: 140%;
        font-family: "Helvetica Neue",-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
      }

      h2 {
        margin-top: 2em;
        margin-bottom: 1em;
        font-weight: normal;
        color: #1e3242;
      }

      ul {
        margin: auto;
        padding: 1em;
        
        list-style-type: none;

        display: flex;
        flex-flow: row wrap;
      	justify-content: center;
      }

      ul li {
        margin: 1em;
      }

      p {
        font-weight: 300;
      }

      .column {
        width: 20%;
      }

      .cta {
        color: #ffffff;
        background-color: #2b6a8d;
        border-color: #2b6a8d;
        border: 1px solid transparent;
        border-radius: 4px;
        display: inline-block;
        padding: 6px 12px;
        margin-bottom: 0;
        font-size: 1em;
        font-weight: 400;
        line-height: 1.5;
        text-align: center;
        white-space: nowrap;
        vertical-align: middle;
        text-decoration: none;
      }

      .reference {
        text-decoration: underline;
        color: #2b6a8d;
      }

      img {
        width: 10em;
        margin: O;
      }

      @media (min-width: 960px) {
        #content{
          width:80%
          margin: 0 auto;
        }
      `}</style>
  </div>
  )

export default () => (
  <div>
    <Header />
    <Hero/>
    <Home />
    <Footer />
  </div>
)
