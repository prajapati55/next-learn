import React from "react";
import LiTag from "../components/liTag";
import { GetUrlLink, GetCommentCountByArticleID } from "../utils/utility";
import CardSkleton from "../components/Spinner2";

const popularArtilces = ({
  mostPopularArticles,
  popularComments,
  documentsData,
  documentsComments,
}) => (
  <section className="commentsBookSection">
    <div className="container">
      <div className="row">
        <div className="col-12 col-sm-12 col-lg-6 mb-4">
          <div className="sectionTitle redTitleBg clearfix d-flex">
            <h2 className="m-0 float-left mr-auto px-3">Popular Articles</h2>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="/popularArticles"
              className="btn btn-danger btn-sm border-0 viewAllBtn"
            >
              View All <i className="fa fa-angle-double-right"></i>
            </a>
          </div>
          <div className="pt-2 pagesLinks lineheightText">
            <ul className="m-0 p-0 list-unstyled">
              {!mostPopularArticles.length ? (
                <CardSkleton />
              ) : (
                mostPopularArticles
                  .slice(0, 10)
                  .map(({ Article_ID, Article_Heading, GROUP_NAME }) => {
                    return (
                      <React.Fragment key={Article_ID}>
                        <LiTag liClass="border-bottom">
                          <a
                            rel="noopener noreferrer"
                            target="_blank"
                            href={`/${GetUrlLink(GROUP_NAME)}/${GetUrlLink(
                              Article_Heading
                            )}/d/${Article_ID}`}
                            title={Article_Heading}
                          >
                            {Article_Heading}
                          </a>
                          {GetCommentCountByArticleID(
                            popularComments,
                            Article_ID
                          ).length ? (
                            <p className="text-danger numberComment d-inline-block">
                              (Comments{" "}
                              {
                                GetCommentCountByArticleID(
                                  popularComments,
                                  Article_ID
                                )[0]["totalComments"]
                              }
                              )
                            </p>
                          ) : (
                            <p className="text-danger numberComment d-inline-block">
                              (Comments 0 )
                            </p>
                          )}
                        </LiTag>
                      </React.Fragment>
                    );
                  })
              )}
            </ul>
          </div>

          <div className="col-12 text-right mt-3 p-0 bottomBtn">
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="/popularArticles"
              className="btn btn-danger btn-sm border-0 viewAllBtn"
            >
              View All <i className="fa fa-angle-double-right"></i>
            </a>
          </div>

        </div>
        <div className="col-12 col-sm-12 col-lg-6 mb-4">
          <div className="sectionTitle greenTitleBg clearfix d-flex">
            <h2 className="m-0 float-left mr-auto px-3">Books and Documents</h2>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="/a/books-and-documents"
              className="btn btn-success btn-sm border-0 viewAllBtn"
            >
              View All <i className="fa fa-angle-double-right"></i>
            </a>
          </div>
          <div className="pt-2 pagesLinks lineheightText">
            <ul className="m-0 p-0 list-unstyled">
              {!documentsData.length ? (
                <CardSkleton />
              ) : (
                documentsData.map(
                  ({ Article_ID, Article_Heading, Group_Name: GROUP_NAME }) => {
                    return (
                      <React.Fragment key={Article_ID}>
                        <LiTag liClass="border-bottom">
                          <a
                            rel="noopener noreferrer"
                            target="_blank"
                            href={`/${GetUrlLink(GROUP_NAME)}/${GetUrlLink(
                              Article_Heading
                            )}/d/${Article_ID}`}
                            title={Article_Heading}
                          >
                            {Article_Heading}
                          </a>
                          {GetCommentCountByArticleID(
                            documentsComments,
                            Article_ID
                          ).length ? (
                            <p className="text-danger numberComment d-inline-block">
                              (Comments{" "}
                              {
                                GetCommentCountByArticleID(
                                  documentsComments,
                                  Article_ID
                                )[0]["totalComments"]
                              }
                              )
                            </p>
                          ) : (
                            <p className="text-danger numberComment d-inline-block">
                              (Comments 0 )
                            </p>
                          )}
                        </LiTag>
                      </React.Fragment>
                    );
                  }
                )
              )}
            </ul>

            <div className="col-12 text-right mt-3 p-0 bottomBtn">
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="/articles/sections/books-and-documents/36"
                className="btn btn-success btn-sm border-0 viewAllBtn"
              >
                View All <i className="fa fa-angle-double-right"></i>
              </a>
            </div>

          </div>
        </div>
      </div>
    </div>
  </section>
);

export default popularArtilces;
