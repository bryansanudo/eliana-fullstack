import { BiSearch } from "react-icons/bi";
const Search = ({ value, onChange }) => {
  return (
    <>
      <div>
        <input
          className="input  input-primary  w-full"
          type="text"
          placeholder="👀 Search by name"
          value={value}
          onChange={onChange}
        />
      </div>
    </>
  );
};

export default Search;
