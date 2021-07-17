import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import http from "../../http";
import CommentDetail from "../../components/comment-detail";
import Spinner from "../../components/Spinner";
import { GetUrlLink } from "../../utils/utility";
const ViewComments = () => {
    const [data, setData] = useState([]);
    const [commentsCount, setCommentsCount] = useState(null);
    const [loading, setLoading] = useState(true);
    const [article, setArticle] = useState(null);
    const router = useRouter();
    const { articleID } = router.query;
    useEffect(() => {
        if (!router.isReady) return;

        loadPageData(articleID);
    }, [router.isReady, articleID]);
    const loadPageData = async (articleID) => {
        try {
            setLoading(true);
            const result = await http.get(`/comments/${articleID}`);
            setLoading(false);
            setData(result.data.comments);
            setArticle(result.data.article);
            setCommentsCount(result.data.totalCounts);
        } catch (err) { }
    };
    return (
        <div className="col-12 col-sm-12 col-md-8 col-lg-9">
            <div className="sectionTitle blueTitleBg clearfix d-flex">
                <h2 className="m-0 float-left mr-auto px-3">
                    {loading && !article
                        ? "Loading..."
                        : article
                            ? article.GROUP_NAME
                            : null}
                </h2>
            </div>
            <div className={`commentsList`}>
                <h2 className="commentViewTitle pt-3">
                    {" "}
                    {loading ? null : article ? (
                        article.author ? (
                            <a
                                rel="noopener noreferrer"
                                target="_blank"
                                href={`/${GetUrlLink(article.GROUP_NAME)}/${GetUrlLink(
                                    article.author
                                )}/${GetUrlLink(article.Article_Heading)}/d/${articleID}`}
                                className="d-block"
                            >
                                {article.Article_Heading}
                            </a>
                        ) : (
                            <a
                                rel="noopener noreferrer"
                                target="_blank"
                                href={`/${GetUrlLink(article.GROUP_NAME)}/${GetUrlLink(
                                    article.Article_Heading
                                )}/d/${articleID}`}
                                className="d-block"
                            >
                                {article.Article_Heading}
                            </a>
                        )
                    ) : null}
                </h2>
                {!data.length && loading ? (
                    <Spinner />
                ) : (
                    <CommentDetail comments={data} commentscount={commentsCount} />
                )}
            </div>
        </div>
    );
};
export default ViewComments;
