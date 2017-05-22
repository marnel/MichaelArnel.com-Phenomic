import React, { PropTypes } from "react"

const ContactSection = (props) => {
  return (
    <div>
        <section id="call-to-action">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="block">
                            <h2 className="title wow fadeInDown" data-wow-delay=".3s" data-wow-duration="500ms">Need to contact me?</h2>
                            <p className="wow fadeInDown" data-wow-delay=".5s" data-wow-duration="500ms">Need help with a project, or have a technical question<br /> you can't seem to find the answers for? Hit the contact button below to reach out to me!</p>
                            <a href="contact.html" className="btn btn-default btn-contact wow fadeInDown" data-wow-delay=".7s" data-wow-duration="500ms">Contact Me</a>
                        </div>
                    </div> 
                </div>
            </div>
        </section>
    </div>
  )
}

export default ContactSection
