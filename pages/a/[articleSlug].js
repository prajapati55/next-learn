import { Fragment, useState, useEffect } from "react";
import { useRouter } from "next/router"
import api from "../../http";
import Article from "../../components/article.list";
import PaginationComp from "../../components/pagination";
import WriterAbout from "../../components/writerDetail";
import Spinner from "../../components/Spinner";
import { GetUrlLink } from "../../utils/utility";


const ArticleList = ({ writers, sections }) => {
    const router = useRouter();
    const { articleSlug, page } = router.query;
    const [listdata, setListdata] = useState({
        articles: [],
        totalCount: null,
        pageLimit: 15,
        comments: [],
        writerDescription: [],
        heading: articleSlug,
    });
    const [currentPage, setCurrentPage] = useState(page ? page : 1);
    const [loading, setLoading] = useState(false);



    const getDataByParams = async (authorId, groupId, page = 1) => {
        router.push({ pathname: router.pathname, query: { articleSlug, page } });
        try {
            let params = {};
            if (authorId) {
                params = {
                    authorId,
                    page,
                };
            }

            if (groupId) {
                params = {
                    groupId,
                    page,
                };
            }
            let heading = articleSlug;
            fetchData(params, heading);
        } catch (err) {
            console.log(err);
        }
    };
    useEffect(() => {
        const { writerId, sectionId } = getRelatedIdByParams();
        setLoading(true);
        getDataByParams(writerId, sectionId, currentPage)
    }, [articleSlug]);

    const fetchData = async (params, heading) => {
        try {
            const response = await api.get("/getArtilcesBy", {
                params,
            });
            let heading = heading;
            if (params.groupId && response.data.results.length) {
                heading =
                    response.data.results[response.data.results.length - 1]["Group_Name"];
            } else if (response.data.description.length) {
                heading = response.data.description[0]["writerName"];
            }
            setLoading(false);
            setListdata({
                articles: response.data.results,
                totalCount: response.data.totalCount,
                pageLimit: response.data.pageLimit,
                comments: response.data.comments,
                writerDescription: response.data.description,
                heading,
            })

        } catch {
            setListdata({
                articles: [],
                totalCount: null,
                pageLimit: 15,
                comments: [],
                writerDescription: [],
                heading: articleSlug,
            });
        }
    }
    const onPageChanged = (data) => {
        const { writerId, sectionId } = getRelatedIdByParams();
        const currentPage = data;
        setCurrentPage(currentPage);
        setLoading(true);
        getDataByParams(writerId, sectionId, currentPage);
    };
    const getRelatedIdByParams = () => {
        const optWriter = writers.find(
            (writer) =>
                GetUrlLink(writer.writerName.toLowerCase()) === GetUrlLink(articleSlug)
        );
        if (optWriter) {
            return { writerId: optWriter.writerId, sectionId: null, articleSlug };
        } else {
            const Filtersection = sections.find(
                (section) =>
                    GetUrlLink(section.Group_Name.toLowerCase()) ===
                    GetUrlLink(articleSlug)
            );
            if (Filtersection) {
                return {
                    writerId: null,
                    sectionId: Filtersection.GroupID,
                    articleSlug,
                };
            }
        }
    };
    const { writerDescription, totalCount, heading, comments, articles, pageLimit } = listdata;
    let articleList = <Spinner />;
    if (articles.length) {
        articleList = articles.map((article) => {
            return (
                <Article
                    key={article.Article_ID}
                    article={article}
                    isShowGroupHeading={false}
                    comments={comments}
                />
            );
        });
    } else if (!articles.length && !loading) {
        articleList = <h3> There is no data</h3>;
    }

    return <Fragment>
        {/* {this.head()} */}
        <div className="col-12 col-sm-12 col-md-8 col-lg-9">
            <div className="sectionTitle blueTitleBg clearfix d-flex">
                <h2 className="m-0 float-left mr-auto px-3">{articleSlug}</h2>
            </div>
            <div className="pageWrap p-3 bg-light shadow-sm">
                {writerDescription.length && !loading ? (
                    <WriterAbout writer={writerDescription[0]} />
                ) : null}
                {articleList}
            </div>
            {!totalCount ? null : (
                <PaginationComp
                    firstPageText={
                        <i className="fa fa-angle-double-left" aria-hidden="true" />
                    }
                    lastPageText={
                        <i className="fa fa-angle-double-right" aria-hidden="true"></i>
                    }
                    prevPageText={
                        <i className="fa fa-angle-left" aria-hidden="true" />
                    }
                    nextPageText={
                        <i className="fa fa-angle-right" aria-hidden="true" />
                    }
                    activePage={+currentPage}
                    itemsCountPerPage={pageLimit}
                    totalItemsCount={totalCount}
                    onChange={onPageChanged}
                    itemClass="page-item"
                    linkClass="page-link"
                />
            )}
        </div>
    </Fragment>
}

export default ArticleList;

export async function getStaticProps(context) {
    const result = await api.get("/sections");
    const result2 = await api.get("/authors");
    return {
        props: {
            writers: result2.data,
            sections: result.data
        }, // will be passed to the page component as props
    }
}

export async function getStaticPaths() {
    const result = await api.get("/sections");
    const result2 = await api.get("/authors");
    const sectionsData = result.data.map((category) => GetUrlLink(category.Group_Name.toLowerCase()));
    const writersData = result2.data.map((writer) => GetUrlLink(writer.writerName.toLowerCase()));
    const allData = [...writersData, ...sectionsData];
    // Get the paths we want to pre-render based on posts
    const paths = allData.map((category) => ({
        params: { articleSlug: category },
    }))

    return {
        paths,
        fallback: true // See the "fallback" section below
    };
}