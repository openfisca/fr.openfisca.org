import asset from 'next/asset'
import Link from 'next/link'

const CardResources = (props) => (
    <div className="card-container">
        <div className="card-desc">
            <p className="Medium">{props.title}</p>
            <img src={props.img} />
            <p className="Small">
{props.desc}</p>
        </div>
        <div className="card-attribute">
            <p>{props.attribute}</p>
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
            }

            .card-desc {
                text-align: left;
                padding: 4%;
            }

            img{
                color: #6d69fb;
                width: 40%;
            }

            .card-desc > p {
                white-space: normal;
            }

            .card-attribute {
                padding: 2%;
                background-color: #6d69fb;
                border-radius: 0% 0% 2% 2%;
            
            }
    `}</style>
      </div>
      )

export default CardResources
