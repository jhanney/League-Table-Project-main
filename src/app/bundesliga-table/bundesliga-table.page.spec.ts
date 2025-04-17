import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BundesligaTablePage } from './bundesliga-table.page';

describe('BundesligaTablePage', () => {
  let component: BundesligaTablePage;
  let fixture: ComponentFixture<BundesligaTablePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(BundesligaTablePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
