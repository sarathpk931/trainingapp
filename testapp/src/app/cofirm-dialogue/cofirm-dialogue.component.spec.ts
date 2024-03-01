import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CofirmDialogueComponent } from './cofirm-dialogue.component';

describe('CofirmDialogueComponent', () => {
  let component: CofirmDialogueComponent;
  let fixture: ComponentFixture<CofirmDialogueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CofirmDialogueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CofirmDialogueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
