import React from "react"
import Head from "next/head"

const PiwikConfig = require("../piwik.config")

class Piwik extends React.Component {
    componentDidMount() {
        setTimeout(() => {
            if (window.Piwik) {
                const tracker = window.Piwik.getTracker(
                    `${PiwikConfig.url}/piwik.php`,
                    PiwikConfig.siteId,
                )
                tracker.trackPageView(`${PiwikConfig.website} - ${this.props.page}`)
            }
        }, 300)
    }

    render() {
        if (!PiwikConfig.url || !PiwikConfig.siteId) {
            return null
        }

        return (
            <Head>
                <script src={`${PiwikConfig.url}/piwik.js`} defer async />
            </Head>
        )
    }
}

export default Piwik
