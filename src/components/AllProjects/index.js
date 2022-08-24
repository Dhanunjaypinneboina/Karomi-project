import {FiHelpCircle} from 'react-icons/fi'

import {FaListAlt} from 'react-icons/fa'
import {BsFillGridFill, BsFillGrid3X3GapFill} from 'react-icons/bs'
import './index.css'

import SideNavBar from '../SideNavBar'
import AllProjectsItems from '../AllProjectsItems'

const AllProjects = () => (
  <div className="all-projects-container">
    <SideNavBar />

    <div className="all-projects-content">
      <div className="all-projects-header">
        <h1 className="home-heading">Dashboard</h1>
        <div className="help-bg">
          <FiHelpCircle className="help-icon" />
          <p className="profile">VN</p>
        </div>
      </div>

      <div className="projects-filter-container">
        <input type="search" placeholder="Filter Items..." />
        <FaListAlt className="list-icon" />
        <BsFillGridFill className="grid-icon" />
        <BsFillGrid3X3GapFill className="grid-icon" />
      </div>

      <div>
        <AllProjectsItems />
      </div>
    </div>
  </div>
)

export default AllProjects
