import BaseSchema from '@ioc:Adonis/Lucid/Schema';

export default class Collections extends BaseSchema {
	protected tableName = 'collections';

	public async up() {
		this.schema.createTable(this.tableName, (table) => {
			table.increments('id');

			table.string('name');
			table.integer('color_id').unsigned().references('colors.id').onDelete('CASCADE').onUpdate('CASCADE');
			table.integer('user_id').unsigned().references('users.id').onDelete('CASCADE').onUpdate('CASCADE');

			/**
			 * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
			 */
			table.timestamp('created_at').nullable();
			table.timestamp('updated_at').nullable();
		});
	}

	public async down() {
		this.schema.dropTable(this.tableName);
	}
}
