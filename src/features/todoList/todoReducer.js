const create = (state, action) => {
	const id = Math.random() * 11
	const createdAt = new Date().toLocaleString()
	const [{title, description, status}] = state.form
	state.data.push({id, title, status, createdAt, description})
	state.modal = false
}
const update = (state, action) => {
	state.data = state.data.filter(val => {
		if(val.id === state.form[0]['id']){
			val['title'] = state.form[0]['title']
			val['description'] = state.form[0]['description']
			val['status'] = state.form[0]['status']
		} 
		return val
	})
	state.modal = false
}
const remove = (state, action) =>{ state.data = state.data.filter(val => val.id !== action.payload) }

// cmp handler
const handleUpdate = (state, action) => {
  	state.form = state.data.filter(val => val.id === action.payload)
  	state.modal= true
  	state.modalState = 'update'
}

const handleCreate = (state, action) => {
  	state.modal= true
  	state.form = [{
  		title:'',
  		description:'',
  		status:0,
  	}]
  	state.modalState = 'create'
}
const closeModal = (state) => {
	state.modal=false
}
const updateForm = (state, action) => {
	state.form[0][action.payload.case] = action.payload.value
}
const todo = {create, update, remove, closeModal, handleUpdate, updateForm, handleCreate}
export default todo;