// import { useRouter } from "next/router";
import api from "../http"
import Detail from "../components/detail";
import Spinner from "../components/Spinner";

const ArticleDetail = ({ detail }) => {
    const content = !detail ? <Spinner /> : <Detail article={detail[0]} />;
    return content;
};

export default ArticleDetail;

export async function getStaticProps(context) {
    const paramsObj = context.params;
    const articleID = paramsObj.params[paramsObj.params.length - 1];
    if (!isNaN(articleID)) {
        console.log(articleID);
        const result = await api.get(`/article/${articleID}`);
        return {
            props: {
                detail: result.data
            }, // will be passed to the page component as props
        }
    }

    return {
        props: {
        }, // will be passed to the page component as props
    }
}

export async function getStaticPaths() {
    // const result = await api.get("/sections");
    // const result2 = await api.get("/authors");
    // const sectionsData = result.data.map((category) => GetUrlLink(category.Group_Name.toLowerCase()));
    // const writersData = result2.data.map((writer) => GetUrlLink(writer.writerName.toLowerCase()));
    // const allData = [...writersData, ...sectionsData];
    // // Get the paths we want to pre-render based on posts
    // const paths = allData.map((category) => ({
    //     params: { articleSlug: category },
    // }))

    return {
        paths: [],
        fallback: true // See the "fallback" section below
    };
}