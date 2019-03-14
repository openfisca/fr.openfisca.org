const Hero = () => (
  <div className='hero'>
    <div className='content'>
      <div id='logo-large'>
        <img src='static/images/logo_main.svg' />
      </div>
      <div id='pitch'>
      <h1>La plateforme Open Source qui transforme le code législatif en code informatique.</h1>
      </div>
			<div>
			<a className="CTA" href='/start'>Commencer</a>
      </div>
    </div>
    <style jsx>{`
			
			.hero {
				background-image: linear-gradient(to top, #00baaf, #6d69fb 93%, #6d69fb);
			}

			h1 {
				text-align: center;
				color: #ffffff;
				font-size: 22px;
				font-weight: 600;
			}

			.content {
				margin: 0px 3em;
			}

			#logo-large-img {
				margin-bottom: 2em;
				width: 450px;
			}

			#pitch {
				margin:1em;
			}
			
      @media (max-width:1100px) {
        .content {
          margin: 0 auto;
          flex-direction: column;
          align-items: center;
        }
        #logo-large {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-bottom: 1em;
        }
        #logo-large img {
          width: 50%;
        }
        #pitch {
          margin:1em;
				}
			}
    `}</style>
  </div>
  )

export default Hero
