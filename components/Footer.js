import asset from 'next/asset'
import Link from 'next/link'
import GlobalStyle from './GlobalStyle'

const Footer = () => (
	<div> 
		<footer>
		<div className="baseline">
		<h3>Transformer le code législatif en code logiciel</h3>
		<a className="CTA">Commencer <img src="../static/images/icons/Rocket.svg"></img></a>
		</div>
			<ul>
				<li><Link href="/status" passHref><a>Etat des services</a></Link></li>
				<li><Link href="/cookies" passHref><a>Informatique & libertés</a></Link></li>
				<li><Link href="/legal" passHref><a>Mentions légales</a></Link></li>
				<li><Link href="/contribute" passHref><a>Contribuer</a></Link></li>

			</ul>
			<ul className="social">
				<li><a href="mailto:contact@openfisca.org?Subject=openfisca.org" passHref><img src="../static/images/icons/Email.svg"></img></a></li>
				<li><a href="https://github.com/openfisca" passHref><img src="../static/images/icons/Github.svg"></img></a></li>
				<li><a href="/status" passHref><img src="../static/images/icons/Slack.svg"></img></a></li>
				<li><a href="https://twitter.com/openfisca" passHref><img src="../static/images/icons/Twitter.svg"></img></a></li>

			</ul>
		</footer>

		<style jsx>{`
			footer {
				background: #6d69fb; /* Old browsers */
				background: -moz-linear-gradient(-45deg, #6d69fb 0%, #00baaf 45%); /* FF3.6-15 */
				background: -webkit-linear-gradient(-45deg, #6d69fb 0%,#00baaf 45%); /* Chrome10-25,Safari5.1-6 */
				background: linear-gradient(135deg, #6d69fb 0%,#00baaf 45%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
				filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#6d69fb', endColorstr='#00baaf',GradientType=1 ); /* IE6-9 fallback on horizontal gradient */			
				padding-top: 4em;
				height: 320px;
			}
			
			.baseline {
				text-align: center;
			}
			.CTA {
				margin: auto; 
				display: block;
				max-width: 10em;
			}

			.social {
				float: right;
			}

			h3{
				align-text: center;
				color: #ffffff;}

			ul {
				list-style-type: none;
				min-height: 3em;
				float: left;
				padding-right: 2em;
			}

			li {
				display: inline;
				list-style: none;
			}

			li img {
				max-width: 2em;
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

