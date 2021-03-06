import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

function isMobileDevice() {
  return typeof window !== 'undefined' ?
    (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1) : 
    undefined;
};

const Header = ({ siteTitle }) => (
  <header>
    <nav className='flexcontainer'>
      <ul className='flexitem flexstart primary'>
          <li>
              <h1>
                  <Link to='/'>
                      {
                        isMobileDevice() && (
                          <>
                            <b>Póth Attila</b>
                          </>
                        )
                      }
                      {
                        !isMobileDevice() && (
                          <>
                            <b>Póth Attila</b>
                            <small>photographer</small>
                          </>
                        )
                      }
                  </Link>
              </h1>
          </li>    
      </ul>
      <ul className='flexcontainer flexend secondary'>
          <li>
              <Link to='/category/fashion'>
                Fashion
              </Link>
          </li>
          <li>
              <Link to='/category/beauty'>
                  Beauty
              </Link>
          </li>
          <li>
              <Link to='/category/portrait'>
                Portrait
              </Link>
          </li>
          <li>
              <Link to='/gallery/street'>
                Street
              </Link>
          </li>
          <li>
              <Link to='/blog'>
                Stories
              </Link>
          </li>
          <li>
              <Link to='/contact'>
                About
              </Link>
          </li>
      </ul>
  </nav>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
