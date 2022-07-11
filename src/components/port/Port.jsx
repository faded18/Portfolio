import React, { useEffect, useState } from "react";
import Portlist from "../portlist/Portlist";

import {
  featuredPortfolio,
  webPortfolio,
  mobilePortfolio,
  designPortfolio,
  contentPortfolio,
} from "../data"

import "./port.scss";
const Port = () => {

const [selected, setselected] = useState("featured")
const [data, setdata] = useState([])

useEffect(()=>{
  switch (selected) {
    case "featured":setdata(featuredPortfolio);
     break;
    case "web":setdata(webPortfolio);
     break;
     case "mobile":setdata(mobilePortfolio);
     break;
     case "design":setdata(designPortfolio);
     break;
     case "content":setdata(contentPortfolio);
     break;
  
    default:
      break;
  }



}, [selected])

  const list = [
    {
      id: "featured",
      title: "Featured",
    },
    {
      id: "web",
      title: "Web App",
    },
    {
      id: "mobile",
      title: "Mobile App",
    },
    {
      id: "design",
      title: "Design",
    },
    {
      id: "content",
      title: "Content",
    },
  ];


  return (
    <div className="port" id="port">
      <h1>Portfolio</h1>
      <ul>
        {list.map((item)=>(
         <Portlist id={item.id} title={item.title} active={selected===item.id} setselected={setselected} />
        ))

        }
      </ul>
      <div className="container">
      {data.map((d)=>(
        <div className="item">
          <img
            src={d.img}
            alt=""
          />
          <h3>{d.title}</h3>
        </div>


      ))}
       
      
      </div>
    </div>
  );
};

export default Port;
