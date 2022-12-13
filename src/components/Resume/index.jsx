import React from "react";
import Title from "../Title";
import "./resume.css";
import ResumeItem from "./ResumeItem";
const Index = () => {
  const resumeItems = [
    {
      title: "Education",
      description:
        "General Eşref Bitlis Anatolian High School Inonu University Computer Engineering",
   
      start: "2015",
      end: "2023"
    },
    {
      title: "Experience",
      description:
        "Bera Software Corporation, Cyber Security and Web Development Specialist (Intern)",
      attributes: [
        "I participated in penetration tests. I have increased my knowledge on these subjects.",
        "I have prepared a comprehensive document about security vulnerabilities in web services.",
        "I have gained experience in preparing penetration test reports. I increased my communication skills in the corporate field by communicating with customers personally.",
        "I have gained experience in web development. HTML CSS"
      ],
      start: "2022 July",
      end: "2022 August"
    },
    {
      title: "Certifications",
      description:
        "I got many course certificates in the field of cyber security , web development etc.",
      attributes: [
        "Web penetration testing course certificate (Udemy)",
        "Network penetration tests, vulnerabilities (Udemy)",
        "Penetration tests, vulnerabilities (Udemy)",
        "API secrutiy (Udemy)",
        "Data science, Machine Learning Education with Python (Udemy)",
        "Web development course certificate (Udemy)",
        "Python course certificate (Udemy)",
      ]
    }
  ];

  return (
    <section id="resume" className="container">
      <Title underline={true}>Resume</Title>
      <p>
        In this section, you can find information about my education and work
        experience in software engineering.
      </p>
      <div className="resume-category-title">Sumary</div>
      <div className="row gap-5">
        {resumeItems.map((resumeItem, index) => (
          <div className="col-lg-6 col-sm-12 " key={index}>
            <ResumeItem {...resumeItem} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Index;
