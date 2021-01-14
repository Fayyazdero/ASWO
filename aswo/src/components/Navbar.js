import React from "react"
import './header.css'

export const Navbar = () =>{

  const card = [
    {
      title: "title",
      subtitle: "subtitle",
      descriptions: "Some quick example text to build on the card title and make up the bulk of the card's content",
      icontype: "icon"
    },
  ]

  return(
    <div style={{display: 'flex'}}>
     {
       card.map((item, index) => {
         return (
          <div key={index} className="card" style={{width: "18rem"}}>
          <img src="..." className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">{item.title}</h5>
            <p className="card-text">{item.descriptions}</p>
            <a href="/#" className="btn btn-primary">{item.subtitle}</a>
          </div>
        </div>   
         )
       })
     }
     
   </div> 
  )
}