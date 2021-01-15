import React from 'react'
import './header.css'
export const Card = () => {

  const cardData = [
    {
      image: 'https://cdn.britannica.com/77/170477-050-1C747EE3/Laptop-computer.jpg',
      title: 'Card Title',
      description: 'Some quick example text to build on the card title and make up the bulk of the card',
      listItems : [
        {name: 'Cras justo io'},
        {name: 'This is Hunza'},
        {name: 'This is Gilgit'}
      ],
      links : [
        {link: 'Card Link'},
        {link: 'Another Link'}
      ]
    },
    {
      image: 'https://cdn.britannica.com/77/170477-050-1C747EE3/Laptop-computer.jpg',
      title: 'Card Title',
      description: 'Some quick example text to build on the card title and make up the bulk of the card',
      listItems : [
        {name: 'Crasto odio'},
        {name: 'This is Hunza'},
        {name: 'This is Gilgit'}
      ],
      links : [
        {link: 'Card Link'},
        {link: 'Another Link'}
      ]
    },
    {
      image: 'https://cdn.britannica.com/77/170477-050-1C747EE3/Laptop-computer.jpg',
      title: 'Card Title',
      description: 'Some quick example text to build on the card title and make up the bulk of the card',
      listItems : [
        {name: 'Cras ju odio'},
        {name: 'This is Hunza'},
        {name: 'This is Gilgit'}
      ],
      links : [
        {link: 'Card Link'},
        {link: 'Another Link'}
      ]
    }
  ]
  return (
    <div style={{display: 'flex'}}>
      {
        cardData.map((item, index) => {
          return(
            <div key={index} className="card" style={{width: '18rem'}}>
                <img src={item.image} className="card-img-top" alt="..."/>
                <div className="card-body">
                  <h5 className="card-title">{ item.title }</h5>
                  <p className="card-text">{ item.description }</p>
                </div>
                {
                  item.listItems.map((listItem, index) => {
                    // console.log(listItems)
                    return (
                      <ul key={index} className="list-group list-group-flush">
                      <li className="list-group-item">{ listItem.name }</li>
                    </ul>
                    )
                  })
                }
                <div style={{ display:'flex'}}>
                {
                  item.links.map((link, index) => {
                      return (
                        <div key={index} className="card-body">
                          <a href="/#" class="card-link"> { link.link } </a>
                        </div>
                      )
                  })
                }
              </div>
            </div>
          )
        })
      }
    </div>
  )
}
