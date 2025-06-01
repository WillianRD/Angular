import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CondicaoForComponent } from './condicao-for.component';

describe('CondicaoForComponent', () => {
  let component: CondicaoForComponent;
  let fixture: ComponentFixture<CondicaoForComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CondicaoForComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CondicaoForComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
