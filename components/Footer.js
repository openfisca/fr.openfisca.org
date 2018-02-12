import Link from 'next/link'

const linkStyle = {
	marginRight:15
}

const Footer = () => (
	<div>
		<Link href="/mentions_legales">
			<a style={linkStyle}>Mentions Légales</a>
		</Link>
		<Link href="/contact">
			<a style={linkStyle}>Contact</a>
		</Link>
	</div>
	)

export default Footer

