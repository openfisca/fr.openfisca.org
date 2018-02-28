import asset from 'next/asset'
import Link from 'next/link'


const Footer = () => (
	<div>
		<footer>
			<ul>
			<li><a href="mailto:contact@openfisca.org?Subject=openfisca.org">Contact</a></li>
			<li><a href="http://www.openfisca.org/doc">Documentation</a></li>
			<li><a href="http://openfisca.org">openfisca.org</a></li>
			<li><a id="github" href="https://github.com/openfisca/fr.openfisca.org"><img src={asset('/images/GitHub-Mark-Light-64px.png')} alt=""/>Contribuer à cette page</a></li>
			<li><Link href="/cookies" passHref><a>Statistiques d'usages</a></Link></li>
			</ul>
		</footer>

		<style jsx>{`
			footer {
				border-top-style: solid;
				border-width: 2px;
				border-color: #666;
				background: #1d3242;
				margin-top: 3em;
				padding: 3em;
				font-family: "Helvetica Neue",-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
			}

			ul {
				margin: auto;
				padding: 1em;
				display: flex;
				justify-content: center;
				align-items: center;
				flex-flow: row wrap;
			}

			ul li {
				display: inline;
			}

			ul li+li {
				margin-left: 4em;
			}

			img {
				max-width: 1em;
				margin-right: 5px;
			}
			a {
				text-decoration: none;
				color: #fff;
				display: flex;
				justify-content: space-between;
				align-items: center;
			}

			@media (min-width: 960px) {
				.row {
					flex-direction: row;
				}
			}

			@media (max-width: 720px) {
				footer {
					padding-left: 0;
					padding-right: 0;
				}

				ul {
					flex-flow: column;
				}
			}
		`}</style>
	</div>
	)

export default Footer

