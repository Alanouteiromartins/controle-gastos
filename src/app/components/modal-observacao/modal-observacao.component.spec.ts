import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalObservacaoComponent } from './modal-observacao.component';

describe('ModalObservacaoComponent', () => {
  let component: ModalObservacaoComponent;
  let fixture: ComponentFixture<ModalObservacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalObservacaoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalObservacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
