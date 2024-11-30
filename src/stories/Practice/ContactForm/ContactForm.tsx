import "./contactform.styles.css";

export const ContactForm = () => {
  return (
    <form action="https://www.greatfrontend.com/api/questions/contact-form" method="post">
      <div className="input-wrapper">
        <input required type="text" name="name" id="name" placeholder=" " />
        <label htmlFor="name">Name</label>
      </div>
      <div className="input-wrapper">
        <input required pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}" type="email" name="email" id="email" placeholder=" " />
        <label htmlFor="email">Email</label>
      </div>
      <div className="input-wrapper">
        <textarea name="message" id="message" placeholder=" " />
        <label htmlFor="message">Message</label>
      </div>
      <button type="submit">Send</button>
    </form>
  );
};
