import React from 'react';
import './App.css';

const Card = ({ children, title, content, buttonText }) => {
  return (
    <div className="Card">
      {children}
      <div className="card-main">
        <h3>{title}</h3>
        <div>{content}</div>
        <a href="" onClick={e => e.preventDefault()}>{buttonText}</a>
      </div>
    </div>
  );
}

export default function App() {
  const lorem = `Lorem ipsum dolor sit, amet consectetur adipisicing elit.
 Earum eos libero rerum sed, explicabo et tenetur, illum
 veniam expedita voluptate iure consequuntur debitis aliquid
 maiores, saepe laborum sequi.`;
  const hels = `Helsinki (ruots. Helsingfors) on Suomen pääkaupunki
 ja Uudenmaan maakuntakeskus. Se sijaitsee Suomenlahden pohjoisrannalla
 Uudenmaan maakunnan keskiosassa. Helsingin naapurikunnat ovat
 lännessä Espoo, pohjoisessa Vantaa ja idässä Sipoo.`

  return (
    <div className="App">
      <Card title="Special Offer" content={lorem} buttonText="Use Deal" />
      <Card title="Helsinki Sightseeing" content={hels} buttonText="Learn More">
        <img src="helsinki.jpg" alt="helsinki aerial view" />
        </Card>
    </div>
  );
};
