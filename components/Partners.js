import asset from 'next/asset'
import Link from 'next/link'


const Partners = () => (
  <div>
    <h2>Nos partenaires</h2>
    <ul className="flex-container">
      <li className="flex-item logo"><img alt='IPP' src={asset('/images/logo-ipp.png')} /></li>
      <li className="flex-item logo"><img alt='Etalab' src={asset('/images/logo-etalab.png')} /></li>
      <li className="flex-item logo"><img alt='MSA' src={asset('/images/logo-msa.svg')} /></li>
      <li className="flex-item logo"><img alt='beta.gouv.fr' src={asset('/images/logo-betagouv-url.svg')} /></li>
      <li className="flex-item logo"><img alt='IDEP' src={asset('/images/logo-idep.png')} /></li>
      <li className="flex-item logo"><img alt='France Stratégie' src={asset('/images/logo-france-strategie.jpg')} /></li>
    </ul>

    <style jsx>{`
      div {
        padding: 0 3em 0 3em;
      }

      ul {
        margin: auto;
        padding: 1em;
        list-style-type: none;
      }

      img {
        width: 7.5em;
      }

      .flex-item {
        display: flex;
        flex-flow: column;
        justify-content: space-between;
        align-items: center;
        border: 1px solid transparent;
        margin: 1em 0;
        max-width: 15%;
        min-width: 10em;
      }

      .flex-container {
        display: flex;
        justify-content: center;
        margin: auto;
        padding: 1em;
        display: flex;
        flex-wrap: wrap;
      }

      @media (max-width: 720px) {
        .flex-container{
          flex-direction: column;
          align-items: center;
        }

        .flex-item{
          width: 100%;
          min-width: 100%;
          margin: 1em auto 1em auto
        }
      }
    `}</style>
  </div>
  )

export default Partners

