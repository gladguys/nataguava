import { ProfileEnum } from './../../models/enums/profileEnum';
import { Directive, OnInit, ElementRef, Renderer } from "@angular/core";
import { SharedService } from "src/app/services/shared.service";

@Directive({
    selector: '[showIfCompany]'
})
export class ShowIfUserCompanyComponent implements OnInit {

    constructor(
        private element: ElementRef,
        private renderer: Renderer,
        private sharedService: SharedService
    ){}

    ngOnInit() {
            !this.isACompanyLogged() &&
            this.renderer.setElementStyle(this.element.nativeElement, 'display', 'none');
    }

    isACompanyLogged(): boolean {
        if(this.sharedService.getUserLogged() != null && this.sharedService.getUserLogged().profileEnum === ProfileEnum.ROLE_RECRUTER) {
            return true;
        } else {
            return false;
        }
    }
}