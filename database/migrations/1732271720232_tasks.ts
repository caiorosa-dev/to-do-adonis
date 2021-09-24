import BaseSchema from '@ioc:Adonis/Lucid/Schema';

export default class Todos extends BaseSchema {
	protected tableName = 'tasks';

	public async up() {
		this.schema.createTable(this.tableName, (table) => {
			table.increments('id');

			table.string('content');
			table.dateTime('date').nullable();
			table.boolean('check');
			table.integer('collection_id').unsigned().references('collections.id').onDelete('CASCADE').onUpdate('CASCADE');

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
