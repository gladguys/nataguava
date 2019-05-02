import { JobService } from './../../../services/job.service';
import { Component, OnInit, Output, EventEmitter, ElementRef, ViewChild, AfterViewInit} from '@angular/core';
import { Job } from 'src/app/models/job.model';
import { Observable, Subject } from 'rxjs';
import { Router } from '@angular/router';
import { SearchDTO } from 'src/app/models/dto/search-dto';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit {

  jobs: Array<Job> = [];
  
  @ViewChild('contentInput') content: ElementRef;
  @ViewChild('placeInput') place: ElementRef;

  searchDTO:SearchDTO = new SearchDTO();

  debounce: Subject<string> = new Subject<string>();

  constructor(private jobService: JobService,
              public router: Router) { }

  ngOnInit() {
    this.jobService.findAll().subscribe( jobs => {
      this.jobs = jobs;
    });
  }
  ngAfterViewInit() {
    this.clearInputs();
  }

  goToDetail(job:Job) {
    this.router.navigate([`/job-detail/${job.id}`]);  
  }

  clearInputs() {
    this.content.nativeElement.value = "";
    this.place.nativeElement.value = "";
  }

  search() {
    this.searchDTO.content = this.content.nativeElement.value;
    this.searchDTO.place = this.place.nativeElement.value;

    this.jobService.findByFilter(this.searchDTO).subscribe( jobs => this.jobs = jobs); 
  }

}
