import { NavLink } from 'react-router-dom';
import { GlobalContainer } from '../styles';
import { capitalize } from '../utils';

type Props = {};

const links = {
  home: 'home',
  headphones: 'headphones',
  speakers: 'speakers',
  earphones: 'earphones',
};

const Header = (props: Props) => {
  return (
    <GlobalContainer as='header'>
      <nav className='full-width'>
        <ul>
          {Object.keys(links).map((link) => (
            <li key={link}>
              <NavLink to={link}>{capitalize(link)}</NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </GlobalContainer>
  );
};

export { Header };
