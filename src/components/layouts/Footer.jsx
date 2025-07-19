import { FaChevronRight, FaRegEnvelope } from 'react-icons/fa';
import { FaPhone } from 'react-icons/fa6';
import { MdLocationOn } from 'react-icons/md';
import { Link } from 'react-router';
import Logo from '../../assets/images/footer-logo.png';
import Image from '../utils/Image';
import Paragraph from '../utils/Paragraph';
const Footer = () => {
  const footerData = [
    { name: 'About Us', path: '/about-us' },
    { name: 'Our Services', path: '/services' },
    { name: 'Prices Plans', path: '/price' },
    { name: 'Blog', path: '/blog' },
    { name: 'Faq', path: '/faq' },
    { name: 'Contact Us', path: '/contact-us' },
    
  ];
  return (
    <div className="py-27 footer-bg">
      <div className="max-w-(--container) mx-auto">
        <div className="flex gap-24">
          {/* Footer left  */}
          <div className="w-[285px]">
            {/* Footer logo  */}
            <Link to="/">
              <Image source={Logo} alt="footer logo" />
            </Link>
            <Paragraph
              className="text-base font-lato font-normal text-white leading-7 mt-7"
              text="Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin commodo"
            />
            <address className="grid grid-cols-1 gap-4">
              <Link
                to="mail:"
                className="grid grid-cols-[16px_auto] gap-x-[18px]"
              >
                <FaRegEnvelope className="text-secondary mt-2" />
                <span className="font-lato text-white font-bold text-base leading-6 tracking-[0.7px] ">
                  monnersupport@email.com
                </span>
              </Link>
              <Link
                to="call:123-123-123"
                className="grid grid-cols-[16px_auto] gap-x-[18px]"
              >
                <FaPhone className="text-secondary mt-2" />
                <span className="font-lato text-white font-bold text-base leading-6 tracking-[0.7px] ">
                  (+1) 123-123-123
                </span>
              </Link>
              <Link
                to="https://maps.app.goo.gl/xxfH919ot456AQbk8"
                target="_blank"
                className="grid grid-cols-[16px_auto] gap-x-[18px] "
              >
                <MdLocationOn className="text-secondary mt-2" />

                <span className="font-lato text-white font-bold text-base leading-6 tracking-[0.7px] ">
                  275 Jimmy Way Copperopolis, California(CA), 95228
                </span>
              </Link>
            </address>
          </div>

          {/* Footer Middle  */}
          <div className="w-[186px] pt-5">
            <h4 className="font-montserrat text-2xl text-white tracking-[0.8px] font-bold capitalize pt">
              Company
            </h4>
            <div className='flex gap-y-4'>
              <ul className='mt-8'>
                {footerData.map((item, index) => (
                  <li key={index}>
                    <Link className="grid grid-cols-[14px_auto] gap-x-2 mt-3 items-center">
                      <FaChevronRight className="text-secondary mt-2" />
                      <span className="font-lato font-bold text-base text-white leading-6 tracking-[0.7px]">
                        {item.name}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
