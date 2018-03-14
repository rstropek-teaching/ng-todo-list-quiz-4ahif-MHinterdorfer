import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/debounceTime';

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
  id; description; assignedTo; done: boolean;

  constructor(private httpClient: HttpClient) {
    this.refresh();
  }

  changeDoneFlag(checkbox, id) {
    this.httpClient.patch<IToDo>('http://localhost:8080/api/todos/' + id, {
      "done": checkbox.checked
    }).subscribe(
      result => console.log(result),
      error => console.log(error),
      () => this.refresh()
    );
    
  }

  deleteToDo(id) {
    this.httpClient.delete<IToDo>('http://localhost:8080/api/todos/' + id).subscribe(
      result => console.log(result),
      error => console.log(error),
      () => this.refresh()
    );
  }

  addItem(itemDescription, itemAssignedTo){
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

  enableEditForm(id, description, assignedTo, done) {
    this.id = id;
    this.description = description;
    this.assignedTo = assignedTo;
    this.done = done;
    this.showEditForm = true;
  }

  enableAddForm() {
    this.showAddForm = true;
  }

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

  refresh() {
    this.getToDos();
    this.getPeople();
  }

  getToDos() {
    this.todos = this.httpClient.get<IToDo[]>('http://localhost:8080/api/todos');
  }

  getPeople() {
    this.people = this.httpClient.get<IPerson[]>('http://localhost:8080/api/people');
  }

}
