import Home from "layouts/Home"
import Header from "components/Header"

const Layout = ({ page, title, children }) => (
    <Home page={page} title={title}>
        <Header title={title} />
        {children}
    </Home>
)

export default Layout
