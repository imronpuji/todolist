import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import todo from './todoReducer'
import client from '../../api/client'

const todoList = createSlice({
  name:'todo',
  initialState : {
    data:[],
    status :'idle',
    error:null,
    modal:false,
    form:[]
  },
  reducers : {
    ...todo
  },
  extraReducers(builder) {
    builder
      .addCase(fetchPosts.pending, (state, action) => {
        state.status = 'loading'
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.data = state.data.concat(action.payload)
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
  }
})

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
  const response = await client.get('/to-do-list')
  return response.data
})

export const selectAllData = state => state.todo.data
export const { create, update, remove, closeModal, handleUpdate, updateForm } = todoList.actions

export default todoList.reducer