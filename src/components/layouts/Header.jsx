import { Link, NavLink } from 'react-router-dom';
import Logo from '../../assets/images/logo.png';
import Image from '../utils/Image';

const menuData = [
  { id: 1, name: 'home', path: '/' },
  { id: 2, name: 'about us', path: '/about-us' },
  { id: 3, name: 'services', path: '/services' },
  { id: 4, name: 'pages', path: '/pages' },
  { id: 5, name: 'blog', path: '/blog' },
  { id: 6, name: 'contact us', path: '/contact-us' },
];

const Header = () => {
  return (
    <header className="bg-primary pt-6 pb-6">
      <div className="max-w-[1195px] mx-auto px-4 mx-w">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" aria-label="Go To Homepage">
            <Image source={Logo} alt=" Company logo" />
          </Link>

          {/* Navigation */}
          <nav>
            <ul className="flex justify-center items-center gap-14">
              {menuData.map(item => (
                <li key={item.id}>
                  <NavLink
                    to={item.path}
                    className="text-white text-base font-bold font-lato tracking-[0.7px] capitalize relative after:absolute after:bottom-[-10px] after:left-0 after:w-full after:h-[2px]  after:transition-transform after:duration-300 after:origin-left hover:after:scale-x-100 after:scale-x-0 navItem"
                  >
                    {item.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
