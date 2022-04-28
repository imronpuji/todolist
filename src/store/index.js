import {configureStore} from '@reduxjs/toolkit'
import todoList from '../features/todoList'

const store = configureStore({
	reducer : {
		todo : todoList,
	}
})

export default store;