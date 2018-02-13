import Link from 'next/link'

const linkStyle = {
	marginRight:15
}

const Header = () => (
    <header>
		<div class="intro">
			<a id="home" href="index.html">
				<img id="logo-small" src="https://fr.openfisca.org/hotlinks/logo-openfisca.svg" alt="OpenFisca" />
			</a>
			<h1>Transformer le code législatif en code logiciel</h1>
		</div>
		<ul>
			<li><a href="#trio">Produits</a></li>
			<li><a href="countries">Pays disponibles</a></li>
			<li><a href="http://openfisca.org/doc/">Documentation</a></li>
  		</ul>
	</header>
	)

export default Header