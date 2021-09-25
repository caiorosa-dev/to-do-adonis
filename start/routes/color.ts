import Route from '@ioc:Adonis/Core/Route';

Route.resource('/color', 'ColorsController').apiOnly();
