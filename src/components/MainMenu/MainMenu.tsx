import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faBell } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

// Define the properties you expect for this component
interface MainMenuProps {
  items: string[];
  heading: string;
}

const MainMenu: React.FC<MainMenuProps> = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-1 invo-navbar-brand">
          <Link to={'/'}>
            <img src="https://ourinvo.com/assets/img/logo/Invo_logo66.png" />
          </Link>
        </div>

        <div className="col-2 game_id">
          <img src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Fortnite_F_lettermark_logo.png" />
          <p>
            Game ID: <span>8452</span>
          </p>
        </div>
        <div className="col-3 game_id game_e_balance">
          <p>
            <span>Economy Balance :</span> $396,900.62 | IV 7772
          </p>
        </div>
        <div className="col-3 game_search">
          <form className="form-floating game_id">
            <input
              type="text"
              className="form-control"
              id="floatingInputValue"
              placeholder=""
              defaultValue=""
            />
          </form>
        </div>
        <div className="col-3 dev_id">
          <img src="https://static-00.iconduck.com/assets.00/epic-games-icon-512x512-7qpmojcd.png" />
          <p>Epic Games</p>
          <div className="notification">
            <FontAwesomeIcon icon={faBell} />
            <span className="notification_count">3</span>{' '}
            {/* Replace 3 with your dynamic notification count */}
          </div>
          <div className="menu">
            <FontAwesomeIcon icon={faBars} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainMenu;
