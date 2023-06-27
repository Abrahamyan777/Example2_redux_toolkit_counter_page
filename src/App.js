import './App.css';
import Main from "./components/Main/Main";
import Counter from "./components/Counter/Counter";
import UsersList from "./components/UsersList/UsersList";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getUsers, getUsersAsync} from "./store/Reduceres/usersReducer";


function App() {

    const dispatch = useDispatch()


    useEffect(() => {
        dispatch(getUsersAsync())
    },[])

    const {users} = useSelector(state => state.usersReducer)

    console.log(users)

  return (
    <div className="App">
      <Main>
        <Counter/>
        <UsersList users={users}/>
      </Main>
    </div>
  );
}

export default App;
