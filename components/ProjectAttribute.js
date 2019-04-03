import asset from 'next/asset'
import Link from 'next/link'

const ProjectAttribute = (props) => (
    <div>
        <ul className='flex__container'>
            <li className="flex-item3">
                <img src={props.imgapi} />
                <p className="Medium">{props.api}</p>
            </li>
            <li className="flex-item3">
                <img src={props.imgcountry} />
                <p className="Medium">{props.country}</p>
            </li>
            <li className="flex-item3">
                <img src={props.imgsimulation} />
                <p className="Medium">{props.simulation}</p>
            </li>
            <li className="flex-item3">
                <img src={props.imgperimetre} />
                <p className="Medium">{props.perimetre}</p>
            </li>
            <li className="flex-item3">
                <img src={props.imgpoweredby} />
                <p className="Medium">{props.poweredby}</p>
            </li>
        </ul>


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

            .card-desc > p {
                white-space: normal;
            }

            .card-attribute {
                padding: 4%;
                background-color: #6d69fb;
                border-radius: 0% 0% 2% 2%;
            
            }
    `}</style>
      </div>
      )

export default ProjectAttribute
