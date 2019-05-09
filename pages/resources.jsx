import Head from 'next/head'
import GlobalStyle from '../components/GlobalStyle'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Piwik from '../components/Piwik'
import CardResources from '../components/CardResources'
import CardResourcesmin from '../components/CardResourcesmin'


const Resources = () => (
    <div className="content">
        <ul className="flex__container">
            <li className="flex__item">
                <CardResources img="/static/icons/france.svg" title="Système : France" 
                    desc="Le système contient la majorité des impôts et des prestations sociales. 45 contributeurs au projet" 
                    linkexplorer="https://fr.openfisca.org/legislation"  linkgit="https://github.com/openfisca/openfisca-france"/>
            </li>

            <li className="flex__item">
                <CardResources img="/static/icons/nz.svg" title="Système : Aotearoa Nouvelle-Zélande" 
                    desc="15 contributeurs au projet" 
                    linkexplorer="https://www.rules.nz"  linkgit="https://github.com/ServiceInnovationLab/openfisca-aotearoa"/>
            </li>

            <li className="flex__item">
                <CardResourcesmin img="/static/icons/barcelona.svg" title="Système : Barcelone" 
                    desc="4 contributeurs au projet" 
                    linkgit="https://github.com/lesmevesajudes/openfisca-barcelona"/>
            </li>
        </ul>

        <ul className="flex__container">
            <li className="flex__item">
                <CardResourcesmin img="/static/icons/tunisia.svg" title="Système : Tunisie" 
                    desc="8 contributeurs au projet" linkgit="https://github.com/openfisca/openfisca-tunisia"/>
            </li>

            <li className="flex__item">
                <CardResourcesmin img="/static/icons/italy.svg" title="Système : Italie" 
                    desc="3 contributeurs au projet" linkgit="https://github.com/openfisca/openfisca-italy"/>
            </li>

            <li className="flex__item">
                <CardResourcesmin img="/static/icons/senegal.svg" title="Système : Sénégal" 
                    desc="13 contributeurs au projet" linkgit="https://github.com/openfisca/openfisca-senegal"/>
            </li>
        </ul>

        <ul className="flex__container">
            <li className="flex__item">
                <CardResourcesmin img="/static/icons/galle.svg" title="Système : Nouvelle-Galle du sud" 
                    desc="4 contributeurs au projet" linkgit="https://github.com/openfisca/openfisca-italy"/>
            </li>
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
        <Head>
          <title>Ressources</title>
          <meta name="viewport" key="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <GlobalStyle/>
        <Header page="resources" title="Ressources" />
        <Resources />
        <Footer />
        <Piwik page="resources"/>
    </div>
)
