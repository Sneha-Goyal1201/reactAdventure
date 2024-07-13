import React from 'react';
import './home.css';

export const Home = () => {
  return (
    <div className="about">
      <main className="main-content">
        <h1>Quality resources shared by the community</h1>
        <p>Install Node.js, npx create-react-app my-react-app, cd my-react-app, npm start.</p>
        <button className="button">Get access to 4,958 resources</button>
        <div className="boxes">
        <div className="resource-card1">
         
          <p>"One of the best resource sharing sites for Developers. Loved the community too. Very helpful."</p><h5>
               author="Martin Gray"</h5>
              <p> role="senio Developer"</p>
         
        </div>
        <div className="resource-card2">
          <h2>Semi design component</h2>
          <p>kristin waston</p>
        </div>
        <div className="resource-card3">
          <p>"This platform has significantly improved my workflow. The resources are top-notch!"</p>
          <h5>author="Alex Johnson"</h5>
         <p> role="Software Engineer"</p>
        </div>
        <div className='resource-card4'>
            <h1>4,958</h1>
            <p>free resources</p>
        </div>
        <div className="resource-card5">
          <p>"A treasure trove of valuable content for developers. Highly recommended!"
          </p>
          <button>1052 likes</button>
        </div>
        </div>
      </main>
    </div>
  );
}
