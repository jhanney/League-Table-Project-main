import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LaLigaTablePage } from './la-liga-table.page';

describe('LaLigaTablePage', () => {
  let component: LaLigaTablePage;
  let fixture: ComponentFixture<LaLigaTablePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(LaLigaTablePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
