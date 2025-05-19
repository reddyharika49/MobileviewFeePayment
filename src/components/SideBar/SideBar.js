import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./SideBar.css";

import arrowLeft from "../../assets/ArrowLeft.png";
import students from "../../assets/Students.png";
import application from "../../assets/Application.png";
import employee from "../../assets/Employee.png";
import fleet from "../../assets/Fleet.png";
import warehouse from "../../assets/Warehouse.png";
import sms from "../../assets/SMS.png";
import questionBank from "../../assets/Question Bank.png";
import assetsManagement from "../../assets/Assets Management.png";
import paymentService from "../../assets/Payment Services.png";
import cctv from "../../assets/CCTC.png";
import hrms from "../../assets/HRMS.png";

export const SideBar = () => {
  const location = useLocation();

  return (
    <div className="Side-Bar">
      <div className="Side-Top">
        <img src={arrowLeft} className="arrow-icon" alt="Back" />
        <p className="top-text">Back to dashboard</p>
      </div>

      <div className="side-List">
        <ul className="List">
          <li>
            <Link
              to="/students"
              className={`list-item ${
                location.pathname === "/students" ? "active" : ""
              }`}
            >
              {location.pathname === "/students" ? (
                // White-fill active icon
                <svg
                  className="item-icon"
                  width="13"
                  height="16"
                  viewBox="0 0 13 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.6804 13.3336C12.6137 13.0314 12.2992 12.8373 11.9779 12.9001C11.6566 12.9628 11.4503 13.2586 11.517 13.5607C11.543 13.6789 11.5112 13.8008 11.4295 13.8952C11.3847 13.947 11.2858 14.0338 11.1264 14.0338H7.18095L8.78528 10.1756C9.36951 10.4603 9.89789 10.8485 10.3384 11.3266C10.5532 11.5598 10.9284 11.5851 11.1765 11.383C11.4244 11.181 11.4513 10.8281 11.2365 10.5949C10.507 9.80303 9.58125 9.21236 8.55568 8.86396C9.29976 8.27416 9.77336 7.39172 9.77336 6.40706C9.77336 5.82868 9.61185 5.27402 9.30923 4.78801L11.1398 4.15367V6.90995C11.1398 7.21854 11.4058 7.46868 11.734 7.46868C12.0621 7.46868 12.3281 7.21854 12.3281 6.90995V3.38991C12.3281 3.38441 12.3274 3.37904 12.3272 3.37357C12.3275 3.3665 12.3281 3.35946 12.3281 3.35233V3.32091C12.3281 3.08886 12.1756 2.88096 11.9449 2.79857L6.5849 0.884062C6.44959 0.835731 6.30016 0.835508 6.16465 0.883475L0.771048 2.79279C0.53952 2.87475 0.386237 3.08305 0.386237 3.31571V3.34714C0.386237 3.58172 0.542045 3.79133 0.776306 3.8719L3.41123 4.77803C3.1046 5.26626 2.94092 5.82432 2.94092 6.40708C2.94092 7.39284 3.41559 8.27614 4.16107 8.86594C3.47284 9.10044 2.82685 9.44454 2.25596 9.88742C1.12093 10.768 0.331786 11.9962 0.0338644 13.3458C-0.0645219 13.7915 0.0537971 14.2491 0.358521 14.6013C0.660988 14.9508 1.10907 15.1513 1.58787 15.1513H11.1264C11.6019 15.1513 12.0483 14.9506 12.3512 14.6005C12.6595 14.2442 12.7795 13.7824 12.6804 13.3336ZM2.64327 3.32406L6.373 2.00374L10.0831 3.32895L8.41167 3.90814C7.82777 3.6531 6.92028 3.60723 6.36371 3.60606C5.80699 3.6043 4.89878 3.64662 4.31471 3.89886L2.64327 3.32406ZM4.12919 6.40708C4.12919 5.8457 4.36206 5.31942 4.78474 4.92331C4.8995 4.8574 5.42717 4.7235 6.34134 4.7235C6.34829 4.7235 6.35533 4.7235 6.36231 4.7235C7.29003 4.72557 7.82352 4.864 7.93794 4.93107C8.35522 5.32624 8.58509 5.84977 8.58509 6.40706C8.58509 7.56238 7.58563 8.50232 6.35714 8.50232C5.12865 8.50232 4.12919 7.56241 4.12919 6.40708ZM1.58787 14.0338C1.42396 14.0338 1.32474 13.9475 1.28021 13.896C1.23434 13.8429 1.16257 13.7305 1.19733 13.5729C1.52674 12.0806 2.56271 10.8551 3.93162 10.182L5.53333 14.0338H1.58787ZM5.03998 9.77909C5.46323 9.67513 5.90493 9.61982 6.35714 9.61982C6.80653 9.61982 7.24894 9.67382 7.67517 9.77702L6.35714 12.9467L5.03998 9.77909Z"
                    fill="white"
                  />
                </svg>
              ) : (
                // Default icon
                <svg
                  className="item-icon"
                  width="13"
                  height="16"
                  viewBox="0 0 13 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.6804 13.3336C12.6137 13.0314 12.2992 12.8373 11.9779 12.9001C11.6566 12.9628 11.4503 13.2586 11.517 13.5607C11.543 13.6789 11.5112 13.8008 11.4295 13.8952C11.3847 13.947 11.2858 14.0338 11.1264 14.0338H7.18095L8.78528 10.1756C9.36951 10.4603 9.89789 10.8485 10.3384 11.3266C10.5532 11.5598 10.9284 11.5851 11.1765 11.383C11.4244 11.181 11.4513 10.8281 11.2365 10.5949C10.507 9.80303 9.58125 9.21236 8.55568 8.86396C9.29976 8.27416 9.77336 7.39172 9.77336 6.40706C9.77336 5.82868 9.61185 5.27402 9.30923 4.78801L11.1398 4.15367V6.90995C11.1398 7.21854 11.4058 7.46868 11.734 7.46868C12.0621 7.46868 12.3281 7.21854 12.3281 6.90995V3.38991C12.3281 3.38441 12.3274 3.37904 12.3272 3.37357C12.3275 3.3665 12.3281 3.35946 12.3281 3.35233V3.32091C12.3281 3.08886 12.1756 2.88096 11.9449 2.79857L6.5849 0.884062C6.44959 0.835731 6.30016 0.835508 6.16465 0.883475L0.771048 2.79279C0.53952 2.87475 0.386237 3.08305 0.386237 3.31571V3.34714C0.386237 3.58172 0.542045 3.79133 0.776306 3.8719L3.41123 4.77803C3.1046 5.26626 2.94092 5.82432 2.94092 6.40708C2.94092 7.39284 3.41559 8.27614 4.16107 8.86594C3.47284 9.10044 2.82685 9.44454 2.25596 9.88742C1.12093 10.768 0.331786 11.9962 0.0338644 13.3458C-0.0645219 13.7915 0.0537971 14.2491 0.358521 14.6013C0.660988 14.9508 1.10907 15.1513 1.58787 15.1513H11.1264C11.6019 15.1513 12.0483 14.9506 12.3512 14.6005C12.6595 14.2442 12.7795 13.7824 12.6804 13.3336ZM2.64327 3.32406L6.373 2.00374L10.0831 3.32895L8.41167 3.90814C7.82777 3.6531 6.92028 3.60723 6.36371 3.60606C5.80699 3.6043 4.89878 3.64662 4.31471 3.89886L2.64327 3.32406ZM4.12919 6.40708C4.12919 5.8457 4.36206 5.31942 4.78474 4.92331C4.8995 4.8574 5.42717 4.7235 6.34134 4.7235C6.34829 4.7235 6.35533 4.7235 6.36231 4.7235C7.29003 4.72557 7.82352 4.864 7.93794 4.93107C8.35522 5.32624 8.58509 5.84977 8.58509 6.40706C8.58509 7.56238 7.58563 8.50232 6.35714 8.50232C5.12865 8.50232 4.12919 7.56241 4.12919 6.40708ZM1.58787 14.0338C1.42396 14.0338 1.32474 13.9475 1.28021 13.896C1.23434 13.8429 1.16257 13.7305 1.19733 13.5729C1.52674 12.0806 2.56271 10.8551 3.93162 10.182L5.53333 14.0338H1.58787ZM5.03998 9.77909C5.46323 9.67513 5.90493 9.61982 6.35714 9.61982C6.80653 9.61982 7.24894 9.67382 7.67517 9.77702L6.35714 12.9467L5.03998 9.77909Z"
                    fill="#595E6C"
                  />
                </svg>
              )}
              <p>Students</p>
            </Link>
          </li>

          <li>
            <Link
              to="/application"
              className={`list-item ${
                location.pathname === "/application" ? "active" : ""
              }`}
            >
              <img src={application} className="item-icon" alt="Application" />
              <p>Application</p>
            </Link>
          </li>

          <li>
            <Link
              to="/employee"
              className={`list-item ${
                location.pathname === "/employee" ? "active" : ""
              }`}
            >
              <img src={employee} className="item-icon" alt="Employee" />
              <p>Employee</p>
            </Link>
          </li>

          <li>
            <Link
              to="/fleet"
              className={`list-item ${
                location.pathname === "/fleet" ? "active" : ""
              }`}
            >
              <img src={fleet} className="item-icon" alt="Fleet" />
              <p>Fleet</p>
            </Link>
          </li>

          <li>
            <Link
              to="/warehouse"
              className={`list-item ${
                location.pathname === "/warehouse" ? "active" : ""
              }`}
            >
              <img src={warehouse} className="item-icon" alt="Warehouse" />
              <p>Warehouse</p>
            </Link>
          </li>

          <li>
            <Link
              to="/sms"
              className={`list-item ${
                location.pathname === "/sms" ? "active" : ""
              }`}
            >
              <img src={sms} className="item-icon" alt="SMS" />
              <p>SMS</p>
            </Link>
          </li>

          <li>
            <Link
              to="/questionbank"
              className={`list-item ${
                location.pathname === "/questionbank" ? "active" : ""
              }`}
            >
              <img
                src={questionBank}
                className="item-icon"
                alt="Question Bank"
              />
              <p>QuestionBank</p>
            </Link>
          </li>

          <li>
            <Link
              to="/assetsmanagement"
              className={`list-item ${
                location.pathname === "/assetsmanagement" ? "active" : ""
              }`}
            >
              <img
                src={assetsManagement}
                className="item-icon"
                alt="Assets Management"
              />
              <p>Assets Management</p>
            </Link>
          </li>

          <li>
            <Link
              to="/paymentservices"
              className={`list-item ${
                location.pathname === "/paymentservices" ? "active" : ""
              }`}
            >
              <img
                src={paymentService}
                className="item-icon"
                alt="Payment Services"
              />
              <p>Payment Services</p>
            </Link>
          </li>

          <li>
            <Link
              to="/cctv"
              className={`list-item ${
                location.pathname === "/cctv" ? "active" : ""
              }`}
            >
              <img src={cctv} className="item-icon" alt="CCTV" />
              <p>CCTV</p>
            </Link>
          </li>

          <li>
            <Link
              to="/hrms"
              className={`list-item ${
                location.pathname === "/hrms" ? "active" : ""
              }`}
            >
              <img src={hrms} className="item-icon" alt="HRMS" />
              <p>HRMS</p>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};