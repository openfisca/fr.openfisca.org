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
                opacity: 0.7;
                background: #6d69fb; /* Old browsers */
                background: -moz-linear-gradient(163.99deg, #00BAAF -21.24%, #6D69FB 76.56%, #6D69FB 83.4%); /* FF3.6-15 */
                background: -webkit-linear-gradient(163.99deg, #00BAAF -21.24%, #6D69FB 76.56%, #6D69FB 83.4%); /* Chrome10-25,Safari5.1-6 */
                background: linear-gradient(163.99deg, #00BAAF -21.24%, #6D69FB 76.56%, #6D69FB 83.4%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
                filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#6d69fb', endColorstr='#00baaf',GradientType=1 ); /* IE6-9 fallback on horizontal gradient */			
            }
    `}</style>
      </div>
      )

export default CardProject
