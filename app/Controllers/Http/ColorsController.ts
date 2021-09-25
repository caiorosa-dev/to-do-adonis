import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import Color from 'App/Models/Color';

export default class ColorsController {
	public async index({}: HttpContextContract) {
		const colors = await Color.all();

		return colors;
	}
}
