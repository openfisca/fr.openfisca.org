import Header from "../components/Header"
import Footer from "../components/Footer"
import Hero from "../components/Hero"

const Home = () => (
  <div id='content'>
    <div className='trio' id='outils'>
      <h2>Les outils à votre disposition</h2>
      <div className='flex-container'>
        <div className='flex-item'>
          <a className='cta' href='https://legislation.openfisca.fr/swagger'>API web</a>
          <p>Les endpoints permettent de consulter les données OpenFisca ou d'effectuer des calculs</p>
        </div>
        <div className='flex-item'>
          <a className='cta' href='https://legislation.openfisca.fr'>Legislation Explorer</a>
          <p>propose une documentation des données et calculs disponibles dans OpenFisca avec un moteur de recherche</p>
        </div>
        <div className='flex-item'>
          <a className='cta' href='https://openfisca.org/doc'>Documentation</a>
          <p>en anglais, la documentation explique comment modéliser un ajout à la législation ou une réforme</p>
        </div>
        <div className='flex-item'>
          <a className='cta' href='https://github.com/openfisca/openfisca-france'>Code source</a>
          <p>sur la plateforme Github</p>
        </div>
      </div>
      
    </div>

    <div id='commencer'>
      <h2>Débuter avec OpenFisca</h2>
      <p>OpenFisca peut être utilisé par deux moyens :</p>
      <ul>
        <li>L'API web</li>
        <li>L'API Python</li>
      </ul>
      <p>Pour utiliser l'API web, nous avons mis en place <a className='reference' href='https://legislation.openfisca.fr/swagger'>une documentation interactive</a>.</p>
      <p>Pour apprendre à utiliser l'API Python, nous proposons <a className='reference' href='https://github.com/openfisca/tutorial'>un ensemble de tutoriels</a> sur un répository dédié.</p>
    </div>

    <section className='trio'>
      <h2>Réutilisations</h2>
      <div className='flex-container'>
        <div className='cta flex-item'><a>Mes Aides</a></div>
        <div className='cta flex-item'><a>PNDS</a></div>
        <div className='cta flex-item'><a>IDK</a></div>
      </div>
    </section>

    <div id='introduction'>
      <h2>Qui sommes nous ?</h2>
      <p>OpenFisca est un moteur ouvert de microsimulation du système socio-fiscal.</p>
      <p>A travers OpenFisca France, une communauté de développeurs, économistes, enseignants, instituts d'études et de recherche
       enrichissent et améliorent les modèles de simulation du système socio-fiscal français.</p>
      <p>Un de ses objectifs, pédagogique, est de permettre d’aider les citoyens à mieux comprendre les réformes qui impactent leur quotidienne.</p>
      <p>OpenFisca et OpenFisca France sont des projets libres.</p>
      <p>Cela signifie que vous pouvez utiliser les logiciels associés, les installer, étudier leur code source, les modifier, les redistribuer de la façon que vous souhaitez.</p>
      <p>Une seule condition est imposée : les travaux dérivés d’OpenFisca doivent eux aussi être libres.</p>
      <p>Cette contrainte permet à la communauté de grandir à travers des améliorations constantes du moteur de calcul, des mises à jour des systèmes représentés et des nouveaux usages.</p>
    </div>


    <div className='trio'>
      <h2>Nos partenaires</h2>
      <div className='flex-container'>
        <div className='flex-item'><img alt='IPP' src='/static/images/logo-ipp.png'/></div>
        <div className='flex-item'><img alt='Etalab' src='/static/images/logo-etalab.png' /></div>
        <div className='flex-item'><img alt='MSA' src='/static/images/logo-msa.svg' /></div>
        <div className='flex-item'><img alt='beta.gouv.fr' src='/static/images/logo-betagouv-url.svg' /></div>
        <div className='flex-item'><img alt='IDEP' src='/static/images/logo-idep.png' /></div>
        <div className='flex-item'><img alt='France Stratégie' src='/static/images/logo-france-strategie.jpg' /></div>
      </div>
    </div>

    <style jsx>{`
      
      #content{
        margin: 2em auto;
        padding: 1em;
        display: flex;
        flex-direction: column;
        margin: 0;
        font-size: 140%;
        font-family: "Helvetica Neue",-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
      }

      #introduction{
        margin-bottom: 3em
      }
      .flex-container > div + div {
        margin-left: 2em;
      }
      .flex-container{
        border: 1px solid transparent;
        display: flex;
        justify-content: center;
      }

      h2 {
        margin-top: 2em;
        margin-bottom: 1em;
        font-weight: normal;
      }
      p {
        font-weight: 300;
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

      @media (max-width: 720px) {
        #content{
          width:80%
          margin: 0 auto;
        }
        .flex-container {
          align-self: center;
          display:contents;
        }
        .flex-container > div + div {
          margin: 0.5em 0
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
