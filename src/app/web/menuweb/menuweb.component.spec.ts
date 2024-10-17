import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuwebComponent } from './menuweb.component';

describe('MenuwebComponent', () => {
  let component: MenuwebComponent;
  let fixture: ComponentFixture<MenuwebComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuwebComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MenuwebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
