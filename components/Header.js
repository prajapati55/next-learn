import React, { useState, useEffect } from "react";
import Link from "next/link";
import http from "../http";
import HeaderTimer from "./header.timer.js";

const strRegex = /[`~!@#$%^*()_|+\=?;:'‘’"“,.”<>\{\}\[\]]/gi;
const GetUrlLink = (heading) => {
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

const HeaderSection = () => {
  const [search, setSearch] = new useState("");
  const [writers, setWriters] = new useState([]);
  const [showSideBarHeader, setShowSideBarHeader] = new useState(false);
  const [showSubMenuHeader, setShowSubMenuHeader] = new useState(false);
  const getSearch = () => {
    if (search.trim() === "") {
      return;
    }
    history.push({ pathname: "/search", search: `?searchKey=${search}` });
  };
  const onBarClick = () => {
    setShowSideBarHeader(!showSideBarHeader);
    if (showSubMenuHeader) {
      setShowSubMenuHeader(!showSubMenuHeader);
    }
  };
  const onIconClick = (e) => {
    e.stopPropagation();
    setShowSubMenuHeader(!showSubMenuHeader);
  };
  const fetchWriters = async () => {
    const result = await http.get("/authors");
    setWriters(result.data)
  }
  useEffect(() => {
    fetchWriters();
  }, []);


  return (
    <React.Fragment>
      {/* {head()} */}
      <header className="mainHeader mb-3">
        <section className="headerTop py-2">
          <div className="container">
            <div className="row">
              <div className="col-12 col-sm-5 col-md-4 col-lg-4">
                <div className="myBrand">
                  <Link href="/" title="Home" className="d-block">
                    <img
                      src="/newageislam-logo.png"
                      alt="New Age Islam"
                      className="img-fluid"
                      width="400"
                      height="93"
                    />
                  </Link>
                </div>
              </div>
              <div className="col-12 col-sm-7 col-md-8 col-lg-8 d-sm-block">
                <div className="headerTopRight text-center text-sm-right">
                  <ul className="list-inline m-0 p-0">
                    <li className="list-inline-item">
                      <a
                        href="https://www.facebook.com/NewAgeIslam/"
                        title="facebook"
                      >
                        <i className="fa fa-facebook-square"></i>
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href="http://twitter.com/NewAgeIslam" title="twitter">
                        <i className="fa fa-twitter-square"></i>
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href="mailto:editor@NewAgeIslam.com" title="Email">
                        <i className="fa fa-envelope-o"></i>
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href="http://linkedin.com" title="Linkedin">
                        <i className="fa fa-linkedin-square"></i>
                      </a>
                    </li>
                  </ul>
                  <HeaderTimer />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="headerMenu">
          <div className="container">
            <div className="row">
              <div
                className={`col-12 col-sm-12 col-md-12 col-lg-11 menuLeft  ${showSideBarHeader ? "show" : "hide"}`}
              >
                <div
                  className="mobileIcon d-block d-lg-none"
                  onClick={onBarClick}
                >
                  <i className="fa fa-bars"></i>
                </div>
                <div className="mobileName d-block d-lg-none py-3 mb-3 border-bottom">
                  <Link className="d-block" href="/" title="Home">
                    <img
                      src="/newageislam-logo.png"
                      alt="New Age Islam"
                      className="img-fluid"
                      width="270"
                      height="69"
                    />
                  </Link>
                </div>
                <ul
                  className="list-inline m-0 headerMenuList"
                  onClick={onBarClick}
                >
                  <li className="list-inline-item">
                    <Link href="/" title="Home">
                      Home
                  </Link>
                  </li>
                  <li className="list-inline-item">
                    <a
                      href="#"
                      title="Authors"
                      onClick={(e) => {
                        e.preventDefault();
                        onIconClick(e);
                      }}
                    >
                      Authors
                  </a>
                    <i
                      className={
                        "fa fa-angle-down position-absolute " +
                        (showSubMenuHeader ? "submenushow" : "submenuhide")
                      }
                      onClick={onIconClick}
                    ></i>
                    <ul className="list-unstyled m-0 subMenu position-absolute">
                      {writers.map(({ writerId, writerName }) => {
                        return (
                          <li key={writerId} onClick={onBarClick}>
                            <Link
                              title="Authors"
                              href={{
                                pathname: `/a/${GetUrlLink(writerName)}`,
                              }}
                            >
                              {writerName}
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </li>
                  <li className="list-inline-item">
                    <Link href="/about" title="About us">
                      About us
                  </Link>
                  </li>
                  <li className="list-inline-item">
                    <Link href="/bestArticles" title="Archives">
                      Archives
                  </Link>
                  </li>
                  <li className="list-inline-item">
                    <Link
                      href="/latestVideos"
                      rel="noopener noreferrer"
                      title="New Age Islam TV"
                    >
                      New Age Islam TV
                  </Link>
                  </li>
                  <li className="list-inline-item">
                    <Link href="/a/books-and-documents" title="Books and Documents">
                      Books
                  </Link>
                  </li>
                  <li className="list-inline-item">
                    <Link href="/donate" title="Donate">
                      Donate
                  </Link>
                  </li>
                  <li className="list-inline-item">
                    <Link href="/advertise" title="Advertise">
                      Advertise
                  </Link>
                  </li>
                  <li className="list-inline-item">
                    <Link href="/subscribe" title="Subscribe">
                      Subscribe
                  </Link>
                  </li>
                </ul>
              </div>
              <div className="col-12 col-sm-12 col-md-12 col-lg-1 searchRight">
                <div className="dexktopSearchWrap text-center">
                  <div className="dexktopSearchIcon float-right position-relative">
                    <i className="fa fa-search" onClick={getSearch}></i>
                    <input
                      type="search"
                      name="search"
                      className="form-control rounded-0"
                      placeholder="Enter keywords"
                      value={search}
                      onChange={(e) => setSearch(e.target.value)}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </header>
    </React.Fragment>
  );
};

export default HeaderSection;
