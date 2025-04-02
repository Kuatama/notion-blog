export default function Timeline({ posts }) {
  return (
    <div className="timeline">
      {posts.map(post => (
        <div key={post.id} className="post">
          <div className="time-marker"></div>
          <img src="/avatar.png" className="avatar" />
          <div className="content">
            <span className="date">{post.properties.Date.date.start}</span>
            <div className="text">{post.properties.Content.rich_text[0].plain_text}</div>
          </div>
        </div>
      ))}
    </div>
  )
}
