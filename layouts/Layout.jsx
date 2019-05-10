import Home from "layouts/Home"
import Header from "components/Header"


function Layout({ page, title, children }) {
    return (
        <Home page={page} title={title}>
            <Header title={title} />
            {children}
        </Home>
    )
}


export default Layout
