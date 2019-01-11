import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EngineTypeComponent } from './engine-type.component';

describe('EngineTypeComponent', () => {
  let component: EngineTypeComponent;
  let fixture: ComponentFixture<EngineTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EngineTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EngineTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
