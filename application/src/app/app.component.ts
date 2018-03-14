import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';

interface IPerson {
  name: string;
}

interface IToDo {
  id: number,
  assignedTo?: string,
  description: string,
  done?: boolean
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  displayedColumns = ['description', 'assignedTo', 'done', 'edit', 'delete'];

  public people: Observable<IPerson[]>;
  public todos: Observable<IToDo[]>;

  showEditForm: boolean = false;
  showAddForm: boolean = false;
  showUserForm: boolean = true;
  showOnlyUndone: boolean = false;
  showOnlyAssigned: boolean = false;

  id; description; assignedTo; done;

  user = null;

  constructor(private httpClient: HttpClient) {
    this.refresh();
  }

  //set done true or false
  changeDoneFlag(checkbox, id) {
    this.httpClient.patch<IToDo>('http://localhost:8080/api/todos/' + id, {
      "done": checkbox.checked
    }).subscribe(
      result => console.log(result),
      error => console.log(error),
      () => this.refresh()
    );
  }

  //delete specific item
  deleteToDo(id) {
    this.httpClient.delete<IToDo>('http://localhost:8080/api/todos/' + id).subscribe(
      result => console.log(result),
      error => console.log(error),
      () => this.refresh()
    );
  }

  //add items
  addItem(itemDescription, itemAssignedTo) {
    this.httpClient.post<IToDo>('http://localhost:8080/api/todos', {
      "description": itemDescription,
      "assignedTo": itemAssignedTo
    }).subscribe(
      result => console.log(result),
      error => console.log(error),
      () => this.refresh()
    );
    this.showAddForm = false;
  }

  //set parameters for edit form
  enableEditForm(id, description, assignedTo, done) {
    this.id = id;
    this.description = description;
    this.assignedTo = assignedTo;
    this.done = done;
    this.showEditForm = true;
  }

  //enable add form
  enableAddForm() {
    this.showAddForm = true;
  }

  //edit item with specific parameters
  editItem(itemDescription, itemAssignedTo, itemDone) {
    this.httpClient.patch<IToDo>('http://localhost:8080/api/todos/' + this.id, {
      "description": itemDescription,
      "assignedTo": itemAssignedTo,
      "done": itemDone
    }).subscribe(
      result => console.log(result),
      error => console.log(error),
      () => this.refresh()
    );
    this.showEditForm = false;
  }

  //get the items from the API
  refresh() {
    this.filterItems();
    this.getPeople();
  }

  getToDos() {
    this.todos = this.httpClient.get<IToDo[]>('http://localhost:8080/api/todos');
  }

  getPeople() {
    this.people = this.httpClient.get<IPerson[]>('http://localhost:8080/api/people');
  }

  filterItems() {
    if (this.showOnlyUndone && this.showOnlyAssigned == false) {
      this.todos = this.httpClient.get<IToDo[]>('http://localhost:8080/api/todos')
        .map(item => item.filter(element => element.done === false || element.done === null));
    } else if (this.showOnlyUndone == false && this.showOnlyAssigned) {
      this.todos = this.httpClient.get<IToDo[]>('http://localhost:8080/api/todos')
        .map(item => item.filter(element => element.assignedTo === this.user));
    } else if (this.showOnlyUndone && this.showOnlyAssigned) {
      this.todos = this.httpClient.get<IToDo[]>('http://localhost:8080/api/todos')
        .map(item => item.filter(element => element.assignedTo === this.user && (element.done === false || element.done === null)));
    } else {
      this.getToDos();
    }
  }

  //set username for user form
  setUser(name) {
    this.user = name;
    this.showUserForm = false;
  }
}
