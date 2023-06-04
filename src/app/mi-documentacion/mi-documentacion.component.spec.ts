import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiDocumentacionComponent } from './mi-documentacion.component';

describe('MiDocumentacionComponent', () => {
  let component: MiDocumentacionComponent;
  let fixture: ComponentFixture<MiDocumentacionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MiDocumentacionComponent]
    });
    fixture = TestBed.createComponent(MiDocumentacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
