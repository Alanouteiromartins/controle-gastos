import { Component, Input, Output, EventEmitter, OnInit, OnDestroy } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-alerta',
  imports: [CommonModule],
  templateUrl: './alerta.component.html',
  styleUrl: './alerta.component.css',
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('300ms ease-out', style({ opacity: 1 }))
      ]),
      transition(':leave', [
        animate('200ms ease-in', style({ opacity: 0 }))
      ])
    ]),
    trigger('zoomIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'scale(0.9)' }),
        animate('300ms ease-out', style({ opacity: 1, transform: 'scale(1)' }))
      ])
    ])
  ]
})
export class AlertaComponent implements OnInit, OnDestroy{
  @Input() title: string = '';
  @Input() message: string = '';
  @Input() type: 'success' | 'error' | 'warning' | 'info' = 'info';
  @Input() timer: number = 0; // em milissegundos, 0 para não usar timer
  @Input() showConfirmButton: boolean = true;
  @Input() showCancelButton: boolean = false;
  @Input() showCloseButton: boolean = true;
  @Input() confirmButtonText: string = 'OK';
  @Input() cancelButtonText: string = 'Cancelar';
  @Input() closeOnOverlayClick: boolean = true;
  
  @Output() confirm = new EventEmitter<void>();
  @Output() cancel = new EventEmitter<void>();
  @Output() close = new EventEmitter<void>();
  
  visible: boolean = false;
  timerProgress: number = 100;
  private timerInterval: any;

  ngOnInit() {
    this.visible = true;
    
    if (this.timer > 0) {
      const intervalStep = 50; // atualiza a cada 50ms
      const steps = this.timer / intervalStep;
      const progressStep = 100 / steps;
      let currentStep = 0;
      
      this.timerInterval = setInterval(() => {
        currentStep++;
        this.timerProgress = 100 - (progressStep * currentStep);
        
        if (currentStep >= steps) {
          this.onClose();
          clearInterval(this.timerInterval);
        }
      }, intervalStep);
    }
  }

  ngOnDestroy() {
    if (this.timerInterval) {
      clearInterval(this.timerInterval);
    }
  }

  onConfirm() {
    this.confirm.emit();
    this.close.emit();
    this.hide();
  }

  onCancel() {
    this.cancel.emit();
    this.close.emit();
    this.hide();
  }

  onClose() {
    this.close.emit();
    this.hide();
  }

  onOverlayClick(event: MouseEvent) {
    if (this.closeOnOverlayClick && event.target === event.currentTarget) {
      this.onClose();
    }
  }

  // Método para configuração a partir de opções
  configureFromOptions(options: any): void {
    if (options.title !== undefined) this.title = options.title;
    if (options.message !== undefined) this.message = options.message;
    if (options.type !== undefined) this.type = options.type;
    if (options.timer !== undefined) this.timer = options.timer;
    if (options.showConfirmButton !== undefined) this.showConfirmButton = options.showConfirmButton;
    if (options.showCancelButton !== undefined) this.showCancelButton = options.showCancelButton;
    if (options.showCloseButton !== undefined) this.showCloseButton = options.showCloseButton;
    if (options.confirmButtonText !== undefined) this.confirmButtonText = options.confirmButtonText;
    if (options.cancelButtonText !== undefined) this.cancelButtonText = options.cancelButtonText;
    if (options.closeOnOverlayClick !== undefined) this.closeOnOverlayClick = options.closeOnOverlayClick;
  }

  private hide() {
    this.visible = false;
    if (this.timerInterval) {
      clearInterval(this.timerInterval);
    }
  }

}
