import axios from "axios";
import { useEffect, useState } from "react";
import Pagination from "./components/Pagination";
import Posts from "./components/Posts";
import { Route, Switch, useHistory, useLocation } from "react-router";
import queryString from "query-string";
import Loading from "./components/UI/Loading";

const postsPerPage = 10;

const App = () => {
  const location = useLocation();
  const history = useHistory();

  const path = location.pathname;
  const initialQueryString = queryString.parse(location.search);
  const initialPageNumber = Number(initialQueryString.page) || 1;

  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currPage, setCurrPage] = useState(initialPageNumber);

  const lastPostIndex = currPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currPosts = posts.slice(firstPostIndex, lastPostIndex);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);

      await axios
        .get("https://jsonplaceholder.typicode.com/posts")
        .then((res) => {
          setPosts(res.data);
        });

      setLoading(false);
    };

    fetchPosts();

    history.push(`${path}?page=${currPage}`);
    
  }, [path, currPage, history]);

  const changePageHandler = (number) => {
    setCurrPage(number);
  };

  return (
    <Switch>
      <Route path="/" exact>
        {!loading && (
          <>
            {" "}
            <Posts posts={currPosts} />
            <Pagination
              totalPosts={posts.length}
              postsPerPage={postsPerPage}
              onChange={changePageHandler}
            />
          </>
        )}
        {loading && <Loading/>}
      </Route>
    </Switch>
  );
};

export default App;
