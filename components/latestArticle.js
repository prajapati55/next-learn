import React from "react";
import { GetUrlLink, GetCommentCountByArticleID } from "../utils/utility";
import CardSkelton from "../components/Spinner2";

const latestArticle = ({ latestAricles, comments }) => (
  <section className="langlatestArtiSection mb-4">
    <div className="container">
      <div className="row">
        <div className="col-12 col-sm-12 col-lg-12">
          <div className="sectionTitle greenTitleBg clearfix d-flex">
            <h2 className="m-0 float-left mr-auto px-3">Latest Articles</h2>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="/latestArticles"
              className="btn btn-success btn-sm border-0 viewAllBtn"
            >
              View All <i className="fa fa-angle-double-right"></i>
            </a>
          </div>
          <div className="latestArticle">
            {latestAricles && !latestAricles.length ? <CardSkelton /> : null}
            <div className="row">
              {latestAricles.map(
                ({
                  Article_ID,
                  AutherName,
                  Article_Heading,
                  Article_Detail,
                  ImageName,
                  Group_Name,
                  ImgUrl
                }) => {
                  let parsedAHeading = Article_Heading.replace(/<[^>]+>/g, "");
                  let parsedADetail = Article_Detail.replace(/<[^>]+>/g, "");
                  let AHeading =
                    parsedAHeading.length > 73
                      ? parsedAHeading.substring(0, 73) + ".."
                      : parsedAHeading;
                  let AdetailLen = parsedAHeading.length < 52 ? 50 : 40;
                  let ADetail =
                    parsedADetail.length > AdetailLen
                      ? parsedADetail.substring(0, AdetailLen) + ".."
                      : parsedADetail;
                  return (
                    <div
                      key={Article_ID.toString()}
                      className="col-12 col-sm-12 col-md-6 col-lg-4"
                    >
                      <div className="media position-relative latestArticleBox border-bottom py-2">
                        {ImageName &&
                          ImageName !== "NAI_NewAgeIslam.jpg" &&
                          ImageName !== "NAI_NewAgeIslam.png" ? (
                          <img
                            src={ImgUrl}
                            className="img-fluid"
                            alt={AutherName}
                            width="80px;"
                            height="97px;"
                          />
                        ) : (
                          <img
                            src="/newageislam-dummy.jpg"
                            className="img-fluid"
                            alt={AutherName}
                            width="90"
                            height="75"
                          />
                        )}
                        <div className="media-body pl-2">
                          <h4 className="m-0">{Group_Name}</h4>
                          <h3 className="m-0">
                            {AutherName ? (
                              <a
                                rel="noopener noreferrer"
                                target="_blank"
                                href={`/${GetUrlLink(Group_Name)}/${GetUrlLink(
                                  AutherName
                                )}/${GetUrlLink(
                                  Article_Heading
                                )}/d/${Article_ID}`}
                                className="stretched-link1 d-block"
                              >
                                {AHeading}
                              </a>
                            ) : (
                              <a
                                rel="noopener noreferrer"
                                target="_blank"
                                href={`/${GetUrlLink(Group_Name)}/${GetUrlLink(
                                  Article_Heading
                                )}/d/${Article_ID}`}
                                className="stretched-link1 d-block"
                              >
                                {AHeading}
                              </a>
                            )}
                          </h3>
                          <small className="font-italic d-block mb-0">
                            By {AutherName}
                          </small>
                          <p
                            dangerouslySetInnerHTML={{
                              __html: ADetail,
                            }}
                          ></p>
                          {GetCommentCountByArticleID(comments, Article_ID)
                            .length ? (
                            <p className="text-danger numberComment d-inline-block">
                              (Comments{" "}
                              {
                                GetCommentCountByArticleID(
                                  comments,
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
                        </div>
                      </div>
                    </div>
                  );
                }
              )}
            </div>
          </div>

          <div className="col-12 text-right mt-3 p-0 bottomBtn">
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="/latestArticles"
              className="btn btn-success btn-sm border-0 viewAllBtn"
            >
              View All <i className="fa fa-angle-double-right"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default latestArticle;
