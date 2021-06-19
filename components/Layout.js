import { useRouter } from 'next/router'
import ErrorBoundary from "./ErrorBoundry";
import Header from "./Header";
import Footer from "./Footer";
import SideBar from "./Sidebar";

const Layout = ({ children }) => {
    const router = useRouter();
    return <>
        <Header />
        {
            router.pathname !== "/" ?
                <section className="innerPageWrap pb-5 contactPage">
                    <div className="container">
                        <div className="row">
                            <ErrorBoundary >
                                <SideBar />
                                {children}
                            </ErrorBoundary>
                        </div>
                    </div>
                </section> :
                <>{children}</>
        }

        <Footer />
    </>
}

export default Layout;