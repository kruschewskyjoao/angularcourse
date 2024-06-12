import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplatebindingComponent } from './templatebinding.component';

describe('TemplatebindingComponent', () => {
  let component: TemplatebindingComponent;
  let fixture: ComponentFixture<TemplatebindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TemplatebindingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TemplatebindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
