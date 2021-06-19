import { Fragment, useState, useEffect } from "react";
import { useRouter } from "next/router"
import api from "../../http";
import Article from "../../components/article.list";
import PaginationComp from "../../components/pagination";
import WriterAbout from "../../components/writerDetail";
import Spinner from "../../components/Spinner";
import { GetUrlLink } from "../../utils/utility";
const data = [
    { writerId: 2, writerName: "Sultan Shahin" },
    { writerId: 3, writerName: "Mohammad Yunus" },
    { writerId: 4, writerName: "Naseer Ahmad" },
    { writerId: 5, writerName: "Ghulam Ghaus" },
    { writerId: 6, writerName: "Ghulam Rasool" },
    { writerId: 7, writerName: "Arshad Alam" },
    {
        GroupID: 48,
        Group_Name: "Urdu Section",
        DetailPage: "NewAgeIslamUrduSection_1.aspx",
    },
    {
        GroupID: 49,
        Group_Name: "Hindi Section",
        DetailPage: "NewAgeIslamHindiSection_1.aspx",
    },
    {
        GroupID: 54,
        Group_Name: "Bangla Section",
        DetailPage: "NewAgeIslamBanglaSection_1.aspx",
    },
    { GroupID: 61, Group_Name: "Assamese Section", DetailPage: null },
    { GroupID: 62, Group_Name: "Tamil Section", DetailPage: "fgf" },
    { GroupID: 63, Group_Name: "Kannada Section", DetailPage: "hhgh" },
    { GroupID: 59, Group_Name: "Malayalam Section", DetailPage: "sdsd" },
    { GroupID: 51, Group_Name: "Arabic Section", DetailPage: null },
    { GroupID: 52, Group_Name: "Persian Section", DetailPage: null },
    { GroupID: 53, Group_Name: "French Section", DetailPage: null },
    {
        GroupID: 34,
        Group_Name: "Debating Islam",
        DetailPage: "NewAgeIslamDebate_1.aspx",
    },
    {
        GroupID: 60,
        Group_Name: "Islamic Q and A",
        DetailPage: "NewAgeIslamBanglaSection.aspx?GroupID=54",
    },
    {
        GroupID: 35,
        Group_Name: "Multimedia",
        DetailPage: "NewAgeIslamVideos.aspx",
    },
    {
        GroupID: 37,
        Group_Name: "Archives",
        DetailPage: "NewAgeIslamBestArticle.aspx",
    },
    {
        GroupID: 36,
        Group_Name: "Books and Documents",
        DetailPage: "NewAgeIslamBooksAndDocuments_1.aspx",
    },
    {
        GroupID: 42,
        Group_Name: "Islamic World News",
        DetailPage: "NewAgeIslamIslamicWorldNews_1.aspx",
    },
    {
        GroupID: 5,
        Group_Name: "Radical Islamism and Jihad",
        DetailPage: "NewAgeIslamRadicalIslamismAndJihad_1.aspx",
    },
    {
        GroupID: 15,
        Group_Name: "Islam,Terrorism and Jihad",
        DetailPage: "NewAgeIslamIslamTerrorismJihad_1.aspx",
    },
    {
        GroupID: 38,
        Group_Name: "War on Terror",
        DetailPage: "NewAgeIslamWarOnTerror_1.aspx",
    },
    {
        GroupID: 20,
        Group_Name: "Islam and the West",
        DetailPage: "NewAgeIslamIslamAndWest_1.aspx",
    },
    {
        GroupID: 41,
        Group_Name: "Interfaith Dialogue",
        DetailPage: "NewAgeIslamDialogue_1.aspx",
    },
    {
        GroupID: 44,
        Group_Name: "The War Within Islam",
        DetailPage: "NewAgeIslamWarWithinIslam_1.aspx",
    },
    {
        GroupID: 40,
        Group_Name: "Islam and Sectarianism",
        DetailPage: "NewAgeIslamIslamAndSectarianism_1.aspx",
    },
    {
        GroupID: 27,
        Group_Name: "Islam and Politics",
        DetailPage: "NewAgeIslamIslamAndPolitics_1.aspx",
    },
    {
        GroupID: 39,
        Group_Name: "Islam and Spiritualism",
        DetailPage: "NewAgeIslamIslamAndSpiritualism_1.aspx",
    },
    {
        GroupID: 19,
        Group_Name: "Current Affairs",
        DetailPage: "NewAgeIslamCurrentAffairs_1.aspx",
    },
    {
        GroupID: 28,
        Group_Name: "Muslims and Islamophobia",
        DetailPage: "NewAgeIslamMuslimsAndIslamophobia_1.aspx",
    },
    {
        GroupID: 46,
        Group_Name: "Spiritual Meditations",
        DetailPage: "NewAgeIslamIslamSpiritualMeditations_1.aspx",
    },
    {
        GroupID: 16,
        Group_Name: "Islamic Ideology",
        DetailPage: "NewAgeIslamIslamicIdeology_1.aspx",
    },
    {
        GroupID: 45,
        Group_Name: "Islam, Women and Feminism",
        DetailPage: "NewAgeIslamIslamWomenAndFeminism_1.aspx",
    },
    {
        GroupID: 6,
        Group_Name: "Islam and Human Rights",
        DetailPage: "NewAgeIslamIslamHumanRights_1.aspx",
    },
    {
        GroupID: 31,
        Group_Name: "Islamic Society",
        DetailPage: "NewAgeIslamIslamicSociety_1.aspx",
    },
    {
        GroupID: 21,
        Group_Name: "Islam and Pluralism",
        DetailPage: "NewAgeIslamIslamAndPluralism_1.aspx",
    },
    {
        GroupID: 29,
        Group_Name: "Islamic Sharia Laws",
        DetailPage: "NewAgeIslamIslamicShariaLaws_1.aspx",
    },
    {
        GroupID: 30,
        Group_Name: "Ijtihad, Rethinking Islam",
        DetailPage: "NewAgeIslamIjtihadRethinkingIslam_1.aspx",
    },
    {
        GroupID: 25,
        Group_Name: "Islam and Tolerance",
        DetailPage: "NewAgeIslamIslamAndTolerance_1.aspx",
    },
    {
        GroupID: 23,
        Group_Name: "Islamic History",
        DetailPage: "NewAgeIslamIslamicHistory_1.aspx",
    },
    {
        GroupID: 22,
        Group_Name: "Islamic Personalities",
        DetailPage: "NewAgeIslamIslamicPersonalities_1.aspx",
    },
    {
        GroupID: 47,
        Group_Name: "Islam and Science",
        DetailPage: "NewAgeIslamIslamAndScience_1.aspx",
    },
    {
        GroupID: 33,
        Group_Name: "Islam and Environment",
        DetailPage: "NewAgeIslamIslamAndEnvironment_1.aspx",
    },
    {
        GroupID: 32,
        Group_Name: "Islamic Culture",
        DetailPage: "NewAgeIslamIslamicCulture_1.aspx",
    },
    {
        GroupID: 17,
        Group_Name: "Interview",
        DetailPage: "NewAgeIslamInterview_1.aspx",
    },
    {
        GroupID: 26,
        Group_Name: "Islam and the Media",
        DetailPage: "NewAgeIslamMuslimMedia_1.aspx",
    },
    {
        GroupID: 43,
        Group_Name: "Letter to the Editor",
        DetailPage: "NewAgeIslamLetters_1.aspx",
    },
    {
        GroupID: 50,
        Group_Name: "From the Desk of Editor",
        DetailPage: "NewAgeIslamHindiSection_1.aspx",
    },
    { GroupID: 55, Group_Name: "Indian Press", DetailPage: null },
    { GroupID: 56, Group_Name: "Pakistan Press", DetailPage: null },
    { GroupID: 57, Group_Name: "Middle East Press", DetailPage: null },
    { GroupID: 58, Group_Name: "World Press", DetailPage: null },
];


const ArticleList = ({ writers, sections }) => {
    const router = useRouter();
    const { articleSlug, page } = router.query;
    const [listdata, setListdata] = useState({
        articles: [],
        totalCount: null,
        pageLimit: 15,
        comments: [],
        writerDescription: [],
        heading: articleSlug,
    });
    const [currentPage, setCurrentPage] = useState(page ? page : 1);
    const [loading, setLoading] = useState(false);



    const getDataByParams = async (authorId, groupId, page = 1) => {
        router.push({ pathname: router.pathname, query: { articleSlug, page } });
        try {
            let params = {};
            if (authorId) {
                params = {
                    authorId,
                    page,
                };
            }

            if (groupId) {
                params = {
                    groupId,
                    page,
                };
            }
            let heading = articleSlug;
            fetchData(params, heading);
        } catch (err) {
            console.log(err);
        }
    };
    useEffect(() => {
        const { writerId, sectionId } = getRelatedIdByParams();
        getDataByParams(writerId, sectionId, currentPage)
    }, []);

    const fetchData = async (params, heading) => {
        try {
            const response = await api.get("/getArtilcesBy", {
                params,
            });
            let heading = heading;
            if (params.groupId && response.data.results.length) {
                heading =
                    response.data.results[response.data.results.length - 1]["Group_Name"];
            } else if (response.data.description.length) {
                heading = response.data.description[0]["writerName"];
            }
            setLoading(false);
            setListdata({
                articles: response.data.results,
                totalCount: response.data.totalCount,
                pageLimit: response.data.pageLimit,
                comments: response.data.comments,
                writerDescription: response.data.description,
                heading,
            })

        } catch {
            setListdata({
                articles: [],
                totalCount: null,
                pageLimit: 15,
                comments: [],
                writerDescription: [],
                heading: articleSlug,
            });
        }
    }
    const onPageChanged = (data) => {
        const { writerId, sectionId } = getRelatedIdByParams();
        const currentPage = data;
        setCurrentPage(currentPage);
        setLoading(true);
        getDataByParams(writerId, sectionId, currentPage);
    };
    const getRelatedIdByParams = () => {
        const optWriter = writers.find(
            (writer) =>
                GetUrlLink(writer.writerName.toLowerCase()) === GetUrlLink(articleSlug)
        );
        if (optWriter) {
            return { writerId: optWriter.writerId, sectionId: null, articleSlug };
        } else {
            const Filtersection = sections.find(
                (section) =>
                    GetUrlLink(section.Group_Name.toLowerCase()) ===
                    GetUrlLink(articleSlug)
            );
            if (Filtersection) {
                return {
                    writerId: null,
                    sectionId: Filtersection.GroupID,
                    articleSlug,
                };
            }
        }
    };
    const { writerDescription, totalCount, heading, comments, articles, pageLimit } = listdata;
    let articleList = <Spinner />;
    if (articles.length) {
        articleList = articles.map((article) => {
            return (
                <Article
                    key={article.Article_ID}
                    article={article}
                    isShowGroupHeading={false}
                    comments={comments}
                />
            );
        });
    } else if (!articles.length && !loading) {
        articleList = <h3> There is no data</h3>;
    }

    return <Fragment>
        {/* {this.head()} */}
        <div className="col-12 col-sm-12 col-md-8 col-lg-9">
            <div className="sectionTitle blueTitleBg clearfix d-flex">
                <h2 className="m-0 float-left mr-auto px-3">{articleSlug}</h2>
            </div>
            <div className="pageWrap p-3 bg-light shadow-sm">
                {writerDescription.length && !loading ? (
                    <WriterAbout writer={writerDescription[0]} />
                ) : null}
                {articleList}
            </div>
            {!totalCount ? null : (
                <PaginationComp
                    firstPageText={
                        <i className="fa fa-angle-double-left" aria-hidden="true" />
                    }
                    lastPageText={
                        <i className="fa fa-angle-double-right" aria-hidden="true"></i>
                    }
                    prevPageText={
                        <i className="fa fa-angle-left" aria-hidden="true" />
                    }
                    nextPageText={
                        <i className="fa fa-angle-right" aria-hidden="true" />
                    }
                    activePage={+currentPage}
                    itemsCountPerPage={pageLimit}
                    totalItemsCount={totalCount}
                    onChange={onPageChanged}
                    itemClass="page-item"
                    linkClass="page-link"
                />
            )}
        </div>
    </Fragment>
}

export default ArticleList;

export async function getStaticProps(context) {
    const result = await api.get("/sections");
    const result2 = await api.get("/authors");
    return {
        props: {
            writers: result2.data,
            sections: result.data
        }, // will be passed to the page component as props
    }
}

export async function getStaticPaths() {
    const result = await api.get("/sections");
    const result2 = await api.get("/authors");
    const sectionsData = result.data.map((category) => GetUrlLink(category.Group_Name.toLowerCase()));
    const writersData = result2.data.map((writer) => GetUrlLink(writer.writerName.toLowerCase()));
    const allData = [...writersData, ...sectionsData];
    // Get the paths we want to pre-render based on posts
    const paths = allData.map((category) => ({
        params: { articleSlug: category },
    }))

    return {
        paths,
        fallback: true // See the "fallback" section below
    };
}