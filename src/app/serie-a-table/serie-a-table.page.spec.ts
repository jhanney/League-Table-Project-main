import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SerieATablePage } from './serie-a-table.page';

describe('SerieATablePage', () => {
  let component: SerieATablePage;
  let fixture: ComponentFixture<SerieATablePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SerieATablePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
