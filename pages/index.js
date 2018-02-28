import asset from 'next/asset'

import Piwik from "../components/Piwik"
import Header from "../components/Header"
import Footer from "../components/Footer"
import Hero from "../components/Hero"

const Home = () => (
  <div id='content'>
    <div id='outils'>
      <h2>Les outils à votre disposition</h2>
      <ul className='flex-container'>
        <li className='flex-item'>
          <h3>API Web</h3>
          <p>L'API REST et ses endpoints permet de consulter les données OpenFisca ou d'effectuer des calculs sur la legislation Française.</p>
          <a className='cta' href='https://legislation.openfisca.fr/swagger'>Interroger</a>
        </li>
        <li className='flex-item'>
          <h3>Legislation Explorer</h3>
          <p>Ce site propose toutes les données et calculs disponibles dans OpenFisca avec un moteur de recherche.</p>
          <a className='cta' href='https://legislation.openfisca.fr'>Explorer</a>
        </li>
        <li className='flex-item'>
          <h3>Documentation</h3>
          <p>Entièrement en anglais, elle explique comment modéliser un ajout à la législation ou une réforme. </p>
          <a className='cta' href='https://openfisca.org/doc'>Découvrir</a>
        </li>
        <li className='flex-item'>
          <h3>Code source</h3>
          <p>L'ensemble du code d'OpenFisca-France peut être lu, forké et clonné depuis la plateforme GitHub.</p>
          <a className='cta' href='https://github.com/openfisca/openfisca-france'>Le Répo GitHub</a>
        </li> 
      </ul>
      
    </div>

    <div id='commencer'>
      <h2>Débuter avec OpenFisca</h2>
      <p>Deux méthodes principales pour interagir avec OpenFisca :</p>
      <ul className='flex-container'>
        <li className='flex-item'>
          Une API Web
          <p>Pour utiliser l'API Web, nous avons mis en place <a className='reference' href='https://legislation.openfisca.fr/swagger'>une documentation interactive</a>.</p>
        </li>
        <li className='flex-item'>
          Une API Python
          <p>Pour apprendre à utiliser l'API Python, nous proposons <a className='reference' href='https://github.com/openfisca/tutorial'>un ensemble de tutoriels</a> sur un dépôt dédié.</p>
        </li>
      </ul>
      
      
    </div>

    <section>
      <h2>Réutilisations</h2>
      <p>Des services variés font appel à OpenFisca France :</p>
      <ul className='flex-container'>
        <li className='flex-item'>
          <h3>Simulateur Mes Aides</h3>
          <img alt='Mes Aides' src={asset('/images/mes-aides.png')}/>
          <a className='reference' href='https://beta.gouv.fr/startup/mes-aides'>Simuler vos aides</a>
        </li>
        <li className='flex-item'>
          <h3>Portail National des Droits Sociaux</h3>
          <img alt='MFRB' src={asset('/images/logo-pnds.png')}/>
          <a className='reference' href='https://www.mesdroitssociaux.gouv.fr'>Visiter le portail</a>
        </li>
        <li className='flex-item'>
          <h3>Publication du MFRB</h3>
          <img alt='MFRB' src={asset('/images/logo_mfrb.png')}/>
          <a className='reference' href='http://www.revenudebase.info/2017/04/07/apprehender-cout-dun-revenu-de-base'>lire la publication</a>
        </li>
      </ul>
    </section>

    <div id='introduction'>
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
    <div>
      <h2>Nos partenaires</h2>
      <ul className='flex-container'>
        <li className='flex-item logo'><img alt='IPP' src={asset('/images/logo-ipp.png')} /></li>
        <li className='flex-item logo'><img alt='Etalab' src={asset('/images/logo-etalab.png')} /></li>
        <li className='flex-item logo'><img alt='MSA' src={asset('/images/logo-msa.svg')} /></li>
        <li className='flex-item logo'><img alt='beta.gouv.fr' src={asset('/images/logo-betagouv-url.svg')} /></li>
        <li className='flex-item logo'><img alt='IDEP' src={asset('/images/logo-idep.png')} /></li>
        <li className='flex-item logo'><img alt='France Stratégie' src={asset('/images/logo-france-strategie.jpg')} /></li>
      </ul>
    </div>

    <style jsx>{` 
      #content{
        padding: 0 3em 0 3em;
        font-size: 120%;
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
      }

      p {
        font-weight: 300; 
      }

      .flex-item {
        background-color: #9a9a9a24;
        display: flex;
        flex-flow: column;
        justify-content: flex-start;
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
      .reference {
        text-decoration: underline;
        color: #2b6a8d;
      }
      .logo{
        background-color:transparent
      }
      img {
        width: 10em;
      }

      @media (max-width: 1100px) {
        .cta {
          padding-left: 1em;
          padding-right: 1em;
        }
        .flex-container{
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        .flex-item{
          width: 100%;
        }
      }
      `}</style>
  </div>
  )

export default () => (
  <div>
    <Header page='HomePage'/>
    <Hero/>
    <Home />
    <Footer />
    <Piwik page='HomePage'/>
  </div>
)
