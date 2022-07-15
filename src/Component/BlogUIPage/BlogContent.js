import { Navigate, useParams } from "react-router-dom"
import BLOG_DATA from "../../Data/BLOG_DATA.json"

export default function BlogContent() {
  const { bloggerid } = useParams()
  const { blogid } = useParams()

  const bloggerBlogsData = BLOG_DATA.filter(
    (item) => parseInt(item.bloggerId) === parseInt(bloggerid)
  )

  const blog =
    bloggerBlogsData &&
    bloggerBlogsData.find((item) => parseInt(item.blogId) === parseInt(blogid))

  const blogELem = blogid > BLOG_DATA.length ? <Navigate to="/error" /> :
    blog === undefined ? (
      ""
    ) : (
      <div dangerouslySetInnerHTML={{ __html: blog.elem }}></div>
    )

  return <div>{blogELem}</div>
}
