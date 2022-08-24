import {FiHelpCircle} from 'react-icons/fi'
import {FaListAlt} from 'react-icons/fa'
import {BsFillGridFill, BsFillGrid3X3GapFill} from 'react-icons/bs'

import Category from '../Category'

import SideNavBar from '../SideNavBar'

import './index.css'

const Home = () => (
  <div className="home-bg-container">
    <SideNavBar />
    <div className="home-content-container">
      <div className="home-header">
        <h1 className="home-heading">Dashboard</h1>
        <div className="help-bg">
          <FiHelpCircle className="help-icon" />
          <p className="profile">VN</p>
        </div>
      </div>

      <div className="home-inboxes-container">
        <div className="home-inboxes">
          <h1 className="inbox-heading">My Inbox</h1>
          <div className="inbox-item">
            <p className="item-heading">Artwork Approval Process</p>
            <p className="inbox-count">17</p>
            <div className="inbox-time">
              <p className="on-time-text">
                on Time <span className="time-count">0</span>
              </p>
              <p className="delayed-text">
                Delayed <span className="delayed-count">17</span>
              </p>
            </div>
          </div>
          <hr />
          <div className="inbox-item">
            <p className="item-heading">Project Initiation Process</p>
            <p className="inbox-count">3</p>
            <div className="inbox-time">
              <p className="on-time-text">
                on Time <span className="time-count">1</span>
              </p>
              <p className="delayed-text">
                Delayed <span className="delayed-count">2</span>
              </p>
            </div>
          </div>
        </div>

        <div className="home-inboxes">
          <h1 className="inbox-heading">My Inbox</h1>
          <div className="inbox-item">
            <p className="item-heading">Artwork Approval Process</p>
            <p className="inbox-count">17</p>
            <div className="inbox-time">
              <p className="on-time-text">
                on Time <span className="time-count">0</span>
              </p>
              <p className="delayed-text">
                Delayed <span className="delayed-count">17</span>
              </p>
            </div>
          </div>
          <hr />
          <div className="inbox-item">
            <p className="item-heading">Project Initiation Process</p>
            <p className="inbox-count">3</p>
            <div className="inbox-time">
              <p className="on-time-text">
                on Time <span className="time-count">1</span>
              </p>
              <p className="delayed-text">
                Delayed <span className="delayed-count">2</span>
              </p>
            </div>
          </div>
        </div>

        <div className="home-inboxes">
          <h1 className="inbox-heading">My Inbox</h1>
          <div className="inbox-item">
            <p className="item-heading">Artwork Approval Process</p>
            <p className="inbox-count">17</p>
            <div className="inbox-time">
              <p className="on-time-text">
                on Time <span className="time-count">0</span>
              </p>
              <p className="delayed-text">
                Delayed <span className="delayed-count">17</span>
              </p>
            </div>
          </div>
          <hr />
          <div className="inbox-item">
            <p className="item-heading">Project Initiation Process</p>
            <p className="inbox-count">3</p>
            <div className="inbox-time">
              <p className="on-time-text">
                on Time <span className="time-count">1</span>
              </p>
              <p className="delayed-text">
                Delayed <span className="delayed-count">2</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="home-filters-container">
        <div className="home-filter-container">
          <h>My Inbox (Art Approval process)</h>
          <div>
            <input type="search" />
            <FaListAlt />
            <BsFillGridFill />
            <BsFillGrid3X3GapFill />
          </div>
        </div>

        <div className="home-category-container">
          <Category />
        </div>
      </div>
    </div>
  </div>
)

export default Home
