// Write your JS code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'

import './index.css'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

class BlogItemDetails extends Component {
  state = {blogData: {}, isLoading: true}

  componentDidMount() {
    this.getBlogData()
  }

  getBlogData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/blogs/${id}`)
    const data = await response.json()
    const updatedData = {
      id: data.id,
      title: data.title,
      imageUrl: data.image_url,
      avatarUrl: data.avatar_url,
      content: data.content,
      author: data.author,
      topic: data.topic,
    }
    this.setState({blogData: updatedData, isLoading: false})
  }

  renderBlogData = () => {
    const {blogData} = this.state
    const {id, title, imageUrl, avatarUrl, content, author} = blogData
    return (
      <div className="blog-detail-container">
        <h1 className="blog-detail-title">{title}</h1>
        <div className="blog-detail-avatar-container">
          <img
            src={avatarUrl}
            alt={`avatar${id}`}
            className="blog-detail-avatar-img"
          />
          <p className="blog-detail-author">{author}</p>
        </div>
        <img src={imageUrl} alt={title} className="blog-detail-img" />
        <p className="blog-detail-content">{content}</p>
      </div>
    )
  }

  render() {
    const {isLoading} = this.state
    return (
      <div>
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="TailSpin" color="blue" width={50} height={50} />
          </div>
        ) : (
          this.renderBlogData()
        )}
      </div>
    )
  }
}

export default BlogItemDetails
