# vue3-vuex-ts-crud

This is a small responsive ToDo application made with **Vue Vuex and Typescript**, and tested with **Jest and Cypress**. We can navigate through a homepage, about page and to we are redirected to an errorpage for any other path we visit.

In the homepage we can see a navbar and a main section. In the main section we can see an input to add new tasks, another to filter tasks and below finally we can see the tasks.

As it is a CRUD, each task can be edited (its text and check/uncheck as Done) and removed.

It uses **vuex-persistedstate** so we can continue in the exact same point we were in case the page crashes as data remains.

You can use the [demo](https://zen-sinoussi-48de0d.netlify.app) !

## Project setup

```
yarn install
```

### Compiles and hot-reloads for development

```
yarn serve
```

### Compiles and minifies for production

```
yarn build
```

### Run your unit tests

```
yarn test:unit
```

### Run your end-to-end tests

```
yarn cypress
```

### Lints and fixes files

```
yarn lint
```

