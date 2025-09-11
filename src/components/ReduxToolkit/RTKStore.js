import { configureStore } from "@reduxjs/toolkit";
import { todoReducer} from "./ToDo/toDoSlice";

const rtkStore = configureStore({
    reducer: todoReducer
});


export default rtkStore