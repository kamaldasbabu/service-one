import { FormBuilder, FormGroup } from '@angular/forms';
import { DataStoreService } from './../../../services/data-store.service';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-task',
  standalone: false,
  templateUrl: './update-task.component.html',
  styleUrl: './update-task.component.css'
})
export class UpdateTaskComponent {
  task: any = {}
  taskForm: FormGroup;
  constructor(public _dataStoreService: DataStoreService, private fb: FormBuilder,
    private router: Router, private route: ActivatedRoute

  ) {

    this.taskForm = this.fb.group({
      id: [''],
      description: [''],
      difficultyLevel: ['']
    });

    this._dataStoreService.task.subscribe((task) => {
      if (task && task.id) {
        this.taskForm.patchValue({
          id: task.id,
          description: task.description,
          difficultyLevel: task.difficultyLevel
        });
      }
    });
  }

  onSubmit(): void {

    this._dataStoreService.task.next({});
    this.router.navigate(['task'], { queryParams: {  } });
  }

}
