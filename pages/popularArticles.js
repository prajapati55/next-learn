import { useState, useEffect } from "react";
import { useRouter } from "next/router"
import Article from "../components/article.list";
import api from "../http";
import PaginationComp from "../components/pagination";
import Spinner from "../components/Spinner";

const latestArticles = () => {
    const router = useRouter();
    const [popularArticles, setPopularArticles] = new useState({
        articles: [],
        pageLimit: 15,
        currentPage: 1,
        totalCount: null,
        heading: "Popular Articles",
        comments: [],
    })
    const [loading, setLoading] = new useState(true);

    useEffect(() => {
        if (!router.isReady) return;
        // codes using router.query
        getDataByParams(router.query.page ? router.query.page : 1)
    }, [router.isReady]);


    const fetchData = async (params, heading) => {
        try {
            setLoading(true)
            const response = await api.get("/getMostPopularArticles", {
                params,
            });
            setLoading(false);
            setPopularArticles({
                articles: response.data.results,
                pageLimit: response.data.pageLimit,
                totalCount: response.data.totalCount,
                comments: response.data.comments,
                heading: heading,
                currentPage: params.page
            })

        } catch {
            setLoading(false);
            setBestProps({
                articles: [],
                pageLimit: 15,
                currentPage: 1,
                totalCount: null,
                heading: heading,
                comments: [],
                currentPage: params.page
            });
        }
    }

    const getDataByParams = async (page = 1) => {
        router.push({ pathname: router.pathname, query: { page } });

        let params = {
            view: "list",
            page,
        };
        fetchData(
            params,
            "Popular Articles"
        );
    };

    const onPageChanged = (data) => {
        const currentPage = data;
        getDataByParams(currentPage);
    };

    const {
        articles,
        totalCount,
        pageLimit,
        comments,
        currentPage,
        heading
    } = popularArticles;

    let articleList = <Spinner />;
    if (articles.length && !loading) {
        articleList = articles.map((article) => {
            return (
                <Article
                    key={article.Article_ID}
                    article={article}
                    isShowGroupHeading
                    comments={comments}
                />
            );
        });
    }

    return <div className="col-12 col-sm-12 col-md-8 col-lg-9">
        <div className="sectionTitle blueTitleBg clearfix d-flex">
            <h2 className="m-0 float-left mr-auto px-3">{heading}</h2>
        </div>
        <div className="pageWrap p-3 bg-light shadow-sm">{articleList}</div>

        {!totalCount ? null : (
            <div className="text-center">
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
            </div>
        )}
    </div>
}

export default latestArticles;
