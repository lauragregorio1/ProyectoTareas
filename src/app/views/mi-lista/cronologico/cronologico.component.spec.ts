import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CronologicoComponent } from './cronologico.component';

describe('CronologicoComponent', () => {
  let component: CronologicoComponent;
  let fixture: ComponentFixture<CronologicoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CronologicoComponent]
    });
    fixture = TestBed.createComponent(CronologicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
