import asset from "next/asset"
import GlobalStyle from "../components/GlobalStyle"
import Link from 'next/link'
import Header from "../components/Header"
import Footer from "../components/Footer"
import Piwik from "../components/Piwik"
import CardResources from "../components/CardResources";

const Resources = () => (
  <div className='content'>
    <ul className="flex__container">
      <li className="flex__item"><CardResources img="../static/icons/france.svg" title="Système : France" desc="Le système contient la majorité des impôts et des prestations sociales. 1567 paramètres - 456 variables." linkexplorer="https://fr.openfisca.org/legislation"  linkgit="https://github.com/openfisca/openfisca-france"/></li>
      <li className="flex__item"><CardResources img="../static/icons/nz.svg" title="Système : Aotearoa Nouvelle-Zélande" desc="Accédez aux systèmes déjà modélisés ou créez votre propre système socio-fiscal." linkexplorer="https://www.rules.nz"  linkgit="https://github.com/ServiceInnovationLab/openfisca-aotearoa"/></li>
      
      <li className="flex__item"><CardResources img="../static/icons/nz.svg" title="Système : Barcelone" desc="Accédez aux systèmes déjà modélisés ou créez votre propre système socio-fiscal." linkexplorer="https://www.rules.nz"  linkgit="https://github.com/ServiceInnovationLab/openfisca-aotearoa"/></li>

      <li className="flex__item"><CardResources img="../static/icons/nz.svg" title="Système : Tunisie" desc="Accédez aux systèmes déjà modélisés ou créez votre propre système socio-fiscal." linkgit="https://github.com/openfisca/openfisca-tunisia"/></li>

      <li className="flex__item"><CardResources img="../static/icons/nz.svg" title="Système : Italie" desc="Accédez aux systèmes déjà modélisés ou créez votre propre système socio-fiscal." linkgit="https://github.com/openfisca/openfisca-italy"/></li>

      <li className="flex__item"><CardResources img="../static/icons/nz.svg" title="Système : Sénégal" desc="Accédez aux systèmes déjà modélisés ou créez votre propre système socio-fiscal." linkgit="https://github.com/openfisca/openfisca-senegal"/></li>

      <li className="flex__item"><CardResources img="../static/icons/nz.svg" title="Système : Nouvelle-Galle du sud" desc="Accédez aux systèmes déjà modélisés ou créez votre propre système socio-fiscal." linkgit="https://github.com/openfisca/openfisca-italy"/></li>

      <li className="flex__item"><CardResources img="../static/icons/nz.svg" title="Outil : Traceur" desc="Accédez aux systèmes déjà modélisés ou créez votre propre système socio-fiscal." linkgit="https://github.com/openfisca/openfisca-italy"/></li>

      <li className="flex__item"><CardResources img="../static/icons/nz.svg" title="Outil : Swagger" desc="Accédez aux systèmes déjà modélisés ou créez votre propre système socio-fiscal." linkgit="https://github.com/openfisca/openfisca-italy"/></li>
    </ul>
  
    <style jsx>{`

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
    <Header page="resources" title='Ressources' />
    <Resources />
    <Footer />
    <Piwik page='resources'/>
  </div>
)
