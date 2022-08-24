import {Link} from 'react-router-dom'

import {AiOutlineMenuFold, AiOutlineHome} from 'react-icons/ai'
import {BiCheckCircle} from 'react-icons/bi'
import './index.css'

const SideNavBar = () => (
  <div className="navBarContainer">
    <div className="logo-container">
      <img
        src="https://manageartworks.com/wp-content/uploads/2017/11/imageedit_7_7219679184.png"
        alt="web-logo"
        className="web-logo-image"
      />
      <AiOutlineMenuFold className="menu-icon" />
    </div>

    <Link to="/">
      <div className="sidebar-item">
        <AiOutlineHome className="sidebar-icon" />
        <p className="sidebar-text">Dashboard</p>
      </div>
    </Link>

    <Link to="/new-projects">
      <div className="sidebar-item">
        <BiCheckCircle className="sidebar-icon" />
        <p className="sidebar-text">Start a new project</p>
      </div>
    </Link>

    <hr className="hr-line" />

    <h1 className="nav-headings">Workflows</h1>
    <p className="project-heading">Inbox(3)</p>
    <p className="project-heading">My Projects(75)</p>
    <Link to="/all-projects">
      <p className="project-heading">All Projects(85)</p>
    </Link>

    <hr className="hr-line" />

    <h1 className="nav-headings">Asset Library</h1>
    <Link to="search-item">
      <p className="project-heading">Search</p>
    </Link>

    <p className="project-heading">Browse</p>

    <hr className="hr-line" />
    <Link to="report">
      <p className="project-heading">Reports</p>
    </Link>

    <hr className="hr-line" />
  </div>
)

export default SideNavBar
