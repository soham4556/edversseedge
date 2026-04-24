function EnquirePage() {
  return (
    <section className="section page-container">
      <div className="section-heading">
        <h2>Admission Enquiry</h2>
        <p>Share your details and our experts will contact you.</p>
      </div>

      <form
        className="enquiry-form"
        onSubmit={(event) => event.preventDefault()}
      >
        <label htmlFor="name">Name</label>
        <input
          id="name"
          name="name"
          type="text"
          placeholder="Enter your name"
        />

        <label htmlFor="phone">Phone Number</label>
        <input
          id="phone"
          name="phone"
          type="tel"
          placeholder="Enter your phone number"
        />

        <label htmlFor="email">Email ID</label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="Enter your email"
        />

        <label htmlFor="target">Target Exam</label>
        <select id="target" name="target">
          <option>Class 11th & 12th</option>
          <option>IIT JEE</option>
          <option>NEET</option>
        </select>

        <label htmlFor="message">Your Message</label>
        <textarea
          id="message"
          name="message"
          rows="4"
          placeholder="Tell us your current class and goals"
        />

        <button type="submit" className="btn btn-primary full-width">
          ENQUIRE NOW
        </button>
      </form>
    </section>
  );
}

export default EnquirePage;
