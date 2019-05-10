import asset from "next/asset"
import Link from "next/link"

import {i18n, switchLanguage, changeLanguage} from "../i18n";
import { withNamespaces } from "react-i18next"
import i18next from "i18next"


const currentPageTitle = t('title')

const Header = withNamespaces()(
	({t}, props) => (
    <header>
        <nav>
            <Link href="/">
                <img id="logo-small" src={asset("/images/logo_mini.svg")} alt={t('title')} />
            </Link>
            <ul>
                <li><Link href="/showcase/" passHref><a className="menu">{t('projects')}</a></Link></li>
                <li><Link href="/resources" passHref><a className="menu">{t('ressources')}</a></Link></li>
                <li><Link href="/community" passHref><a className="menu">{t('community')}</a></Link></li>
                <li>
					<a className="btn outline" href="https://github.com/openfisca/openfisca-france">
						{t('github')} <img src={asset('/icons/github.svg')} alt="github.com"/>
					</a>
				</li>
                <li>
					<Link href="https://openfisca.org/doc/" passHref>
						<a className="btn CTA">{t('start')} <img src={asset('/icons/rocket.svg')} /></a>
					</Link>
				</li>
                <li><a className="switch" onClick={(e) => changeLanguage(switchLanguage())}>{switchLanguage()}</a></li>
            </ul>
            <h1>{props.title}</h1>
        </nav>

        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <style jsx>
            {`
				#logo-small {
					max-width: 4em;
					margin: 1em;
					cursor:pointer;
				}

				header {
					background: #6d69fb; /* Old browsers */
					background: -moz-linear-gradient(163.99deg, #00BAAF -21.24%, #6D69FB 76.56%, #6D69FB 83.4%); /* FF3.6-15 */
					background: -webkit-linear-gradient(163.99deg, #00BAAF -21.24%, #6D69FB 76.56%, #6D69FB 83.4%); /* Chrome10-25,Safari5.1-6 */
					background: linear-gradient(163.99deg, #00BAAF -21.24%, #6D69FB 76.56%, #6D69FB 83.4%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
					filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#6d69fb', endColorstr='#00baaf',GradientType=1 ); /* IE6-9 fallback on horizontal gradient */
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

				.switch{
					border-radius: 25px;
					background: white;
					color: black;
					font-size: 0.8em;
					width: 3em;
				}

				@media (max-width: 720px) {
					header{
						flex-direction: column;
						justify-content: stretch;
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
    </header>
  )
}

export default withNamespaces()(Header)
