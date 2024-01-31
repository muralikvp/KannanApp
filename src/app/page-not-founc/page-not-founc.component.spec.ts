import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageNotFouncComponent } from './page-not-founc.component';

describe('PageNotFouncComponent', () => {
  let component: PageNotFouncComponent;
  let fixture: ComponentFixture<PageNotFouncComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageNotFouncComponent]
    });
    fixture = TestBed.createComponent(PageNotFouncComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
