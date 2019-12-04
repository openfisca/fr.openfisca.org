import Head from "next/head"
import StrikeBanner from "components/StrikeBanner"
import Footer from "components/Footer"
import Piwik from "components/Piwik"
import "styles/theme.scss"

const Home = ({ page, title, children }) => (
    <div>
        <Head>
            <title>
OpenFisca:
                {title}
            </title>
            <meta name="viewport" key="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <StrikeBanner />
        {children}
        <Footer />
        <Piwik page={page} />
    </div>
)

export default Home
