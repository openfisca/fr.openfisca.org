import asset from 'next/asset'
import Header from './Header'
import Globalstyle from './GlobalStyle'
import Link from 'next/link'


const Hero = () => (
  <div className="hero" >
    <nav>
    <Link href="/"><img className="logo" src={asset('/images/logo_mini.svg') } alt="Accueil"/></Link>
      <ul>
        <li><Link href="/showcase/" passHref><a className="menu">Projets</a></Link></li>
        <li><Link href="/resources" passHref><a className="menu">Ressources</a></Link></li>
        <li><Link href="/community" passHref><a className="menu">Communauté</a></Link></li>
        <li><a className="btn outline" href='https://github.com/openfisca/openfisca-france'>Code source <img src={asset('/icons/github.svg')} alt="GitHub"/></a></li>
        <li><Link href="https://openfisca.org/doc/" passHref><a className="btn CTA">Commencer <img src={asset('/icons/Rocket.svg')}  alt=""/></a></Link></li>
      </ul>
    </nav>

      <div className='content flex-baseline'>
          <img src='static/images/logo_main.svg' alt="OpenFisca"/>
          <p className="baseline" >La plateforme Open Source qui modélise <br /> le code législatif en code informatique.</p>
          <Link href="https://openfisca.org/doc/" passHref><a className="btn CTA">Commencer <img src={asset('/icons/Rocket.svg') } alt="" /></a></Link>
      </div>

    <style jsx>{`

			.hero {
        background-image: url(static/items/wave.svg);
        background-size: cover;
        background-repeat: no-repeat;
        padding-bottom: 10%;
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
          align-items: center;
          margin-top: 10%;
        }

			.logo {
				max-width: 4em;
				margin: 1em;
				cursor:pointer;
      }

      img{
        max-width: 30em;
      }

      .baseline{
        color: #ffffff;
        font-size: 1.5em;
        line-height: 1.75em;
        font-family: "asapmedium";
        font-style: normal;
      }

      ul {
				list-style-type: none;
				margin:0em;
				min-height: 3em;
				display: flex;
				align-items : first baseline;
				float: right;
			}

			li {
				display: inline;
				list-style: none;
			}

			li img {
				max-width: 1.5em;
        vertical-align: middle;
			}

			h3 {
        color: #ffffff;
        text-align: center;
      }

      .CTA {
        max-width: 10em;
      }

      @media (max-width:880px) {

        .logo {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        ul {
          display: flex;
          padding: 0.2rem;
          flex-direction: column;
          align-items: center;
        }
			}
    `}</style>
  </div>
  )

export default Hero
