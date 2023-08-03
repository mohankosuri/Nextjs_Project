"use client"

import { useEffect, useState } from "react";


interface Post {
    albumId: number;
    id: number;
    title: string;
    url: string;
    thumbnailUrl: string;
   
}

const PostsPage: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then((response) => response.json())
      .then((data) => setPosts(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Posts List</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {posts.map((post) => (
          <div
            key={post.id}
            className="bg-green-300 rounded-lg shadow-lg p-4 transition duration-300 transform hover:scale-105"
          >
            <h2>{post.id}</h2>
            <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
            <p>{post.thumbnailUrl}</p>
            <p>{post.url}</p>
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostsPage;
