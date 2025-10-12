import React from "react";
import { useQuery } from "@tanstack/react-query";

// Function to fetch posts
const fetchPosts = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!response.ok) throw new Error("Failed to fetch posts");
  return response.json();
};

const PostsComponent = () => {
  // useQuery hook for fetching data
  const {
    data: posts,
    isLoading,
    isError,
    error,
    refetch,
    isFetching,
  } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
    staleTime: 60000, // cache data for 60 seconds
  });

  if (isLoading) return <p>Loading posts...</p>;
  if (isError) return <p style={{ color: "red" }}>Error: {error.message}</p>;

  return (
    <div style={styles.container}>
      <h2>Posts List</h2>

      <button onClick={() => refetch()} style={styles.button}>
        {isFetching ? "Refreshing..." : "Refetch Posts"}
      </button>

      <ul style={styles.list}>
        {posts.slice(0, 10).map((post) => (
          <li key={post.id} style={styles.card}>
            <h4>{post.title}</h4>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

const styles = {
  container: { maxWidth: "600px", margin: "auto", textAlign: "left" },
  button: {
    background: "#4CAF50",
    color: "white",
    border: "none",
    padding: "8px 12px",
    borderRadius: "6px",
    cursor: "pointer",
    marginBottom: "20px",
  },
  list: { listStyle: "none", padding: 0 },
  card: {
    background: "#f5f5f5",
    margin: "10px 0",
    padding: "10px",
    borderRadius: "8px",
  },
};

export default PostsComponent;
