import React from "react";
import Head from "next/head"
import SubscribeForm from "../components/subscribe.form";


const head = () => {
    return (
        <Head key={Math.random()}>
            <title>Unsubscribe - Islamic Religion, Muslims</title>
            <meta
                name="Description"
                content="Islam : What is Islam? New Age Islam is an online resource for authentic information on Islam, Islamic Religion and Muslims. Attempting serious rethinking within Islam, New Age Islam brings modern Muslims closer to the original ideals and spirit of Islam ... Islamic ideology, Islam and pluralism, Islam and tolerance, Islamic website, Islamic world, Muslim world"
            />
            <meta
                property="og:title"
                content="Islamic News and Views | Moderate Muslims & Islam | New Age Islam"
            />
            <meta
                name="KeyWords"
                content="Islam, What is Islam, Islam Online, Islamic Religion, Muslims, islamic, about islam, islam facts, islam way, Islamic ideology, Islam and pluralism, Islam and tolerance, Islamic website, Islamic world, Muslim world, Terrorism, Jihad, newageislam.com"
            />
            <meta
                name="abstract"
                content="About Islam, Islamic Religion and Muslims"
            />
            <meta name="robots" content="index, follow" />
            <link rel="canonical" href="https://www.newageislam.com/unsubscribe" />
        </Head>
    );
};
const UnSubscribepage = () => (
    <React.Fragment>
        {head()}
        <div className="col-12 col-sm-12 col-md-7 col-lg-6">
            <div className="sectionTitle blueTitleBg clearfix d-flex">
                <h2 className="m-0 float-left mr-auto px-3">
                    Unsubscribe to Our Newsletters
        </h2>
            </div>
            <div className="pageWrap p-3 bg-light shadow-sm subscribePageIn">
                <SubscribeForm subscribe={false} />
            </div>
        </div>
    </React.Fragment>
);

export default UnSubscribepage;
