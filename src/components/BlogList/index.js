// Write your JS code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'

import BlogItem from '../BlogItem'
import './index.css'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

class BlogList extends Component {
  state = {blogList: [], isLoading: true}

  componentDidMount() {
    this.getBlogsList()
  }

  getBlogsList = async () => {
    const response = await fetch('https://apis.ccbp.in/blogs')
    const data = await response.json()
    const updatedBlogList = data.map(eachItem => ({
      id: eachItem.id,
      title: eachItem.title,
      topic: eachItem.topic,
      author: eachItem.author,
      imageUrl: eachItem.image_url,
      avatarUrl: eachItem.avatar_url,
    }))
    this.setState({
      blogList: updatedBlogList,
      isLoading: false,
    })
  }

  renderBlogsList = () => {
    const {blogList} = this.state
    return (
      <ul className="blog-list">
        {blogList.map(each => (
          <BlogItem key={each.id} blogItem={each} />
        ))}
      </ul>
    )
  }

  render() {
    const {isLoading} = this.state
    return (
      <div className="loader-blog-list-container">
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="TailSpin" color="blue" width={50} height={50} />
          </div>
        ) : (
          this.renderBlogsList()
        )}
      </div>
    )
  }
}

export default BlogList
