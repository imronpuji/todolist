const create = (state) => {state.value += 1}
const update = (state, action) => {
	state.status = 'loading'
	state.data = state.data.filter(val => {
		if(val.id === state.form[0]['id']){
			val['title'] = state.form[0]['title']
			val['description'] = state.form[0]['description']
			val['status'] = state.form[0]['status']
		} 
		return val
	})
	state.modal = false
	state.status = 'succeeded'
}
const remove = (state, action) =>{ state.data = state.data.filter(val => val.id != action.payload) }

// cmp handler
const handleUpdate = (state, action) => {
  	state.form = state.data.filter(val => val.id == action.payload)
  	state.modal= true
}
const closeModal = (state) => {
	state.modal=false
}
const updateForm = (state, action) => {
	state.form[0][action.payload.case] = action.payload.value
}
const todo = {create, update, remove, closeModal, handleUpdate, updateForm}
export default todo;