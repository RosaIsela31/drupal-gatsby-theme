import React, { forwardRef } from "react"
import PropTypes from "prop-types"
import { Button, Link } from "ui"

const HeroCta = forwardRef(({ children, to, ...props }, ref) => (
  <Button as={Link} ref={ref} to={to} {...props}>
    {children}
  </Button>
))

HeroCta.propTypes = {
  children: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
}

export default HeroCta
