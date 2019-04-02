import asset from 'next/asset'
import Link from 'next/link'
import GlobalStyle from './GlobalStyle'

const CardProject = (props) => (
    <div className="card-project">
        <div className="card-background">
        <img src={props.img} />
        </div>
        <p className="Medium">{props.title}</p>
        <p className="Small">{props.desc}</p>

        <style jsx>{`
            .card-project {
                background-color: #ffffff;
                display: flex;
                flex-flow: column;
                text-align: left;
                padding: 0.5em;
                margin: 1em;
                max-width: 20%;
                min-width: 20em;
                box-shadow: 0px 0px 6px #BCBCC6;
                border-radius: 4px;
            }
            
            img{
                max-width: 100%;
            }
            .card-background {
                width: 100%;
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
