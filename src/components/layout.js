import React from "react"
import PropTypes from "prop-types"

import { StaticQuery, graphql } from "gatsby"

import "./layout.css"

const Layout = ({ children }) => {
  return (
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
      render={data => (
        <>
          <div>
            <main>{children}</main>
          </div>

          <footer
            style={{
              position: `fixed`,
              bottom: `5px`,
              left: `20px`,
              fontSize: `0.8rem`,
            }}
          >
            <p className="activeText">
              (Hint: Draw on the page to add some colour!)
            </p>{" "}
            © {new Date().getFullYear()}, Built with
            {` `}
            Gatsby
          </footer>
        </>
      )}
    />
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
