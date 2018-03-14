# Todo List

## Introduction

In this exercise you have to implement a user interface for a ToDo-List application. You have to use Angular to implement it.

Everybody has to submit her or his best try via GitHub.

## Web API

The backend Web API has been prepared for you. You can find it in [*0010-demo-api*](https://github.com/rstropek/htl-mobile-computing/tree/master/angular/0010-demo-api). Take particular note of [*demo.http*](https://github.com/rstropek/htl-mobile-computing/blob/master/angular/0010-demo-api/demo.http). It contains sample HTTP requests demonstrating how you can:

* Get all people (persons who you can assign a todo item)
* Get a list of all todo items
* Add a todo item
* Get a single todo item
* Update a todo item (change *description*, *assignedTo*, or *done*)
* Delete a todo item

Recommendation: Take a look at the code of the sample to get familiar with the concepts used there.

Feel free to extend the existing code if you need to. However, for solving this exercise, it is not absolutely necessary to extend it.

## Requirements

1. Create a web-based UI using the *Angular* framework. Create the app on your local computer. Using *Stackblitz* is not sufficient. :white_check_mark:

1. As a user, I want to get a list of all my todo items. The list has to contain at least the description, the assigned person (if there is one) and the done-flag. :white_check_mark:

1. As a user, I want to be able to filter the list of todo items so that I only see the items that are *undone*. :white_check_mark:

1. As a user, I want to be able to filter the list of todo items so that I only see the items that are assigned to me. :white_check_mark:

1. As a user, I want to be able to combine the filters mentioned above (e.g. all todo items that are undone and assigned to me). :white_check_mark:

1. As a user, I want to be able to add a new todo item. I want to enter a description and optionally assign the new todo item to a person (drop-down list of all available people). :white_check_mark:

1. As a user, I want to be able to edit an existing todo item. I want to be able to change description, assigned person (it has to be able to remove an assignment, too), and done-flag. :white_check_mark:

1. As a user, I want to be able to delete an existing todo item. :white_check_mark:

## Advanced Exercises for Extra Points

### Angular Material

[*Angular Material*](https://material.angular.io/) is a great framework to build mobile web apps. Read the [getting started guide](https://material.angular.io/guide/getting-started) and try to apply it to your app. Use e.g. [lists](https://material.angular.io/components/list/overview) and/or [cards](https://material.angular.io/components/card/overview) for todo items. Use [inputs](https://material.angular.io/components/input/overview), [autocomplete](https://material.angular.io/components/autocomplete/overview), and/or [checkboxes](https://material.angular.io/components/checkbox/overview) for the todo form.

Send me a link to your solution styled with *Angular Material* via a GitHub issue and you will get an extra point for your grade.

### Due Date

Handling date values is not trivial in web applications. If you want an extra challenge, add a *due date* to each todo item.

1. You have to extend the web api accordingly.

1. Use [*Angular Material*'s datepicker](https://material.angular.io/components/datepicker/overview) in the todo form.

Send me a link to your solution thaat includes a working due date via a GitHub issue and you will get an extra point for your grade.
