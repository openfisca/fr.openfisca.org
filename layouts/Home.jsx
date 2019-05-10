import Head from "next/head"
import Footer from "components/Footer"
import Piwik from "components/Piwik"
import "styles/theme.scss"


function Home({ page, title, children }) {
    return (
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
}


export default Home
