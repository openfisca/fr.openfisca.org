import asset from 'next/asset'
import GlobalStyle from '../components/GlobalStyle'
import Piwik from "../components/Piwik"
import Partners from "../components/Partners"
import Footer from "../components/Footer"
import Hero from "../components/Hero"

const Home = () => (
  <div className="content">
   <section>
    <h2>Tout ce que vous pouvez faire avec OpenFisca</h2>
     
      <ul className="flex-container">
        <li className="card-project">
          <div className="card-background">
            <img src="../static/images/projects/mesaides.png" />
          </div>
             <p className="Medium">API Web</p>
             <p className="Small">L'API REST et ses endpoints permet de consulter les données OpenFisca ou d'effectuer des calculs sur la legislation Française.</p>
        </li>

        <li className="card-project">
          <p className="Medium">Legislation Explorer</p>
          <p className="Small">Ce site propose toutes les données et calculs disponibles dans OpenFisca avec un moteur de recherche.</p>
          <a className="cta" href="https://fr.openfisca.org/legislation">Explorer</a>
        </li>
      </ul>

    </section>

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


    <style jsx>{`
      .card-project {
        background-color: #ffffff;
        display: flex;
        flex-flow: column;
        justify-content: space-between;
        align-items: center;
        margin: 1em;
        max-width: 20%;
        min-width: 20em;
        box-shadow: 0px 0px 6px #BCBCC6;
      }

      .card-background {
        width: 100%;
				background: #6d69fb; /* Old browsers */
				background: -moz-linear-gradient(-45deg, #6d69fb 0%, #00baaf 45%); /* FF3.6-15 */
				background: -webkit-linear-gradient(-45deg, #6d69fb 0%,#00baaf 45%); /* Chrome10-25,Safari5.1-6 */
				background: linear-gradient(135deg, #6d69fb 0%,#00baaf 45%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
				filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#6d69fb', endColorstr='#00baaf',GradientType=1 ); /* IE6-9 fallback on horizontal gradient */			
			}

      .flex-container {
        display: flex;
        justify-content: left;
        display: flex;
        flex-wrap: wrap;
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
