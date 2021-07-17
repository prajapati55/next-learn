import { useRouter } from "next/router";
import Link from "next/link";
import Dynamic from "next/dynamic";
import Head from "next/head";
import ShareComponent from "./share";
import { GetUrlLink, checkContentIsUrdu } from "../utils/utility";

const ArticleCommentForm = Dynamic(
    () => import("./comment-form"),
    { fallback: <h3>Loading..</h3>, ssr: false }
);
const CommentListDetail = Dynamic(
    () => import("./comment-detail"),
    { fallback: <h3>Loading..</h3>, ssr: false }
);
const Detail = ({ article }) => {
    const router = useRouter();
    const {
        Article_Heading,
        AutherName,
        Group_Name,
        ArticleContent,
        // ImageName,
        // ImageCaption,
        comments,
        Article_ID,
        Group_ID,
        CreatedDateTime,
        totalComments,
        Article_Detail,
    } = article;
    const monthArr = [
        "Jan",
        "Feb",
        "March",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sept",
        "Oct",
        "Nov",
        "Dec",
    ];
    let sharedUrl = "";
    if (typeof window !== "undefined") {
        sharedUrl = window.location.host.includes("localhost")
            ? `https://www.newageislam.com/${router.asPath}`
            : window.location.href;
    }

    const onViewAllComments = (articleId) => {
        router.push(`/viewAllComments/${articleId}`);
    };
    const DateStr = CreatedDateTime
        ? new Date(CreatedDateTime.split("T")[0])
        : new Date();
    //ArticleContent.replace(/style=".*?"/g, "").replace(/style='.*?'/g, "")
    //  console.log(ArticleContent.replace(/font-family.+?;/g,""));
    let filteredContent =
        Group_ID === 48 || (checkContentIsUrdu(ArticleContent) && Group_ID !== 51)
            ? ArticleContent.replace(/font-family:[^;']*(;)?/g, "").replace(
                /font-size:[^;']*(;)?/g,
                ""
            )
            : ArticleContent;
    // let filteredContent = ArticleContent;//replace(/font-family:[^;']*(;)?/g,"").replace(/font-size:[^;']*(;)?/g,"");

    const link = AutherName
        ? `${GetUrlLink(Group_Name)}/${GetUrlLink(AutherName)}/${GetUrlLink(
            Article_Heading
        )}/d/${Article_ID}`
        : `${GetUrlLink(Group_Name)}/${GetUrlLink(
            Article_Heading
        )}/d/${Article_ID}`;

    const head = () => {
        return (
            <Head key={Math.random()}>
                <title>
                    {`${Article_Heading} | ${AutherName} | New Age Islam | Islamic News and Views | Moderate Muslims & Islam`}
                </title>
                <meta
                    property="og:title"
                    content={`${Article_Heading} | ${AutherName}`}
                />
                <meta
                    name="og:description"
                    content={Article_Detail.replace(/<[^>]+>/g, "")}
                />
                <meta
                    property="og:url"
                    content={`https://www.newageislam.com/${link}`}
                />
                <meta
                    name="abstract"
                    content="About Islam, Islamic Religion and Muslims"
                />
                <meta name="robots" content="index, follow" />
                <link rel="canonical" href={`https://www.newageislam.com/${link}`} />
            </Head>
        );
    };

    return (
        <div className="col-12 col-sm-12 col-md-8 col-lg-7">
            {head()}
            <div className="sectionTitle blueTitleBg clearfix d-flex">
                <h2 className="m-0 float-left mr-auto px-3">
                    {Group_Name}{" "}
                    <small>
                        ( {DateStr.getDate()} {monthArr[DateStr.getMonth()]}{" "}
                        {DateStr.getFullYear()}
                        {""}, NewAgeIslam.Com)
                    </small>
                </h2>
                <a className="p-2" href="#viewComment" title="View Comment">
                    <i className="fa fa-eye"></i> <span>Comment</span>
                </a>{" "}
                <span className="divide">|</span>
                <a className="p-2" href="#articleCommentForm" title="Write a Comment">
                    <i className="fa fa-pencil-square-o"></i> <span>Comment</span>
                </a>
            </div>
            <div className="pageWrap p-3 bg-light shadow-sm">
                <div className="sharePost">
                    <ShareComponent
                        url={sharedUrl}
                        hashtag={Article_Heading}
                        content={Article_Heading}
                    />
                </div>
                <div
                    className={`articleListDetail ${Group_ID === 48 ||
                        (checkContentIsUrdu(ArticleContent) && Group_ID !== 51)
                        ? "urduFont"
                        : ""
                        }`}
                >
                    <h2
                        className={`mb-1 ${Group_ID === 48 ||
                            (checkContentIsUrdu(ArticleContent) && Group_ID !== 51)
                            ? "urduFont"
                            : ""
                            }`}
                    >
                        {Article_Heading}
                    </h2>
                    <div
                        className="article-detail"
                        dangerouslySetInnerHTML={{
                            __html: ArticleContent
                                ? filteredContent
                                : "<p><b>No Content available fo this article </b></p>",
                        }}
                    ></div>
                    <div className="sharePost">
                        <ShareComponent
                            url={sharedUrl}
                            hashtag={Article_Heading}
                            content={Article_Heading}
                        />
                    </div>
                    <div className="text-center donateBtn">
                        <Link href="/donate" className="btn btn-warning rounded-0">
                            <><i className="fa fa-money"></i> Donate Now{" "}</>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="articleCommentsSection pt-4" id="articleCommentForm">
                <ArticleCommentForm
                    articleid={Article_ID}
                    commentscount={totalComments}
                />
            </div>
            <div className="articleCommentsSection pt-4" id="viewComment">
                <CommentListDetail
                    comments={comments}
                    commentscount={totalComments}
                />
            </div>
            {totalComments !== 0 && comments.length < totalComments ? (
                <div className="viewCommentBtn text-center pt-3">
                    <button
                        className="btn btn-danger border-0 rounded-0 px-4"
                        onClick={() => onViewAllComments(Article_ID)}
                    >
                        View All Comments ({totalComments})
            </button>
                </div>
            ) : null}
        </div>
    );
};

export default Detail;
