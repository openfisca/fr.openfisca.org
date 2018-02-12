import Header from "../components/Header"
import Footer from "../components/Footer"

const Home = () => (
  <div>
      <h1>Openfisca france</h1>
      <p>le meilleur logiciel au monde</p>
      <style jsx>{`
        h1, a {
          font-family: "Arial";
        }

        ul {
          padding: 0;
        }

        li {
          list-style: none;
          margin: 5px 0;
        }

        a {
          text-decoration: none;
          color: blue;
        }

        a:hover {
          opacity: 0.6;
        }
      `}</style>
  </div>
  )

export default () => (
  <div>
    <Header />
    <Home />
    <Footer />
  </div>
)
