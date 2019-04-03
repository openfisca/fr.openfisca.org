import asset from 'next/asset'
import GlobalStyle from "../components/GlobalStyle"
import Header from "../components/Header"
import Footer from "../components/Footer"
import Piwik from "../components/Piwik"
import CardProject from "../components/CardProject"
import Link from 'next/link'


const Showcase = () => (
  <div className='content'>
      <ul className="flex__container">
        <li className="flex__item"><a href="showcase/mesAides" ><CardProject img="../static/projects/mesaides.png" title="MesAides" desc="MesAides renseignent les citoyens français sur leur éligibilité à 29 prestations sociales. " attribute1="API Web" attribute2="API Web" attribute3="France" /></a></li>

        <li className="flex__item"><a href="showcase/lexImpact" ><CardProject img="../static/projects/leximpact.png" title="LexImpact" desc="Ce projet en cours vise à équiper les administrateurs de l’assemblée nationale avec un outil de simulation d’impact de réformes." attribute1="API Python" attribute2="API Python" attribute3="France"  /></a></li>

        <li className="flex__item"><a href="showcase/taxIpp" ><CardProject img="../static/projects/taxipp.png" title="Tax IPP" desc="Ce modèle apparie données administratives et données d'enquête pour les injectées dans openfisca afin d'analyser les effets du système socio-fiscal sur les ménages." attribute1="API Python" attribute2="API Python" attribute3="France"  /></a></li>

        <li className="flex__item"><a href="showcase/ratesRebates" ><CardProject img="../static/projects/ratesrebates.png" title="Rates Rebates" desc="Ce prototype réalisé par l’équipe d’innovation gouvernementale de Nouvelle-Zélande teste le versement automatique d’une prestation sociale." attribute1="API Python" attribute2="API Python" attribute3="Nouvelle-Zélande"  /></a></li>

        <li className="flex__item"><a href="showcase/fastoche" ><CardProject img="../static/projects/fastoche.png" title="Fastoch€" desc="Une application pour éviter les fins de mois difficiles. Suivez votre budget sans effort en connectant votre compte courant. "  attribute1="API Web" attribute2="API Python" attribute3="France"  /></a></li>
      </ul>

    <style jsx>{`

li {
  list-style: none;
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
    <Header page='showcase' title='Projets' />
    <Showcase />
    <Footer />
    <Piwik page='showcase'/>
  </div>
)
