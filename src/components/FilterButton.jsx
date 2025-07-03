import { useDispatch, useSelector } from "react-redux";
import { filterTodo, markAllCompleted, markCompletedTodo } from "../Redux/Action/actions";

const FilterButton = () => {
    const dispatch = useDispatch();
    const currenFilter = useSelector((state => state.filter));
    const handleFIlter= (filter) => {
        dispatch(filterTodo(filter))
    }
  return (
    <div>
        <select 
            value={currenFilter}
            onChange={(e)=> handleFIlter(e.target.value)}
            className="text-sm px-2 py-1 bg-white border-blue-300 focus:outline-none"
            >
            <option value='All'>Default</option>
            <option value='COMPLETED'>Completed</option>
            <option value='INCOMPLETE'>Incomplete</option>
            </select>
            <button onClick={()=>dispatch(markCompletedTodo())} className="text-sm px-2 py-1 bg-blue-700 text-white ml-2 rounded">Mark All Completed</button>
        
    </div>
  )
}

export default FilterButton;