import css from "./SearchBox.module.css";
import { useDispatch, useSelector } from "react-redux";
import { selectFilter } from "../../redux/contacts/selectors.js";
import { changeFilter } from "../../redux/contacts/filtersSlice.js";

const SearchBox = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();
  return (
    <div className={css.wrapSearch}>
      <label className={css.label}>
        <span>Find by name</span>
        <input
          className={css.input}
          type="text"
          name="name"
          placeholder="Search..."
          value={filter}
          onChange={(e) => dispatch(changeFilter(e.target.value))}
        />
      </label>
    </div>
  );
};

export default SearchBox;
