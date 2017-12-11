import React from 'react';
import {FormContainer, FormMain} from './Try.style';

const classes = [];
	classes.push("formmain");	

const Try = () => (


	<div>
		<h1> TryPage </h1>
		
		<FormContainer>
			    <FormMain className={classes.join(' ')}>

				        <div className="login">
				            <form>
				                <input id="username" name="username" required="required" type="text" placeholder="Username" />
				                <input id="password" name="password" required="required" type="password" placeholder="Password" />
				                <button type="submit" value="Login" >Login</button>
				                <span className="form-toggle">Not Registered Yet?</span>
				            </form>
				        </div>
				        <div className="register">
				            <form>
				                <input id="firstname" name="firstname" required="required" type="text" placeholder="First name" />
				                <input id="lastname" name="lastname" required="required" type="text" placeholder="Last name" />
				                <input id="email" name="email" required="required" type="enail" placeholder="Email" />
				                <input id="username" name="username" required="required" type="text" placeholder="Username" />
				                <input id="password" name="password" required="required" type="password" placeholder="Password" />
				                <button type="submit" value="Login" >Register</button>
				                <span className="form-toggle">Return to Login</span>
				            </form>
				        </div>
			    </FormMain>
		</FormContainer>

	</div>
);





export default Try;





