import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import Collection from 'App/Models/Collection';
import CreateCollectionValidator from 'App/Validators/CreateCollectionValidator';
import UpdateCollectionValidator from 'App/Validators/UpdateCollectionValidator';

export default class CollectionsController {
	public async index({ auth }: HttpContextContract) {
		const userId = auth.user?.id;

		const collections = await Collection.all();

		const filtered = collections.filter((collection) => collection.userId === userId);

		return filtered;
	}

	public async store({ request, auth }: HttpContextContract) {
		const data = await request.validate(CreateCollectionValidator);
		const user = auth.user?.id;

		const collection = await Collection.create({ name: data.name, colorId: data.color, userId: user });

		collection.load('color');

		return collection;
	}

	public async show({ auth, params, response }: HttpContextContract) {
		const { id } = params;

		const collection = await Collection.findOrFail(id);
		if (collection.userId === auth.user?.id) {
			return collection;
		}

		collection.load('color');

		return response.status(401).json({ message: 'Invalid user' });
	}

	public async update({ request, auth, params }: HttpContextContract) {
		const { id } = params;
		const data = await request.validate(UpdateCollectionValidator);
		const user = auth.user?.id;

		const collection = await Collection.findOrFail(id);
		collection.merge({ name: data.name, colorId: data.color_id, userId: user });

		collection.load('color');

		await collection.save();
	}

	public async destroy({ params }: HttpContextContract) {
		const collection = await Collection.findOrFail(params.id);

		await collection.delete();
	}
}
