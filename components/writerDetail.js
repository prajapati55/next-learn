import React from "react";

const writerDescription = ({ writer }) => {
  return (
    <div className="articleListDetail writerSection bg-white p-3 mb-3 border">
      <h3 className="mb-3">Your Favourite Author's Page</h3>
      {!writer.writerPhotoName ? null : (
        <img
          alt={writer.writerName}
          src={`https://www.newageislam.com/image/author/${writer.writerPhotoName}`}
        />
      )}
      <div className="writerContent" dangerouslySetInnerHTML={{ __html: writer.aboutWriter }} ></div>
      <h4 className="clearfix ArticleReadTitle mt-3">Please read below the articles written by him for <strong>NewAgeIslam.com</strong></h4>
    </div>
  );
};

export default writerDescription;
