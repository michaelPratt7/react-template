import React from "react";


function UserList({currentUser, posts}) {
    return (
        <div>
            {posts.map((post) => (
                <p>{post.title}</p>
            ))}
        </div>
    )
}


export default UserList;