import * as React from "react";

function Accordion({ question, answer }) {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <article className="flex flex-col gap-3 sm:gap-4 bg-white/50 backdrop-blur-xl rounded-xl px-4 sm:px-5 py-6 sm:py-7 mb-4">
      <button
        className="flex justify-between items-center text-lg sm:text-xl font-semibold"
        onClick={toggleAccordion}
      >
        <h2>{question}</h2>
        <span className="w-5 h-5 sm:w-6 sm:h-6">{isOpen ? "★" : "☆"} </span>
      </button>
      {isOpen && (
        <p className="text-base text-blue-900 sm:text-lg leading-6 sm:leading-7 font-thin">
          {answer}
        </p>
      )}
    </article>
  );
}

function FAQs({ language }) {
  const faqs = {
    en: [
      {
        question: "What is BentoBox?✮⋆˙",
        answer:
          "BentoBox is a creative service platform I built. Through BentoBox, you can order various services all in one place: custom illustrations, personalized t-shirts, interactive websites, game development, and custom stickers. One BentoBox = many creative solutions. [BentoBox is still building] ",
      },
      {
        question: "Where can i find BentoBox?✮⋆˙",
        answer:
          "you can click the BentoBox section or go to bentobox.nfnaa.dev",
      },
      {
        question: "How to contact developer?✮⋆˙",
        answer:
          "if you need to contact me, you could click logo (github, instagram etc.) on running logo at 'Home' section",
      },
    ],
    id: [
      {
        question: "Apa itu BentoBox?✮⋆˙",
        answer:
          "BentoBox adalah platform layanan kreatif yang aku buat. Melalui BentoBox, kamu bisa memesan berbagai jasa dalam satu tempat: ilustrasi custom, kaos desain khusus, website interaktif sesuai keinginan, pengembangan game, hingga stiker custom. Jadi, satu BentoBox = banyak solusi kreatif. [BentoBox masih dalam pembangunan] ",
      },
      {
        question: "Dimana aku bisa menemukan BentoBox?✮⋆˙",
        answer:
          "kamu bisa klik kotak yang ada di bagian BentoBox atau mengunjungi bentobox.nfnaa.dev",
      },
      {
        question: "Bagaimana cara menghubungi developer?✮⋆˙",
        answer:
          "kamu bisa menghubungi aku dengan menekan logo (github, instagram dll.) yang berada di logo berjalan dan bagian 'Utama' ",
      },
    ],
  };

  return (
    <div className="bg-transparent backdrop-blur-lg pt-4 pb-20 px-3 sm:px-5">
      <div className="lg:max-w-3xl sm:max-w-lg md:max-w-2xl max-w-xs mx-auto">
        <h1 className="text-center mb-4 sm:mb-8 text-3xl sm:text-4xl lg:text-5xl font-semibold">
          {language === "en"
            ? "Frequently Asked Questions"
            : "Pertanyaan yang Sering Diajukan"}
        </h1>
        <p className="text-xs sm:text-base md:text-lg text-center mb-10 sm:mb-14 font-light">
          {language === "en"
            ? "here are some question and answer that may help you!"
            : "ini adalah beberapa pertanyaan dan jawaban yang mungkin membantu kamu!"}
        </p>
        {faqs[language].map((faq, index) => (
          <Accordion key={index} question={faq.question} answer={faq.answer} />
        ))}
        <div className="text-center mt-10 sm:mt-12 text-sm sm:text-base md:text-lg font-light">
          {language === "en"
            ? "Haven't got your answer?"
            : "Belum menemukan jawaban?"}
          <a
            href="mailto:nafisanailalh7@gmail.com"
            className="hover:text-white ml-2 text-blue-900 font-light"
          >
            {language === "en"
              ? "Contact our support now"
              : "Hubungi support kami sekarang"}
          </a>
        </div>
      </div>
    </div>
  );
}

export default FAQs;
