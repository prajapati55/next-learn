import { useState, useEffect } from "react";
import { useRouter } from "next/router"
import CommentSection from "../components/comment";
import api from "../http";
import PaginationComp from "../components/pagination";
import Spinner from "../components/Spinner";

const latestComments = () => {
    const router = useRouter();
    const [latestComments, setLatestComments] = new useState({
        comments: [],
        pageLimit: 15,
        currentPage: 1,
        totalCount: null,
        heading: "Latest Comments",
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
            const response = await api.get("/latestComments", {
                params,
            });
            setLoading(false);
            setLatestComments({
                comments: response.data.results,
                pageLimit: response.data.pageLimit,
                totalCount: response.data.totalCount,
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
            "Latest Comments",
        );
    };

    const onPageChanged = (data) => {
        const currentPage = data;
        getDataByParams(currentPage);
    };

    const { comments, totalCount, pageLimit, currentPage, heading } = latestComments;
    let articleList = <Spinner />;
    if (comments.length && !loading) {
        articleList = comments.map((comment) => {
            return (
                <CommentSection
                    key={comment.Comments_ID}
                    Article_Heading={comment.Article_Heading}
                    Comments={comment.Comments}
                    Articles_ID={comment.Articles_ID}
                    Comments_ID={comment.Comments_ID}
                    Name={comment.Name}
                    GROUP_NAME={comment.GROUP_NAME}
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

export default latestComments;
