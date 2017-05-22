import React from "react"
import { Grid, Row, Col } from "react-bootstrap"

import styles from "./index.css"

const Footer = () => (
  <footer id="footer" className={ styles.footer }>
    <div className="container">
      <Grid>
        <Row className="show-grid">
          <Col xs={12} md={8}> <p className={ styles.copyright }>Copyright &copy; <span>2017</span> Michael Arnel</p></Col>
          <Col xs={6} md={4}>
            <ul className="social">
                <li>
                    <a href="https://www.facebook.com/michael.arnel" className="fa fa-facebook">
                        <i className="ion-social-facebook"></i>
                    </a>
                </li>
                <li>
                    <a href="http://wwww.twitter.com/michaelarnel" className="fa fa-twitter">
                        <i className="ion-social-twitter"></i>
                    </a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/michael-arnel-8120b95a/" className="fa fa-linkedin">
                        <i className="ion-social-linkedin"></i>
                    </a>
                </li>
                <li>
                    <a href="https://plus.google.com/+MichaelArnel" className="fa fa-google-plus">
                        <i className="ion-social-googleplus"></i>
                    </a>
                </li>
            </ul>
          </Col>
        </Row>
      </Grid>
    </div>
  </footer> 
)

export default Footer
