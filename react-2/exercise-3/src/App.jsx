import usePost from "./hook/usePost";
import "./App.css";

function App() {
  const { get, remove } = usePost();

  const data = get();

  return (
    <div id="app">
      <h1>Enter Data</h1>
      <PostContainer />
      <FeedSection data = {data} removeHanderler = {remove} />
    </div>
  );
}

const PostContainer = () => {
  return (
<>
<div className="post-container">
    <div className="post-header">
      <img className="post-avatar" src="avatar.jpg" alt="Your Avatar" />
      <div className="post-author">You</div>
    </div>
    <div className="post-content">
      <textarea
        className="post-input"
        placeholder="What's on your mind?"
      ></textarea>
    </div>
    <div className="post-actions">
      <button className="post-button">Post</button>
    </div>
  </div></>
  )
}

const FeedSection = ({data , removeHanderler}) => {
  return (
    <>
    <Post data={data} removeHanderler={removeHanderler} />
    </>
  )
}

const Post = ({data , removeHanderler}) => {
  return (
    <>
    {data.map((todo , index) => (
      <div className="post" key = {index}>
          <div className="post-header">
            <img
            className="post-avatar"
            src={todo.avatar}
            alt={todo.author}
            />
          <div>
          <div className="post-author">{todo.author}</div>
          <div className="post-time">{todo.time}</div>
      </div>
      </div>
      <div className="post-content">{todo.content}</div>  
      <img
        class="post-image"
        src={todo.image}
        alt={`Post ${index + 1}`}
      />
      <button onClick={() => removeHanderler(todo.id)}>DELETE</button> 
      </div>     
    ))}
    </>
    
  );
};

export default App;