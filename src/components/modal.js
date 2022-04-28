import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { update, closeModal, create } from '../features/todoList'
import Form from './form'
function Modal ({title}) {
    const dispatch = useDispatch()
    const modalState = useSelector((state) => state.todo.modalState)
    function handleModal(className){
      const isOverlay = className.split(' ')
      if(isOverlay?.[1] === 'modal'){
        dispatch(closeModal())
      }
    }
    return(
    <div className="w-full modal fade bg-indigo-600 bg-opacity-25 fixed h-full" aria-labelledby="exampleModalLabel" onClick={(event) => handleModal(event.target.className)}>
      <div style={{ top: "20%",   left: "50%",  transform: "translate(-50%, -50%)"}} className="z-30 modal-dialog relative w-auto pointer-events-none w-3/6 h-32">
        <div
          className="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
          <div
            className="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
            <h5 className="text-xl font-medium leading-normal text-gray-800">{title}</h5>
            <button type="button"
              className="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
              data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body relative p-4" style={{zIndex:999}}>
            <Form/>
          </div>
          <div
            className="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-gray-200 rounded-b-md">
            <button type="button" className="px-6
              py-2.5
              bg-purple-600
              text-white
              font-medium
              text-xs
              leading-tight
              uppercase
              rounded
              shadow-md
              hover:bg-purple-700 hover:shadow-lg
              focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0
              active:bg-purple-800 active:shadow-lg
              transition
              duration-150
              ease-in-out" onClick={() => dispatch(closeModal())}>Close</button>

            {
              modalState === 'update'? 
              <button type="button" className="px-6
                py-2.5
                bg-blue-600
                text-white
                font-medium
                text-xs
                leading-tight
                uppercase
                rounded
                shadow-md
                hover:bg-blue-700 hover:shadow-lg
                focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
                active:bg-blue-800 active:shadow-lg
                transition
                duration-150
                ease-in-out
                ml-1" onClick={() => dispatch(update())}>Save changes</button> :
              <button type="button" className="px-6
                py-2.5
                bg-blue-600
                text-white
                font-medium
                text-xs
                leading-tight
                uppercase
                rounded
                shadow-md
                hover:bg-blue-700 hover:shadow-lg
                focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
                active:bg-blue-800 active:shadow-lg
                transition
                duration-150
                ease-in-out
                ml-1" onClick={() => dispatch(create())}>Save</button>
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal