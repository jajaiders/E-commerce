import { Link } from "react-router-dom";
import { assets } from "../assets/assets";

const Footer = () => {
  const footerItems = [
    { name: "Home", link: "/" },
    { name: "collection", link: "/collection" },
    { name: "About", link: "about" },
    { name: "Contact", link: "contact" },
  ];

  return (
    <div>
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        <div>
          <img src={assets.logo} alt="logo" className="mb-5 w-32" />
          <p className="w-full md:w-2/3 text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
        <div>
          <p className="text-xl font-medium mb-5">Company</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            {footerItems.map((item, x) => {
              return (
                <Link key={x} to={item.link}>
                  <p>{item.name}</p>
                </Link>
              );
            })}
          </ul>
        </div>
        <div>
          <p className="text-xl font-medium mb-5">Get in touch</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>+1-212-456-7890</li>
            <li>contact@foreveryou.com</li>
          </ul>
        </div>
      </div>
      <div>
        <hr />
        <p className="py-5 text-sm text-center">
          Copyright 2024 forever.com All Right Reserverd.
        </p>
      </div>
    </div>
  );
};

export default Footer;
