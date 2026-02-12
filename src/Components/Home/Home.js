import React from 'react';
import Nav from '../Nav/Nav';
import './Home.css';

function Home() {
  return (
    <div className="home">
      <Nav />

      {/* Introduction Section */}
      <section className="intro">
        <div className="intro-text">
          <h1>Welcome to Student Support</h1>
          <p>
            Your one-stop platform for study resources, quizzes, club activities, 
            and more. Explore PDFs, short notes, join study sessions, take quizzes, 
            and connect with clubs!
          </p>
        </div>
      </section>

      {/* Cards Section */}
      <section className="cards-container">
        {/* Quiz */}
        <div className="card">
          <h3>Quiz Corner</h3>
          <p>Test your knowledge with fun quizzes.</p>
          <button onClick={() => alert('Redirecting to Quiz')}>Take Quiz</button>
        </div>

        {/* Clubs */}
        <div className="card">
          <h3>Clubs & Activities</h3>
          <p>Check club details, announcements, and apply to join.</p>
          <button onClick={() => alert('Redirecting to Clubs')}>View Clubs</button>
        </div>

        {/* Apply Clubs */}
        <div className="card">
          <h3>Apply for Clubs</h3>
          <p>Interested in a club? Apply and become a member today!</p>
          <button onClick={() => alert('Redirecting to Apply')}>Apply Now</button>
        </div>

        {/* Announcements */}
        <div className="card">
          <h3>Announcements</h3>
          <p>Stay updated with latest club news and events.</p>
          <button onClick={() => alert('Redirecting to Announcements')}>View Announcements</button>
        </div>
      </section>

      <footer>
        &copy; 2026 Student Support System. All rights reserved.
      </footer>
    </div>
  );
}

export default Home;
