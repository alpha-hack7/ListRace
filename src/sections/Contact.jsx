const Contact = () => {
  return (
    <section className="contact" id="contact">
      <h2>do you want to add your business listing with us?</h2>
      <p>
        Listrace offer you to list your business with us and we very much able
        to promote your Business
      </p>
      <form>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Enter your Email here "
        />
        <button>Create Account</button>
      </form>
    </section>
  );
};

export default Contact;
