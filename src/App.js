import React, {useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchPosts, selectAllData } from './features/todoList'
import Modal from './components/modal'
import List from './components/list'
import Loader from './components/loader'
import Error from './components/error'
import Card from './components/card'
function App() {
  const dispatch = useDispatch()
  const postStatus = useSelector(state => state.todo.status)
  const modal = useSelector(state => state.todo.modal)
  const posts = useSelector(selectAllData)
  let doing
  let done

  useEffect(() => {
    if (postStatus === 'idle') {
      dispatch(fetchPosts())
    }
    document.title = "Todo List"
  }, [postStatus, dispatch])


  if (postStatus === 'loading') {
    doing = <Loader/>
    done =  <Loader/>
  } else if (postStatus === 'succeeded') {
    doing = [].concat(posts)
    .sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt))
    .map(post => {
      if(post.status < 1){
        return (
          <List key={post.id} date={post.createdAt} id={post.id} title={post.title} description={post.description} status={post.status}/>
        )
      }
    })

    done = [].concat(posts)
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
    .map(post => {
      if(post.status > 0){
        return (
          <List key={post.id} date={post.createdAt} id={post.id} title={post.title} description={post.description} status={post.status}/>
        )
      }
    })

  } else {
    done = <Error/>
    doing = <Error/>
  }


  return (
    <div>
      {modal ? <Modal title="TodoList" /> : <></>}
      <h1>hi this is production</h1>
      <section className="flex flex-row">
        <Card comp={doing} title="DOING"/>
        <Card comp={done} title="DONE"/>
      </section>
    </div>
  )
}

export default App