import {useDispatch} from 'react-redux'
import {handleCreate} from '../features/todoList'

function Header({title}){
	const dispatch = useDispatch()

	return (
			<div className="flex rounded border-2 shadow-sm m-3">
	          	<h1 className="m-4 flex-auto font-sans font-serif">{title}</h1>
	          	{title === 'DOING' ?  <button  className="flex-2 w-32 p-2 m-4 font-sans font-serif rounded bg-yellow-500" onClick={() => dispatch(handleCreate())}>add task</button> : <></>}
	        </div>
		)
}

export default Header