import BaseSeeder from '@ioc:Adonis/Lucid/Seeder';
import Color from 'App/Models/Color';

export default class ColorSeeder extends BaseSeeder {
	public async run() {
		await Color.createMany([
			{
				name: 'Indigo',
				display: 'indigo-500'
			},
			{
				name: 'Esmeralda',
				display: 'green-500'
			},
			{
				name: 'Safira',
				display: 'blue-500'
			},
			{
				name: 'Rubi',
				display: 'red-500'
			},
			{
				name: 'Amber',
				display: 'yellow-400'
			},
			{
				name: 'Rosa',
				display: 'pink-500'
			}
		]);
	}
}
