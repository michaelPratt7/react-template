import React, {useState, useEffect} from "react";



{/* https://jsonplaceholder.typicode.com */}

function Layout() {
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState({});
  const [posts, setPosts] = useState([]);


useEffect(() => {
  fetch("https://jsonplaceholder.typicode.com/users")
  .then(response => response.json())
  .then(setUsers)
}, [])

  useEffect(() => {
    async function loadPosts() {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${currentUser.id}`)
    const allPosts = await response.json()
    setPosts(allPosts)
    }
    loadPosts();
  }, [currentUser])

  return (
    <div>
    {
     users.map((user) => (
        <div>
        <h1>{user.name}</h1>
        <div onClick={() => setCurrentUser(user)}>{user.username}</div>
        </div> 
      ))
    }
    <ul>
        {posts.map((post) =>  (
         <li>{post.title}</li>
        ))} 
    </ul>
  </div>
)


}

export default Layout;
