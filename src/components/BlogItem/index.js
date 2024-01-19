// Write your JS code here
import {Link} from 'react-router-dom'

import './index.css'

const BlogItem = props => {
  const {blogItem} = props
  const {id, title, imageUrl, avatarUrl, topic, author} = blogItem

  return (
    <Link to={`/blogs/${id}`} className="blog-link-item">
      <li className="blog-item">
        <div className="sub-blog-item">
          <img src={imageUrl} alt={`item${id}`} className="blog-img" />
          <div className="title-topic-avatar-container">
            <p className="item-topic">{topic}</p>
            <h1 className="item-title">{title}</h1>
            <div className="avatar-container">
              <img src={avatarUrl} alt={`avatar${id}`} className="avatar-img" />
              <p className="blog-author">{author}</p>
            </div>
          </div>
        </div>
      </li>
    </Link>
  )
}

export default BlogItem
