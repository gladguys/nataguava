import { UserCompany } from './../../../models/user-company.model';
import { ProfileEnum } from './../../../models/enums/profileEnum';
import { AlertService } from './../../../components/shared/alert/alert.service';
import { SharedService } from 'src/app/services/shared.service';
import { Job } from './../../../models/job.model';
import { JobService } from './../../../services/job.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { CompanyService } from 'src/app/services/company.service';
import { QuestionaryService } from 'src/app/services/questionary.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-detail-job',
  templateUrl: './detail-job.component.html',
  styleUrls: ['./detail-job.component.css']
})
export class DetailJobComponent implements OnInit{

  statusJobLabel: string = "(EM ANDAMENTO)";
  public job: Job = new Job();
  isOwner: boolean;
  userCompany: UserCompany = new UserCompany();
  @ViewChild("content") content: ElementRef;

  constructor(public route: ActivatedRoute,
    public router: Router,
    public sharedService: SharedService,
    public alertService: AlertService,
    public companyService: CompanyService,
    public jobService: JobService,
    public modalService: NgbModal,
    public questionaryService: QuestionaryService) { }

  ngOnInit() {
    const jobId = this.route.snapshot.paramMap.get('jobId');
    if (jobId) {
      this.jobService
        .findById(jobId)
        .subscribe((job) => { 
          this.job = job; 
          this.buildStatusLabel();
          this.companyService.findByUserId(this.sharedService.getUserLogged().id).subscribe(company => {
            this.userCompany = company;
            this.isOwner = company.id === this.job.userCompany.id ? true : false;
          })
        },
        err => {
          this.router.navigateByUrl("/**");
        })   
    }
  }

  isCandidate() {
    if (!this.sharedService.getUserLogged()) return true;
    return this.sharedService.getUserLogged().profileEnum == ProfileEnum.ROLE_CANDIDATE;
  }

  addUser() {
    if (this.sharedService.getUserLogged()) {
      this.jobService.addCandidate(this.sharedService.getUserLogged().id, this.job.id).subscribe(job => {
        this.alertService.success("salvo com sucesso");
      }, err => {
        this.alertService.danger("erro ao salvar");
      })
    } else {
      this.router.navigateByUrl("/login");
    }
  }

  cancelJob() {
    this.jobService.close(this.job.id).subscribe(
      job => {
        this.job.status = "CLOSED";
        this.statusJobLabel = "(ENCERRADA)";
      }, err => {
        console.error(err);
      });
  }

  buildStatusLabel() {
    if(this.job.status === "CREATED"){
      this.statusJobLabel = "(EM ANDAMENTO)";
    } 
    else this.statusJobLabel = "(ENCERRADO)";
  }

  startQuiz() {
    if(this.sharedService.isUserLoggedIn()) {
      this.questionaryService.hasTaken(this.job.id).subscribe( hasTaken => {
        if(!hasTaken) {
          this.router.navigateByUrl(`/questionary/${this.job.id}`);
        } else {  
          this.modalService.open(this.content, { centered: true });
        }
      })
    } else {
      this.router.navigateByUrl("/login");
    }
  }

  startSimulado() {
    if(this.sharedService.isUserLoggedIn()) {
    this.router.navigateByUrl(`/simulado/${this.job.id}`);
    } else {
      this.router.navigateByUrl("/login");
    }
  }

  gotohome() {
    this.router.navigateByUrl("/home-candidate");
  }
}
