import asset from 'next/asset'
import Link from 'next/link'

const ProjectAttribute = (props) => (
    <div className="attribute">
        <ul className='flex__container'>
            <li className="flex__item">
                <img src={props.imgapi} />
                <p className="Medium">{props.api}</p>
            </li>
            <li className="flex__item">
                <img src={props.imgcountry} />
                <p className="Medium">{props.country}</p>
            </li>
            <li className="flex__item">
                <img src={props.imgsimulation} />
                <p className="Medium">{props.simulation}</p>
            </li>
            <li className="flex__item">
                <img src={props.imgperimetre} />
                <p className="Medium">{props.perimetre}</p>
            </li>
            <li className="flex__item">
                <img src={props.imgpoweredby} />
                <p className="Medium">{props.poweredby}</p>
            </li>
        </ul>


        <style jsx>{`

            .card-desc {
                text-align: left;
                padding: 4%;
            }

            .card-desc > p {
                white-space: normal;
            }

            .attribute {
                padding: 4%;
                background-color: #6d69fb;
                border-radius: 4px;
            }

            li {
                list-style: none;
            }
    `}</style>
      </div>
      )

export default ProjectAttribute
