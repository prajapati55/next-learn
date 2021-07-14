import Link from "next/link";
const sidebarInnerPage = () => (
  <aside className="col-12 col-sm-12 col-md-4 col-lg-3">
    <div className="sidebarWrap">
      <div className="sectionTitle greenTitleBg clearfix d-flex">
        <h2 className="m-0 float-left mr-auto px-3">Contents</h2>
      </div>
      <div className="pagesLinks bg-light shadow-sm">
        <ul className="m-0 list-unstyled p-3">
          <li className="border-bottom">
            <Link href="/bestOfArticles?page=1" title="Rethinking Islam" rel="noreferrer">
              Rethinking Islam
            </Link>
          </li>
          <li className="border-bottom">
            <Link href="/latestArticles?page=1" title="Latest Articles" rel="noreferrer">
              Latest Articles
            </Link>
          </li>
          <li className="border-bottom">
            <Link href="/latestVideos?page=1" title="New Videos" rel="noreferrer">
              New Videos
            </Link>
          </li>
          <li className="border-bottom">
            <Link href="/latestComments?page=1" title="Latest Comments" rel="noreferrer">
              Latest Comments
            </Link>
          </li>
          <li className="border-bottom">
            <Link href="/popularArticles?page=1" title="Popular Articles" rel="noreferrer">
              Popular Articles
            </Link>
          </li>
          <li className="border-bottom">
            <Link
              href="/a/books-and-documents"
              title="Books and Documents"
              rel="noreferrer"
            >
              Books and Documents
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </aside>
);

export default sidebarInnerPage;
