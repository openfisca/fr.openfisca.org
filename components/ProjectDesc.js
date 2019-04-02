import asset from 'next/asset'
import Link from 'next/link'
import GlobalStyle from './GlobalStyle'


const ProjectDesc = (props) => (
    <div className="flex-container">
        <div className="flex-item2">
            <img src={props.img} />
        </div>
        <div className="flex-item2">
            <h2>{props.baseline}</h2>
            <ul>
                <li>{props.desc1}</li>
                <li>{props.desc2}</li>
                <li>{props.desc3}</li>
            </ul>
            <a className="btn-medium" href={props.url}>{props.textlink}</a>           
        </div>
    <style jsx>{`

    `}</style>

    </div>
)

export default ProjectDesc
