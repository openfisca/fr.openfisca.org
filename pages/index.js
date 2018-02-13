import Header from "../components/Header"
import Footer from "../components/Footer"

const Home = () => (
  <div id='content'>
    <div id='trio-outils'>
      <h2>Les outils à votre disposition</h2>
      <ul>
        <li><a href='https://legislation.openfisca.fr/swagger'>API web</a></li>
        <li><a href='https://legislation.openfisca.fr'>Legislation Explorer</a></li>
        <li><a href='https://openfisca.org/doc'>Documentation</a></li>
        <li><a href='https://github.com/openfisca/openfisca-france'>Code source</a></li>
      </ul>
      
    </div>

    <div id='commencer'>
      <h2>Débuter avec OpenFisca</h2>
      <p>Chase dog then run away purr. Hide at bottom of staircase to trip human sit in window and stare oooh, a bird, yum. Spot something, big eyes, big eyes, crouch, shake butt, prepare to pounce shove bum in owner's face like camera lens but please stop looking at your phone and pet me make muffins, yet chase laser ignore the human until she needs to get up, then climb on her lap and sprawl. Gate keepers of hell hate dog, so man running from cops stops to pet cats, goes to jail. Lick the curtain just to be annoying curl up and sleep on the freshly laundered towels.</p>
      <a>Découvrez nos tutoriels</a>
    </div>

    <div id='trio'>
      <h2>Réutilisations</h2>
      <ul>
        <li><a>Mes Aides</a></li>
        <li><a>PNDS</a></li>
        <li><a>IDK</a></li>
      </ul>
    </div>

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


    <div id='trio_plus_partenaires'>
      <h2>Nos partenaires</h2>
      <ul>
        <li><img alt='IPP' src='/static/images/logo-ipp.png'/></li>
        <li><img alt='Etalab' src='/static/images/logo-etalab.png' /></li>
        <li><img alt='MSA' src='/static/images/logo-msa.svg' /></li>
        <li><img alt='beta.gouv.fr' src='/static/images/logo-betagouv-url.svg' /></li>
        <li><img alt='IDEP' src='/static/images/logo-idep.png' /></li>
        <li><img alt='France Stratégie' src='/static/images/logo-france-strategie.jpg' /></li>
      </ul>
    </div>

    <style jsx>{`
      img {
        width: 10em;
        margin: 1em;
      }
      #content{
          margin: 6em;
          font-family: "Arial";
          font-size: 1em;
        }
        #cta {
          margin-top: 2em;
          margin-bottom: 3em;
        }
        #introduction{
          margin-bottom: 3em
        }
        h2 {
          margin-top: 3em;
          margin-bottom: 2em;
        }

        a {
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
        }

        ul {
          margin: 0;
          padding: 0;
          list-style-type: none;
        }
        li {
          display: inline;
          list-style: none;
          margin: 7em;
        }
      `}</style>
  </div>
  )

export default () => (
  <div>
    <Header />
    <Home />
    <Footer />
  </div>
)
