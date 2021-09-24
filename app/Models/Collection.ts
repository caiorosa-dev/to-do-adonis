import { DateTime } from 'luxon';
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm';

export default class Collection extends BaseModel {
	@column({ isPrimary: true })
	public id: number;

	@column()
	public name: string;

	@column({ columnName: 'color_id' })
	public color: number;

	@column({ columnName: 'user_id' })
	public user: number;

	@column.dateTime({ autoCreate: true })
	public createdAt: DateTime;

	@column.dateTime({ autoCreate: true, autoUpdate: true })
	public updatedAt: DateTime;
}
