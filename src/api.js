import axios from 'axios';

export default {
	user:{
		login: credentials => axios.post("/api/auth",{credentials})
									.then(res=>res.data.user),
		signup: user => axios.post("/api/users",{user})
								.then(res=>res.data.user),
		confirm: token => axios.post("/api/auth/confirmation",{token})
							.then(res => res.data.user),
		resetPasswordRequest: email => axios.post('/api/auth/reset_password_request',{ email }),
		
		validateToken: token => axios.post('/api/auth/validate_token',{token}),

		resetPassword: data => axios.post('/api/auth/reset_password',{data}),

		savename: name => axios.post('/api/users/save_name', {name}).then(
			res => res.data),

		saveaddress: address => axios.post('/api/users/save_address', {address}).then(
			res => res.data),

		savedescription: description => axios.post('/api/users/save_description', {description}).then(
			res => res.data),

		fetchuserdetails: () => axios.get('/api/users/user_details').then(
			res => res.data)

	},

	articles:{
		fetchtitle: () => axios.get('/api/articles/title').then(
			res => res.data.titles),
		fetchAlltitle: () => axios.get('/api/articles/alltitle').then(
			res => res.data.titles),
		fetchsingleArticle: paramt => axios.get('/api/articles/article', {
		      params: {
		        paramt
		      }
		    }).then(
			res => res.data.article),
		voteArticle: parameter => axios.get('/api/articles/article/vote', {
		      params: {
		        id:parameter.id,
		        vote:parameter.vote
		      }
		    }),
		create: article =>
			axios.post("/api/articles", {article}).then(
				res => res.data.article)		
	}
};


