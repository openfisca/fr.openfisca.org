import Link from 'next/link'

const Header = () => (
    <header>
			<ul>
				<li><a href="#trio-outils">Outils</a></li>
				<li><a><img src="/static/images/GitHub-Mark-Light-64px.png" alt=""/>Code source</a></li>
				<li><a href="http://openfisca.org/doc/">Documentation</a></li>
			</ul>

		<style jsx>{`
			header {
				background: #1d3242;
				padding: 0 1em;
				color: #fff;
				display: flex;
				flex-direction: column;
				align-items: center;
				font-family: Arial
			}

			ul {
				display: flex;
				min-height: 3em;
				list-style-type: none;
				margin: 0;
				align-self: flex-end;
				font-size: 1em;
				align-items: center;
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

			a {
				color: #ffffff;
				border: 1px solid #ffffff;
				border-radius: 4px;
				display: inline-block;
				padding: 6px 12px;
				font-weight: 600;
				line-height: 1.5;
				text-align: center;
				white-space: nowrap;
				vertical-align: middle;
				text-decoration: none;
				
			}


			@media (max-width: 1000px) {

				ul {
					align-self: center;
					display:contents;
				}
		
			

		`}</style>
	</header>
	)

export default Header