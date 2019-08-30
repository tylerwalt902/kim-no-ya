import React from 'react'
import { Link } from 'gatsby'
import moment from 'moment'
import './style.scss'

class Post extends React.Component {
  render() {
    const {
      title,
      date,
      category,
      description,
    } = this.props.data.node.frontmatter
    const { slug, categorySlug } = this.props.data.node.fields

    return (
      <div className="post">
        <h2 className="post__title">
          <Link className="post__title-link" to={slug}>
            [Sub] Watch Demon Slayer: Kimetsu no Yaiba {title}
          </Link>
        </h2>
      </div>
    )
  }
}

export default Post
