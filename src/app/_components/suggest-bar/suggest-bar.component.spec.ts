import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuggestBarComponent } from './suggest-bar.component';

describe('SuggestBarComponent', () => {
  let component: SuggestBarComponent;
  let fixture: ComponentFixture<SuggestBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuggestBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuggestBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
