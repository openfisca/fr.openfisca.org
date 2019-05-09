import asset from 'next/asset'
import Link from 'next/link'

const Hero = () => (
  <div className="hero" >
    <nav>
      <Link href="/"><img className="logo" src={asset('/images/logo_mini.svg') } alt="Accueil"/></Link>
      <ul>
        <li><Link href="/showcase/" passHref><a className="menu">Projets</a></Link></li>
        <li><Link href="/resources" passHref><a className="menu">Ressources</a></Link></li>
        <li><Link href="/community" passHref><a className="menu">Communauté</a></Link></li>
        <li><a className="btn outline" href="https://github.com/openfisca/openfisca-france">Code source <img src={asset('/icons/github.svg')} alt="GitHub"/></a></li>
        <li><Link href="https://openfisca.org/doc/" passHref><a className="btn CTA">Commencer <img src={asset('/icons/Rocket.svg')}  alt=""/></a></Link></li>
      </ul>
    </nav>

    <div className="content">
      <img src="static/images/logo_main.svg" alt="OpenFisca"/>
      <p className="baseline" >La plateforme Open Source qui modélise <br /> le code législatif en code informatique.</p>
      <Link href="https://openfisca.org/doc/" passHref><a className="btn CTA">Commencer <img src={asset('/icons/Rocket.svg') } alt="" /></a></Link>
    </div>

    <style jsx>{`

			.hero {
        background-image: url(/static/items/wave.svg);
        background-size: cover;
        background-repeat: no-repeat;
        padding-bottom: 10%;
        }

			.logo {
				max-width: 4em;
				margin: 1em;
				cursor:pointer;
      }

      .content {
        text-align: center;
        margin-top: 10%;
      }

      .baseline {
        color: #ffffff;
        font-size: 1.5em;
        line-height: 1.75em;
        font-family: "asapmedium";
        font-style: normal;
      }

      img {
        max-width: 30em;
        vertical-align: middle;
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
        max-height: 1.5em;
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
