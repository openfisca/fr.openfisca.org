const ProjectAttribute = (props) => (
    <div className="attribute">
        <ul className="flex__container">
            <li className="flex__item">
                <img src={props.imgapi} alt=""/>
                <p className="Medium">{props.api}</p>
            </li>
            <li className="flex__item">
                <img src={props.imgcountry} alt=""/>
                <p className="Medium">{props.country}</p>
            </li>
            <li className="flex__item">
                <img src={props.imgsimulation} alt=""/>
                <p className="Medium">{props.simulation}</p>
            </li>
            <li className="flex__item">
                <img src={props.imgperimetre} alt=""/>
                <p className="Medium">{props.perimetre}</p>
            </li>
            <li className="flex__item">
                <img src={props.imgpoweredby} alt=""/>
                <p className="Medium">{props.poweredby}</p>
            </li>
        </ul>


        <style jsx>{`
            .flex__item {
                // display: -webkit-flex;
                display: flex;
                flex-direction: column;
                text-align: center;
                padding: 1rem;
            }

            .card-desc > p {
                white-space: normal;
            }

            .attribute {
                padding: 2%;
                background-color: #EAEAEA;
                border-radius: 4px;
            }

            li {
                list-style: none;
            }
        `}</style>
    </div>
)

export default ProjectAttribute
