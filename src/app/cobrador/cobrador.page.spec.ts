import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CobradorPage } from './cobrador.page';

describe('CobradorPage', () => {
  let component: CobradorPage;
  let fixture: ComponentFixture<CobradorPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CobradorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
