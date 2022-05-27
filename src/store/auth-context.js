import { createContext } from 'react';

// 
// const [ loggedInUser, setLoggedInUser ] = useState({
//     id: 1,
//     username: 'Earl',
//     password: 'earl',
//     blogposts: []
// });
// 
// const [ allUsers, setAllUsers ] = useState([{
//     id: 1,
//     username: 'Earl',
//     password: 'earl',
//     blogposts: []
// }])

const AuthContext = createContext();

export default AuthContext;