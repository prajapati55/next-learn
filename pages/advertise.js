import React from "react";
import Head from "next/head";
const head = () => {
    return (
        <Head key={Math.random()}>
            <title>About Us - Islamic Religion, Muslims</title>
            <meta
                name="Description"
                content="About new age islam : What is Islam? New Age Islam is an online resource for authentic information on Islam, Islamic Religion and Muslims. Attempting serious rethinking within Islam, New Age Islam brings modern Muslims closer to the original ideals and spirit of Islam ... Islamic ideology, Islam and pluralism, Islam and tolerance, Islamic website, Islamic world, Muslim world"
            />
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
            <link rel="canonical" href="https://www.newageislam.com/advertise" />
        </Head>
    );
};
const Advertise = () => (
    <React.Fragment>
        {head()}
        <div className="col-12 col-sm-12 col-md-8 col-lg-7">
            <div className="sectionTitle blueTitleBg clearfix d-flex">
                <h2 className="m-0 float-left mr-auto px-3">Advertise</h2>
            </div>
            <div className="pageWrap p-3 bg-light shadow-sm">
                <h3>Audience</h3>
                <p>
                    NewAgeIslam.com has a very focused audience which reads extensively
                    and aims to learn on Islam and Muslims in relation to the world
                    affairs. Most of our visitors and commentators look for information,
                    seek answers to their questions in our 13000+ articles or debate over
                    them.
        </p>

                <h3>Advertising Options</h3>
                <p>
                    <strong>Banners</strong>The following sizes are available: 125×125,
          120×600, and 160×600. The banners are not rotated with other
          advertisers.
        </p>
                <p>
                    <strong>Review</strong>If your product or service is interesting to
          our readers, we may review it on our website.
        </p>
                <p>
                    <strong>Newsletter</strong>A banner or review of your product or
          service can also appear in our newsletter.
        </p>

                <h3>Contact Us For Rates and Availability</h3>
                <p>
                    Please email us to{" "}
                    <a href="mailto:sultan.shahin@gmail.com">sultan.shahin@gmail.com </a>{" "}
          for request for proposal and pricing information if you are interested
          in advertising with us.
        </p>
            </div>
        </div>
    </React.Fragment>
);

export default Advertise;
