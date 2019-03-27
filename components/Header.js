import asset from 'next/asset'
import Link from 'next/link'
import GlobalStyle from './GlobalStyle'

const Header = (props) => (
    <header>
		  <div>
        		<Link href="/index">
        			<img id="logo-small" src={asset('/images/logo_mini.svg')} />
				</Link>
			
			<ul>
				<li><Link href="/projects" passHref><a className="menu">Projets</a></Link></li>
				<li><Link href="/resources" passHref><a className="menu">Ressources</a></Link></li>
				<li><a className="menu" href="https://openfisca.org/doc/">Documentation</a></li>
				<li><Link href="/community" passHref><a className="menu">Communauté</a></Link></li>
				<li><a className="menu" href='https://github.com/openfisca/openfisca-france'>Code source <img src={asset('/images/GitHub-Mark-Light-64px.png')} alt=""/></a></li>
				<li><Link href="/start" passHref><a className="CTA">Commencer <img src={asset('/images/icons/Rocket.svg')} /></a></Link></li>
			</ul>
			
			<h1>{props.title}</h1>

			</div>



			<meta name="viewport" content="width=device-width, initial-scale=1"/>

		<style jsx>{`
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


			@media (max-width: 720px) {
				header{
					flex-direction: column;
				}
				ul {
                    padding: 0;
                    flex-direction: column;
                    align-items: center;
				}
			}
		`}</style>
	</header>
	)

export default Header
