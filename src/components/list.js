import { create, remove, retrieve, fetchPosts, selectAllData, handleUpdate } from '../features/todoList'
import { useSelector, useDispatch } from 'react-redux'

function List({title, id, description, status, date}){
	
	const dispatch = useDispatch()
	return (
			<li className="p-3 hover:bg-blue-400 list-none border-2 rounded m-4 flex">
	            <span className="flex-auto w-60">
	              	<span>{title}</span>
	              	<p className="flex-auto w-60">{description}</p>
	              	<p className="flex-auto w-60 text-lg">{status}</p>
	              	<p className="flex-auto w-60 text-xs">{date}</p>
	            </span>
	            <button className="border-2 rounded hover:bg-yellow-300 flex-auto ml-2 h-10" onClick={() => dispatch(handleUpdate(id))}>Edit</button>
	            {status < 1 ? (
	            	<button className="border-2 rounded hover:bg-red-400 flex-auto ml-2 h-10" onClick={() => dispatch(remove(id))}>Delete</button>
	            ) : <></>}
          	</li>
		)
}


export default List