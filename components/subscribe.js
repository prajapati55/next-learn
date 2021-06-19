import SubscribeForm from "./subscribe.form";

const subscribeSection = props => {
  return (
    <section
      id="subscribeSection"
      className="subscribeSection mb-4 py-4 text-center"
    >
      <div className="container">
        <h2 className="mb-3">Subscribe to Our Newsletters</h2>
        {/* <p className="mb-2">
          Sign up with your email address to receive news and updates.
        </p> */}
        <SubscribeForm />
        {/* <p className="font-italic mb-0">We respect your privacy.</p> */}
      </div>
    </section>
  );
};

export default subscribeSection;
