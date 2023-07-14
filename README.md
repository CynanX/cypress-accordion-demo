# cypress-accordion-demo

This demo is to show how Cypress is not firing the Bootstrap 5 accordion collapse event.

To start, fire up the Angular application:

```
npm install
ng serve
```

Now load up Cypress and run the test:

```
./node_modules/cypress/bin/cypress open
```

Expected outcome:

The accordion opens, an item is selected and the accordion collapses.

Actual outome:

The accordion opens, an item is selected and the accordion IS NOT collapsed.
