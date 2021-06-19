import React from "react";
import { GetUrlLink, GetCommentCountByArticleID, checkContentIsUrdu } from "../utils/utility";

const articleList = ({ isShowGroupHeading, article, comments }) => {
  const {
    Article_Detail,
    Article_ID,
    Article_Heading,
    AutherName,
    ImageName,
    Group_Name,
    Group_ID,
    ImgUrl
  } = article;
  return (
    <React.Fragment>
      <div className={`debatingIslamWrap ${Group_ID === 48 || (checkContentIsUrdu(Article_Heading) && Group_ID !== 51) ? "urduFont" : ""}`}>
        <div className="media position-relative debatingIslamBox border-bottom pb-2 mb-2">
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
            <img src="/newageislam-dummy.jpg" className="img-fluid" alt="" />
          )}
          <div className="media-body px-3 pb-2">
            <h2 className="mb-1">{isShowGroupHeading ? Group_Name : null}</h2>
            <h3 className={`mb-1`}>
              {AutherName ? (
                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  href={`/${GetUrlLink(Group_Name)}/${GetUrlLink(
                    AutherName
                  )}/${GetUrlLink(Article_Heading)}/d/${Article_ID}`}
                  className="d-block"
                >
                  {Article_Heading}
                </a>
              ) : (
                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  href={`/${GetUrlLink(Group_Name)}/${GetUrlLink(
                    Article_Heading
                  )}/d/${Article_ID}`}
                  className="d-block"
                >
                  {Article_Heading}
                </a>
              )}
            </h3>
            <small className="font-italic d-block mb-1">By {AutherName}</small>
            <p
              dangerouslySetInnerHTML={{
                __html:
                  Article_Detail.replace(/<[^>]+>/g, "").length > 350
                    ? Article_Detail.replace(/<[^>]+>/g, "").substring(0, 350) +
                    "..."
                    : Article_Detail.replace(/<[^>]+>/g, ""),
              }}
            ></p>
            {AutherName ? (
              <a
                rel="noopener noreferrer"
                target="_blank"
                href={`/${GetUrlLink(Group_Name)}/${GetUrlLink(
                  AutherName
                )}/${GetUrlLink(Article_Heading)}/d/${Article_ID}`}
                className="stretched-link1 d-block"
              >
                Read More <i className="fa fa-angle-double-right"></i>
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
                Read More <i className="fa fa-angle-double-right"></i>
              </a>
            )}
            {comments &&
              GetCommentCountByArticleID(comments, Article_ID).length ? (
              <p className="text-danger numberComment d-inline-block">
                (Comments{" "}
                {
                  GetCommentCountByArticleID(comments, Article_ID)[0][
                  "totalComments"
                  ]
                }
                )
              </p>
            ) : (
              <p className="text-danger numberComment d-inline-block">
                (Comments 0)
              </p>
            )}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default articleList;
