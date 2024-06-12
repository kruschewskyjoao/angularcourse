import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplatevariablesComponent } from './templatevariables.component';

describe('TemplatevariablesComponent', () => {
  let component: TemplatevariablesComponent;
  let fixture: ComponentFixture<TemplatevariablesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TemplatevariablesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TemplatevariablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
