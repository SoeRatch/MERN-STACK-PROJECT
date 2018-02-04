import api from '../api';
import { userLoggedIn } from './auth';
import { USER_DETAILS} from '../types';


const userdetailsFetched = (userdetails) =>({
	type: USER_DETAILS,
	userdetails
});

export const signup = data => dispatch =>
	api.user.signup(data).then(user=>{
		localStorage.PensheelJWT = user.token;
		dispatch(userLoggedIn(user));
	});

export const saveName = data => dispatch =>
	api.user.savename(data).then(userdetails=>
					dispatch(userdetailsFetched(userdetails)));;

export const saveAddress = data => dispatch =>
	api.user.saveaddress(data).then(userdetails=>
					dispatch(userdetailsFetched(userdetails)));;

export const saveDescription = data => dispatch =>
	api.user.savedescription(data).then(userdetails=>
					dispatch(userdetailsFetched(userdetails)));;

export const fetchuserdetails = () => dispatch =>
	api.user.fetchuserdetails().then(userdetails=>
					dispatch(userdetailsFetched(userdetails)));

