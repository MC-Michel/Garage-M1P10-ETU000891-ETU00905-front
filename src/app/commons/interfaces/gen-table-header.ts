import { TemplateRef } from "@angular/core";

export interface GenTableHeader {
    title: string;
    selector: string;
    template?: TemplateRef<any>;
    type?: string,
    isSortable: boolean;
}
