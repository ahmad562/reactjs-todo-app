import { useState } from "react";
import { useDispatch } from "react-redux";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { addTodo, updateSearchTodo } from "../Redux/Action/actions";
import FilterButton from "./FilterButton.jsx";
import { BsSearch } from "react-icons/bs";
import List from "./List.jsx";


const Todo = () => {
    const [todoText, setTodoText] = useState(""); // ✅ Fix array destructuring
    const [SearchText, setSearchText] = useState("");
    const dispatch = useDispatch();
    

    const handleAddTodo = (text) => {
        dispatch(addTodo(text)); // sending action to store
    };

    const handleSearchTodo = (value) =>{
        setSearchText(value);
        dispatch(updateSearchTodo(value));
    }

    const saveTodo = () => {
        if (todoText.trim() !== "") {
            handleAddTodo(todoText.trim());
            setTodoText("");
        }
    };

    return (
        <div className="max-w-4xl mx-auto sm:mt-8 p-4 bg-blue-200 rounded-2xl">
            <h1 className="mt-3 mb-6 text-2xl text-center text-blue-700 uppercase">Todo App</h1>
            <div className="flex items-center mb-4">
                <input
                    type="text"
                    placeholder="Enter Your Task"
                    className="flex-grow p-2 border-b-2 border-gray-300 bg-white rounded focus:outline focus:border-blue-500"
                    name="text"
                    id="addTodo"
                    value={todoText}
                    onChange={(e) => setTodoText(e.target.value)}
                />
                <button
                    className="ml-4 p-2 bg-blue-500 text-white rounded hover:bg-black focus:outline-none"
                    onClick={saveTodo} // ✅ Fix: use onClick
                >
                    <FaArrowAltCircleRight />
                </button>
            </div>

            {/* Filter search */}
            <div className="flex items-center justify-between flex-wrap">
                <FilterButton />
                {/* Search field */}
                <div className="flex items-center justify-end mt-4 sm:mt-0">
                    <input type="text" placeholder="Search"
                        value={SearchText}
                        name="text"
                        onChange={(e)=> handleSearchTodo(e.target.value)}
                        id="addTodo"
                        className="flex-grow rounded p-2 border-b-2 border-gray-300 bg-white focus:outline-none focus:border-blue-500 sm:mr-4"
                    />
                    <button onClick={saveTodo} className="p-2 bg-blue-500 text-white hover:bg-blue-700 focus:outline-none">
                        <BsSearch />
                    </button>
                </div>
            </div>
            <List />
        </div>
    );
};

export default Todo;
