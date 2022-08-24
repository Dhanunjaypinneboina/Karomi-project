import {AiOutlineUnorderedList} from 'react-icons/ai'

import './index.css'

const AddNewProject = () => (
  <div>
    <div className="add-project-header">
      <AiOutlineUnorderedList className="project-list-icon" />
      <h1 className="add-project-heading">New Projects</h1>
    </div>
    <p className="instruct-text">Instructions</p>
    <p className="text">Please follow bellow instructions</p>
    <ul className="lists-container">
      <li className="instruction-list">
        1-To start your Project Workflow, please fill in the fields Request info
        tab.{' '}
      </li>
      <li className="instruction-list">
        2-Select the Required Workflow Template.
      </li>
      <li className="instruction-list">
        3-Click on Files Tab to upload any file Required by the selecting the
        file type then click add file button to upload you file
      </li>
      <li className="instruction-list">
        Click on the Stakeholders Tab to check if all Required activities and
        Stakeholders are
      </li>
    </ul>
    <div className="project-data-container">
      <div className="input-label-container">
        <label htmlFor="initiate" className="label">
          Initiate by
        </label>
        <input
          type="text"
          id="initiate"
          className="input-element"
          placeholder="Approver"
        />
      </div>

      <div className="input-label-container">
        <label htmlFor="initiate" className="label">
          Initiate Date
        </label>
        <input
          type="text"
          id="initiate"
          className="input-element"
          placeholder="06/06/2022"
        />
      </div>

      <select className="select-options">
        <option>Brand</option>
        <option>Brand</option>
        <option>Brand</option>
      </select>

      <select className="select-options">
        <option>Category</option>
        <option>Brand</option>
        <option>Brand</option>
      </select>

      <select className="select-options">
        <option>Category</option>
        <option>Brand</option>
        <option>Brand</option>
      </select>

      <select className="select-options">
        <option>Category</option>
        <option>Brand</option>
        <option>Brand</option>
      </select>
    </div>
  </div>
)

export default AddNewProject
