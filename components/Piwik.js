import React from 'react'
import Head from 'next/head'

const PIWIK_URL = "https://stats.data.gouv.fr/"
const PIWIK_SITE_ID = 4


class Piwik extends React.Component {
  componentDidMount() {
    setTimeout(() => {
      if (window.Piwik) {
        console.log(PIWIK_URL)
        console.log(PIWIK_SITE_ID)
        const tracker = window.Piwik.getTracker(`${PIWIK_URL}/piwik.php`, PIWIK_SITE_ID)
        tracker.trackPageView(this.props.page)
       }
    }, 300)
  }

  render() {
    if (!PIWIK_URL || !PIWIK_SITE_ID) {
      return null
    }

    return (
      <Head>
        <script src={`${PIWIK_URL}/piwik.js`} defer async />
      </Head>
    )
  }
}

export default Piwik
