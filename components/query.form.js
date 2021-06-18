import React, { useState } from "react";
// import http from "../http";

const QueryForm = ({ articleId, commentId }) => {
  const [name, setName] = new useState("");
  const [email, setEmail] = new useState("");
  const [content, setCotent] = new useState("");
  const [disabled, setDisabled] = new useState(true);
  const [submitSatus, setSubmitSatus] = new useState(false);
  const [message, setMessage] = new useState(null);
  const [type, setType] = new useState("fail");

  const submitHandler = (e) => {
    e.preventDefault();
    setSubmitSatus(true);
    setMessage(null);
    if (!name.trim().length || !email.trim().length || !content.trim().length) {
      setMessage("Please fill all fields.");
      return;
    }
    let data = {
      userName: name.trim(),
      userEmail: email.trim(),
      content: content.trim(),
    };

    // http
    //   .post(`/reportAbuse/${articleId}/${commentId}`, data)
    //   .then((respose) => {
    //     setSubmitSatus(false);
    //     setType(respose.data.type);
    //     setMessage(respose.data.message);
    //     setName("");
    //     setEmail("");
    //     setCotent("");
    //   })
    //   .catch((error) => {
    //     setSubmitSatus(false);
    //     setType(error.type);
    //     setMessage(error.message);
    //     setName("");
    //     setCotent("");
    //   });
  };
  return (
    <form
      onSubmit={submitHandler}
      action=""
      className="form-inline justify-content-center mb-2"
    >
      {message ? (
        <div
          className={`alert alert-${type === "fail" ? "danger" : "success"}`}
          role="alert"
        >
          {message}
        </div>
      ) : null}
      <div className="form-group">
        <input
          type="text"
          id="yourname"
          className="form-control rounded-0"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="form-group mx-3">
        <input
          type="email"
          id="reportabseemail"
          className="form-control rounded-0"
          placeholder="info@your-email.com"
          value={email}
          onChange={(e) => {
            const { value } = e.target;
            const reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
            if (reg.test(value) === false) {
              // setDisabled(false);
              setEmail(value);
              return;
            }
            setEmail(value);
            // setDisabled(false);
          }}
        />
        <span style={{ fontSize: 15 }}>(Not to be published)</span>
      </div>
      <div className="form-group mx-3">
        <textarea
          onChange={(e) => {
            setCotent(e.target.value);
            setDisabled(false);
          }}
          id="w3review"
          name="w3review"
          value={content}
          rows="4"
          cols="50"
          className="form-control rounded-0"
          placeholder="place your comment here"
        ></textarea>
      </div>
      <button
        type="submit"
        className="btn btn-danger border-0 rounded-0 px-4 float-right"
        disabled={disabled}
      >
        {submitSatus ? "Loading..." : "Submit"}
      </button>
    </form>
  );
};

export default QueryForm;
