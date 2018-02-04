import nodemailer from 'nodemailer';
const from = '"Pensheel"<info@pensheel.com>';

function setup(){
	return nodemailer.createTransport({
			  host: process.env.EMAIL_HOST,
			  port: process.env.EMAIL_PORT,
			  auth: {
			    user: process.env.EMAIL_USER,
			    pass: process.env.EMAIL_PASS
			  }
			});

}

export function sendConfirmationEmail(user){
	const transport = setup();
	const email = {
		from,
		to: user.email,
		subject:"Welcome to Pensheel.",
		text: `
			Hei, ${user.username} . Welcome to Pensheel . Please , confirm your email with the below address to get started :).

			${user.generateConfirmationUrl()}
		`
	}

	transport.sendMail(email);
}

export function sendResetPasswordEmail(user){
	const transport = setup();
	const email = {
		from,
		to: user.email,
		subject: "Reset Password",
		text: `
			To reset password follow this link
			${user.generateResetPasswordLink()}
		`
	};

	transport.sendMail(email);
}