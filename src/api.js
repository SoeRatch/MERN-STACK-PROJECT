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

		resetPassword: data => axios.post('/api/auth/reset_password',{data})

	},

	articles:{
		fetchAlltitle: () => axios.get('/api/articles/title').then(
			res => res.data.titles),
		fetchsingleArticle: paramt => axios.get('/api/articles/article', {
		      params: {
		        paramt
		      }
		    }).then(
			res => res.data.article),
		create: article =>
			axios.post("/api/articles", {article}).then(
				res => res.data.article)		
	}
};


