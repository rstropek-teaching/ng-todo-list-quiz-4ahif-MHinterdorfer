import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

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
  displayedColumns = ['description', 'assignedTo','done'];
  public people: Observable<IPerson[]>;
  public todos: Observable<IToDo[]>;

  constructor(private httpClient: HttpClient) {
    this.people = httpClient.get<IPerson[]>('http://localhost:8080/api/people');
    this.todos = httpClient.get<IToDo[]>('http://localhost:8080/api/todos');
  }

  changeDoneFlag(checkbox, id){
      this.httpClient.patch('http://localhost:8080/api/todos/' + id, {
        "done": checkbox.checked
      });
  }

}
