import { Link } from 'react-router-dom';
import SearchOrder from '../features/order/SearchOrder';
import User from './User';

function Header() {
  return (
    <header className="border-b border-stone-200 bg-yellow-500 px-4 py-3 uppercase sm:px-6">
      <Link to="/" className="tracking-widest">
        Fast React Pizza Co.
      </Link>
      <SearchOrder />
      <User />
    </header>
  );
}

export default Header;
