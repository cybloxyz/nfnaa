import * as React from "react";

function Accordion({ question, answer }) {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <article className="flex flex-col gap-4 bg-white/50 backdrop-blur-xl rounded-xl px-5 py-7 mb-4">
      <button
        className="flex justify-between items-center text-xl font-semibold"
        onClick={toggleAccordion}
      >
        <h2>{question}</h2>
        <span className="w-6 h-6">{isOpen ? "★" : "☆"} </span>
      </button>
      {isOpen && <p className="text-lg leading-7 font-thin">{answer}</p>}
    </article>
  );
}

function FAQs() {
  const faqs = [
    {
      question: "What is BentoBox?",
      answer: "BentoBox is startup website which sell tech things, visit to purchase something you may interest! ",
    },
    {
      question: "This is question 2?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    },
    {
      question: "This is question 3?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    },
    // Additional FAQs can be added here
  ];

  return (
    <div className="bg-transparent backdrop-blur-lg pt-2 pb-24 px-5">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-center mb-8 text-5xl font-semibold">
          Frequently Asked Questions
        </h1>
        <p className="text-lg text-center mb-14 font-light">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        {faqs.map((faq, index) => (
          <Accordion key={index} question={faq.question} answer={faq.answer} />
        ))}
        <div className="text-center mt-12 text-lg font-light">
          Haven't got your answer?
          <a
            href="/support"
            className="hover:text-white ml-2 text-blue-900 font-light"
          >
            Contact our support now
          </a>
        </div>
      </div>
    </div>
  );
}

export default FAQs;
