import React from "react";
import { Link } from "react-router-dom";
import "./Footer.scss";

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <div className="footer">
      <div className="container">
        <div className="top">
          <div className="item">
            <h2>Categories</h2>
            <Link className="link" to="/gigs?cat=graphics">Graphics &amp; Design</Link>
            <Link className="link" to="/gigs?cat=digital-marketing">Digital Marketing</Link>
            <Link className="link" to="/gigs?cat=writing-translation">Writing &amp; Translation</Link>
            <Link className="link" to="/gigs?cat=video-animation">Video &amp; Animation</Link>
            <Link className="link" to="/gigs?cat=music-audio">Music &amp; Audio</Link>
            <Link className="link" to="/gigs?cat=programming-tech">Programming &amp; Tech</Link>
            <Link className="link" to="/gigs?cat=data">Data</Link>
            <Link className="link" to="/gigs?cat=business">Business</Link>
            <Link className="link" to="/gigs?cat=lifestyle">Lifestyle</Link>
            <Link className="link" to="/gigs?cat=photography">Photography</Link>
            <Link className="link" to="/sitemap">Sitemap</Link>
          </div>
          <div className="item">
            <h2>About</h2>
            <Link className="link" to="/press">Press &amp; News</Link>
            <Link className="link" to="/partnerships">Partnerships</Link>
            <Link className="link" to="/privacy">Privacy Policy</Link>
            <Link className="link" to="/terms">Terms of Service</Link>
            <Link className="link" to="/ip-claims">Intellectual Property Claims</Link>
            <Link className="link" to="/investors">Investor Relations</Link>
            <Link className="link" to="/contact">Contact Sales</Link>
          </div>
          <div className="item">
            <h2>Support</h2>
            <Link className="link" to="/help">Help &amp; Support</Link>
            <Link className="link" to="/trust">Trust &amp; Safety</Link>
            <Link className="link" to="/selling">Selling on Studywork</Link>
            <Link className="link" to="/buying">Buying on Studywork</Link>
          </div>
          <div className="item">
            <h2>Community</h2>
            <Link className="link" to="/stories">Customer Success Stories</Link>
            <Link className="link" to="/community">Community hub</Link>
            <Link className="link" to="/forum">Forum</Link>
            <Link className="link" to="/events">Events</Link>
            <Link className="link" to="/blog">Blog</Link>
            <Link className="link" to="/influencers">Influencers</Link>
            <Link className="link" to="/affiliates">Affiliates</Link>
            <Link className="link" to="/podcast">Podcast</Link>
            <Link className="link" to="/invite">Invite a Friend</Link>
            <Link className="link" to="/become-seller">Become a Seller</Link>
            <Link className="link" to="/community-standards">Community Standards</Link>
          </div>
          <div className="item">
            <h2>More From Studywork</h2>
            <Link className="link" to="/business">Business</Link>
            <Link className="link" to="/pro">Pro</Link>
            <Link className="link" to="/logo-maker">Logo Maker</Link>
            <Link className="link" to="/guides">Studywork Guides</Link>
            <Link className="link" to="/clearvoice">ClearVoice</Link>
            <Link className="link" to="/workspace">Workspace</Link>
            <Link className="link" to="/learn">Learn</Link>
            <Link className="link" to="/working-not-working">Working Not Working</Link>
          </div>
        </div>
        <hr />
        <div className="bottom">
          <div className="left">
            <h2>Studywork</h2>
            <span><p>&copy; {currentYear} Studywork. All rights reserved.</p></span>
          </div>
          <div className="right">
            <div className="social">
              <img src="/img/twitter.png" alt="" />
              <img src="/img/facebook.png" alt="" />
              <img src="/img/linkedin.png" alt="" />
              <img src="/img/pinterest.png" alt="" />
              <img src="/img/instagram.png" alt="" />
            </div>
            <div className="link">
              <img src="/img/language.png" alt="" />
              <span>English</span>
            </div>
            <div className="link">
              <img src="/img/coin.png" alt="" />
              <span>USD</span>
            </div>
            <img src="/img/accessibility.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
