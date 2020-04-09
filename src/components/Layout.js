import React from 'react'
import { Link } from 'gatsby'

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header

    if (location.pathname === rootPath) {
      header = (
        <h1 className="font-bold text-6xl">
          <Link to={`/`}>{title}</Link>
        </h1>
      )
    } else {
      header = (
        <h3 className="font-bold text-3xl">
          <Link to={`/`}>{title}</Link>
        </h3>
      )
    }
    return (
      <div className="flex justify-center">
        <div className="w-8/12">
        {header}
        {children}
        <footer className="mt-6">
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </div>
      </div>
    )
  }
}

export default Layout
