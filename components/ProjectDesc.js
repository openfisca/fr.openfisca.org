import asset from 'next/asset'
import Link from 'next/link'
import GlobalStyle from './GlobalStyle'


const ProjectDesc = (props) => (
    <div className="container">
        <div className="flex-item2">
            <img src={props.img} />
        </div>
        <div className="flex-item2">
            <h2>{props.baseline}</h2>
            <p className="Small">{props.desc}</p>
            <a className="btn-medium" href={props.url}>{props.textlink}</a>           
        </div>
    <style jsx>{`


    `}</style>

    </div>
)

export default ProjectDesc
