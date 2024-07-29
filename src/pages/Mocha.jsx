import React from 'react';
import { Button, Container } from 'react-bootstrap';


const MochaPage = () => {
  return (
    <div>
      <section className="max-container">
      <h3
        className="subhead-text text-center text-white font-italiana"
        style={{ fontSize: "4rem" }}
      >
        Mocha
      </h3>
      

      <div className="mt-5 flex flex-col gap-3 text-white text-3xl font-italiana"> 
        <p> Create your mocha syrup first, then follow the directions to create your own iced or hot version of the drink.</p></div>
     
        <div className="card" style={{ width: '18rem' }}>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <h6 className="card-subtitle mb-2 text-body-secondary">Card subtitle</h6>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" className="card-link">Card link</a>
        <a href="#" className="card-link">Another link</a>
      </div>
    </div>
     
     
      </section>
    </div>
  );
};

export default MochaPage;
