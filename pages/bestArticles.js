import { useState, useEffect } from "react";

const bestArticles = () => {
    const [bestProps, setBestProps] = new useState({
        articles: [],
        pageLimit: 15,
        currentPage: 1,
        totalCount: null,
        heading: "Rethinking Islam   (Best of Before Articles)",
        comments: []
    })
    const [loading, setLoading] = new useState(true);

    return <h1>Best of Articles</h1>
}

export default bestArticles;
