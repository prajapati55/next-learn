import React, { memo } from "react";
import Bootstrap, { Carousel } from "bootstrap-4-react";
import { GetUrlLink, GetCommentCountByArticleID } from "../utils/utility";
import CardSkelton from "../components/Spinner2.js";

class DebateIslam extends React.Component {
  componentDidMount() {
    (typeof window === 'undefined') ?
      'node' :
      window.setTimeout(() => Bootstrap.carousel("#carouselIndicat"), 2000);

  }

  render() {
    const { articles, comments } = this.props;

    return (
      <div className="debatingIslamWrap pt-3">
        {!articles.length ? (
          <CardSkelton />
        ) : (
          <Carousel w="100" id="carouselIndicat">
            <Carousel.Indicators>
              {articles.map((val, index) => {
                return (
                  <Carousel.Indicator
                    key={index}
                    target="#carouselIndicat"
                    to={index}
                    active={index === 0 ? true : false}
                  />
                );
              })}
            </Carousel.Indicators>

            <Carousel.Inner>
              {articles.map((innerArr, index) => {
                return (
                  <Carousel.Item
                    key={index}
                    active={index === 0 ? true : false}
                  >
                    <div className="row">
                      {innerArr.map((article) => {
                        return (
                          <div
                            key={article.Article_ID}
                            className="col-12 col-sm-6"
                          >
                            <div className="media position-relative debatingIslamBox">
                              {article.ImageName === "" ||
                                article.ImageName === "NAI_NewAgeIslam.jpg" ||
                                article.ImageName === "NAI_NewAgeIslam.png" ? (
                                <img
                                  src="/newageislam-dummy.jpg"
                                  className="img-fluid"
                                  alt={article.AutherName}
                                  width="90"
                                  height="75"
                                />
                              ) : (
                                <img
                                  src={article.ImgUrl}
                                  className="img-fluid"
                                  alt={article.AutherName}
                                  width="80px;"
                                  height="97px;"
                                />
                              )}
                              <div className="media-body px-3 py-2">
                                <h2 className="mb-1">{article.Group_Name}</h2>
                                <h3 className="mb-1">
                                  <a
                                    rel="noopener noreferrer"
                                    target="_blank"
                                    href={`/${GetUrlLink(
                                      article.Group_Name
                                    )}/${GetUrlLink(
                                      article.AutherName
                                    )}/${GetUrlLink(
                                      article.Article_Heading
                                    )}/d/${article.Article_ID}`}
                                    className="d-block"
                                  >
                                    {article.Article_Heading.replace(
                                      /<[^>]+>/g,
                                      ""
                                    ).length > 110
                                      ? article.Article_Heading.replace(
                                        /<[^>]+>/g,
                                        ""
                                      ).substring(0, 110) + "..."
                                      : article.Article_Heading.replace(
                                        /<[^>]+>/g,
                                        ""
                                      )}
                                  </a>
                                </h3>
                                <small className="font-italic d-block mb-1">
                                  By {article.AutherName}
                                </small>
                                <p
                                  dangerouslySetInnerHTML={{
                                    __html:
                                      article.Article_Detail.replace(
                                        /<[^>]+>/g,
                                        ""
                                      ).length > 100
                                        ? article.Article_Detail.replace(
                                          /<[^>]+>/g,
                                          ""
                                        ).substring(0, 100) + "..."
                                        : article.Article_Detail.replace(
                                          /<[^>]+>/g,
                                          ""
                                        ),
                                  }}
                                ></p>
                                {article.AutherName ? (
                                  <a
                                    rel="noopener noreferrer"
                                    target="_blank"
                                    href={`/${GetUrlLink(
                                      article.Group_Name
                                    )}/${GetUrlLink(
                                      article.AutherName
                                    )}/${GetUrlLink(
                                      article.Article_Heading
                                    )}/d/${article.Article_ID}`}
                                    className="stretched-link1"
                                  >
                                    Read More{" "}
                                    <i className="fa fa-angle-double-right"></i>
                                  </a>
                                ) : (
                                  <a
                                    rel="noopener noreferrer"
                                    target="_blank"
                                    href={`/${GetUrlLink(
                                      article.Group_Name
                                    )}/${GetUrlLink(
                                      article.Article_Heading
                                    )}/d/${article.Article_ID}`}
                                    className="stretched-link1"
                                  >
                                    Read More{" "}
                                    <i className="fa fa-angle-double-right"></i>
                                  </a>
                                )}
                                {GetCommentCountByArticleID(
                                  comments,
                                  article.Article_ID
                                ).length ? (
                                  <p className="text-danger numberComment d-inline-block">
                                    (Comments{" "}
                                    {
                                      GetCommentCountByArticleID(
                                        comments,
                                        article.Article_ID
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
                      })}
                    </div>
                  </Carousel.Item>
                );
              })}
            </Carousel.Inner>
            <Carousel.Prev href="#carouselIndicat">
              <Carousel.Prev.Icon />
            </Carousel.Prev>
            <Carousel.Next href="#carouselIndicat">
              <Carousel.Next.Icon />
            </Carousel.Next>
          </Carousel>
        )}
      </div>
    );
  }
}

export default memo(DebateIslam);
