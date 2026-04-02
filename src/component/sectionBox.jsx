import React from "react";
import Box from "./box";
import phone from "../assets/phone.png";
class SectionBox extends React.Component {
  render() {
    return (
        <section className=" max-w-[1400px] m-auto flex flex-col        gap-10 mt-20 mb-20">

            <div >
                <h1 className="sm:text-[32px] text-[24px]">Delivering good designs since 1954 🚚💨</h1>
                <p className="sm:text-[24px] w-[900px] text-[18px]">We’re the first multi-purpose design kit solutions for businesses. We help you bridge
gaps between your layouts, templates and developers to empower all involved.</p>
            </div>
      <div className="flex  justify-between flex-wrap  ">
    <Box img={phone} title="Product Title" description="Delivering faster and more personalized support with shared screens and cool design systems for Figma" />
    <Box img={phone} title="Product Title" description="Delivering faster and more personalized support with shared screens and cool design systems for Figma" />
    <Box img={phone} title="Product Title" description="Delivering faster and more personalized support with shared screens and cool design systems for Figma" />
    <Box img={phone} title="Product Title" description="Delivering faster and more personalized support with shared screens and cool design systems for Figma" />
      </div>
                    </section>
    );
  }
}

export default SectionBox;