import { Injectable } from '@nestjs/common';
// eslint-disable-next-line
const cluster = require('cluster');
// eslint-disable-next-line
const numCPUs = require('os').cpus().length || '1';

type CallbackFunction = () => void;

@Injectable()
export class ClusterService {
  static clusterize(callback: CallbackFunction): void {
    if (cluster.isMaster) {
      console.log(`MASTER SERVER (${process.pid}) IS RUNNING `);

      for (let i = 0; i < numCPUs; i++) {
        cluster.fork();
      }

      // eslint-disable-next-line
      cluster.on('exit', (worker: any, code, signal) => {
        console.log(`worker ${worker.process.pid} died`);
      });
    } else {
      callback();
    }
  }
}
