import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatEstimateComponent } from './creat-estimate.component';

describe('CreatEstimateComponent', () => {
  let component: CreatEstimateComponent;
  let fixture: ComponentFixture<CreatEstimateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatEstimateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatEstimateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
