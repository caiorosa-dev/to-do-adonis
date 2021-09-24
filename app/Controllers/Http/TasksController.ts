import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import Task from 'App/Models/Task';
import CreateTaskValidator from 'App/Validators/CreateTaskValidator';
import UpdateTaskValidator from 'App/Validators/UpdateTaskValidator';

export default class TasksController {
	public async index({ request }: HttpContextContract) {
		const tasks = await Task.all();
		const { collection } = request.all();

		return tasks.filter((tasks) => tasks.collection === collection);
	}

	public async store({ request }: HttpContextContract) {
		const data = await request.validate(CreateTaskValidator);
		const task = await Task.create(data);

		return task;
	}

	public async show({ params }: HttpContextContract) {
		const { id } = params;

		return await Task.findOrFail(id);
	}

	public async update({ params, request }: HttpContextContract) {
		const { id } = params;
		const data = await request.validate(UpdateTaskValidator);

		const collection = await Task.findOrFail(id);
		collection.merge(data);

		await collection.save();
	}

	public async destroy({ params }: HttpContextContract) {
		const { id } = params;

		const task = await Task.findOrFail(id);

		await task.delete();
	}
}
