
const Pagination = ({ totalPosts, postsPerPage, onChange }) => {

  const pageNumbers = [];

  const pagination = Math.ceil(totalPosts / postsPerPage);

  for (let i = 1; i <= pagination; i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className="d-flex justify-content-center">
      <ul className="pagination">
        {pageNumbers.map((page) => (
          <li className="page-item"> <a onClick={(e)=>{e.preventDefault();onChange(page)}} href='!#' className="page-link">{page}</a></li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
