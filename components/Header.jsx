import asset from "next/asset"
import Link from "next/link"

import {i18n, switchLanguage, changeLanguage} from "../i18n";
import { withNamespaces } from "react-i18next"
import i18next from "i18next"


const Header = (
	({t, title}) => (
        <header>
            <nav>
                <Link href="/">
                    <img id="logo-small" src={asset("/images/logo_mini.svg")} alt={t('title')} />
                </Link>
                <ul>
                    <li>
                        <Link href="/showcase/" passhref="true">
                            <a className="menu">{t('projects')}</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/resources" passhref="true">
                            <a className="menu">{t('ressources')}</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/community" passhref="true">
                            <a className="menu">{t('community')}</a>
                        </Link>
                    </li>

                    <li>
	    				<a className="btn outline" href="https://github.com/openfisca/openfisca-france">
	    					{t('github')} <img src={asset('/icons/github.svg')} alt="github.com"/>
	    				</a>
	    			</li>
                    <li>
	    				<Link href="https://openfisca.org/doc/" passhref="true">
	    					<a className="btn cta">{t('start')} <img src={asset('/icons/rocket.svg')} /></a>
	    				</Link>
	    			</li>
                    <li>
                        <a className="switch btn cta" onClick={(e) => changeLanguage(switchLanguage())}>{switchLanguage()}</a>
                    </li>
                </ul>
                <h1>{title}</h1>
            </nav>


            <style jsx>
                {`
		    		#logo-small {
		    			max-width: 4em;
		    			margin: 1em;
		    			cursor:pointer;
		    		}

				    header {
				    	background: #6d69fb; /* Old browsers */
				    	background: -moz-linear-gradient(
                            163.99deg,
                            #00BAAF -21.24%,
                            #6D69FB 76.56%,
                            #6D69FB 83.4%
                        ); /* FF3.6-15 */
				    	background: -webkit-linear-gradient(
                            163.99deg,
                            #00BAAF -21.24%,
                            #6D69FB 76.56%,
                            #6D69FB 83.4%
                        ); /* Chrome10-25,Safari5.1-6 */
				    	background: linear-gradient(
                            163.99deg,
                            #00BAAF -21.24%,
                            #6D69FB 76.56%,
                            #6D69FB 83.4%
                        ); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
				    	filter: progid:DXImageTransform.Microsoft.gradient(
                            startColorstr='#6d69fb',
                            endColorstr='#00baaf',
                            GradientType=1
                        ); /* IE6-9 fallback on horizontal gradient */
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
						margin-right: 0.5em;
				    }

				    li img {
				    	max-height: 1.5em;
						vertical-align: bottom;
				    }

				    .switch {
				    	border-radius: 25px;
				    	background: white;
				    	color: black;
				    	font-size: 0.8em;
				    	width: 3em;
				    }

				    @media (max-width: 720px) {
				    	header{
							display: flex;
				    		flex-direction: column;
				    		justify-content: stretch;
				    	}

					    ul {
       				    	display: flex;
          			    	flex-direction: column;
          			    	align-items: center;
							padding: 0.2rem; // Fix menu to top
					    }

						li {
							margin-bottom: 1em;
						}
				    }
			    `}
            </style>
        </header>
    )
)


export default withNamespaces()(Header)
