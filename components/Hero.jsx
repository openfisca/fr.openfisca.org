import asset from 'next/asset'
import Link from 'next/link'
import {i18n, switchLanguage} from '../pages/i18n';
import { withNamespaces } from 'react-i18next';
import i18next from 'i18next';


const changeLanguage = (lng) => {
  i18n.changeLanguage(lng);
}

const Hero = withNamespaces()(
  ({t}) => (
  <div className="hero" >
    <nav>
      <Link href="/"><img className="logo" src={asset('/images/logo_mini.svg') } alt={t('title')}/></Link>
      <ul>
        <li><Link href="/showcase/" passHref><a className="menu">{t('projects')}</a></Link></li>
        <li><Link href="/resources" passHref><a className="menu">{t('ressources')}</a></Link></li>
        <li><Link href="/community" passHref><a className="menu">{t('community')}</a></Link></li>
        <li><a className="btn outline" href="https://github.com/openfisca/openfisca-france">{t('github')} <img src={asset('/icons/github.svg')} alt="GitHub"/></a></li>
        <li><Link href="https://openfisca.org/doc/" passHref><a className="btn CTA">{t('start')} <img src={asset('/icons/Rocket.svg')}  alt=""/></a></Link></li>
        <li>
          <button onClick={(e) => changeLanguage(switchLanguage())}>{switchLanguage()}</button>
        </li>
      </ul>
    </nav>

    <div className="content">
      <img src="static/images/logo_main.svg" alt="OpenFisca"/>
      <p className="baseline" >{t('pitch1')}<br/>{t('pitch2')}</p>
      <Link href="https://openfisca.org/doc/" passHref><a className="btn CTA">{t('start')} <img src={asset('/icons/Rocket.svg')} alt="" /></a></Link>
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
        vertical-align: bottom;
      }

      ul {
				list-style-type: none;
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
        vertical-align: bottom;
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
)

export default Hero