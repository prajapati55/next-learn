import React from "react";
import QueryForm from "../components/query.form";
import Head from "next/head"
import { useRouter } from 'next/router'
const head = () => {
    return (
        <Head key={Math.random()}>
            <title>ReportAbuse - Islamic Religion, Muslims</title>
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
            <link rel="canonical" href="https://www.newageislam.com/reportAbuse" />
        </Head>
    );
};
const ReportAbuse = () => {
    const router = useRouter();
    console.log(router);
    return (
        <React.Fragment>
            {head()}
            <div className="col-12 col-sm-12 col-md-7 col-lg-6">
                <div className="sectionTitle blueTitleBg clearfix d-flex">
                    <h2 className="m-0 fl[oat-left mr-auto px-3">
                        Report Abuse
        </h2>
                </div>
                <div className="pageWrap p-3 bg-light shadow-sm subscribePageIn">
                    {/* <QueryForm articleId={match.params.articleId} commentId={match.params.commentId} /> */}
                </div>
            </div>
        </React.Fragment>
    )
};

export default ReportAbuse;
