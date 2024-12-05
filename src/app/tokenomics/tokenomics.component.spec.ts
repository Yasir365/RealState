import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TokenomicsComponent } from './tokenomics.component';

describe('TokenomicsComponent', () => {
  let component: TokenomicsComponent;
  let fixture: ComponentFixture<TokenomicsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TokenomicsComponent]
    });
    fixture = TestBed.createComponent(TokenomicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
