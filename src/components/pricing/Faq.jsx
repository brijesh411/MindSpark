import React, { useState } from "react";
import { faq } from "../../dummydata";
import Heading from "../common/heading/Heading";

const Faq = () => {
  const [click, setClick] = useState(null);

  const toggle = (id) => {
    if (click === id) {
      return setClick(null);
    }
    setClick(id);
  };

  return (
    <>
      <Heading subtitle="FAQS" title="Frequently Asked Questions" />
      <section className="faq">
        <div className="container">
          {faq.map((val) => (
            <div className="box" key={val.id}>
              <button className="accordion" onClick={() => toggle(val.id)}>
                <h2>{val.title}</h2>
                <span>
                  {click === val.id ? (
                    <i className="fa fa-chevron-down"></i>
                  ) : (
                    <i className="fa fa-chevron-right"></i>
                  )}
                </span>
              </button>
              {click === val.id && (
                <div className="text">
                  <p>{val.desc}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Faq;
