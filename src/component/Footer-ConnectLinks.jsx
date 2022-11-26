import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';

export default function ConnectLinks() {
  return (
    <div className="List flex">
      <div className="twitter flex items-center">
        <a href="http://dicoding.com" className="block cursor-pointer">
          <FaTwitter className="m-auto h-10 w-10" />
          <h1 className="px-2">Twitter</h1>
        </a>
      </div>
      <div className="facebook my-1 flex items-center">
        <a href="http://dicoding.com" className=" cursor-pointer text-center">
          <FaFacebook className="m-auto h-10 w-10" />
          <h1 className="px-2">Facebook</h1>
        </a>
      </div>
      <div className="linkedin my-1 flex cursor-pointer items-center">
        <a targer="_blank" href="http://dicoding.com" className="cursor-pointer items-center text-center">
          <FaLinkedin className="m-auto h-10 w-10" />
          <h1 className="px-2">Linkedin</h1>
        </a>
      </div>
    </div>
  );
}
