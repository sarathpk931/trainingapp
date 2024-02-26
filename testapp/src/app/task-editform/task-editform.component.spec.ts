import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskEditformComponent } from './task-editform.component';

describe('TaskEditformComponent', () => {
  let component: TaskEditformComponent;
  let fixture: ComponentFixture<TaskEditformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskEditformComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaskEditformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
