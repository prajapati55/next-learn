import React from "react";
import { GetUrlLink, decodeHtml } from "../utils/utility";
import CardSkelton from "../components/Spinner2";

const latestComments = ({ latestComments, latestVideos }) => (
  <section className="sectionPopularVideo mb-4">
    <div className="container">
      <div className="row">
        <div className="col-12 col-sm-12 col-lg-8">
          <div className="sectionTitle redTitleBg clearfix d-flex">
            <h2 className="m-0 float-left mr-auto px-3">Latest Comments</h2>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="/latestComments"
              className="btn btn-danger btn-sm border-0 viewAllBtn"
            >
              View All <i className="fa fa-angle-double-right"></i>
            </a>
          </div>
          <div className="latestComment pt-3">
            {latestComments.length ? null : <CardSkelton />}
            <ul className="mb-0 list-unstyled row">
              {latestComments.slice(0, 6).map(
                ({
                  Comments_ID,
                  Articles_ID,
                  Article_Heading,
                  Comments,
                  Name,
                  GROUP_NAME,
                }) => {
                  let stripedHtml = decodeHtml(Comments.replace(/<[^>]+>/g, ""));
                  return (
                    <li
                      key={Comments_ID}
                      className="col-12 col-sm-12 col-md-6 col-lg-6"
                    >
                      <div className="media position-relative debatingIslamBox">
                        <div className="media-body px-3 py-2">
                          <h3 className="mb-1">
                            <a
                              rel="noopener noreferrer"
                              target="_blank"
                              href={`/${GetUrlLink(GROUP_NAME)}/${GetUrlLink(
                                Article_Heading
                              )}/d/${Articles_ID}`}
                              className="stretched-link1 d-block"
                            >
                              {Article_Heading.replace(/<[^>]+>/g, "").length > 70
                                ? Article_Heading.replace(
                                  /<[^>]+>/g,
                                  ""
                                ).substring(0, 100) + "..."
                                : Article_Heading.replace(/<[^>]+>/g, "")}
                            </a></h3>
                          <p
                            className="mb-1"
                            dangerouslySetInnerHTML={{
                              __html:
                                stripedHtml.length < 100
                                  ? stripedHtml
                                  : stripedHtml.substring(0, 100) + "...",
                            }}
                          ></p>
                          <small className="font-italic d-block mb-1">
                            {`By ${Name}`}
                          </small>
                        </div>
                      </div>
                    </li>
                  );
                }
              )}
            </ul>
          </div>

          <div className="col-12 text-right mt-0 p-0 bottomBtn">
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="/latestComments"
              className="btn btn-danger btn-sm border-0 viewAllBtn"
            >
              View All Comments <i className="fa fa-angle-double-right"></i>
            </a>
          </div>
        </div>
        <div className="col-12 col-sm-12 col-lg-4 mb-4">
          <div className="sectionTitle greenTitleBg clearfix d-flex">
            <h2 className="m-0 float-left mr-auto px-3">New Videos</h2>
            <a
              target="_blank"
              href="/latestVideos"
              className="btn btn-success btn-sm border-0 viewAllBtn"
            >
              View All <i className="fa fa-angle-double-right"></i>
            </a>
          </div>
          <div className="pt-3 lineheightText newVideos">
            <iframe
              width="288"
              height="243"
              src={
                latestVideos.length
                  ? `https://www.youtube.com/embed/${latestVideos[0]["YOUTUBE_LINK"]}`
                  : null
              }
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="islam-debate"
            ></iframe>
            <ul className="m-0 p-0 list-unstyled">
              {latestVideos
                .slice(1, 4)
                .filter((video) => video.IMG_NAME !== "abc.jpg")
                .map(({ ID, TITLE, IMG_NAME }) => {
                  return (
                    <li key={ID}>
                      <div className="media position-relative latestArticleBox border-bottom py-2">
                        <img
                          src={`https://www.newageislam.com/admn/VedioFiles/${IMG_NAME}`}
                          className="img-fluid"
                          alt={TITLE}
                        />
                        <div className="media-body pl-2">
                          <h3 className="m-0">{TITLE}</h3>
                          <a href="/" className="stretched-link d-block">
                            Read More{" "}
                            <i className="fa fa-angle-double-right"></i>
                          </a>
                        </div>
                      </div>
                    </li>
                  );
                })}
            </ul>
          </div>

          <div className="col-12 text-right mt-3 p-0">
            <a
              target="_blank"
              href="/latestVideos"
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

export default latestComments;
