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
	await import('./server');
}

cluster.isPrimary ? runPrimaryProcess() : runSecondaryProcess();
