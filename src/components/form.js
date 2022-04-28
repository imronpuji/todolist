import {useDispatch, useSelector} from 'react-redux'
import {updateForm} from '../features/todoList'

function Form () {
	const dispatch = useDispatch()
	const dataForm = useSelector((state) => state.todo.form)

	return (
		<form className="flex flex-col">
			<label className="m-3">Title</label>
			<input value={dataForm?.[0]?.['title'] ?? ''} onChange={(event) => dispatch(updateForm({value:event.target.value, case:'title', id:dataForm?.[0]?.['id'] ?? ''}))} className="border-2 m-3 p-2 rounded"/>
			<label className="m-3">Description</label>
			<input value={dataForm?.[0]?.['description'] ?? ''} onChange={(event) => dispatch(updateForm({value:event.target.value, case:'description', id:dataForm?.[0]?.['id'] ?? ''}))} className="border-2 m-3 p-2 rounded"/>
			<label className="m-3">Status</label>
			<input value={dataForm?.[0]?.['status'] ?? ''} onChange={(event) => dispatch(updateForm({value:event.target.value, case:'status', id:dataForm?.[0]?.['id'] ?? ''}))} className="border-2 m-3 p-2 rounded"/>
		</form>
	)
}

export default Form