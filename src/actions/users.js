import api from '../api';
import { userLoggedIn } from './auth';

const signup = data => dispatch =>
	api.user.signup(data).then(user=>{
		localStorage.PensheelJWT = user.token;
		dispatch(userLoggedIn(user));
	});

export default signup;