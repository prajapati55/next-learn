import ErrorBoundary from "./ErrorBoundry";
import Header from "./Header";
import Footer from "./Footer";
import SideBar from "./Sidebar";
const Layout = ({ children }) => {
    return <>
        <Header />
        <section className="innerPageWrap pb-5 contactPage">
            <div className="container">
                <div className="row">
                    <ErrorBoundary >
                        <SideBar />
                        {children}
                    </ErrorBoundary>
                </div>
            </div>
        </section>
        <Footer />
    </>
}

export default Layout;