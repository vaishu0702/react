import React from 'react';
import './main.css';

import { HiOutlineLocationMarker } from 'react-icons/hi';

import amritsar from '../../asset/amritsar.jpg';
import khandala from '../../asset/khandala.jpg';
import lonavala from '../../asset/lonavala.jpg';
import mahabaleshwar from '../../asset/mahabaleshwar.jpg';
import matheran from '../../asset/mathern.jpg';
import panchgani from '../../asset/panchgani.jpg';
import tajmahal from '../../asset/tajmahal.png';

const Data = [
  {
    id: 1,
    imgSrc: amritsar,
    imgs: 'https://amritsar.nic.in/tourism/',
    destTitle: 'Amritsar',
    grade: 'CULTURAL RELAX',
    fees: '$500',
    description:
      'The Golden temple is located in the holy city of the Sikhs, Amritsar. The Golden temple is famous for its full golden dome, it is one of the most sacred pilgrim spots for Sikhs.The Mandir is built on a 67-ft square of marble and is a two-storied structure.',
  },
  {
    id: 2,
    imgSrc: khandala,
    imgs: 'https://www.thrillophilia.com/destinations/khandala/places-to-visit',
    destTitle: 'Khandala',
    grade: 'Greenery',
    fees: '$1000',
    description:
      'Khandala is a hill station in the Western Ghats in the state of Maharashtra, India, about 3 kilometres (1.9 mi) from Lonavala, 12 kilometres from Khopoli and 33.4 kilometres (20.8 mi) from Karjat',
  },
  {
    id: 3,
    imgSrc: lonavala,
    imgs:'https://www.thrillophilia.com/places-to-visit-in-lonavala',
    destTitle: 'Lonavala',
    grade: 'Greenery',
    fees: '$1000',
    description:
      'Lonavla and the adjacent Khandala are twin hill stations 622 metres (2,041 ft) above sea level, in the Sahyadri ranges that demarcate the Deccan Plateau and the Konkan coast. The hill stations sprawl over an approximate area of 38 square kilometres (15 sq mi). Tourism peaks during the monsoon season.',
  },
  {
    id: 4,
    imgSrc: mahabaleshwar,
    imgs: 'https://www.thrillophilia.com/cities/mahabaleshwar',
    destTitle: 'Mahableshwar',
    grade: 'Greenery',
    fees: '$1000',
    description:
      'Mahableshwar is the best hill station of Maharashtra. It is situated about 4500 ft. above sea level on the Sahyadri spurs. It was the erstwhile summer capital of Old Bombay Presidency.',
  },
  {
    id: 5,
    imgSrc: matheran,
    imgs: 'https://www.thrillophilia.com/cities/matheran',
    destTitle: 'Matheran',
    grade: 'Greenery',
    fees: '$9000',
    description:
      'Matheran is part of the Mumbai Metropolitan Region, and one of the smallest hill stations in India. It is located in the Western Ghats, at an elevation of around 800 m (2,625 feet) above sea level. It is about 90 km from Mumbai, and 120 km from Pune.',
  },
  {
    id: 6,
    imgSrc: panchgani,
    imgs:'https://www.thrillophilia.com/places-to-visit-in-panchgani',
    destTitle: 'Panchgani',
    grade: 'Greenery',
    fees: '$800',
    description:
      'Panchgani, called Paachgani (in Marathi), is a hill station and municipal council in Satara district in Maharashtra, India. Panchgani attracts tourists throughout the year.',
  },
  {
    id: 7,
    imgSrc: tajmahal,
    imgs :'https://www.thrillophilia.com/places-to-visit-in-agra',
    destTitle: 'Agra',
    grade: 'Cultural',
    fees: '$700',
    description:
      'Agra is a city offering a discovery of the beautiful era. Agra has a rich history, reflected in its numerous monuments dotted in and around the city.',
  },
];

const Main = () => {
  return (
    <section className="main container section">
      <div className="secTitle">
        <h3 className="Title">Most visited Destinations</h3>
      </div>

      <div className="secContent grid">
        {Data.map(({ id, imgSrc, imgs, destTitle, location, grade, fees, description }) => {
          return (
            <div key={id} className="singleDestination">
              <div className="imageDiv">
                <a href={imgs} target="_blank" rel="noopener noreferrer">
                  <img src={imgSrc} alt={destTitle} />
                </a>
              </div>

              <div className="cardInfo">
                <h4 className="destTitle">{destTitle}</h4>
                <span className="continent flex">
                  <HiOutlineLocationMarker className="icon" />
                  <span className="name">{location}</span>
                </span>

                <div className="fees flex">
                  <div className="grade">
                    <span>
                      {grade}
                      <small> Fees </small>
                    </span>
                  </div>
                  <div className="price">
                    <h5> {fees}</h5>
                  </div>
                </div>

                <div className="desc">
                  <p>{description}</p>
                </div>
                <button className="btn flex">DETAILS</button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Main;
