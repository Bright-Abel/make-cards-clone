import { NavLink } from 'react-router-dom';
import { dashboardLinks } from '../custom.jsx/data';

const Navlinks = ({ handleClick }) => {
  return (
    <div className="nav-links">
      {dashboardLinks.map((link) => {
        const { id, url, text, icon } = link;

        return (
          <NavLink
            key={id}
            to={url}
            onClick={handleClick}
            className={({ isActive }) =>
              isActive ? 'nav-link active bg-gray-100' : 'nav-link'
            }
            end
          >
            <span className="icon">{icon}</span> {text}
          </NavLink>
        );
      })}
    </div>
  );
};
export default Navlinks;
