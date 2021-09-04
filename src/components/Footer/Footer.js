import React from 'react'
import { FaFacebook, FaInstagram, FaTelegram, FaTwitter } from 'react-icons/fa'
import './Footer.scss'
export default function Footer() {
    return (
        <div>
            <div className="footer">
                <div className="container ft-content">
                    <div className="row">
                        <div class="col-6 col-sm-6 col-md-3 item">
                            <h3>Services</h3>
                            <ul>
                                <li><a href="#">Web design</a></li>
                                <li><a href="#">Development</a></li>
                                <li><a href="#">Hosting</a></li>
                            </ul>
                        </div>
                        <div class="col-6 col-sm-6 col-md-3 item">
                            <h3>About</h3>
                            <ul>
                                <li><a href="#">Company</a></li>
                                <li><a href="#">Team</a></li>
                                <li><a href="#">Legacy</a></li>
                            </ul>
                        </div>
                        <div class="col-6 col-sm-6 col-md-3">
                            <h3>Careers</h3>
                            <ul>
                                <li><a href="#">Job openings</a></li>
                                <li><a href="#">Employee success</a></li>
                                <li><a href="#">Benefits</a></li>
                            </ul>
                        </div>
                        <div className="col-6 col-sm-6 col-md-3 ft-right item">
                            <h3>Contact</h3>
                            <ul>
                            <a className="fb-ic" href="#">
                                    <i><FaFacebook className="icc" /> </i>
                                </a>
                                <a className="ins-ic" href="#">
                                    <i><FaInstagram className="icc" /> </i>
                                </a>
                                <a className="tw-ic" href="#">
                                    <i><FaTwitter className="icc" /> </i>
                                </a>
                                <a className="tele-ic" href="#">
                                    <i><FaTelegram className="icc" /> </i>
                                </a>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="copyright ">
                    <div className="ft-left">
                        <p>© 2020 All Rights Reserved.</p>
                    </div>

                </div>
            </div>
        </div>
    )
}
