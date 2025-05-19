import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Student.css";

import receipt from "../../assets/receipt_9202739 1.png";
import search from "../../assets/search_9053180 1.png";
import onlineLearning from "../../assets/online-learning_2436805 1.png";
import money from "../../assets/money_2382775 1.png";
import peer from "../../assets/peer_17291857 1.png";
import useravatar from "../../assets/user-avatar_6380160 1.png";
import family from "../../assets/family_1416832 1.png";
import exam from "../../assets/exam_18893627 1.png";
import refund from "../../assets/refund_6133337 1.png";
import bus from "../../assets/bus_13807566 1.png";
import book from "../../assets/open-book_2702134 1.png";
import searchicon from "../../assets/Vector.png";
import Footer from "../Footer/Footer";

const Students = () => {
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 360);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 360);
    };

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", checkMobile);

    checkMobile();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  const cardData = [
    { title: "State", icon: search, description: "State, City, Campus." },
    {
      title: "City",
      description: "Fee payment Year, Fee Head Organization, Card Type.",
      icon: receipt,
    },
    {
      title: "Campus",
      description: "Stream, Program Name, Exam program, Course Track, Batch, Section.",
      icon: onlineLearning,
    },
    {
      title: "Fee Payment Year",
      description: "Description/Reason, Paymode",
      icon: money,
      link: "/feePayment",
    },
    { title: "Fee heads", description: "Mandal", icon: peer },
    {
      title: "Organization",
      description: "Sponsored by, Sponsored Dist, School State, School District, School Type, Marks.",
      icon: useravatar,
    },
    { title: "Card Type", description: "Reservation, Standard, Sibling Type.", icon: family },
    {
      title: "Stream",
      description: "Second Language, Nationality, Religion, Exam Type, Appearing Year...",
      icon: exam,
    },
    { title: "Program Name", description: "Account Type", icon: refund },
    { title: "Exam program", description: "Payment Status, Books For Class.", icon: book },
    { title: "Course Track", description: "Route From, Stages, Bus No., Route", icon: bus },
  ];

  const handleCardClick = (card) => {
    if (card.link) navigate(card.link);
  };

  return (
    <div className="students-wrapper">
      <div className={`students-header-section ${isScrolled && isMobile ? "scrolled" : ""}`}>
        <div className="header-content">
          <h1 className="students-header">Students Masters</h1>
          {(!isScrolled || !isMobile) && (
            <p className="students-subtext">
              Access and manage comprehensive student details seamlessly. View
              personalized profiles tailored to your campus.
            </p>
          )}
          <div className="search">
            <img src={searchicon} alt="Search" className="search-icon" />
            <input type="text" placeholder="Search for anything" className="search-bar" />
          </div>
        </div>
      </div>

      <div className="card-grid-section">
        <div className="card-grid">
          {cardData.map((card, index) => (
            <div
              className="card"
              key={index}
              onClick={() => handleCardClick(card)}
              style={{ cursor: card.link ? "pointer" : "default" }}
            >
              <img src={card.icon} alt={card.title} className="card-icon" />
              <h3 className="card-title">{card.title}</h3>
              <p className="card-description">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
      <Footer isVisible={true} isMobile={360}/>
    </div>
  );
};

export default Students;
