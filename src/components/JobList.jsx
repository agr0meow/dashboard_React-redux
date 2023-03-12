import { useSelector, useDispatch } from "react-redux";
import { JobPosition } from "./JobPosition";
import { selectVisiblePositions } from "../store/positions/position-selectors";
import { selectFilters } from "../store/filters/filter-selector";
import { addFilter } from "../store/filters/filter-action";
const JobList = () => {
  const dispatch = useDispatch();
  const currentFilter = useSelector(selectFilters);
  const positions = useSelector((state) =>
    selectVisiblePositions(state, currentFilter)
  );
  const handleAddFilter = (filter) => {
    dispatch(addFilter(filter));
  };
  console.log(positions);
  return (
    <div className="job-list">
      {positions.map((item) => (
        <JobPosition
          key={item.id}
          {...item}
          handleAddFilter={handleAddFilter}
        />
      ))}
    </div>
  );
};

export { JobList };
