import React from 'react'
import get from 'lodash/get'
import { Link } from 'gatsby'
import Menu from '../Menu'
import profilePic from '../../pages/photo.jpg'
import './style.scss'

class Sidebar extends React.Component {
  render() {
    const { location } = this.props
    const {
      author,
      subtitle,
      copyright,
      menu,
    } = this.props.data.site.siteMetadata
    const isHomePage = get(location, 'pathname', '/') === '/'

    /* eslint-disable jsx-a11y/img-redundant-alt */
    const authorBlock = (
      <div>
        <Link to="/">
          <img
            src={profilePic}
            className="sidebar__author-photo"
            width="75"
            height="75"
            alt={author.name}
          />
        </Link>
        {isHomePage ? (
          <h1 className="sidebar__author-title">
            <Link className="sidebar__author-title-link" to="/">
              {author.name}
            </Link>
          </h1>
        ) : (
          <h2 className="sidebar__author-title">
            <Link className="sidebar__author-title-link" to="/">
              {author.name}
            </Link>
          </h2>
        )}
        <p className="sidebar__author-subtitle">{subtitle}</p>
      </div>
    )
    /* eslint-enable jsx-a11y/img-redundant-alt */

    return (
      <div className="sidebar">
        <div className="sidebar__inner">
          <div className="sidebar__author">{authorBlock}</div>
          <div>
            <Menu data={menu} />
            <div>
              <b>Current Time:</b>
              <br />
            <iframe src="http://free.timeanddate.com/clock/i6soud1s/n137/fn17/ftb" frameborder="0" width="102" height="20"></iframe>
              <br />
              <b>Every Saturday at 09:00</b>
            </div>
            <p className="sidebar__copyright">{copyright}</p>
            <br />
            <p className="sidebar__copyright">Watch Demon Slayer: Kimetsu no Yaiba free episodes online. Demon Slayer: Kimetsu no Yaiba subbed online. Demon Slayer: Kimetsu no Yaiba episode list. Demon Slayer: Kimetsu no Yaiba english dubbed episodes. Demon Slayer: Kimetsu no Yaiba anime online. </p>
          </div>
        </div>
      </div>
    )
  }
}

export default Sidebar
