import React from "react";
import Head from "next/head";
const head = () => {
    return (
        <Head key={Math.random()}>
            <title>New Age Islam Donation - Islamic Religion, Muslims</title>
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
                content="Islam, What is Islam, Islam Online, Islamic Religion, Muslims, islamic, about islam, islam facts, islam way, Islamic ideology, Islam and pluralism, Islam and tolerance, Islamic website, Islamic world, Muslim world, Terrorism, Jihad, newageislam.com"
            />
            <meta
                name="abstract"
                content="About Islam, Islamic Religion and Muslims"
            />
            <meta name="robots" content="index, follow" />
            <link rel="canonical" href="https://www.newageislam.com/donate" />
        </Head>
    );
};
const Donate = () => (
    <React.Fragment>
        {head()}
        <div className="col-12 col-sm-12 col-md-8 col-lg-7">
            <div className="sectionTitle blueTitleBg clearfix d-flex">
                <h2 className="m-0 float-left mr-auto px-3">Donate</h2>
            </div>
            <div className="pageWrap p-3 bg-light shadow-sm">
                <h3>YOUR SUPPORT HELPS US TO COMBAT RADICAL THOUGHT AND EXTREMISM!</h3>
                <p>
                    <strong>New Age Islam Foundation</strong> would utilize your donations
          to expand the outreach of its website and improve the quality of its
          content. As a reader supported independent source of news and views,
          your financial support is critical to our continued success.
        </p>
                <p>Thank you for your decision to support NewAgeIslam.com</p>
                <p className="paragraph p">
                    We are based in India and Indian laws require us to make distinctions
                    between different bank accounts of donors. So please choose different
                    methods based on whether you want to donate from an Indian or a
                    foreign bank account.
        </p>
                <h3>Donate Now</h3>
                <h5>
                    1. Indian or foreign citizens resident in India having Indian Bank
                    accounts
        </h5>
                <p>For remittance from Indian Bank accounts, Donate by Cheque:</p>
                <p>
                    <strong>
                        A) Please send a cheque drawn on any Indian Bank Account to
          </strong>
                </p>
                <address>
                    <strong>New Age Islam Foundation, </strong>
                    <br />
          E-22, Indra Prastha Apts.,
          <br />
          114, I. P. Extension,
          <br />
          New Delhi – 110092.
        </address>
                <p>
                    <strong>B) Direct Bank Transfer to</strong>
                </p>
                <p>
                    India Savings a/c of <strong>New Age Islam Foundation </strong> <br />
          Bank A/C NO: 09 22 145 00 000 66 <br />
          IFSC code: HDFC 00 00 922 <br />
          Swift Code: HDFCINNBB
        </p>
                <p>
                    <i>
                        As your donation is tax deductible, we will send you a copy of our
                        certificate issued u/s 80 G of the Act along with the receipt.
                        Please send us your postal address.
          </i>
                </p>

                <p>
                    <strong>
                        2. Non-resident Indians and foreign citizens having foreign Bank
                        accounts
          </strong>
                </p>

                <p>
                    <strong>
                        For foreign Bank remittance, Current Account of the New Age Islam
                        Foundation
          </strong>
                    <br />
          HDFC Bank Ltd <br />
          A/C No: 09 22 76 000 000 12 <br />
          Swift Code: HDFCINNBB <br />
          IFSC code: HDFC 00 00 922 <br />
                    <br />
                    <strong>Postal Address of the Bank:</strong>
                    <br />
          HDFC Bank Ltd <br />
          Plot no 2, RG Shopping complex
          <br />
          I.P. Extension,
          <br />
          New Delhi 110092
          <br />
                    <br />
                    <strong>Postal address of the Donee:</strong>
                    <br />
                    <br />
                    <strong>New Age Islam Foundation</strong>
                    <br />
          c/o Sultan Shahin
          <br />
          E-22, Indra Prastha Apts.
          <br />
          114, I. P. Extension
          <br />
          New Delhi - 110092
        </p>
                <p>
                    We are working out other modes of payment through credit cards, etc.
                    We will inform you as soon as possible.
        </p>
            </div>
        </div>
    </React.Fragment>
);

export default Donate;
