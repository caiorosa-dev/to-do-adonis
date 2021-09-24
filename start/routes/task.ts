import Route from '@ioc:Adonis/Core/Route';

Route.resource('/task', 'TasksController').apiOnly().middleware({
	index: 'auth',
	store: 'auth',
	show: 'auth',
	update: 'auth',
	destroy: 'auth'
});
