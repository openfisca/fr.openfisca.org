import GlobalStyle from '../../components/GlobalStyle'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Piwik from '../../components/Piwik'
import ProjectDesc from '../../components/ProjectDesc'
import ProjectAttribute from '../../components/ProjectAttribute'

const Taxipp = () => (
    <div className="content">
        <a className="outline" href="/showcase/" >Retour</a>

        <ProjectDesc img="/static/projects/taxipp.png"
            baseline="TaxIPP est un modèle de microsimulation"
            desc1="Le modèle TaxIPP réalise l'appariement de données administratives et de données d'enquête pour réaliser un échantillon représentatif des ménages français. Il est injecté dans  par openfisca pour simuler l'impact de réformes du système socio-fiscal sur les ménages."
            desc2="TAXIPP outille l’IPP (l’Institut des Politiques Publiques) dans sa mission d’animation du débat public depuis 2012. "
            desc3="Il est notamment utilisé pour évaluer les effets des projets de loi de finances."
            url="https://www.ipp.eu/outils/taxipp-outils/" textlink="Visiter TaxIPP"/>

        <section>
            <h2>Caractéristiques du projet</h2>
            <ProjectAttribute
                imgapi="/static/icons/circle/python.svg" api="utilise l'API Python"
                imgcountry="/static/icons/circle/france.svg" country="interroge le système France"
                imgsimulation="/static/icons/circle/simupopulation.svg" simulation="produit une simulation sur une population"
                imgperimetre="/static/icons/circle/perimetre.svg" perimetre="utilise l'intégralité du système socio-fiscal"
                imgpoweredby="/static/icons/circle/economistes.svg" poweredby="porté par des économistes"
            />
        </section>

        <style jsx>{`

.outline {
  color: #656565;
  padding: 0 1% 0 1%;
  border-color: #656565;
  border-radius: 25px;
  max-width: 4em;

}

`}</style>

    </div>
)
export default () => (
    <div>
        <GlobalStyle/>
        <Header page="tafipp" title="TaxIPP"/>
        <Taxipp />
        <Footer />
        <Piwik page="taxipp"/>
    </div>
)
