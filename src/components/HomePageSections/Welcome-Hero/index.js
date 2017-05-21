import React, { PropTypes } from "react"
import ReactDOM from "react-dom"


//import styles from "./index.css"
let x = 0
let n1 = null
let n2 = null
let n3 = null
function RotateText(){
    setTimeout(function() {
       x == 0 ? n1.className = "is-visible" : n1.className = ""
       x == 1 ? n2.className = "is-visible" : n2.className = ""
       x == 2 ? n3.className = "is-visible" : n3.className = ""
       x == 2 ? x = 0 : x++
       RotateText()
    }, 3000)
}

const WelcomeHero = () => (
  <section id="hero-area" >
    <div className="container">
        <div className="row">
            <div className="col-md-12 text-center">
                <div className="block wow fadeInUp" data-wow-delay=".3s">                   
                    
                    <section className="cd-intro">
                        <h1 className="wow fadeInUp animated cd-headline slide" data-wow-delay=".4s" >
                        <span>HI, MY NAME IS MICHAEL &amp; I AM A</span><br />
                        <span className="no-js cd-words-wrapper">
                            <b className="no-js is-visible" ref={(b) => { n1 = b; }} >ARCHITECT</b>
                            <b className="no-js" ref={(b) => { n2 = b; }} >DEVELOPER</b>
                            <b className="no-js" ref={(b) => { n3 = b; }} >FATHER</b>
                             {
                                RotateText()
                             }
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
