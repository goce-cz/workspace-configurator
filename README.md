# Salsita Configurator

> This application has been bootstrapped with [create-react-app](https://create-react-app.dev/) and [@salsita/configurator-sdk](https://www.npmjs.com/package/@salsita/configurator-sdk).

Welcome to your brand-new product configurator. We have bootstrapped a common setup around [our SDK](https://www.npmjs.com/package/@salsita/configurator-sdk) to save you some efforts and speed up learning.

The setup is a single-product configurator backed by Node.js backend using a Koa router directly imported from the SDK.
Data is stored in a simple Postgres database.

## First steps

You will probably want to see the configurator working in your browser, so here are the steps you should take:

> In case you're using **Yarn** as a package manager, please replace all `yarn run` commands with `yarn` in `package.json`.
> Create react app is supposed to do that for you, but it fails if there are more commands on a single line.

### Setup database

1. Create an empty Postgress database using your favorite tool.
1. Set a `DATABASE_URL` environment variable to the connection string to your new  Postgres database. ([more about environment variables](docs/environment-variables.md))
1. Run `yarn migrate-sdk up` to create necessary DB tables. ([more about migrations](https://github.com/salsita/configurator-sdk/blob/develop/sdk/docs/database.md#migrations))  

### Start dev server

```shell script
yarn start
```
The above will start both the API server, and WebPack dev server to serve the client files.

The server by default listens on [`http://localhost:3000`](http://localhost:3000),
and any request to `/api/*` is proxied to the API server listening on port `3001`.

### Change the product

Once you've enjoyed playing with the UI, let's look at how to change the configured product
to your liking.

There are two main parts of the product that you need to configure:
* the 3D model
* definition of all selectable options and their interconnections

#### Replace 3D model

Currently, we support GLTF format in both JSON and binary flavor. To replace the model:
1. Simply drop a new GLTF serialized 3D model into `public/models`.
1. Reference it from [model3dConfig.path](https://sdk.configurator.salsita.co/develop/interfaces/_client_index_.model3dconfig.html#path) section of the product definition object
1. Additionally, you can specify scale and position of the model ([model3dConfig.scale](https://sdk.configurator.salsita.co/develop/interfaces/_client_index_.model3dconfig.html#scale) and [model3dConfig.position](https://sdk.configurator.salsita.co/develop/interfaces/_client_index_.model3dconfig.html#position))

#### Change selectable options

The very heart of the whole configurator is the product definition object.
The definition object for the bootstrapped product can be found in: `src/client/data/chilli.tsx`.

The vast amount of possibilities makes it nearly impossible to describe the definition object
reasonably in just plain text. That why the only way to understand it properly is to explore
the example and consult [generated docs](https://sdk.configurator.salsita.co/develop/interfaces/_client_model_index_.product.html).
