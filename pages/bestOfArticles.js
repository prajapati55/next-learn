import { useState, useEffect } from "react";
import { useRouter } from "next/router"
import Article from "../components/article.list";
import api from "../http";
import PaginationComp from "../components/pagination";
import Spinner from "../components/Spinner";

const bestArticles = () => {
    const router = useRouter();
    const [bestProps, setBestProps] = new useState({
        articles: [],
        pageLimit: 15,
        currentPage: 1,
        totalCount: null,
        heading: "Rethinking Islam   (Best of Before Articles)",
        comments: []
    })
    const [loading, setLoading] = new useState(true);

    useEffect(() => {
        getDataByParams()
    }, [])

    const fetchData = async (params, heading) => {
        try {
            setLoading(true)
            const response = await api.get("/getBestOfBeforeArtilces", {
                params,
            });
            setLoading(false);
            setBestProps({
                articles: response.data.results,
                pageLimit: response.data.pageLimit,
                totalCount: response.data.totalCount,
                comments: response.data.comments,
                heading: heading,
            })

        } catch {
            setLoading(false);
            setBestProps({
                articles: [],
                pageLimit: 15,
                currentPage: 1,
                totalCount: null,
                heading: heading,
                comments: []
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
            "Rethinking Islam   (Best of Before Articles)"
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
    } = bestProps;

    let articleList = <Spinner />;
    if (articles.length) {
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

export default bestArticles;
