import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TokenCommitmentComponent } from './token-commitment.component';

describe('TokenCommitmentComponent', () => {
  let component: TokenCommitmentComponent;
  let fixture: ComponentFixture<TokenCommitmentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TokenCommitmentComponent]
    });
    fixture = TestBed.createComponent(TokenCommitmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
