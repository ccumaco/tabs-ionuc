import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page {
  selectedTask: {
    name: string;
    description: string;
    completed: boolean;
  } = { name: '', description: '', completed: false };
  public alertButtons = [
    {
      text: 'Cancel',
      role: 'cancel',
      handler: () => {
        console.log('Alert canceled');
      },
    },
    {
      text: 'OK',
      role: 'confirm',
      handler: () => {
        console.log('Alert confirmed');
      },
    },
  ];

  setResult(ev: any) {
    console.log(`Dismissed with role: ${ev.detail.role}`);
  }
  constructor(private route: ActivatedRoute) {
    this.route.queryParams.subscribe((params) => {
      if (params && params['task']) {
        this.selectedTask = JSON.parse(params['task']);
      }
    });
  }

  saveChanges() {
    console.log('Cambios guardados:', this.selectedTask);
  }
}
