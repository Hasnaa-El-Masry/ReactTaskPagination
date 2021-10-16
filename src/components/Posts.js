
import { Fragment } from "react";
import Pagination from "./Pagination";


const Posts = (props) => {

  return (
    <Fragment>
      {!props.posts ? (
        "No data found"
      ) : (
        <div className='container py-5 px-5'>
          <table className="table table-light">
            <thead className='thead-light'>
              <tr>
                <th>userId</th>
                <th>id</th>
                <th>title</th>
                <th>body</th>
              </tr>
            </thead>
            <tbody>
              {props.posts.map((post) => {
                return (
                  <tr key={post.id}>
                    <td>{post["userId"]}</td>
                    <td>{post["id"]}</td>
                    <td>{post["title"]}</td>
                    <td>{post["body"]}</td>
                  </tr>
                )
              })}
            </tbody>
          </table>
          <Pagination />
        </div>
      )}
    </Fragment>
  );
};

export default Posts;
