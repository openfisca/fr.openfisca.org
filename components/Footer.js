import Link from 'next/link'

const linkStyle = {
	marginRight:15
}

const Footer = () => (
	<div>
		<footer>
			<ul>
			<li><a href="mailto:contact@openfisca.org?Subject=openfisca.org">Contact</a></li>
			<li><a id="github" target="_blank"><img src="/static/images/GitHub-Mark-Light-64px.png" alt=""/>Contribuer à cette page</a></li>
			<li><a href="tracking">Statistiques d'usages</a></li>
			<li><a href="legal-notice">Mentions légales</a></li>
			</ul>
		</footer>
		<noscript>
		openfisca.org needs JavaScript to work properly.
		Please follow <a href="http://www.enable-javascript.com">instructions to activate JavaScript in your browser</a>.
		</noscript>
	</div>
	)

export default Footer

