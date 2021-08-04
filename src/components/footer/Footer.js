import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './footer.css'
import 'bootstrap/dist/css/bootstrap.min.css';


function Footer() {
    return (
        <div id="dk-footer" className="dk-footer">
            <Container>
                <Row>
                    <Col lg='4'>
                    <div class="widget footer_widget">
                        <h5 class="footer-title">Address</h5>
                        <div class="gem-contacts">
                        <div class="gem-contacts-item gem-contacts-address">Corporate Office :<br/> Doon House, B-275(A), First floor
                            Sector-57, Shushant Lok 3
                            Near Hong Kong Bazzar, Gurugram Pin 122001, Haryana.
                        </div>
                        <div class="gem-contacts-item gem-contacts-phone"><i class="fa fa-phone" aria-hidden="true"></i> Phone: <a href="">+91-9122588799</a></div>

                        <div class="gem-contacts-item gem-contacts-address mt-2">Reg. Office :<br/> Doon House, D2/3,
                            4th Floor, Chandra Tower, IDBI Bank Building
                            Dimna Road, Mango, Jamshedpur-831012, Jharkhand.</div>
                        <div class="gem-contacts-item gem-contacts-phone"><i class="fa fa-phone" aria-hidden="true"></i> Phone: <a>+91 9122588799</a></div>

                        </div>
                    </div>
                    </Col>
                    <Col lg='4'>
                    <div class="widget footer_widget">
                    <h5 class="footer-title">Recent News</h5>
                    <ul class="posts  styled">
                      <li class="clearfix gem-pp-posts">
                        <div class="gem-pp-posts-text">
                          <div class="gem-pp-posts-item">
                            <a href="#">Want to start Your Own Play School.
                            </a>
                          </div>
                          <div class="gem-pp-posts-date">Call +91-9122588799</div>
                        </div>
                      </li>
                      <li class="clearfix gem-pp-posts">
                        <div class="gem-pp-posts-text">
                          <div class="gem-pp-posts-item">
                            <a href="#">Now we are in Faridabad,Now we are in DaudNagar.
                            </a>
                          </div>
                          <div class="gem-pp-posts-date">Call +91-9122588799, +91-9122588799</div>
                        </div>
                      </li>
                      <li class="clearfix gem-pp-posts">
                        <div class="gem-pp-posts-text">
                          <div class="gem-pp-posts-item">
                            <a href="">Now we are in Ranchi, Admission open
                            </a>
                          </div>
                          <div class="gem-pp-posts-date">Call +91-9122588799, +91-9122588799</div>
                        </div>
                      </li>

                    </ul>
                  </div>
                  </Col>
                    <Col lg='4'>
                    <div class="widget footer_widget">
                    <h5 class="footer-title">Development</h5>
                    <ul class="posts  styled">
                      <li class="clearfix gem-pp-posts">
                        <div class="gem-pp-posts-text">
                          <div class="gem-pp-posts-item">
                            <p>Created and Designed by mohammed hoseinpour
                            </p>
                          </div>
                          <div class="gem-pp-posts-date">Hire me : </div>
                        </div>
                      </li>
                      <li class="clearfix gem-pp-posts">
                        <div class="gem-pp-posts-text">
                          <div class="gem-pp-posts-item">
                            <p> Telegram ID : @mhp3532
                            </p>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>               
                    </Col>
                </Row>
            </Container>
        </div>
            
        
    )
}

export default Footer
