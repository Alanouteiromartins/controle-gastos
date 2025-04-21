// Arquivo: alert.service.ts
import { Injectable, ApplicationRef, ComponentFactoryResolver, Injector, ComponentRef, EmbeddedViewRef } from '@angular/core';
import { AlertaComponent } from '../components/alerta/alerta.component';

export interface AlertOptions {
  title?: string;
  message: string;
  type?: 'success' | 'error' | 'warning' | 'info';
  timer?: number;
  showConfirmButton?: boolean;
  showCancelButton?: boolean;
  showCloseButton?: boolean;
  confirmButtonText?: string;
  cancelButtonText?: string;
  closeOnOverlayClick?: boolean;
  position?: 'center' | 'top' | 'top-right' | 'top-left' | 'bottom' | 'bottom-right' | 'bottom-left';
}

@Injectable({
  providedIn: 'root'
})
export class AlertService {
  private alertComponentRef: ComponentRef<AlertaComponent> | null = null;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private appRef: ApplicationRef,
    private injector: Injector
  ) {}

  success(options: string | AlertOptions): Promise<boolean> {
    const alertOptions = typeof options === 'string' ? { message: options } : options;
    return this.show({
      ...alertOptions,
      type: 'success',
      title: alertOptions.title || 'Sucesso'
    });
  }

  error(options: string | AlertOptions): Promise<boolean> {
    const alertOptions = typeof options === 'string' ? { message: options } : options;
    return this.show({
      ...alertOptions,
      type: 'error',
      title: alertOptions.title || 'Erro'
    });
  }

  warning(options: string | AlertOptions): Promise<boolean> {
    const alertOptions = typeof options === 'string' ? { message: options } : options;
    return this.show({
      ...alertOptions,
      type: 'warning',
      title: alertOptions.title || 'Aviso'
    });
  }

  info(options: string | AlertOptions): Promise<boolean> {
    const alertOptions = typeof options === 'string' ? { message: options } : options;
    return this.show({
      ...alertOptions,
      type: 'info',
      title: alertOptions.title || 'Informação'
    });
  }

  confirm(options: string | AlertOptions): Promise<boolean> {
    const alertOptions = typeof options === 'string' ? { message: options } : options;
    return this.show({
      ...alertOptions,
      type: alertOptions.type || 'warning',
      title: alertOptions.title || 'Confirmação',
      showCancelButton: true,
      confirmButtonText: alertOptions.confirmButtonText || 'Sim',
      cancelButtonText: alertOptions.cancelButtonText || 'Não'
    });
  }

  show(options: AlertOptions): Promise<boolean> {
    // Remover alerta existente, se houver
    this.close();
    
    return new Promise<boolean>((resolve) => {
      // Criar componente de alerta
      const componentFactory = this.componentFactoryResolver.resolveComponentFactory(AlertaComponent);
      this.alertComponentRef = componentFactory.create(this.injector);
      
      // Usar o método de configuração ao invés de iteração por chaves
      this.alertComponentRef.instance.configureFromOptions(options);
      
      // Configurar eventos
      this.alertComponentRef.instance.confirm.subscribe(() => {
        resolve(true);
      });
      
      this.alertComponentRef.instance.cancel.subscribe(() => {
        resolve(false);
      });
      
      this.alertComponentRef.instance.close.subscribe(() => {
        if (!options.showCancelButton) {
          resolve(true);
        }
      });
      
      // Anexar ao DOM
      this.appRef.attachView(this.alertComponentRef.hostView);
      
      const domElem = (this.alertComponentRef.hostView as EmbeddedViewRef<any>).rootNodes[0];
      document.body.appendChild(domElem);
    });
  }

  close(): void {
    if (this.alertComponentRef) {
      this.appRef.detachView(this.alertComponentRef.hostView);
      this.alertComponentRef.destroy();
      this.alertComponentRef = null;
    }
  }
}