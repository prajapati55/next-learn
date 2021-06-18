import React, { useState } from "react";
// import http from "../http";

const SuscribeForm = ({ subscribe = true }) => {
    const [name, setName] = new useState("");
    const [email, setEmail] = new useState("");
    const [disabled, setDisabled] = new useState(true);
    const [submitSatus, setSubmitSatus] = new useState(false);
    const [message, setMessage] = new useState(null);
    const [type, setType] = new useState("fail");

    // useEffect(() => {
    //   const timer = setTimeout(() => {
    //     setMessage(null);
    //   }, 1000);
    //   return () => clearTimeout(timer);
    // }, []);

    const submitHandler = e => {
        e.preventDefault();
        setSubmitSatus(true);
        setMessage(null);
        let action = "";
        let data = {};
        if (subscribe) {
            action = "/subscribe";
            data = { userName: name, userEmail: email };
        } else {
            action = "/unsubscribe";
            data = { userEmail: email };
        }
        // http
        //   .post(action, data)
        //   .then(respose => {
        //     setSubmitSatus(false);
        //     setType(respose.data.type);
        //     setMessage(respose.data.message);
        //     setName("");
        //     setEmail("");
        //   })
        //   .catch(error => {
        //     setSubmitSatus(false);
        //     setType(error.type);
        //     setMessage(error.message);
        //     setName("");
        //     setEmail("");
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
            {subscribe ? <div className="form-group">
                <input
                    type="text"
                    id="yourname"
                    className="form-control rounded-0"
                    placeholder="Name"
                    value={name}
                    onChange={e => setName(e.target.value)}
                />
            </div> : null}
            <div className="form-group mx-3">
                <input
                    type="email"
                    id="youremail"
                    className="form-control rounded-0"
                    placeholder="info@your-email.com"
                    value={email}
                    onChange={e => {
                        const { value } = e.target;
                        const reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
                        if (reg.test(value) === false) {
                            setDisabled(true);
                            setEmail(value);
                            return;
                        }
                        setEmail(value);
                        setDisabled(false);
                    }}
                />
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

export default SuscribeForm;
