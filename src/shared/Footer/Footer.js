import React from "react";
import footer from '../../assets/images/footer.png'
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer p-10 mt-10" style={{backgroundImage: `url(${footer})`}}>
      <div>
        <p className='text-2xl font-bold text-secondary'>
          Doctors Portal
        </p>
        <p>Copyright 2025, All Right Reserved</p>
      </div>
      <div>
        <span className="footer-title">Services</span>
        <Link className="link link-hover">Emergency Checkup</Link>
        <Link className="link link-hover">Monthly Checkup</Link>
        <Link className="link link-hover">Weekly Checkup</Link>
        <Link className="link link-hover">Daily Checkup</Link>
      </div>
      <div>
        <span className="footer-title">Oral Health</span>
        <Link className="link link-hover">Teeth Whitening</Link>
        <Link className="link link-hover">Cavity Filling</Link>
        <Link className="link link-hover">Flouride Treatement</Link>
        <Link className="link link-hover">Surgery Treatement</Link>
      </div>
      <div>
        <span className="footer-title">Our Address</span>
        <p>Gulshan 144/R13, Dhaka</p>
      </div>
    </footer>
  );
};

export default Footer;
