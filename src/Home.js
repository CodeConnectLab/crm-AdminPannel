import React from 'react'

export default function Home() {
  return (
    
    <main>
     <div className="container-fluid">
  
  
  <div className="row  py-4">
    <div className="col-xl-3 col-md-6">
      <div className="card bg-primary text-white mb-4">
        <div className="card-body">Primary Card</div>
        <div className="card-footer d-flex align-items-center justify-content-between">
          <a className="small text-white stretched-link" href="#">
            View Details
          </a>
          <div className="small text-white">
            <svg
              className="svg-inline--fa fa-angle-right"
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="angle-right"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 256 512"
              data-fa-i2svg=""
            >
              <path
                fill="currentColor"
                d="M246.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L178.7 256 41.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"
              />
            </svg>
            {/* <i class="fas fa-angle-right"></i> Font Awesome fontawesome.com */}
          </div>
        </div>
      </div>
    </div>
    <div className="col-xl-3 col-md-6">
      <div className="card bg-warning text-white mb-4">
        <div className="card-body">Warning Card</div>
        <div className="card-footer d-flex align-items-center justify-content-between">
          <a className="small text-white stretched-link" href="#">
            View Details
          </a>
          <div className="small text-white">
            <svg
              className="svg-inline--fa fa-angle-right"
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="angle-right"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 256 512"
              data-fa-i2svg=""
            >
              <path
                fill="currentColor"
                d="M246.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L178.7 256 41.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"
              />
            </svg>
            {/* <i class="fas fa-angle-right"></i> Font Awesome fontawesome.com */}
          </div>
        </div>
      </div>
    </div>
    <div className="col-xl-3 col-md-6">
      <div className="card bg-success text-white mb-4">
        <div className="card-body">Success Card</div>
        <div className="card-footer d-flex align-items-center justify-content-between">
          <a className="small text-white stretched-link" href="#">
            View Details
          </a>
          <div className="small text-white">
            <svg
              className="svg-inline--fa fa-angle-right"
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="angle-right"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 256 512"
              data-fa-i2svg=""
            >
              <path
                fill="currentColor"
                d="M246.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L178.7 256 41.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"
              />
            </svg>
            {/* <i class="fas fa-angle-right"></i> Font Awesome fontawesome.com */}
          </div>
        </div>
      </div>
    </div>
    <div className="col-xl-3 col-md-6">
      <div className="card bg-danger text-white mb-4">
        <div className="card-body">Danger Card</div>
        <div className="card-footer d-flex align-items-center justify-content-between">
          <a className="small text-white stretched-link" href="#">
            View Details
          </a>
          <div className="small text-white">
            <svg
              className="svg-inline--fa fa-angle-right"
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="angle-right"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 256 512"
              data-fa-i2svg=""
            >
              <path
                fill="currentColor"
                d="M246.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L178.7 256 41.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"
              />
            </svg>
            {/* <i class="fas fa-angle-right"></i> Font Awesome fontawesome.com */}
          </div>
        </div>
      </div>
    </div>
  </div>
   
  <div className="card mb-4">
    <div className="card-header">
      <svg
        className="svg-inline--fa fa-table me-1"
        aria-hidden="true"
        focusable="false"
        data-prefix="fas"
        data-icon="table"
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        data-fa-i2svg=""
      >
        <path
          fill="currentColor"
          d="M64 256V160H224v96H64zm0 64H224v96H64V320zm224 96V320H448v96H288zM448 256H288V160H448v96zM64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64z"
        />
      </svg>
      {/* <i class="fas fa-table me-1"></i> Font Awesome fontawesome.com */}
      DataTable Example
    </div>
    <div className="card-body">
      <div className="datatable-wrapper datatable-loading no-footer sortable searchable fixed-columns">
        <div className="datatable-top">
          <div className="datatable-dropdown">
            <label>
              <select className="datatable-selector">
                <option value={5}>5</option>
                <option value={10} selected="">
                  10
                </option>
                <option value={15}>15</option>
                <option value={20}>20</option>
                <option value={25}>25</option>
              </select>{" "}
              entries per page
            </label>
          </div>
          <div className="datatable-search">
            <input
              className="datatable-input"
              placeholder="Search..."
              type="search"
              title="Search within table"
              aria-controls="datatablesSimple"
            />
          </div>
        </div>
        <div className="datatable-container">
          <table id="datatablesSimple" className="datatable-table">
            <thead>
              <tr>
                <th
                  data-sortable="true"
                  style={{ width: "19.020172910662826%" }}
                >
                  <a href="#" className="datatable-sorter">
                    Name
                  </a>
                </th>
                <th
                  data-sortable="true"
                  style={{ width: "30.067243035542745%" }}
                >
                  <a href="#" className="datatable-sorter">
                    Position
                  </a>
                </th>
                <th
                  data-sortable="true"
                  style={{ width: "14.601344860710855%" }}
                >
                  <a href="#" className="datatable-sorter">
                    Office
                  </a>
                </th>
                <th
                  data-sortable="true"
                  style={{ width: "8.837656099903938%" }}
                >
                  <a href="#" className="datatable-sorter">
                    Age
                  </a>
                </th>
                <th
                  data-sortable="true"
                  style={{ width: "14.601344860710855%" }}
                >
                  <a href="#" className="datatable-sorter">
                    Start date
                  </a>
                </th>
                <th
                  data-sortable="true"
                  style={{ width: "12.87223823246878%" }}
                >
                  <a href="#" className="datatable-sorter">
                    Salary
                  </a>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr data-index={0}>
                <td>Tiger Nixon</td>
                <td>System Architect</td>
                <td>Edinburgh</td>
                <td>61</td>
                <td>2011/04/25</td>
                <td>$320,800</td>
              </tr>
              <tr data-index={1}>
                <td>Garrett Winters</td>
                <td>Accountant</td>
                <td>Tokyo</td>
                <td>63</td>
                <td>2011/07/25</td>
                <td>$170,750</td>
              </tr>
              <tr data-index={2}>
                <td>Ashton Cox</td>
                <td>Junior Technical Author</td>
                <td>San Francisco</td>
                <td>66</td>
                <td>2009/01/12</td>
                <td>$86,000</td>
              </tr>
              <tr data-index={3}>
                <td>Cedric Kelly</td>
                <td>Senior Javascript Developer</td>
                <td>Edinburgh</td>
                <td>22</td>
                <td>2012/03/29</td>
                <td>$433,060</td>
              </tr>
              <tr data-index={4}>
                <td>Airi Satou</td>
                <td>Accountant</td>
                <td>Tokyo</td>
                <td>33</td>
                <td>2008/11/28</td>
                <td>$162,700</td>
              </tr>
              <tr data-index={5}>
                <td>Brielle Williamson</td>
                <td>Integration Specialist</td>
                <td>New York</td>
                <td>61</td>
                <td>2012/12/02</td>
                <td>$372,000</td>
              </tr>
              <tr data-index={6}>
                <td>Herrod Chandler</td>
                <td>Sales Assistant</td>
                <td>San Francisco</td>
                <td>59</td>
                <td>2012/08/06</td>
                <td>$137,500</td>
              </tr>
              <tr data-index={7}>
                <td>Rhona Davidson</td>
                <td>Integration Specialist</td>
                <td>Tokyo</td>
                <td>55</td>
                <td>2010/10/14</td>
                <td>$327,900</td>
              </tr>
              <tr data-index={8}>
                <td>Colleen Hurst</td>
                <td>Javascript Developer</td>
                <td>San Francisco</td>
                <td>39</td>
                <td>2009/09/15</td>
                <td>$205,500</td>
              </tr>
              <tr data-index={9}>
                <td>Sonya Frost</td>
                <td>Software Engineer</td>
                <td>Edinburgh</td>
                <td>23</td>
                <td>2008/12/13</td>
                <td>$103,600</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="datatable-bottom">
          <div className="datatable-info">Showing 1 to 10 of 57 entries</div>
          <nav className="datatable-pagination">
            <ul className="datatable-pagination-list">
              <li className="datatable-pagination-list-item datatable-hidden datatable-disabled">
                <a
                  data-page={1}
                  className="datatable-pagination-list-item-link"
                >
                  ‹
                </a>
              </li>
              <li className="datatable-pagination-list-item datatable-active">
                <a
                  data-page={1}
                  className="datatable-pagination-list-item-link"
                >
                  1
                </a>
              </li>
              <li className="datatable-pagination-list-item">
                <a
                  data-page={2}
                  className="datatable-pagination-list-item-link"
                >
                  2
                </a>
              </li>
              <li className="datatable-pagination-list-item">
                <a
                  data-page={3}
                  className="datatable-pagination-list-item-link"
                >
                  3
                </a>
              </li>
              <li className="datatable-pagination-list-item">
                <a
                  data-page={4}
                  className="datatable-pagination-list-item-link"
                >
                  4
                </a>
              </li>
              <li className="datatable-pagination-list-item">
                <a
                  data-page={5}
                  className="datatable-pagination-list-item-link"
                >
                  5
                </a>
              </li>
              <li className="datatable-pagination-list-item">
                <a
                  data-page={6}
                  className="datatable-pagination-list-item-link"
                >
                  6
                </a>
              </li>
              <li className="datatable-pagination-list-item">
                <a
                  data-page={2}
                  className="datatable-pagination-list-item-link"
                >
                  ›
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </div>
     </div>
 </main>
    
  )
}
