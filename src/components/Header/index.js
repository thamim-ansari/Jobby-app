import {Link, withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'

import {FiLogOut} from 'react-icons/fi'
import {AiFillHome} from 'react-icons/ai'
import {BsFillBriefcaseFill} from 'react-icons/bs'
import './index.css'

const Header = props => {
  const onClickLogout = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  return (
    <nav className="nav-container">
      <Link to="/">
        <img
          src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
          alt="website logo"
          className="header-logo"
        />
      </Link>
      <ul className="mobile-nav-container">
        <li>
          <Link to="/" className="link-item">
            <AiFillHome className="nav-icons" />
          </Link>
        </li>
        <li>
          <Link to="/jobs" className="link-item">
            <BsFillBriefcaseFill className="nav-icons" />
          </Link>
        </li>
        <li>
          <button
            className="logout-icon-btn"
            type="button"
            onClick={onClickLogout}
          >
            <FiLogOut aria-label="logoutIcon" className="nav-icons" />
          </button>
        </li>
      </ul>
      <ul className="desktop-nav-container">
        <li>
          <Link to="/" className="link-item link-text">
            Home
          </Link>
        </li>
        <li>
          <Link to="/jobs" className="link-item link-text">
            Jobs
          </Link>
        </li>
      </ul>
      <button
        type="button"
        className="desktop-logout-btn"
        onClick={onClickLogout}
      >
        Logout
      </button>
    </nav>
  )
}

export default withRouter(Header)
