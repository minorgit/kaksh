import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import Kaksh from '../assets/Kaksh.jpg';
import { Link } from 'react-router-dom';  

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-5">
      <div className="container mx-auto text-center">
        <div className="flex flex-col items-center mb-4">
          <a href="/" className="flex items-center p-0 text-white">
            <img alt="logo" src={Kaksh} width="89px" className="rounded" />
          </a>
          <p className="my-3 max-w-md">
            Find your perfect home with us. We provide a wide range of rental options tailored to your needs.
          </p>
          <div className="flex space-x-3 mt-4">
            
            <a href="/" className="text-[#3b5998] hover:text-[#2d4373]">
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
            
            <a href="/" className="text-[#1DA1F2] hover:text-[#1a91c0]">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            
            <a href="/" className="text-[#E4405F] hover:text-[#bc2a8d]">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </div>
        </div>

        
        <div className="mt-4">
          <Link to="/FeedbackPage" className="text-white hover:text-gray-400">
            Give Feedback
          </Link>
        </div>


        <small className="text-center mt-5">
          &copy; {new Date().getFullYear()} KAKSH. All rights reserved.
        </small>
      </div>
    </footer>
  );
};

export default Footer;
