# redwood-leaflet-demo

[![Netlify Status](https://api.netlify.com/api/v1/badges/9c196343-eb4f-4690-a15f-fb2d8a6ade8e/deploy-status)](https://app.netlify.com/sites/redwood-leaflet-demo/deploys)

## Getting Started

### Setup

To get the dependencies installed, just do this in the root directory:

```terminal
yarn install
```

### Fire it up

```terminal
yarn redwood dev
```

Your browser should open automatically to `http://localhost:8910` to see the web app. Lambda functions run on `http://localhost:8911` and are also proxied to `http://localhost:8910/api/functions/*`.

## Development

### Database

To create a development database:

```terminal
yarn redwood db up
```

This will read the schema definition in `api/prisma/schema.prisma` and generate a sqlite database in `api/prisma/dev.db`

If you've made changes to the schema run `yarn redwood db save` to generate a migration, and `yarn redwood db up` to apply the migration/ generate a new ORM client.
