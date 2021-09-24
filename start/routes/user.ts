import Route from '@ioc:Adonis/Core/Route';

Route.resource('/user', 'UsersController').apiOnly().middleware({
	show: 'auth',
	update: 'auth'
});
