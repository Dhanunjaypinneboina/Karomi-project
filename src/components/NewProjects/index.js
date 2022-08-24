import {FiHelpCircle} from 'react-icons/fi'
import {FaListAlt} from 'react-icons/fa'
import {BsFillGridFill, BsFillGrid3X3GapFill} from 'react-icons/bs'

import SideNavBar from '../SideNavBar'
import ApprovalProjects from '../ApprovalProjects'
import AddNewProject from '../AddNewProject'

import './index.css'

const NewProjects = () => (
  <div className="project-bg-container">
    <SideNavBar />
    <div className="projects-bg-container">
      <div className="new-projects-header">
        <h1 className="projects-heading">My Projects</h1>
        <div className="help-bg">
          <FiHelpCircle className="help-icon-projects" />
          <p className="profile">VN</p>
        </div>
      </div>

      <div className="new-project-bg-container">
        <div className="projects-filter-container">
          <input type="search" placeholder="Filter Items..." />
          <FaListAlt className="list-icon" />
          <BsFillGridFill className="grid-icon" />
          <BsFillGrid3X3GapFill className="grid-icon" />
        </div>

        <div className="new-projects-container">
          <ApprovalProjects />
          <AddNewProject />
        </div>
      </div>
    </div>
  </div>
)

export default NewProjects
