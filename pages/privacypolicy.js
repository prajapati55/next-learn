import React from "react";
import Head from "next/head"

const head = () => {
    return (
        <Head key={Math.random()}>
            <title>Privacy Polity - New age Islam</title>
            <meta name="Description" content="Privacy Polity of New age Islam" />
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
            <link rel="canonical" href="https://www.newageislam.com/privacypolicy" />
        </Head>
    );
};

const Privacypolicy = () => (
    <React.Fragment>
        {head()}
        <div className="col-12 col-sm-12 col-md-8 col-lg-9">
            <div className="sectionTitle blueTitleBg clearfix d-flex">
                <h2 className="m-0 float-left mr-auto px-3">
                    NEW AGE ISLAM PRIVACY POLICY STATEMENT
        </h2>
            </div>
            <div className="pageWrap p-3 bg-light shadow-sm">
                {/* <h3>Disclaimer regarding content and data</h3> */}
                <p>
                    Thank you for visiting NewAgeIslam.com, the website that seeks to map
                    an agenda for Islam in the Twenty First century. Our privacy policy is
                    straightforward. We respect your privacy and do not collect personal
                    information about you when you visit our website unless you volunteer
                    to provide that information to us.
        </p>
                <p>
                    New Age Islam guarantees that we will never, under any circumstances,
                    sell, trade or make public your personal information, unless you
                    designate otherwise. All personal information you provide will remain
                    confidential. In addition, you always will have the option to edit the
                    information provided to us or to have your personal information
                    removed from our records.
        </p>
                <p>
                    After signing up online, users will receive email newsletters and
                    other occasional announcements from New Age Islam. In order to
                    distribute our email, we collect subscribers' email addresses. We do
                    not share addresses with other companies or partners. Users can
                    unsubscribe from email newsletters at any time.
        </p>

                <h3>Discussion Forums</h3>
                <p>
                    New Age Islam makes discussion forums available to its users. Please
                    remember any information disclosed in these areas becomes publicly
                    available, and therefore you should exercise caution when disclosing
                    personal information.
        </p>

                <h4>Unsubscribe, Data Removal and Data Modification Policies</h4>
                <p>
                    New Age Islam allows users to opt-out of receiving newsletters and
                    other communications from us and to modify or remove their information
                    from our system.
        </p>

                <h4>Other Disclosure of Personal Information</h4>
                <p>
                    New Age Islam will not use or disclose your personal information
                    without your consent, except (i) as described in this privacy policy
                    or (ii) as required by law, court order or as requested by other
                    government or law enforcement authority. This policy does not protect
                    information you post to any online bulletin board or other public
                    forum within our website.
        </p>

                <h4>Linking to Other Sites</h4>
                <p>
                    New Age Islam contains links to other sites. We are not responsible
                    for the privacy practices or the content of such websites. You must
                    check their privacy policies before using those sites.
        </p>

                <h4>Contacting New Age Islam</h4>
                <p>
                    If you have any questions about this privacy policy statement, the
                    practices of this site or your dealings with this website, you can
                    contact info@newageislam.com
        </p>

                <p>
                    New Age Islam reserves the right to amend this Privacy Policy
                    Statement at any time without notice, and only the current Privacy
                    Policy Statement may be deemed effective.
        </p>
            </div>
        </div>
    </React.Fragment>
);

export default Privacypolicy;
