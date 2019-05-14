const CardResources = (props) => (
    <div className="card-container">
        <div className="card-desc">
            <a className="categorie">{props.categorie}</a>
            <p className="Medium"><img className="flag" src={props.img} alt="" />{props.title}</p>
            <p className="Small">{props.desc}</p>
        </div>
        <div className="card-links">
            <a href={props.linkexplorer}>Explorer</a>
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
                padding-right: 4%;
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
            .categorie{
                font-family: asapmedium;
                font-size: 0.75em;
                color: #000;
                background-color: #E5E5E5;
                border: solid 0px;
                margin-top: 4%;
                padding: 1%;
                border-radius: 4px;
            }
            .flag{
                width: 3em;
                padding-right: 1em;
            }
        `}</style>
    </div>
)

export default CardResources
