import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PremierLeagueTablePage } from './premier-league-table.page';

describe('PremierLeagueTablePage', () => {
  let component: PremierLeagueTablePage;
  let fixture: ComponentFixture<PremierLeagueTablePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PremierLeagueTablePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
