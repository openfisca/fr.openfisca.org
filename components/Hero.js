import asset from 'next/asset'
import Header from './Header'
import Globalstyle from './GlobalStyle'
import Link from 'next/link'


const Hero = () => (
  <div className='hero'>
    <div>
  <Link href="/index">
    <img id="logo-small" src={asset('/images/logo_mini.svg')} />
</Link>

  <ul>
    <li><Link href="/showcase" passHref><a className="menu">Projets</a></Link></li>
    <li><Link href="/resources" passHref><a className="menu">Ressources</a></Link></li>
    <li><a className="menu" href="https://openfisca.org/doc/">Documentation</a></li>
    <li><Link href="/community" passHref><a className="menu">Communauté</a></Link></li>
    <li><a className="menu" href='https://github.com/openfisca/openfisca-france'>Code source <img src={asset('/images/GitHub-Mark-Light-64px.png')} alt=""/></a></li>
    <li><Link href="/start" passHref><a className="btn CTA">Commencer <img src={asset('/images/icons/Rocket.svg')} /></a></Link></li>
  </ul>
</div> 

  <div className='content'>
      <div className='flex-baseline'>
        <img src='static/images/logo_main.svg' />
        <p className="baseline" >La plateforme Open Source qui modélise <br /> le code législatif en code informatique.</p>
        <Link href="/start" passHref><a className="btn CTA">Commencer <img src={asset('/images/icons/Rocket.svg')} /></a></Link>
      </div>
    </div>

    <style jsx>{`
			
			.hero {
        background: #6d69fb; /* Old browsers */
				background: -moz-linear-gradient(163.99deg, #00BAAF -21.24%, #6D69FB 76.56%, #6D69FB 83.4%); /* FF3.6-15 */
				background: -webkit-linear-gradient(163.99deg, #00BAAF -21.24%, #6D69FB 76.56%, #6D69FB 83.4%); /* Chrome10-25,Safari5.1-6 */
				background: linear-gradient(163.99deg, #00BAAF -21.24%, #6D69FB 76.56%, #6D69FB 83.4%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
        filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#6d69fb', endColorstr='#00baaf',GradientType=1 ); /* IE6-9 fallback on horizontal gradient */			
        }
        
        .flex-baseline{
          display: -webkit-box;
          display: -moz-box;
          display: -ms-flexbox;
          display: -webkit-flex;
          display: flex;
  
          -webkit-flex-direction: column;
          -ms-flex-direction: column;
          flex-direction: column;
          
          justify-content: center;
        }

			#logo-small {
				max-width: 4em;
				margin: 1em;
				cursor:pointer;
      }

      .baseline{
        text-align: center;
        font-color: #ffffff;
      }

      .logo-large {
        max-width: 400px;
        display: flex;
      }

      ul {
				list-style-type: none;
				margin: 0em;
				min-height: 3em;
				display: flex;
				align-items : flex-end;
				float: right;
			}

			li + li {
				margin-left: 0.5em;
			}

			li {
				display: inline;
				list-style: none;
				margin: 1em;
			}

			li img {
				max-width: 1em;
				margin-right: 5px;
			}

			h3 {
        color: #ffffff;
        text-align: center;
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
          width: 400px;
          display: flex;
        }
			}
    `}</style>
  </div>
  )

export default Hero