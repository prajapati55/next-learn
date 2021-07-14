import React from "react";
const videoSection = ({ video }) => (
    <div className="videoRow border-bottom mb-3">
        <div className="row">
            {video.map(({ ID, YOUTUBE_LINK, TITLE }) => {
                return (
                    <React.Fragment key={ID}>
                        {/* <h4 className="mb-3">{TITLE}</h4> */}
                        <div className="col-12 col-sm-12 col-md-6 mb-4">
                            <iframe
                                width="288"
                                height="243"
                                src={`https://www.youtube.com/embed/${YOUTUBE_LINK}`}
                                frameBorder="0"
                                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                title={TITLE}
                            ></iframe>
                        </div>
                    </React.Fragment>
                );
            })}
        </div>
    </div>
);

export default videoSection;
