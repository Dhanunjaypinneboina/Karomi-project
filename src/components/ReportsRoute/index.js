import {PieChart, Pie, Legend, Cell, ResponsiveContainer} from 'recharts'

import {FiHelpCircle} from 'react-icons/fi'

import SideNavBar from '../SideNavBar'

import './index.css'

const data1 = [
  {
    count: 123456789,
    language: '7549',
  },
  {
    count: 4555697,
    language: 'Hindi',
  },
  {
    count: 12345657,
    language: 'English',
  },
  {
    count: 12345657,
    language: 'English',
  },
  {
    count: 12347,
    language: 'English',
  },
]

const data = [
  {
    count: 123456789,
    language: 'Project Initiation Process',
  },
  {
    count: 123456789,
    language: 'Artwork Approval Process',
  },
]

const ReportsRoute = () => (
  <div>
    <div className="reports-container">
      <SideNavBar />

      <div>
        <div className="report-header">
          <h1 className="home-heading">Reports</h1>
          <div className="help-bg">
            <FiHelpCircle className="help-icon" />
            <p className="profile">VN</p>
          </div>
        </div>

        <div className="files-card-container">
          <div className="files-card">
            <img
              src="https://cdn0.iconfinder.com/data/icons/office-icon-set-2/100/Noun_Project_100Icon_10px_grid-07-512.png"
              alt="file"
              className="files-image"
            />

            <div>
              <p className="file-text">Files in Library</p>
              <p className="file-text">412</p>
            </div>
          </div>
          <div className="files-card">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNFL1qSwrmA2CV631MSEbAHoePw4BI1emWXMEiQRHaPCdgxJ04iNksQRzFuoDi_m-9n4M&usqp=CAU"
              alt="file"
              className="files-image-right"
            />

            <div>
              <p className="file-text">First Time Right</p>
              <p className="file-text">25</p>
            </div>
          </div>
        </div>
        <div className="pie-charts-container">
          <ResponsiveContainer width="50%" height={300}>
            <PieChart>
              <Pie
                cx="70%"
                cy="55%"
                data={data1}
                startAngle={0}
                endAngle={360}
                outerRadius="70%"
                dataKey="count"
              >
                <Cell name="7549" fill="#cc994b" />
                <Cell name="Artwork" fill="#b3d23f" />
                <Cell name="Brief" fill="##b36f0b" />
                <Cell name="Image" fill="#a44c9e" />
                <Cell name="Others" fill="#000000" />
              </Pie>
              <Legend
                iconType="circle"
                layout="horizontal"
                verticalAlign="bottom"
                align="right"
              />
            </PieChart>
          </ResponsiveContainer>

          <ResponsiveContainer width="50%" height={300}>
            <PieChart>
              <Pie
                cx="70%"
                cy="55%"
                data={data}
                startAngle={0}
                endAngle={360}
                outerRadius="70%"
                dataKey="count"
              >
                <Cell name="Project Initiation Process" fill="#cc994b" />
                <Cell name="Artwork Approval Process" fill="#b3d23f" />
              </Pie>
              <Legend
                iconType="circle"
                layout="horizontal"
                verticalAlign="bottom"
                align="right"
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  </div>
)

export default ReportsRoute
