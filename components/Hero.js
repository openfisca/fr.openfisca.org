const Hero = () => (
  <div className='hero'>
    <div className='content'>
      <div id='logo-large'>
        <img src='https://fr.openfisca.org/hotlinks/logo-openfisca.svg' />
      </div>
      <div id='pitch'>
      <h1>OpenFisca modélise le système socio-fiscal français en code informatique.</h1>
        <p>Son moteur de microsimulation aide à comprendre les lois, analyser leurs changements et simuler des situations.</p>
        <p>Entièrement libre et gratuit, modulable et réutilisable, OpenFisca permet de transformer la legislation en logiciel.</p>
        <a href='#commencer'>DECOUVREZ COMMENT</a>
      </div>
    </div>
    <style jsx>{`
			.hero {
				font-family: "Helvetica Neue",-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
				background: #1d3242;
				color: #fff;
				padding: 2.5em 0 4.5em;
			}

			.h1 {
				text-align: center;
			}

			.content{
				margin: 0px 6em;
				display: flex;
			}

			#logo-large {
				float: left;
				margin-right: 6em;
				margin-bottom: 2em;
			}

			#logo-large img{
				width: 20em;
				margin-top: 3em
			}

			#pitch {
				margin:1em;
				font-size: 120%;
			}

			a {
				margin-top: 2em;
				margin-bottom: 3em;
				color: #ffffff;
				background-color: #2b6a8d;
				border-color: #2b6a8d;
				border: 1px solid transparent;
				border-radius: 4px;
				display: inline-block;
				padding: 6px 12px;
				margin-bottom: 0;
				font-size: 1em;
				font-weight: 400;
				line-height: 1.5;
				text-align: center;
				text-decoration: none;
				white-space: nowrap;
				vertical-align: middle;
			}

      @media (max-width:1100px) {
        .content{
          width:80%
          margin: 0 auto;
          flex-direction: column;
          align-items: center;
        }
        #logo-large {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-right: 0em;
          margin-bottom: 1em;
        }
        #logo-large img{
          width: 70%;
        }
        #pitch {
          margin:1em;
          font-size: 1em;
        }
    `}</style>
  </div>
  )

export default Hero
