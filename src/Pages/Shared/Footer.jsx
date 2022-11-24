import React from "react";
import logo from "../../assets/images/logo.png";

const Footer = () => {
  return (
    <footer className="footer p-20 bg-black text-green-600">
      <div>
        <img src={logo} alt="" className="h-12" />
        <p className="text-xl">
          Laptop Cloud Ltd.
          <br />
          <span className="text-sm text-white">Providing reliable tech since 2015</span>
        </p>
      </div>
      <div>
        <span className="footer-title">Services</span>
        <a className="link link-hover">Branding</a>
        <a className="link link-hover">Design</a>
        <a className="link link-hover">Marketing</a>
        <a className="link link-hover">Advertisement</a>
      </div>
      <div>
        <span className="footer-title">Company</span>
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Jobs</a>
        <a className="link link-hover">Press kit</a>
      </div>
      <div>
        <span className="footer-title">Legal</span>
        <a className="link link-hover">Terms of use</a>
        <a className="link link-hover">Privacy policy</a>
        <a className="link link-hover">Cookie policy</a>
      </div>
    </footer>
  );
};

export default Footer;
