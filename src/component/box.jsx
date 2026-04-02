import React from "react";

class Box extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="sm:w-[270px] w-[150px] sm:h-[330px] h-[373px] flex flex-col  ">
        <div className="w-[70px] h-[70px] rounded-full flex items-center justify-center bg-green-600">
          <img src={this.props.img} width={70} alt="" />
        </div>
        <h1 className="text-[24px] font-bold">{this.props.title}</h1>
        <p className=" text-[#2D3436] text-[18px]">
          {this.props.description}
        </p>
        <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
          Add to Cart
        </button>
      </div>
    );
  }
}

export default Box;
