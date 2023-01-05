/*
|--------------------------------------------------------------------------
| AdonisJs Server
|--------------------------------------------------------------------------
|
| The contents in this file is meant to bootstrap the AdonisJs application
| and start the HTTP server to accept incoming connections. You must avoid
| making this file dirty and instead make use of `lifecycle hooks` provided
| by AdonisJs service providers for custom code.
|
*/

import cluster from 'cluster';
import os from 'os';

function runPrimaryProcess() {
	const processesCount = process.env.CLUSTER_SIZE ? process.env.CLUSTER_SIZE : os.cpus().length * 2;

	console.log(`Started Primary Process (PID: ${process.pid})`);
	console.log(`Forking ${processesCount} processes...`);

	for (let i = 0; i < processesCount; i++) {
		cluster.fork();
	}

	
}

async function runSecondaryProcess() {
	await import('./app');
}

cluster.isPrimary ? runPrimaryProcess() : runSecondaryProcess();
