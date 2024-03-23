
import { useState, useEffect } from "react";
import PostItem from "./postItem";

const getData = async (url) => {
  try {
    let res = await fetch(url);
    let data = await res.json();
    let totalCount = +res.headers.get("x-total-count");
    return {
      data,
      totalCount,
    };
  } catch (error) {
    throw new Error(error);
  }
};

function DataDisplay() {
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const [err, setErr] = useState(false);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    fetchAndUpdateData(page);
  }, [page]);

  const fetchAndUpdateData = async () => {
    setLoading(true);
    try {
      let response = await getData(
        `https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${page}`
      );
      setPosts(response.data);
      setTotalPages(Math.ceil(response.totalCount / 10));
      setLoading(false);
    } catch (error) {
      setErr(true);
      setLoading(false);
    }
  };

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (err) {
    return <h1>Something went wrong.. please refresh</h1>;
  }

  return (
    <>
      <h1>
        Get posts on mount phase and Update posts whenever page number changes
      </h1>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <button disabled={page === 1} onClick={() => setPage(page - 1)}>
          PREVIOUS
        </button>
        <p style={{ padding: "20px", fontWeight: "bolder" }}>{page}</p>
        <button
          disabled={page === totalPages}
          onClick={() => setPage(page + 1)}
        >
          NEXT
        </button>
      </div>
      {posts.map((post) => (
        <PostItem key={post.id} id={post.id} title={post.title} />
      ))}
    </>
  );
}

export default DataDisplay; 
