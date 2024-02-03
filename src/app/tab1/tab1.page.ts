import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {
  tasks: { name: string; description: string; completed: boolean }[] = [
    { name: 'Task 1', description: 'Description for Task 1', completed: false },
    { name: 'Task 2', description: 'Description for Task 2', completed: true },
    { name: 'Task 3', description: 'Description for Task 3', completed: false },
    { name: 'Task 4', description: 'Description for Task 4', completed: true },
    { name: 'Task 5', description: 'Description for Task 5', completed: false },
  ];
  constructor() {}
}
