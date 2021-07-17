import React from "react";
import ReCAPTCHA from "react-google-recaptcha";
import http from "../http";
import TinyEditor from "./tiny-editor";
import RtlTinyEditor from "./tiny-editor_rtl";

class CommentForm extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.verifyCallback = this.verifyCallback.bind(this);
        this.onExpired = this.onExpired.bind(this);
        this.state = {
            buttonDisabled: true,
            articleId: props.articleid,
            comment: {
                name: "",
                email: "",
                comments: "",
                recaptchaToken: null,
            },
            message: "",
            type: "success",
            loading: false,
            direction: "ltr",
        };
    }
    componentDidMount() {
        if (this.captchaDemo) {
            // console.log("started, just a second...");
            this.captchaDemo.reset();
        }
    }

    onChange = (value) => {
        const commentObj = { ...this.state.comment };
        commentObj["comments"] = value;
        this.setState({ ...this.state, comment: commentObj });
        if (this.props.onChange) {
            // Send the changes up to the parent component as an HTML string.
            // This is here to demonstrate using `.toString()` but in a real app it
            // would be better to avoid generating a string on each change.
            this.props.onChange(this.state.comment.comments.toString("html"));
        }
    };

    onExpired() {
        const commentObj = { ...this.state.comment };
        commentObj["recaptchaToken"] = null;
        this.setState({ buttonDisabled: true, comment: commentObj });
    }

    verifyCallback(recaptchaToken) {
        if (recaptchaToken) {
            // Here you will get the final recaptchaToken!!!
            // console.log(recaptchaToken, "<= your recaptcha token");
            const commentObj = { ...this.state.comment };
            commentObj["recaptchaToken"] = recaptchaToken;
            this.setState({
                buttonDisabled: !this.state.buttonDisabled,
                comment: commentObj,
            });
        }
    }

    onInputChange = (e) => {
        const commentObj = { ...this.state.comment };
        commentObj[e.target.name] = e.target.value;
        this.setState({ ...this.state, comment: commentObj });
    };

    onSelectChange = (e) => {
        this.setState({ ...this.state, [e.target.name]: e.target.value });
    };

    onFormSubmit = (e) => {
        e.preventDefault();
        const { name, email, comments, recaptchaToken } = this.state.comment;
        const commentHtml = comments.toString("html");
        if (!name || name.trim() === "") {
            return;
        }
        if (!email || email.trim() === "") {
            return;
        }
        if (!commentHtml || commentHtml.trim() === "") {
            return;
        }
        this.setState({ ...this.state, loading: true });
        http
            .post(`/addComments/${this.state.articleId}`, {
                Name: name,
                Email: email,
                Comment: commentHtml,
                recaptchaToken,
            })
            .then((res) => {
                this.setState({
                    ...this.state,
                    comment: {
                        name: "",
                        email: "",
                        comments: "",
                        recaptchaToken: null,
                    },
                    type: "success",
                    message:
                        "You comment has been sent to the editors for approval. It will be posted as soon as possible.",
                    loading: false,
                });
            })
            .catch((err) => {
                this.setState({
                    type: "fail",
                    ...this.state,
                    comment: {
                        name: "",
                        email: "",
                        comments: "",
                        recaptchaToken: null,
                    },
                    message:
                        "Due to some internal  error this comment was not submitted. Please try after some time .",
                    loading: false,
                });
            });
    };

    render() {
        const { message, type, direction } = this.state;
        return (
            <React.Fragment>
                <div className="sectionTitle redTitleBg clearfix d-flex">
                    <h2 className="m-0 float-left mr-auto px-3 ArticleCommentTitle">
                        Compose your comments here
          </h2>
                    <a className="p-2" href="#viewComment" title="View Comment">
                        <i className="fa fa-eye"></i>{" "}
                        <span>Total Comments ({this.props.commentscount})</span>
                    </a>
                </div>
                <form className="p-3 bg-light" onSubmit={this.onFormSubmit}>
                    {message ? (
                        <div
                            className={`alert alert-${type === "fail" ? "danger" : "success"
                                }`}
                            role="alert"
                        >
                            {message}
                        </div>
                    ) : null}
                    <div className="form-group">
                        <label htmlFor="nameInput1">Name</label>
                        <input
                            type="text"
                            className="form-control rounded-0"
                            id="nameInput1"
                            name="name"
                            placeholder="Name Please"
                            value={this.state.comment.name}
                            onChange={this.onInputChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="emailInput1">Email address</label>
                        <input
                            name="email"
                            type="email"
                            className="form-control rounded-0"
                            id="emailInput1"
                            placeholder="youremail@example.com (not for subscription)"
                            onChange={this.onInputChange}
                            value={this.state.comment.email}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="commentInput1">Your Comment</label>
                        <select
                            name="direction"
                            className="custom-select"
                            defaultValue={direction}
                            onChange={(e) => this.onSelectChange(e)}
                        >
                            <option value="rtl">Right to Left</option>
                            <option value="ltr">Left to Right</option>
                        </select>
                        <br /> <br />
                        {direction === "rtl" ? (
                            <RtlTinyEditor
                                comments={this.state.comment.comments}
                                onTextChange={this.onChange}
                            />
                        ) : (
                            <TinyEditor
                                comments={this.state.comment.comments}
                                onTextChange={this.onChange}
                            />
                        )}
                    </div>
                    <div className="form-group captchaForm">
                        <ReCAPTCHA
                            ref={(el) => {
                                this.captchaDemo = el;
                            }}
                            // size="invisible"
                            // render="explicit"
                            onExpired={this.onExpired}
                            sitekey="6LfEvvMUAAAAACv2N_9kkeAPiIgLhkeMRV93NLow"
                            onChange={this.verifyCallback}
                        />
                    </div>
                    <button
                        disabled={this.state.buttonDisabled ? "disabled" : ""}
                        type="submit"
                        className="btn btn-danger border-0 rounded-0 px-4"
                    >
                        {this.state.loading ? "Submitting.." : "Submit"}
                    </button>
                    <div className="form-group mb-0 mt-3">
                        <small>
                            <strong>Disclaimer:</strong> The opinions expressed in the
              articles and comments are the opinions of the authors and do not
              necessarily reflect that of NewAgeIslam.com
            </small>
                    </div>
                </form>
            </React.Fragment>
        );
    }
}

export default CommentForm;
