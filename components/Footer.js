import asset from 'next/asset'
import Link from 'next/link'
import GlobalStyle from './GlobalStyle'

const Footer = () => (
	<div> 
		<footer>
		<a className="CTA">Commencer <img src={asset('/images/icon_rocket.svg')} /></a>

			<ul>
				<li><Link href="/status" passHref><a>Etat des services</a></Link></li>
				<li><Link href="/cookies" passHref><a>Informatique & libertés</a></Link></li>
				<li><Link href="/legal" passHref><a>Mentions légales</a></Link></li>
				<li><Link href="/contribute" passHref><a>Contribuer</a></Link></li>

				<li><a href="mailto:contact@openfisca.org?Subject=openfisca.org">Contact</a></li>
			</ul>
		</footer>

		<style jsx>{`
			footer {
				background: #6d69fb; /* Old browsers */
				background: -moz-linear-gradient(-45deg, #6d69fb 0%, #00baaf 45%); /* FF3.6-15 */
				background: -webkit-linear-gradient(-45deg, #6d69fb 0%,#00baaf 45%); /* Chrome10-25,Safari5.1-6 */
				background: linear-gradient(135deg, #6d69fb 0%,#00baaf 45%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
				filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#6d69fb', endColorstr='#00baaf',GradientType=1 ); /* IE6-9 fallback on horizontal gradient */			
				padding: 0 1em;
				height: 320px;
			}
			
			ul {
				font-size: 1em;
				list-style-type: none;
				margin: 0.4em;
				min-height: 3em;
				display: flex;
				flex-direction: row;
				justify-content: space-around;
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
				ul {
					padding: 0;
					flex-direction: column;
					align-items: center;
				}
			}
		`}</style>
	</div>
	)

export default Footer

