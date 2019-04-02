import asset from 'next/asset'
import Link from 'next/link'

const CardProject = (props) => (
    <div className="card-project">
        <div className="card-background">
            <img src={props.img} />
        </div>
        <div className="card-shortdesc">
            <p className="Medium">{props.title}</p>
            <p className="Small">{props.desc}</p>
            <button>{props.attribute1}</button>
            <button>{props.attribute2}</button>
            <button>{props.attribute3}</button>
        </div>

        <style jsx>{`

            .card-project {
                background-color: #ffffff;
                box-shadow: 0px 0px 6px #BCBCC6;
                border-radius: 4px;
                display: flex;
                flex-direction: column;
                width: 18em;
            }

            img {
                width: 100%;
            }

            button{
                background-color: #E5E5E5;
                margin-right: 1%;
                border: solid 0px;
                padding: 0.25%;
                border-radius: 4px;
            }

            .card-shortdesc{ 
                text-align: left;
                padding: 4%;
                display: flex;
                flex-wrap: wrap;
            }

            .card-background {
                background: #6d69fb; /* Old browsers */
                background: -moz-linear-gradient(164deg, rgba(0,186,175,.7) -21.24%, rgba(105,109,261,0.7) 76.5%, rgba(105,109,261,0.7) 84.5%); /* FF3.6-15 */
                background: -webkit-linear-gradient(164deg, rgba(0,186,175,.7) -21.24%, rgba(105,109,261,0.7) 76.5%, rgba(105,109,261,0.7) 84.5%); /* Chrome10-25,Safari5.1-6 */
                background: linear-gradient(164deg, rgba(0,186,175,.7) -21.24%, rgba(105,109,261,0.7) 76.5%, rgba(105,109,261,0.7) 84.5%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
                filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#6d69fb', endColorstr='#00baaf',GradientType=1 ); /* IE6-9 fallback on horizontal gradient */			
            }
    `}</style>
      </div>
      )

export default CardProject
