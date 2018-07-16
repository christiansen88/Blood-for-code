import 'reflect-metadata';
import { createExpressServer, useExpressServer } from 'routing-controllers';
var cors = require('cors');

class Server {

  public initialiseExpressServer(): void {
    const app = createExpressServer();
    app.use(cors());
    useExpressServer(app, {
      defaultErrorHandler: false,
      routePrefix: '/api',
      controllers: [__dirname + '/api/*.api.ts']
    });

    // Server setting
    const port = (process.env.VCAP_PORT || process.env.PORT || 8080);
    const host = (process.env.VCAP_HOST || process.env.HOST || 'localhost');
    app.listen(port, () => {
        console.log(`Listening at http://${host}:${port}/`);
    });
  }
}

new Server().initialiseExpressServer();
