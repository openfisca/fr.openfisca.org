import asset from 'next/asset'
import GlobalStyle from "../components/GlobalStyle"
import Header from "../components/Header"
import Footer from "../components/Footer"
import Piwik from "../components/Piwik"

const Projects = () => (
  <div className='content'>

    <section>
     
      <ul className="flex-container">
        <li className="card-project">
          <div className="card-background">
            <img src="../static/images/projects/mesaides.png" />
          </div>
             <p className="Medium">Mes Aides</p>
             <p className="Small">L'API REST et ses endpoints permet de consulter les données OpenFisca ou d'effectuer des calculs sur la legislation Française.</p>
        </li>
        <li className="card-project">
          <div className="card-background">
            <img src="../static/images/projects/mesaides.png" />
          </div>
             <p className="Medium">LexImpact</p>
             <p className="Small">L'API REST et ses endpoints permet de consulter les données OpenFisca ou d'effectuer des calculs sur la legislation Française.</p>
        </li>
        <li className="card-project">
          <div className="card-background">
            <img src="../static/images/projects/mesaides.png" />
          </div>
             <p className="Medium">TaxIPP</p>
             <p className="Small">L'API REST et ses endpoints permet de consulter les données OpenFisca ou d'effectuer des calculs sur la legislation Française.</p>
        </li>

      </ul>

    </section>

    <style jsx>{`

      #iframe-container {
        display: flex;
        flex-direction: row;
        justify-content: center;
      }

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
				background: -moz-linear-gradient(163.99deg, #00BAAF -21.24%, #6D69FB 76.56%, #6D69FB 83.4%); /* FF3.6-15 */
				background: -webkit-linear-gradient(163.99deg, #00BAAF -21.24%, #6D69FB 76.56%, #6D69FB 83.4%); /* Chrome10-25,Safari5.1-6 */
				background: linear-gradient(163.99deg, #00BAAF -21.24%, #6D69FB 76.56%, #6D69FB 83.4%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
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
          padding: 0 1em 1em 1em;
        }
      }
    `}</style>
  </div>
  )

export default () => (
  <div>
    <GlobalStyle/>
    <Header title='Projets-test' />
    <Projects />
    <Footer />
    <Piwik page='projects'/>
  </div>
)
