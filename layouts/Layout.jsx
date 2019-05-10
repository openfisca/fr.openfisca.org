import Head from "next/head"
import Header from "components/Header"
import Footer from "components/Footer"
import Piwik from "components/Piwik"
import "styles/theme.scss"

function Layout({ page, title, children }) {
    return (
        <div>
            <Head>
                <title>{title}</title>
            </Head>
            <Header title={title} />
            <div className="content">{children}</div>
            <Footer />
            <Piwik page={page} />
        </div>
    )
}

export default Layout
