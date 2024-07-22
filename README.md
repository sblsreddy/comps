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

# Step 8 : routerLink is new hyperlinking used which will not refresh the whole page, it will display content on link

# Step 9 : PlaceHolder component inside elements and display

# Step 10 : npm install semantic-ui-css

# Step 11: Implement navigation including home and not found

# Step 12: Lazy loading and Eager loading ( By default, it will load eager loading) of lesson 107 of stephen grinders udemy angular course

# Step 13 : only 1 <ng-content> can be used in 1 template by default, can we tune it to use it further.

# Step 14 : segment component creation and it is another reusable

# Step 15 : Hiding empty elements using css when empty

# Reference : https://github.com/StephenGrider/ng-casts/tree/370e1b4e9cda3ad84b004494e3ff61e2c2fcf35c/diagrams/comps

# Step 16 : Reusable table components, Generate Table component in collections module

# Step 17 : Apply shared module to reuse by importing it in collections module

# Reference : https://gale.udemy.com/course/the-modern-angular-bootcamp/learn/lecture/17706812#questions/15229248

# Step 18 : Tab based navigations 

# Step 19 : Reusable tabs 

# Step 20 : Views module














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
