import React from 'react'
import './header.css'
export const Card = () => {

  const cardData = [
    {
      image: 'https://cdn.britannica.com/77/170477-050-1C747EE3/Laptop-computer.jpg',
      title: 'Card Title',
      description: 'Some quick example text to build on the card title and make up the bulk of the card',
      listItems : [
        {Firstitem: 'Cras justo odio'},
        {Seconditem: 'Cras justo odio'},
        {Thirditem: 'Cras justo odio'}
      ],
      subtitle: 'Cras justo odio',
    },
    {
      image: 'https://cdn.britannica.com/77/170477-050-1C747EE3/Laptop-computer.jpg',
      title: 'Card Title',
      description: 'Some quick example text to build on the card title and make up the bulk of the card',
      listItems : [
        {Firstitem: 'Cras justo odio'},
        {Seconditem: 'Cras justo odio'},
        {Thirditem: 'Cras justo odio'}
      ],
      subtitle: 'Cras justo odio',
    },
    {
      image: 'https://cdn.britannica.com/77/170477-050-1C747EE3/Laptop-computer.jpg',
      title: 'Card Title',
      description: 'Some quick example text to build on the card title and make up the bulk of the card',
      listItems : [
        {firstitem: 'Cras justo odio'},
        {seconditem: 'Cras justo odio'},
        {thirditem: 'Cras justo odio'}
      ],
      subtitle: 'Cras justo odio',
    }
  ]
  return (
    <div style={{display: 'flex'}}>
      {
        cardData.map((item, index) => {
          console.log("item", item.title)
          return(
            <div key={index} className="card" style={{width: '18rem'}}>
                <img src={item.image} className="card-img-top" alt="..."/>
                <div className="card-body">
                  <h5 className="card-title">{ item.title }</h5>
                  <p className="card-text">{ item.description }</p>
                </div>
                {
                  cardData.map((listItems, index) => {
                    return (
                      <ul key={index} className="list-group list-group-flush">
                      <li className="list-group-item">{ listItems.firstitem }</li>
                      <li className="list-group-item"> { listItems.seconditem } </li> 
                      <li className="list-group-item"> { listItems.thirditem } </li> 
                    </ul>
                    )
                  })
                }
                <div className="card-body">
                  <p> {cardData.subtitle} </p>
                </div>
            </div>
          )
        })
      }
    </div>
  )
}
