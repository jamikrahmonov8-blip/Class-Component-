import React from "react";
import Box from "./box";
import phone from "../assets/phone.png";
class SectionBox extends React.Component {
  render() {
    return (
      <>
    <Box img={phone} title="Product Title" description="Product Description" />
      </>
    );
  }
}

export default SectionBox;