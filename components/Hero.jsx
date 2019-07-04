import asset from "next/asset"
import Link from "next/link"

import {i18n, switchLanguage, changeLanguage} from "../i18n"
import { withNamespaces } from "react-i18next"
import i18next from "i18next"


const Hero = (
    ({t}) => (
        <div className="hero" >
            <nav>
                <Link href="/">
                    <img className="logo" src={asset('/images/logo_mini.svg') } alt={t('title')}/>
                </Link>
                <ul>
                    <li>
                        <Link href="/showcase/" passhref>
                            <a className="menu">{t('projects')}</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/resources" passhref>
                            <a className="menu">{t('ressources')}</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/community" passhref>
                              <a className="menu">{t('community')}</a>
                        </Link>
                    </li>
                    <li>
                        <a className="btn outline" href="https://github.com/openfisca/openfisca-france">
                            {t('github')} <img src={asset('/icons/github.svg')} alt="GitHub"/>
                        </a>
                    </li>
                    <li>
                        <Link href="https://openfisca.org/doc/" passhref>
                            <a className="btn cta">{t('start')} <img src={asset('/icons/rocket.svg')}  alt=""/></a>
                        </Link>
                    </li>
                    <li>
                        <a className="switch" onClick={(e) => changeLanguage(switchLanguage())}>
                            {switchLanguage()}
                        </a>
                    </li>
                </ul>
            </nav>

            <div className="content">
                <img src="static/images/logo_main.svg" alt="OpenFisca"/>
                <p className="baseline" >{t('pitch1')}<br/>{t('pitch2')}</p>
                <Link href="https://openfisca.org/doc/" passhref>
                    <a className="btn cta">
                        {t('start')} <img src={asset('/icons/rocket.svg')} alt="" />
                    </a>
                </Link>
            </div>


            <style jsx>
                {`
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

                    .switch {
                    	border-radius: 25px;
                    	background: white;
                    	color: black;
                    	font-size: 0.8em;
                    	width: 3em;
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
                    }

	            	h3 {
                        color: #ffffff;
                        text-align: center;
                    }

                    .cta {
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
                `}
            </style>
        </div>
    )
)


export default withNamespaces()(Hero)
