import { Component, TemplateRef } from '@angular/core'; 
import { MessageService } from '../../services/message.service';

@Component({
  selector: 'app-gen-message',
  templateUrl: './gen-message.component.html',
  styleUrls: ['./gen-message.component.scss']
})
export class GenMessageComponent {

  constructor(public toastService: MessageService) {}

	isTemplate(toast: any) {
		return toast.textOrTpl instanceof TemplateRef;
	}

}
