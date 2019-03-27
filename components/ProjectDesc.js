import asset from 'next/asset'
import Link from 'next/link'
import GlobalStyle from './GlobalStyle'


const ProjectDesc = (props) => (
    <div>
        <div className="col">
            <img src={props.img} />
        </div>
        <div className="col">
            <h2>{props.baseline}</h2>
            <p className="Small">{props.desc}</p>
            <button>{props.button}</button>           
        </div>
    <style jsx>{`
img {
    float:left;
}

    `}</style>

    </div>
)

export default ProjectDesc
