import 'reflect-metadata';
import sourceMapSupport from 'source-map-support';
import { Ignitor } from '@adonisjs/core/build/standalone';

sourceMapSupport.install({ handleUncaughtExceptions: false });

console.log(`Process forked with success! PID: ${process.pid}`);
new Ignitor(__dirname).httpServer().start();
