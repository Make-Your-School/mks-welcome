# DEV INFO

## clone local

```bash
git clone --recurse-submodules REPONAME
```

## add part

```bash
git submodule add https://github.com/XXXX
```

## link collection

-   list all mks repos https://github.com/search?q=user%3As-light+mks-&type=repositories

## Install the dependencies

```bash
yarn
# or
npm install
```

### Start the app in development mode (hot-code reloading, error reporting, etc.)

```bash
quasar dev
```

### Lint the files

```bash
yarn lint
# or
npm run lint
```

### Format the files

```bash
yarn format
# or
npm run format
```

### Build the app for production

```bash
quasar build
```

to update the renderd version on github just push to the main branch.
later we will change this so you can only diretly push into a dev branch.
then there will be a _release_ that merges this into main and with this merge triggers the deployment.

### Customize the configuration

See [Configuring quasar.config.js](https://v2.quasar.dev/quasar-cli-vite/quasar-config-js).
