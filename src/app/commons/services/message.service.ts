import { Injectable, TemplateRef } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  toasts: any[] = [];
  showSuccess(successMessage: string) {
		this.show(successMessage, { classname: 'bg-success text-light', delay: 5000 });
	}

	showError(dangerMessage: any) {
		let message = dangerMessage;
		if(typeof dangerMessage.message === 'string')message = dangerMessage.message;
		if(typeof dangerMessage.error?.message === 'string')message = dangerMessage.error?.message; 
		message = message.replaceAll('\n', '<br/>');
		this.show(message, { classname: 'bg-danger text-light', delay: 5000 });
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
