import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalTransacaoComponent } from './modal-transacao.component';

describe('ModalTransacaoComponent', () => {
  let component: ModalTransacaoComponent;
  let fixture: ComponentFixture<ModalTransacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalTransacaoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalTransacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
