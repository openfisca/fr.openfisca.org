const ProjectDesc = props => (
    <div className="flex__container">
        <div className="flex__item50">
            <img src={props.img} alt="" />
        </div>
        <div className="flex__item50">
            <ul>
                <h2>{props.baseline}</h2>
                <li>{props.desc1}</li>
                <li>{props.desc2}</li>
                <li>{props.desc3}</li>
                <a className="btn medium" href={props.url}>
                    {props.textlink}
                </a>
            </ul>
        </div>

        <style jsx>
            {`
                li {
                    list-style-image: url(/static/items/bullet.svg);
                    padding-bottom: 8%;
                    list-style-position: outside;
                }

                .flex__item50 {
                    width: 48%;
                    padding-left: 1rem;
                    display: flex;
                    justify-content: space-between;
                    align-items: start;
                }

                .flex__item 50 img {
                    width: 100%;
                    height: auto;
                }

                img {
                    max-width: 100%;
                    height: auto;
                    vertical-align: middle;
                }
            `}
        </style>
    </div>
)

export default ProjectDesc
