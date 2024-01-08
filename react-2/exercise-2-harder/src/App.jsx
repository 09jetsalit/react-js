import "./App.css";

function App() {

  const posts = [
    {
      author: "User 1",
      avatar: "https://cdn.pixabay.com/photo/2017/09/01/00/15/png-2702691_640.png",
      time: "2 hours ago",
      content: "This is my first post! 🎉",
      image: "https://upload.wikimedia.org/wikipedia/commons/4/47/PNG_transparency_demonstration_1.png"
    },
    {
      author: "User 2",
      avatar: "https://images.rawpixel.com/image_png_social_square/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvcm00NTYtMDA3YS5wbmc.png",
      time: "4 hours ago",
      content: "Enjoying a beautiful day outdoors! ☀️",
      image: "https://images.rawpixel.com/image_png_social_square/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvcm00NTYtMDA3YS5wbmc.png"
    },
    {
      author: "User 3",
      avatar: "https://images.rawpixel.com/image_png_social_square/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvcm00NTYtMDA3YS5wbmc.png",
      time: "1 day ago",
      content: "Exploring new places and cultures. 🌍✈️",
      image: "https://images.rawpixel.com/image_png_social_square/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvcm00NTYtMDA3YS5wbmc.png"
    }
  ];

//   return (
//     <div id="app">
//       <h1>Enter Data</h1>
//       <PostContainer posts = {posts} />
//       <FeedSection posts = {posts} />
//     </div>
//   );
// }

// const PostContainer = ({posts}) => {
//   return (
//     <div className="post-container">
//       {posts.map((post , index) => (
//         <Post key={index} post = {posts} />
//       ))}
//     </div>
//   );
// };

// const FeedSection = ({posts}) => {
//   return (
//     <div className="feed-section">
//       {posts.map((post , index) => (
//         <Post key={index} post = {post} />
//       ))}
//     </div>
//   );
// };

// const Post = ({post}) => {
//   return (
//     <div className="post">
//       <img src={post.avatar} alt="user-avatar" />
//       <div className="post-content">
//         <div className="post-header">
//           <span className="author">{post.author}</span>
//           <span className="time">{post.time}</span>
//         </div>
//         <p className="content">{post.content}</p>
//         <img src={post.image} alt="post image" className="post-image" />
//       </div>
//     </div>

//   );
// };

// export default App;


  return (
    <div id="app">
      <h1>Enter Data</h1>
      <PostContainer posts={posts} />
      <FeedSection posts={posts} />
    </div>
  );
}

const PostContainer = ({ posts }) => {
  return (
    <div className="post-container">
      {posts.map((post, index) => (
        <Post key={index} post={post} />
      ))}
    </div>
  );
};

const FeedSection = ({ posts }) => {
  return (
    <div className="feed-section">
      {posts.map((post, index) => (
        <Post key={index} post={post} />
      ))}
    </div>
  );
};

const Post = ({ post }) => {
  return (
    <div className="post">
      <img src={post.avatar} alt="User Avatar" />
      <div className="post-content">
        <div className="post-header">
          <span className="author">{post.author}</span>
          <span className="time">{post.time}</span>
        </div>
        <p className="content">{post.content}</p>
        <img src={post.image} alt="Post Image" className="post-image" />
      </div>
    </div>
  );
};

export default App;
