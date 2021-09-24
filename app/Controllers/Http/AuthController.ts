import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';

export default class AuthController {
	public async store({ auth, request }: HttpContextContract) {
		const { email, password } = request.all();

		const token = auth.attempt(email, password, {
			expiresIn: '7 days'
		});

		return token;
	}

	public async destroy({ auth }: HttpContextContract) {
		auth.logout();
	}
}
