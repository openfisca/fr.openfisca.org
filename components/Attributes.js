import asset from 'next/asset'
import Link from 'next/link'
import GlobalStyle from './GlobalStyle'


const Attributes = (props) => (
    <div>
        <ul className="flex-container">
            <li><img src={props.img} /><h4>{props.title}</h4></li>
            <li><img src={props.img} /><h4>{props.title}</h4></li>
            <li><img src={props.img} /><h4>{props.title}</h4></li>
            <li><img src={props.img} /><h4>{props.title}</h4></li>
            <li><img src={props.img} /><h4>{props.title}</h4></li>
        </ul>

<style jsx>{`
img {
    width=100%;
    float: left;
}

    `}</style>

      </div>
      )

export default Attributes
