import asset from 'next/asset'
import Link from 'next/link'


const Header = (props) => (
    <header>
		  <div>
				{(props.page == 'HomePage')? (
            		<div></div>
            		) : (
            		<Link href="/index">
            			<img id="logo-small" src='https://openfisca.org/img/logo-openfisca.svg' />
					</Link>
				)}
			</div>
			<ul>
				<li><a href='https://github.com/openfisca/openfisca-france'><img src={asset('/images/GitHub-Mark-Light-64px.png')} alt=""/>Code source</a></li>
				<li><a href="https://openfisca.org/doc/">Documentation</a></li>
			</ul>

			<meta name="viewport" content="width=device-width, initial-scale=1"/>

		<style jsx>{`
			#logo-small {
				max-width: 4em;
				margin: 1em;
				cursor:pointer;
			}

			header {
				font-family: "Helvetica Neue",-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
				background: #1d3242;
				color: #fff;
				padding: 0 1em;
				display: flex;
				flex-direction: row;
				align-items: center;
				justify-content: space-between;
			}

			ul {
				font-size: 1em;
				list-style-type: none;
				margin: 0.4em;
				min-height: 3em;
				display: flex;
				align-items : flex-end;
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
