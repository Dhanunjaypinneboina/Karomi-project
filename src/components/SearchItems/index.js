import {FiHelpCircle} from 'react-icons/fi'

import SideNavBar from '../SideNavBar'

import './index.css'

import FilesCard from '../FilesCard'

const SearchItems = () => (
  <div>
    <div className="search-container">
      <SideNavBar />

      <div>
        <div className="search-header">
          <h1 className="search-heading">Search</h1>
          <div className="help-bg">
            <FiHelpCircle className="help-icon" />
            <p className="profile">VN</p>
          </div>
        </div>
        <div className="get-files-container">
          <div className="search-filters">
            <input
              type="search"
              className="search-input"
              placeholder="Type your Search here"
            />
            <div className="select-inputs-container">
              <p className="category-name">Category</p>
              <div className="check-box-ele">
                <input type="checkbox" id="fabric-care" />
                <label htmlFor="fabric-care" className="labels">
                  Fabric Care(21)
                </label>
              </div>
              <div className="check-box-ele">
                <input type="checkbox" id="fabric-care2" />
                <label htmlFor="fabric-care2" className="labels">
                  Test Category(7)
                </label>
              </div>
              <hr />
              <p className="category-name">Brand</p>
              <div className="check-box-ele">
                <input type="checkbox" id="fabric-care3" />
                <label htmlFor="fabric-care3" className="labels">
                  Tide(1)
                </label>
              </div>

              <div className="check-box-ele">
                <input type="checkbox" id="fabric-care4" />
                <label htmlFor="fabric-care4" className="labels">
                  Pantene(7)
                </label>
              </div>
              <hr />

              <p className="category-name">Product</p>
              <div className="check-box-ele">
                <input type="checkbox" id="fabric-care5" />
                <label htmlFor="fabric-care5" className="labels">
                  Test(1)
                </label>
              </div>

              <div className="check-box-ele">
                <input type="checkbox" id="fabric-care6" />
                <label htmlFor="fabric-care6" className="labels">
                  hh(7)
                </label>
              </div>
              <hr />
              <p className="bottom-name">SKU Name</p>
              <hr />
              <p className="bottom-name">Component Type</p>
              <hr />
              <p className="bottom-name">Pack Size</p>
            </div>
          </div>
          <FilesCard />
        </div>
      </div>
    </div>
  </div>
)

export default SearchItems
