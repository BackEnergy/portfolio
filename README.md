# Portfolio

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.3.3.

## Basic Ticket Workflow

### Getting latest changes from upstream to local repo

```shell
git fetch --all
```

### Merging latest changes from upstream to local branch
```shell
git merge upstream/${branch-name}
```

### Create a new branch based on jira ticket

```shell
git checkout -b ${domain}-${ticket-number}-${title}
```

### Stage files in current directory to be committed

```shell
git add .
```
### Stage all files to be committed

```shell
git add -A
```

### Commit made changes

```shell
git commit -m "${domain}-${ticket-number} ${commit message}"
```

### Push changes to origin
```shell
git push origin ${branch}
```

After pushing the changes you should go to github and create a pull request requesting review and to merge your branch to the upstream repository

Once you've gotten enough approvals and no rejections on your pull request you will be able to merge your changes to the upstream branch

> Only update your local repository using merges do not use pull!

## To Update Your Local Branch Anytime With Upstream Changes

### Getting latest changes from upstream to local repo

```shell
git fetch --all
```

### Merging latest changes from upstream to local branch
```shell
git merge upstream/${branch-name}
```

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
