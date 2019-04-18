import asset from 'next/asset'
import Link from 'next/link'

const CardResourcesmin = (props) => (
    <div className="card-container">
        <div className="card-desc">
            <p className="Medium">{props.title}</p> 
            <p className="Small"><img src={props.img} alt="" />{props.desc}</p>
        </div>
        <div className="card-links">
            <a href={props.linkgit}>Voir sur GitHub</a>
            </div>

        <style jsx>{`

            .card-container {
                background-color: #ffffff;
                box-shadow: 0px 0px 6px #BCBCC6;
                border-radius: 2%;
                display: flex;
                flex-direction: column;
                text-align: left;
                width: 100%;
                justify-content: space-between;
            }

            .card-desc {
                text-align: left;
                padding-left: 4%;
            }

            .card-desc > p {
                white-space: normal;
            }

            .card-links {
                padding: 4%;
                display: flex;
                justify-content: space-between;
                flex-direction: row;
                background-color: #6d69fb;
            }
    `}</style>
      </div>
      )

export default CardResourcesmin
