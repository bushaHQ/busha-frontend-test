import BushaLogo from '../../../assets/logos/BushaLogo';
import Title from '../../../components/molecules/Title/Index'
import './NavHeader.scss';

const Header = () => (
  <header className="dl-header">

    <nav className="dl-header__nav">
      <BushaLogo />

      <Title 
        title="Oluwatobi Akindunjoye"
        append={
          <div className="append">
            <p>O</p>
          </div>
        }
      />
    </nav>
  </header>
);

export default Header;
