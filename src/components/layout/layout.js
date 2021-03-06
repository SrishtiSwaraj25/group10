import React from "react"
import PropTypes from "prop-types"
import Header from "../header/header"
import Footer from "../footer/footer"

const Layout = ({ children }) => {
  return (
    <div className="container-fluid p-0">
      <Header />
      {children}
      <Footer />
    </div>
  )
}

Layout.prototype = {
  Children: PropTypes.node.isRequired,
}
export default Layout
