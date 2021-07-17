import { Fragment } from "react"
import { formatDateTime, checkContentIsUrdu, decodeHtml } from "../utils/utility";

const CommentDetail = ({ comments, commentscount }) => {
    let commentHtml = (
        <div className="articleComments py-3 border-bottom">
            {" "}
      There are no comments on this Article{" "}
        </div>
    );
    let total = commentscount;
    if (comments.length) {
        commentHtml = comments.map(
            ({ Comments, Name, Comments_ID, CreatedDateTime }) => {
                let Str = (
                    <li
                        className={`articleComments py-3 border-bottom ${checkContentIsUrdu(Comments) ? "text-right" : ""
                            }`}
                        key={Comments_ID}
                    >
                        <em className="commentCount"> {total}.</em>
                        <div
                            className="mb-1"
                            dangerouslySetInnerHTML={{
                                __html: decodeHtml(Comments),
                            }}
                        ></div>
                        <small className="font-italic d-block mb-1">
                            <b>{`By ${Name} `}</b>
                            {"     "}
                            <b className="pl-1">{formatDateTime(CreatedDateTime)}</b>
                        </small>
                    </li>
                );
                total--;
                return Str;
            }
        );
        commentHtml = (
            <ul className="m-0 commentListAll list-unstyled">{commentHtml}</ul>
        );
    }
    return (
        <Fragment>
            <div className="sectionTitle blueTitleBg clearfix d-flex">
                <h2 className="m-0 float-left mr-auto px-3 ArticleCommentTitle">
                    Total Comments ({commentscount})
        </h2>
                {/* <a className="p-2" href="../#articleCommentForm">Write a Comment <i class="fa fa-pencil-square-o"></i></a> */}
            </div>
            {commentHtml}
        </Fragment>
    );
};

export default CommentDetail;
