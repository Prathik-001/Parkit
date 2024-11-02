import React from 'react';

function About () {
  return (
    <div>
      <about className="aboutbox">
        <div className="container">
          <div className="row">
            <div className="about-col">
              <h4>company</h4>
              <ul>
                <li><a href="#">about us</a></li>
                <li><a href="#">our services</a></li>
                <li><a href="#">privacy policy</a></li>
              </ul>
            </div>
            <div className="about-col">
              <h4>Help</h4>
              <ul>
                <li><a href="#">FAQ</a></li>
                <li><a href="#">Booking  </a></li>
                <li><a href="#">payment options</a></li>
              </ul>
            </div>
            <div className="about-col">
              <h4>follow us</h4>
              <div className="social-links">
                <a href="https://www.Facebook.com"  target="_blank"><i className="fab fa-facebook"></i></a>
                <a href="https://www.twitter.com"  target="_blank"><i className="fab fa-twitter"></i></a>
                <a href="https://www.instagram.com"  target="_blank"><i className="fab fa-instagram"></i></a>
                <a href="https://www.linkedin.com"  target="_blank"><i className="fab fa-linkedin-in"></i></a>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright-area">
          <div className="copyright-text">
            <p> 2024, All Rights Reserved </p>
          </div>
        </div>
      </about>

      <div className="about-page">
        <h1>About Us</h1>
        <p>
          We ParkIt Team 
        </p>

        <h3>Our Mission</h3>
<p>
  At <strong>ParkIt</strong>, we believe that finding parking should be simple, stress-free, and convenient. Our mission is to connect drivers with accessible, affordable parking spots, whether they're headed to work, an event, or just out for the day. We're dedicated to making the parking experience as smooth and enjoyable as possible for everyone involved.
</p>

<h4>Our Story</h4>
<p>
  <strong>ParkIt</strong> was founded in 2024 by a team of passionate students, designers, and young Minds who believe in the power of technology to improve lives. Our founders recognized the need for a better parking experience and set out to create a platform that would make it easy and convenient for people to find parking spots.
</p>

<p>
  Since its inception, <strong>ParkIt</strong> has grown to become a leading provider of parking solutions, connecting drivers with accessible, affordable parking spots across the city. We've worked hard to create a platform that is user-friendly, reliable, and stress-free, and we're committed to continuing to improve and innovate in the parking industry.
</p>

<h4>Our Values</h4>
<ul>
  <li>Accessibility: We believe that everyone should have easy access to parking spots, regardless of their location or needs.</li>
  <li>Affordability: We prioritize affordability for our users, ensuring that they can find parking spots without breaking the bank.</li>
  <li>Convenience: We strive to make the parking experience as smooth and convenient as possible for our users, making it easy for them to find the perfect spot.</li>
  <li>Transparency: We are committed to being transparent and honest in our actions, ensuring that our users can trust our platform and our team.</li>
</ul>

<h4>Our Team</h4>
<div className="team-members">
  <div className="team-member">
    <img src="team-member-1.jpg" alt="Team Member 1" />
    <h3>Prathik</h3>
    <p>CEO & Founder</p>
  </div>
  <div className="team-member">
    {/* Add more team members here */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
