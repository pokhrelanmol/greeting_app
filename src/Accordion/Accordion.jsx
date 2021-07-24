import React from "react";
import { useState } from "react";
import AccordionData from "./AccordionData";
import MyAccordion from "./MyAccordion";
import './Accordion.css'
function Accordion() {
  const [data, setData] = useState(AccordionData);

  return (
    <>
      <div className="main-div">
        <h1 className="heading">Accordion</h1>
        {data.map((elem) => {
          return <MyAccordion question={elem.question} answer={elem.answer} />;
        })}
      </div>
    </>
  );
}

export default Accordion;
