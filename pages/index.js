import { Fragment, useState, useEffect } from "react";
import Head from "next/head"
import api from "../http";
// import DebatIslam from '../components/debateIslam';
import ArticleSection from "../components/latestArticle";
import LatestCommentsSection from "../components/latestComments";
import PopularArtilces from "../components/popularArticles";
import SubscribeSection from "../components/subscribe";
import VideoSection from "../components/videoSection";


const head = () => {
    return (
        <Head key={Math.random()}>
            <title>
                Islamic News and Views | Moderate Muslims & Islam | New Age Islam
        </title>
            <meta property="og:title" content="Islamic News and Views | Moderate Muslims & Islam | New Age Islam" />
            <meta
                name="description"
                content="Get all the news and views on Rethinking Islamic Religion, preventing radicalisation and de-radicalisation. New Age Islam brings modern Muslims closer to the original ideals and spirit of Islam & Rethink on Islam. Visit us today!"
            />
            <meta name="abstract" content="About Islam, Islamic Religion and Muslims" />
            <meta name="robots" content="index, follow" />
            <link rel="canonical" href="https://www.newageislam.com" />
        </Head>
    );
};

const HomePage = () => {
    const [mostPopularArticles, setMostPopularArticles] = useState([]);
    const [latestAricles, setLatestAricles] = useState([]);
    const [sections, setSections] = useState([]);
    const [latestComments, setLatestComments] = useState([]);
    const [latestVideos, setLatestVideos] = useState([]);
    const [documentsData, setDocumentsData] = useState([]);

    const fetchLatestArticles = async () => {
        try {
            const result = await api.get("/latestArticles", {
                params: { view: "home" },
            });
            setLatestAricles([
                {
                    data: result.data.results,
                    comments: result.data.comments,
                },
            ])
        } catch (err) {
            setLatestAricles([])
        }

    }
    const fetchSectionsData = async () => {
        try {
            const result = await api.get("/sections");
            setSections(result.data)
        } catch (err) {
            setSections([])
        }

    }
    const fetchLatestVideos = async () => {
        try {
            const result = await api.get("/getVideos", {
                params: { view: "home" },
            });
            setLatestVideos(result.data.results)
        } catch (err) {
            setLatestVideos([])
        }
    }
    const fetchLatestComments = async () => {
        try {
            const result = await api.get("/latestComments", {
                params: { view: "home" },
            });
            setLatestComments(result.data.results)
        } catch (err) {
            setLatestComments([])
        }
    }
    const fetchMostPopularArticles = async () => {
        try {
            const result = await api.get("/getMostPopularArticles", {
                params: { view: "home" },
            });
            setMostPopularArticles([
                {
                    data: result.data.results,
                    comments: result.data.comments,
                },
            ])
        } catch (err) {
            setMostPopularArticles([])
        }
    }
    const fetchBooksAndDocuments = async () => {
        try {
            const result = await api.get("/getMostPopularBooksAndDocuments");
            setDocumentsData([
                {
                    data: result.data.results,
                    comments: result.data.comments,
                },
            ])
        } catch (err) {
            setDocumentsData([])
        }
    }
    const getSectionByFilter = (filter) => {
        // const { sections } = this.props;
        if (!sections.length) {
            return sections;
        }

        return sections.filter((section) => {
            return filter
                ? section.Group_Name.includes("Section")
                : !section.Group_Name.includes("Section");
        });
    };
    useEffect(() => {
        fetchLatestArticles();
        fetchSectionsData();
        fetchLatestComments();
        fetchLatestVideos();
        fetchMostPopularArticles();
        fetchBooksAndDocuments();
    }, []);

    return <Fragment>
        {head()}
        <section className="debatingIslam mb-4 pb-5">
            <div className="container">
                <div className="sectionTitle greenTitleBg clearfix d-flex">
                    <h1 className="m-0 float-left mr-auto px-3">Rethinking Islam</h1>
                    <a
                        rel="noopener noreferrer"
                        href="/bestOfArticles"
                        className="btn btn-success btn-sm border-0 viewAllBtn"
                        target="_blank"
                    >
                        View All <i className="fa fa-angle-double-right"></i>
                    </a>
                </div>
                {/* <DebatIslam
                    articles={
                        bestOfBeforeArticles.length
                            ? bestOfBeforeArticles[0]["data"]
                            : []
                    }
                    comments={
                        bestOfBeforeArticles.length
                            ? bestOfBeforeArticles[0]["comments"]
                            : []
                    }
                /> */}
            </div>
        </section>

        <ArticleSection
            latestAricles={latestAricles.length ? latestAricles[0]["data"] : []}
            comments={latestAricles.length ? latestAricles[0]["comments"] : []}
        />
        <VideoSection
            languageData={getSectionByFilter(true)}
            sectionsData={getSectionByFilter(false)}
        />
        <SubscribeSection />
        <LatestCommentsSection
            latestComments={latestComments}
            latestVideos={latestVideos}
        />
        <PopularArtilces
            mostPopularArticles={
                mostPopularArticles.length ? mostPopularArticles[0]["data"] : []
            }
            popularComments={
                mostPopularArticles.length ? mostPopularArticles[0]["comments"] : []
            }
            documentsData={documentsData.length ? documentsData[0]["data"] : []}
            documentsComments={
                documentsData.length ? documentsData[0]["comments"] : []
            }
        />
    </Fragment>
}

export default HomePage;