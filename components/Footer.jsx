import Link from 'next/link'

const Footer = () => (
    <div>
        <footer>
            <div className="baseline">
                <h3>Transformer le code législatif en code logiciel</h3>
                <a href="https://openfisca.org/doc/" className="btn CTA">Commencer <img src="/static/icons/Rocket.svg"></img></a>
            </div>
            <ul>
                <li><Link href="/status" passHref><a>Etat des services</a></Link></li>
                <li><Link href="/cookies" passHref><a>Informatique & libertés</a></Link></li>
                <li><Link href="/legal" passHref><a>Mentions légales</a></Link></li>
                <li><Link href="/contribute" passHref><a>Contribuer</a></Link></li>
            </ul>
            <ul className="social">
                <li><a href="mailto:contact@openfisca.org?Subject=openfisca.org" passHref><img src="/static/icons/Email.svg" alt="Envoyer un email"></img></a></li>
                <li><a href="https://github.com/openfisca" passHref><img src="/static/icons/Github.svg" alt="GitHub"></img></a></li>
                <li><a href="https://forms.gle/XFxiFvfaAa6w7LGy7" passHref><img src="/static/icons/Slack.svg" alt="Slack"></img></a></li>
                <li><a href="https://twitter.com/openfisca" passHref><img src="/static/icons/Twitter.svg" alt="Twitter"></img></a></li>
            </ul>
        </footer>

        <style jsx>{`
			footer {
				background: #6d69fb; /* Old browsers */
				background: -moz-linear-gradient(163.99deg, #00BAAF -21.24%, #6D69FB 76.56%, #6D69FB 83.4%); /* FF3.6-15 */
				background: -webkit-linear-gradient(163.99deg, #00BAAF -21.24%, #6D69FB 76.56%, #6D69FB 83.4%); /* Chrome10-25,Safari5.1-6 */
				background: linear-gradient(163.99deg, #00BAAF -21.24%, #6D69FB 76.56%, #6D69FB 83.4%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
				filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#6d69fb', endColorstr='#00baaf',GradientType=1 ); /* IE6-9 fallback on horizontal gradient */
				padding-top: 2em;
				height: 18em;
			}

			.baseline {
				flex-direction: column;
				justify-content: center;
				display: flex;
				text-align: center;
				align-items: center;
			}

			.baseline img {
				max-height: 1.5em;
        		vertical-align: bottom;
			}

			.CTA {
				max-width: 8em;
			}

			.social {
				float: right;
			}

			h3 {
				align-text: center;
				color: #ffffff;}

			ul {
				list-style-type: none;
				min-height: 3em;
				float: left;
				padding-right: 3em;
				padding-top: 3em;
			}

			li {
				display: inline;
				cursor: pointer;
				list-style: none;
				padding-right: 1em;
			}

			li img {
				max-width: 2em;
			}

			@media (max-width: 720px) {
				ul {
					display: flex;
					padding: 0.2rem;
					flex-direction: column;
					align-items: center;
				}
			}
		`}</style>
    </div>
)

export default Footer

