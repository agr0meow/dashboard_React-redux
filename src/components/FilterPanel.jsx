import { useSelector, useDispatch } from "react-redux";
import { selectFilters } from "../store/filters/filter-selector";
import { clearFilter, removeFilter } from "../store/filters/filter-action";
import { Badge } from "../UI/Badge";
import { Card } from "../UI/Card";
import { Stack } from "../UI/Stack";
const FilterPanel = () => {
  const dispatch = useDispatch();
  const currentFilters = useSelector(selectFilters);
  if (currentFilters.length === 0) {
    return null;
  }
  console.log(currentFilters);
  return (
    <Card className="filter-panel">
      <div className="filter-panel-wrapper">
        <Stack>
          {currentFilters.map((item) => (
            <Badge
              onClear={() => dispatch(removeFilter(item))}
              key={item}
              variant="clearable"
            >
              {item}
            </Badge>
          ))}
        </Stack>

        <button className="link" onClick={() => dispatch(clearFilter)}>
          Clear
        </button>
      </div>
    </Card>
  );
};

export { FilterPanel };
