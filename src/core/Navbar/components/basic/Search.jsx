import "./css/search.css";

const Search = (props) => {
  return (
    // <div>
    //   <input placeholder="Search" type="text" />
    // </div>
    <div className="search-box">
      <input
        type="text"
        className={`input-search ${props.color}`}
        placeholder="Search..."
      />
    </div>
  );
};

export default Search;
