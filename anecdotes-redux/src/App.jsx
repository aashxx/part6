import React, {useEffect} from 'react';
import Form from './components/Form';
import List from './components/List';
import Notification from './components/Notification';
import Filter from './components/Filter';
import { initializeAnecdotes } from './reducers/anecdoteReducer';
import { useDispatch } from 'react-redux';

const App = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(initializeAnecdotes())
  }, [dispatch]);

  return (
    <div>
      <h2>Create New</h2>
      <Form />
      <h2>Anecdotes</h2>
      <Notification />
      <Filter />
      <List />
    </div>
  )
}

export default App;