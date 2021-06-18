import React from "react";
import Head from "next/head"

const head = () => {
    return (
        <Head key={Math.random()}>
            <title>Contact Us - New age Islam</title>
            <meta name="Description" content="Contact details of New age Islam" />
            <meta
                property="og:title"
                content="Islamic News and Views | Moderate Muslims & Islam | New Age Islam"
            />
            <meta
                name="KeyWords"
                content="Contact,Islam, What is Islam, Islam Online, Islamic Religion, Muslims, islamic, about islam, islam facts, islam way, Islamic ideology, Islam and pluralism, Islam and tolerance, Islamic website, Islamic world, Muslim world, Terrorism, Jihad, newageislam.com"
            />
            <meta
                name="abstract"
                content="About Islam, Islamic Religion and Muslims"
            />
            <meta name="robots" content="index, follow" />
            <link rel="canonical" href="https://www.newageislam.com/contacts" />
        </Head>
    );
};
const Contacts = () => (
    <React.Fragment>
        {head()}
        <div className="col-12 col-sm-12 col-md-8 col-lg-9">
            <div className="row">
                <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                    <div className="sectionTitle blueTitleBg clearfix d-flex">
                        <h2 className="m-0 float-left mr-auto px-3">Contact Details</h2>
                    </div>
                    <ul className="contactInfo bg-light p-3 list-unstyled shadow-sm">
                        <li className="border-bottom py-2">
                            <strong className="d-block">Editorial</strong>
                            <a
                                href="mailto:editor@newageislam.com"
                                title="editor@newageislam.com"
                            >
                                editor@newageislam.com
              </a>
                        </li>
                        <li className="border-bottom py-2">
                            <strong className="d-block">Article Submissions</strong>
                            <a
                                href="mailto:submissions@newageislam.com"
                                title="submissions@newageislam.com"
                            >
                                submissions@newageislam.com
              </a>{" "}
              /
              <a
                                href="mailto:editor@newageislam.com"
                                title="editor@newageislam.com"
                            >
                                editor@newageislam.com
              </a>
                            <br />
              (See){" "}
                            <a
                                href="/NewAgeIslamSubmissionguidlines/"
                                title="Submissions Policy"
                                target="_blank"
                            >
                                Submissions Policy
              </a>
                        </li>
                        <li className="border-bottom py-2">
                            <strong className="d-block">Website</strong>
              For problems with subscriptions or withdrawing subscriptions
              <a
                                href="mailto:webmaster@newageislam.com"
                                title="webmaster@newageislam.com"
                            >
                                webmaster@newageislam.com
              </a>{" "}
              /
              <a
                                href="mailto:info@newageislam.com"
                                title="info@newageislam.com"
                            >
                                info@newageislam.com
              </a>
                        </li>
                    </ul>
                </div>
                <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                    <div className="sectionTitle redTitleBg clearfix d-flex">
                        <h2 className="m-0 float-left mr-auto text-uppercase px-3">
                            Send Enquiry
            </h2>
                    </div>
                    <div className="contactForm bg-light p-3 clearfix shadow-sm">
                        <form>
                            <div className="form-group">
                                <input
                                    type="text"
                                    placeholder="Name"
                                    className="form-control rounded-0"
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="email"
                                    placeholder="Email"
                                    className="form-control rounded-0"
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="text"
                                    placeholder="Subject"
                                    className="form-control rounded-0"
                                />
                            </div>
                            <div className="form-group">
                                <textarea
                                    type="text"
                                    placeholder="Your Message"
                                    className="form-control rounded-0"
                                ></textarea>
                            </div>
                            <div className="form-group">
                                <input
                                    value="Send Enquiry"
                                    type="submit"
                                    className="btn btn-danger border-0 rounded-0 px-4 float-right"
                                />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </React.Fragment>
);

export default Contacts
