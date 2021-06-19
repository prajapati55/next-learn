import Link from "next/link";
// import Litag from "../components/UI/liTag/liTag";
// import Link from "../components/UI/link/link";
// import bloggerImg from "../../../assets/images/blogger.png";
// import SubscribeForm from "./subscribe.form.component.jsx";
const Footer = () => {
  return (
    <footer className="mainFooter">
      <div className="container">
        <section className="footerTop pt-5">
          <div className="row">
            <div className="col-12 col-sm-6 col-md-6 col-lg-3 mb-5">
              <div className="usefullLinkFooter">
                <h2 className="mb-3">Useful Links</h2>
                <ul className="m-0 p-0 list-unstyled">
                  <li>
                    <Link href="/" title="Home" rel="noreferrer">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link href="/about" title="About us" rel="noreferrer">
                      About us
                    </Link>
                  </li>
                  <li>
                    <Link href="/contacts" title="Contact us" rel="noreferrer">
                      Contact us
                    </Link>
                  </li>
                  <li>
                    <Link href="/bestArticles" title="Archives" rel="noreferrer">
                      Archives
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/a/books-and-documents"
                      title="Books and Documents"
                      rel="noreferrer"
                    >
                      Books
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/a/debating-islam"
                      title="Debate"
                      rel="noreferrer"
                    >
                      Debate
                    </Link>
                  </li>
                  <li>
                    <a
                      rel="noopener noreferrer"
                      href="https://www.reference.com/"
                      title="Dictionary"
                      target="_blank"
                    >
                      Dictionary
                    </a>
                  </li>
                  <li>
                    <Link href="/disclaimer" title="Disclaimer" rel="noreferrer">
                      Disclaimer
                    </Link>
                  </li>
                  <li>
                    <Link href="/privacypolicy" title="Privacy Policy" rel="noreferrer">
                      Privacy Policy
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-6 col-lg-3 mb-5">
              <div className="contactFooter">
                <h2 className="mb-3">Contact Us</h2>
                <ul className="m-0 p-0 list-unstyled">
                  <li>
                    <p>
                      Sultan Shahin, E-22, Indra Prastha Apts., 114, I. P.
                      Extension, New Delhi – 110092
                    </p>
                  </li>
                  <li>
                    <a href="tel:+91-11-40810213" title="+91-11-40810213">
                      +91-11-4081 0213
                    </a>
                  </li>
                  <li>
                    <a
                      rel="noreferrer"
                      href="mailto:editor@NewAgeIslam.com"
                      title="editor@NewAgeIslam.com"
                    >
                      editor@NewAgeIslam.com
                    </a>
                    <a
                      rel="noreferrer"
                      href="mailto:sultan.shahin@gmail.com"
                      title="sultan.shahin@gmail.com"
                    >
                      sultan.shahin@gmail.com
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-6 col-lg-3 mb-5">
              <div className="newsletter newsletterFooter">
                <h2 className="mb-3">Newsletter</h2>
                {/* <p>Sign up to hear and get our daily update via email.</p> */}
                {/* <SubscribeForm /> */}
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-6 col-lg-3 mb-5">
              <div className="connectFooter">
                <h2 className="mb-3">Connect with us</h2>
                <p>
                  Follow us to stay in the loop on what's new with New Age
                  Islam.
                </p>
                <ul className="m-0 list-inline p-0">
                  <li className="list-inline-item facebookFtr">
                    <a
                      href="https://www.facebook.com/pages/New-Age-Islam/123159674442811"
                      title="Facebook"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fa fa-facebook"></i>
                    </a>
                  </li>
                  <li className="list-inline-item twitterFtr">
                    <a
                      href="https://twitter.com/#!/NewAgeIslam"
                      title="Twitter"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fa fa-twitter"></i>
                    </a>
                  </li>
                  <li className="list-inline-item emailFtr">
                    <a
                      href="mailto:editor@NewAgeIslam.com"
                      title="editor@NewAgeIslam.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fa fa-envelope-o"></i>
                    </a>
                  </li>
                  <li className="list-inline-item linkedinFtr">
                    <a
                      href="https://linkedin.com/"
                      title="Linkedin"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fa fa-linkedin"></i>
                    </a>
                  </li>
                  <li className="list-inline-item youtubeFtr">
                    <a
                      href="https://www.youtube.com/user/NewAgeIslamTV"
                      title="Youtube"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fa fa-youtube"></i>
                    </a>
                  </li>
                  {/* <li className="list-inline-item googleplusFtr"><a href="https://plus.google.com/" title="Google Plus" target="_blank" rel="noopener noreferrer"><i className="fa fa-google-plus"></i></a></li> */}
                  <li className="list-inline-item bloggerFtr">
                    <a
                      href="https://new-age-islam.blogspot.com/"
                      title="Blogger"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src="/blogger.png" width="16" alt="blogger" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* <section className="footerMiddle border-top text-center py-4">
          <ul className="list-inline p-0 m-0">
            {footerLink.map(linkObj => {
              let linkText = linkObj.titleLink.toLowerCase();
              // let link = linkText.length > 0 ? linkText.join('-') : linkText;
              return (
                <Litag key={linkText} liClass="list-inline-item">
                  <Link hrefLink={linkText} linkTitle={linkObj.titleLink} />
                </Litag>
              );
            })}
          </ul>
        </section> */}

        <section className="footerBottom border-top text-center py-3">
          Copyright &copy; 2008 - {new Date().getFullYear()}. NewAgeIslam All
          Rights Reserved.
        </section>
      </div>
    </footer>
  );
};
export default Footer;
