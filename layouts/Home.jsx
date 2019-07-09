import Head from "next/head"
import Footer from "components/Footer"
import Piwik from "components/Piwik"
import "styles/theme.scss"


const Home = ({ page, title, children }) => (
    <div>
        <Head>
            <title>{title}</title>
            <meta name="viewport" key="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        {children}
        <Footer />
        <Piwik page={page} />
    </div>
)


export default Home
