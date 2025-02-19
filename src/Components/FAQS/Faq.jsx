import React, { useState } from "react";
import { FiMinus, FiPlus } from "react-icons/fi";
import "./FAQ.css";

const faqs = [
  {
    question: "What services does Zemalt offer?",
    answer:
      "Zemalt specializes in SEO, Google Ads, content writing, social media ads, web development, and UI/UX design, helping businesses enhance their online presence and drive real results.",
  },
  {
    question: "How can Zemalt improve my website’s SEO?",
    answer:
      "We use advanced on-page, off-page, and technical SEO strategies to boost rankings, increase organic traffic, and improve website authority on search engines like Google.",
  },
  {
    question: "Why should I choose Zemalt for Google Ads management?",
    answer:
      "Our data-driven approach ensures high ROI, targeted audience reach, and optimized ad spending, maximizing conversions while keeping costs low.",
  },
  {
    question: "How does Zemalt create high-quality content?",
    answer:
      "Our expert writers craft SEO-optimized, engaging, and industry-specific content tailored to your brand, increasing visibility and audience engagement.",
  },
  {
    question: "What makes Zemalt’s social media ads effective?",
    answer:
      "We create highly targeted, visually compelling, and conversion-focused ad campaigns that boost engagement, brand awareness, and sales.",
  },
  {
    question: "How does Zemalt’s web development service benefit my business?",
    answer:
      "We design fast, secure, and user-friendly websites optimized for SEO and conversions, ensuring a seamless user experience and business growth.",
  },
  {
    question: "Can Zemalt enhance my website’s UI/UX design?",
    answer:
      "Yes! Our UI/UX experts craft intuitive, visually appealing, and user-centered designs that enhance user experience and increase retention.",
  },
];

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
      <h1>
        Frequently <br /> asked questions
      </h1>
      <div className="faq-list">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`faq-item ${openIndex === index ? "open" : ""}`}
          >
            <div className="faq-question" onClick={() => toggleFAQ(index)}>
              <p>{faq.question}</p>
              {openIndex === index ? <FiMinus /> : <FiPlus />}
            </div>
            {openIndex === index && (
              <div className="faq-answer">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
