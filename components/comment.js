import React from "react";
import LiTag from "../components/liTag";
import { GetUrlLink, decodeHtml } from "../utils/utility";

const commentSection = ({
    Comments_ID,
    Article_Heading,
    Comments,
    Name,
    GROUP_NAME,
    Articles_ID
}) => {
    let stripedHtml = decodeHtml(Comments.replace(/<[^>]+>/g, ""));
    return (<LiTag key={Comments_ID}>
        <div className="media position-relative debatingIslamBox">
            <div className="media-body px-3 py-2">
                <h2 className="mb-1">
                    <a
                        href={`/${GetUrlLink(GROUP_NAME)}/${GetUrlLink(
                            Article_Heading
                        )}/d/${Articles_ID}`}
                        className="stretched-link1 d-block"
                    >
                        {Article_Heading}
                    </a>
                </h2>
                <div
                    className="mb-1"
                    dangerouslySetInnerHTML={{
                        __html: stripedHtml.length < 200
                            ? stripedHtml
                            : stripedHtml.substring(0, 200) + "...",
                    }}
                ></div>
                <small className="font-italic d-block mb-1">{`By ${Name}`}</small>
                <a
                    href={`/${GetUrlLink(GROUP_NAME)}/${GetUrlLink(
                        Article_Heading
                    )}/d/${Articles_ID}`}
                    className="stretched-link1 d-block"
                >
                    Read More <i className="fa fa-angle-double-right"></i>
                </a>
            </div>
        </div>
    </LiTag>
    );
}

export default commentSection;
