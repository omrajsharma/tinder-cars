import React from 'react'
import TinderCard from 'react-tinder-card';
import './TinderCards.css'

function TinderCards() {

  // Hooks are functions that can be used in React components. 
  const [cars, setCars] = React.useState([
    {
      name: 'Tesla',
      url: 'https://media.wired.com/photos/5dd82f459ac14a0008116985/4:3/w_1412,h_1059,c_limit/Transoi_storyone_Screen-Shot-2019-11-22-at-10.38.01-AM.jpg'
    },
    {
      name: 'BMW',
      url: 'https://images.hgmsites.net/hug/bmw-i8_100634676_h.jpg'
    },
    {
      name: 'Lykan',
      url: 'https://www.motorbiscuit.com/wp-content/uploads/2020/06/Lykan-Hypersport-cover.jpg?w=1024&h=512'
    },
    {
      name: 'Porsche',
      url: 'https://www.cnet.com/a/img/resize/f59e734f0f6826822d60200dd73b9a57cd47998e/hub/2021/07/08/59349eae-2534-4fb3-8911-87d99f427250/2021-porsche-911-carrera-s-cabriolet-1.jpg?auto=webp&width=1200'
    }

  ]);

  return (
    <div className='card-container'>

      {
        cars.map( car => (
          <TinderCard
            className="swipe"
            key={car.name}
            preventSwipe={['up', 'down']}
          >
              <div
                style={ { backgroundImage: `url(${car.url})` } }
                className='card'
              >
                <h2>{car.name}</h2>
              </div>
          </TinderCard>
        ))
      }


    </div>

  )
}

export default TinderCards