import { DateTime } from 'luxon';
import { BaseModel, belongsTo, BelongsTo, column } from '@ioc:Adonis/Lucid/Orm';
import Color from './Color';
import User from './User';

export default class Collection extends BaseModel {
	@column({ isPrimary: true })
	public id: number;

	@column()
	public name: string;

	@column()
	public colorId: number;

	@belongsTo(() => Color, { foreignKey: 'colorId' })
	public color: BelongsTo<typeof Color>;

	@column()
	public userId: number;

	@belongsTo(() => User, { foreignKey: 'userId' })
	public user: BelongsTo<typeof User>;

	@column.dateTime({ autoCreate: true })
	public createdAt: DateTime;

	@column.dateTime({ autoCreate: true, autoUpdate: true })
	public updatedAt: DateTime;
}
