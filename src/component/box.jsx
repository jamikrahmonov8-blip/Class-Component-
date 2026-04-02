import React from "react";

class Box extends React.Component {
  render(props) {
    return (                
       <div className="w-[270px] h-[330px] ">
        <img src={props.img} width={70} alt="" />
        <h1 className="text-[24px] font-bold">{props.title}</h1>
        <p className="w-[270px] text-[#2D3436] text-[18px]">{props.description}</p>
        <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
          Add to Cart
        </button>
       </div>
    );
  }
}

export default Box;