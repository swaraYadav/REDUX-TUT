import React, {useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';


function App() {

  const dispatch = useDispatch();
  // Slice the data from the store using useSelector
  const usersInfo = useSelector((state) => state.usersReducer);
  
  useEffect(() => {
    dispatch({type: 'GET_USERS',payload: {}})
  }, [dispatch]);

  const addUser = () => {
    dispatch({
      type : 'ADD_USER',
      payload : {
        name : "Gudiya",
        mobile : "8756379005",
        email : "gudiya@gmail.com"
      }
    })
  }

  return (
    <div className="App">
        <table>
          <tr>
            <th>
              Name
            </th>
            <th>
              Email
            </th>
            <th>
              Mobile
            </th>
          </tr>
          <tbody>
          {usersInfo && usersInfo.usersList.map((user, index) =>
            <tr key={index}>
              <td>
                { user.name }
              </td>
              <td>
                { user.email }
              </td>
              <td>
                { user.mobile }
              </td>
            </tr>
            )
          }
          </tbody>
        </table>

        <button onClick={addUser}>Add User</button>
    </div>
  );
}

export default App;
