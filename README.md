# Step 1: Comps
ng new comps --routing

# when we create a component or module with uppercase it justs takes only lowercase and display in ide
see the below generate commands and see the files inside vscode

# Step 2: create modules
ng g m Elements --routing or ng generate module Elements --routing
ng g m Collections --routing or ng generate module Collections --routing
ng g m Views --routing or ng generate module Views --routing
ng g m Mods --routing or ng generate module Mods --routing

# Step 3 : Create a component inside a module

ng generate component elements/ElementsHome (elements is the module we created earlier on line 5, now we are creating component inside it ElementsHome)

# Step 4 : Display the new component elements-home


# Step 5 : Create other components in respective modules
ng generate component collections/CollectionsHome
ng generate component views/ViewsHome
ng generate component mods/ModsHome

# Step 6 : Routing modules and routing rules by removing components from exports

# Step 7 : Introducing classic hyperlinks for naviagtion and the down side is it refreshs complete page when we click on the link , you can observe this behaviour in developer tools and see the all option when navigating between links which will refresh the whole page

















This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.2.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
