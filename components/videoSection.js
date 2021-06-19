import React from "react";
import Litag from "../components/liTag";
import Link from "../components/link";
import { GetUrlLink } from "../utils/utility";
// import CardSkleton from "./UI/Spinner/Spinner2.component";

const videoSection = ({ languageData, sectionsData }) => (
  <section className="sectLangVideoSection">
    <div className="container">
      <div className="row">
        <div className="col-12 col-sm-12 col-lg-3 mb-4">
          <div className="sectionTitle redTitleBg clearfix d-flex">
            <h2 className="m-0 float-left mr-auto px-3">Languages</h2>
          </div>
          <div className="pt-2 pagesLinks">
            <ul className="m-0 p-0 list-unstyled">
              {languageData.map((lang) => {
                let linkText = lang.Group_Name.toLowerCase().split(" ");
                let linkText1 = GetUrlLink(lang.Group_Name.toLowerCase());
                return (
                  <Litag key={linkText[0]} liClass="border-bottom">
                    <Link
                      linkTitle={linkText[0].toUpperCase()}
                      hrefLink={`a/${linkText1}`}
                    />
                  </Litag>
                );
              })}
            </ul>
          </div>
        </div>
        <div className="col-12 col-sm-12 col-lg-9 mb-4">
          <div className="sectionTitle blueTitleBg clearfix d-flex">
            <h2 className="m-0 float-left mr-auto px-3">Sections</h2>
          </div>
          <div className="pt-2 pagesLinks lineheightText">
            <ul className="m-0 p-0 list-unstyled sectionLists">
              {sectionsData.map((lang) => {
                let linkText = GetUrlLink(lang.Group_Name.toLowerCase());
                return (
                  <Litag key={lang.GroupID} liClass="border-bottom">
                    <Link
                      linkTitle={lang.Group_Name}
                      hrefLink={`a/${linkText}`}
                    />
                  </Litag>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default videoSection;
