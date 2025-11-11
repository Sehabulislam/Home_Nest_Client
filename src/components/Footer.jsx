import React from 'react';
import { FaFacebook, FaYoutube } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { RiInstagramFill } from 'react-icons/ri';

const Footer = () => {
    return (
        <footer className="footer sm:footer-horizontal bg-base-200 text-base-content p-10">
  <aside>
    <h1 className="text-3xl font-bold">.Home Nest</h1>
    <p>
      Home Nest Properties Pvt. Ltd.
      <br />
      Providing reliable tech since 1999
    </p>
    <div className='flex items-center gap-5 mt-3'>
    <a className="link link-hover"><FaFacebook size={25}/></a>
    <a className="link link-hover"><FaYoutube size={25}/></a>
    <a className="link link-hover"><RiInstagramFill size={25}/></a>
    <a className="link link-hover"><FaXTwitter size={25}/></a>
  </div>
  </aside>
  <nav>
    <h6 className="footer-title">Services</h6>
    <a className="link link-hover">Branding</a>
    <a className="link link-hover">Design</a>
    <a className="link link-hover">Marketing</a>
    <a className="link link-hover">Advertisement</a>
  </nav>
  <nav>
    <h6 className="footer-title">Company</h6>
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Jobs</a>
    <a className="link link-hover">Press kit</a>
  </nav>
  <nav>
    <h6 className="footer-title">Legal</h6>
    <a className="link link-hover">Terms of use</a>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Cookie policy</a>
  </nav>
</footer>

    );
};

export default Footer;