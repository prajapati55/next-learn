import React from "react";
import { Editor } from "@tinymce/tinymce-react";
import { nominalTypeHack } from "prop-types";
const toolbarConfig = {
  forced_root_block: "",
  mode: "none",
  theme: "silver",
  branding: false,
  menubar: false,
  forced_root_block: "",
  force_br_newlines: true,
  force_p_newlines: false,
  plugins: [
    "advlist autolink lists  image charmap print preview",
    "insertdatetime media table paste code help wordcount",
  ],
  toolbar: `undo redo | formatselect | bold italic | \
                  bullist numlist | help`,
};
const tinyEditor = ({ comments, onTextChange }) => {
  return (
    <Editor
      id="article_comment_id"
      placeholder=" write your comment here"
      name="comments"
      className=" rounded-0"
      apiKey="tgwmzf2wcmvxz30112wqykt16ul2u9il17hw5txkxf416lfj"
      initialValue={comments}
      value={comments}
      init={toolbarConfig}
      onEditorChange={onTextChange}
    />
  );
};

export default tinyEditor;
