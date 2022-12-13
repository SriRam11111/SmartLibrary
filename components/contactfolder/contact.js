import './contact.css'
/**
 * contact page to contat to other teachers and post doubts
 * @returns 
 */
function Contact() {
  return (
    <div>
      <div className="formbold-main-wrapper">
        <div className="formbold-form-wrapper">
          <form action="https://formbold.com/s/FORM_ID" method="POST">
            <div className="formbold-mb-5">
              <label htmlFor="name" className="formbold-form-label"> Full Name </label>
              <input type="text" name="name" id="name" placeholder="Full Name" className="formbold-form-input" />
            </div>
            <div className="formbold-mb-5">
              <label htmlFor="email" className="formbold-form-label"> Email Address </label>
              <input type="email" name="email" id="email" placeholder="Enter your email" className="formbold-form-input" />
            </div>
            <div className="formbold-mb-5">
              <label htmlFor="subject" className="formbold-form-label"> Subject </label>
              <input type="text" name="subject" id="subject" placeholder="Enter your subject " className="formbold-form-input" />
            </div>
            <div className="formbold-mb-5">
              <label htmlFor="message" className="formbold-form-label"> Message </label>
              <textarea rows={6} name="message" id="message" placeholder="you can ask for doubts or request for new books or correct the errors in the books" className="formbold-form-input" defaultValue={""} />
            </div>
            <div>
              <button className="formbold-btn">Submit</button>
            </div>
          </form>
        </div>
      </div>
      <style dangerouslySetInnerHTML={{ __html: "\n" }} /></div>
  );
}

export default Contact;