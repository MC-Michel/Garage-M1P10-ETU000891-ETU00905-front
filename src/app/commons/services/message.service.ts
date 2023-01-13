import { Injectable, TemplateRef } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  toasts: any[] = [];
  showSuccess(successMessage: string) {
		this.show(successMessage, { classname: 'bg-success text-light', delay: 5000 });
	}

	showError(dangerMessage: string) {
		this.show(dangerMessage, { classname: 'bg-danger text-light', delay: 5000 });
	}

	show(textOrTpl: string | TemplateRef<any>, options: any = {}) {
		this.toasts.push({ textOrTpl, ...options });
	}

	remove(toast: any) {
		this.toasts = this.toasts.filter((t) => t !== toast);
	}

	clear() {
		this.toasts.splice(0, this.toasts.length);
	}
}
