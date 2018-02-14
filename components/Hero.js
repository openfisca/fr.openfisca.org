const Hero = () => (
  <div className='hero'>
    <div className='content'>
      <div id='logo-large'>
        <img src='https://fr.openfisca.org/hotlinks/logo-openfisca.svg' />
      </div>

      <div id='pitch'>
        <h1>OpenFisca modélise le système socio-fiscal Français en code informatique.</h1>
        <p>Son moteur de microsimulation aide à comprendre les lois, analyser leurs changements et simuler des situations.</p>
        <p>Entièrement libre et gratuit, modulable et réutilisable, OpenFisca transforme la legislation en logiciel.</p>
        <a id='cta'>DECOUVREZ COMMENT</a>
      </div>
    </div>
    <style jsx>{`
			.hero {
				background: #1d3242;
				color: #fff;
				text-align: center;
				padding: 2.5em 0 4.5em;
				font-family: "Arial";
			}

			.content{
				margin: 0px 6em;
			}

			#logo-large {
				float: left;
				margin-right: 6em;
				margin-bottom: 2em;
			}

			#logo-large img{
				width: 20em;
			}

			#pitch {
				margin:1em;
				font-size: 1.2em;
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
				white-space: nowrap;
				vertical-align: middle;
			}

      @media (max-width: 720px) {
        .content{
          width:80%
          margin: 0 auto;
        }
        #logo-large {
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
