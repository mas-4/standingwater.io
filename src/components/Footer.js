import React from 'react'
import PropTypes from 'prop-types'

let d = new Date();
let year = d.getFullYear();

const Footer = (props) => (
    <footer id="footer" style={props.timeout ? {display: 'none'} : {}}>
        <p className="copyright">&copy; {year} StandingWater</p>
    </footer>
)

Footer.propTypes = {
    timeout: PropTypes.bool
}

export default Footer
