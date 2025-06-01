import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CondicoesSwichComponent } from './condicoes-swich.component';

describe('CondicoesSwichComponent', () => {
  let component: CondicoesSwichComponent;
  let fixture: ComponentFixture<CondicoesSwichComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CondicoesSwichComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CondicoesSwichComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
