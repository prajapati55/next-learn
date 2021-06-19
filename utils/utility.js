import React from "react";
export const strRegex = /[`~!@#$%^*()_|+\=?;:'‘’"“,.”<>\{\}\[\]]/gi;
export const GetUrlLink = (heading) => {
    heading = heading.split(" ").join("-");
    heading = heading.split(":").join("-");
    heading = heading.split("'").join("-");
    heading = heading.split("+").join("-");
    heading = heading.split("&").join("-");
    heading = heading.split("/").join("-");
    heading = heading.split(".").join("");
    heading = heading.split("?").join("");
    heading = heading.replace(/--|---/g, "-");
    return heading.replace(strRegex, "").toLowerCase();
};

export const GetCommentCountByArticleID = (comments, Article_ID) => {
    return comments.filter((comment) => comment.Article_ID === +Article_ID);
};

export const formatDateTime = (dateTimestr) => {
    if (!dateTimestr) {
        return null;
    }
    let dateArr = dateTimestr.split("T");
    let dateSplitArr = dateArr[0].split("-");
    let newDateTime = `${dateSplitArr[2] + "/" + dateSplitArr[1] + "/" + dateSplitArr[0]
        }  ${dateArr[1].split(".")[0]}`;

    return newDateTime;
};

export const checkImageExists = (ImageName, AutherName) => {
    if (typeof window !== "undefined") {
        var image = new Image();
        var url_image = `https://www.newageislam.com/Controlpanel/ArticleImage/at_th_${ImageName}`;
        image.src = url_image;
        if (image.width === 0) {
            return (
                <img
                    src={`https://www.newageislam.com/Controlpanel/ArticleImage/${ImageName}`}
                    className="img-fluid"
                    alt={AutherName}
                    width="80px;"
                    height="97px;"
                />
            );
        } else {
            return (
                <img
                    src={`https://www.newageislam.com/Controlpanel/ArticleImage/at_th_${ImageName}`}
                    className="img-fluid"
                    alt={AutherName}
                    width="80px;"
                    height="97px;"
                />
            );
        }
    }
    return null;
};

export const checkContentIsUrdu = (content) => {
    if (!content) return false;
    let urduRange = /[\u0600-\u06FF\u0750-\u077F]/g;// /[\u0600-\u06FF]/;
    if (!urduRange.test(content)) {
        return false;
    }
    let filterdContent = content.replace(/<[^>]+>/g, "").replace(/(?:^(?:&nbsp;)+)|(?:(?:&nbsp;)+$)/g, '').replace(/&nbsp;/g, '').replace(/(<|&lt;)br\s*\/*(>|&gt;)/g, "").replace(/[\W_]/g, "").trim();
    return !filterdContent.replace(urduRange, "").trim().length
};

export const decodeHtml = (str) => {
    var map = {
        "&amp;": "&",
        "&lt;": "<",
        "&gt;": ">",
        "&quot;": '"',
        "&#039;": "'",
    };
    return str.replace(/&amp;|&lt;|&gt;|&quot;|&#039;/g, function (m) {
        return map[m];
    })
};

export const removeUnwantedCharacter = (str) => {
    return str.replace(strRegex, "")
};