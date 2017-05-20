import React, { PropTypes } from "react"

//import styles from "./index.css"

const WelcomeHero = () => (
  <section id="hero-area" >
    <div className="container">
        <div className="row">
            <div className="col-md-12 text-center">
                <div className="block wow fadeInUp" data-wow-delay=".3s">                   
                    
                    <section className="cd-intro">
                        <h1 className="wow fadeInUp animated cd-headline slide" data-wow-delay=".4s" >
                        <span>HI, MY NAME IS MICHAEL &amp; I AM A</span><br />
                        <span className="cd-words-wrapper">
                            <b className="is-visible">ARCHITECT</b>
                            <b>DEVELOPER</b>
                            <b>FATHER</b>
                        </span>
                        </h1>
                        </section> 
                        
                        <h2 className="wow fadeInUp animated" data-wow-delay=".6s" >
                            With 10 years experience, I've occupied many roles including digital design director,<br /> web designer and developer. This site showcases some of my work.
                        </h2>
                        <a className="btn-lines dark light wow fadeInUp animated smooth-scroll btn btn-default btn-green" data-wow-delay=".9s" href="#works" data-section="#works" >View Works</a>       
                    </div>
                </div>
            </div>
        </div>
  </section>
)

export default WelcomeHero
