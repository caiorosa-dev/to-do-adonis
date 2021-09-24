import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import User from 'App/Models/User';
import CreateUserValidator from 'App/Validators/CreateUserValidator';
import UpdateUserValidator from 'App/Validators/UpdateUserValidator';

export default class UsersController {
	public async store({ request }: HttpContextContract) {
		const data = await request.validate(CreateUserValidator);

		const user = await User.create(data);

		return user;
	}

	public async show({ params }: HttpContextContract) {
		const { id } = params;

		const user = await User.findOrFail(id);

		return user;
	}

	public async update({ request, params }: HttpContextContract) {
		const { id } = params;
		const requestData = await request.validate(UpdateUserValidator);

		const user = await User.findOrFail(id);

		user.merge(requestData);
		await user.save();

		return user;
	}
}
