# Smart Recipe Editor

![Smart Recipe Editor](images/smart-recipe-editor-screenshot.png)

## About

It it's made to be your recipe editor with AI that can help you with formatting, adding alternative measuring, suggesting substitutions, adding checklists, estimating servings, calculating nutritional information, and adjusting the recipe serving (double or half) and more!

If you're feeling lucky, just try the Make it pretty shortcut and have fun!

![Smart Recipe Editor](images/smart-recipe-editor-make-it-pretty-demo.gif)

### Inspiration
Recipes online are more and more complicated and hard to follow. When we try to copy and paste them to our text-editor, formatting breaks and it misses important information.

### What it does
The Smart Recipe Editor is an all-in-one solution that allows users to format, customize, and enhance their recipes with features like ingredient substitutions, servings estimation, and nutritional information all with the help of AI.

### How we built it
It was developed using Angular for the frontend, integrated the TinyMCE text editor, and utilized the OpenAI API for all the powerful customization.

### Challenges we ran into
Fine-tuning the prompts to OpenAI API for accurate recipes customizations, was a challenge. It may not be perfect yet, but it's just the start.

### Accomplishments that we're proud of
We are proud to have created a robust and feature-rich Smart Recipe Editor that effectively addresses key pain points for home cooks and culinary enthusiasts.

### What we learned
Through this project, we gained insights into how to use TinyMCE and OpenAI API.

### What's next for Smart Recipe Editor
Future plans for the Smart Recipe Editor include implementing recipes saving, sharing and make it a Browser Extension, so it can be easily used to copy a recipe from a website. And of course, fine-tuning the ai shortcuts.


## Technical details

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.0.

## Configuration

Make a copy of the file `environment.example.ts` with the name `environment.ts` and add your API keys for TinyMCE and OpenAI.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

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
