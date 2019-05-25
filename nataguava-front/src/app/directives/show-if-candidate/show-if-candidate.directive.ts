import { ProfileEnum } from './../../models/enums/profileEnum';
import { Directive, OnInit, ElementRef, Renderer } from "@angular/core";
import { SharedService } from "src/app/services/shared.service";

@Directive({
    selector: '[showIfCandidate]'
})
export class ShowIfCandidateComponent implements OnInit {

    constructor(
        private element: ElementRef,
        private renderer: Renderer,
        private sharedService: SharedService
    ){}

    ngOnInit() {
            !this.isACandidateLogged() &&
            this.renderer.setElementStyle(this.element.nativeElement, 'display', 'none');
    }

    isACandidateLogged(): boolean {
        if(this.sharedService.getUserLogged() != null && this.sharedService.getUserLogged().profileEnum === ProfileEnum.ROLE_CANDIDATE) {
            return true;
        } else {
            return false;
        }
    }
}