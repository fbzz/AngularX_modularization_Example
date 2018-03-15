import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../router.animations';
import { MediaMatcher } from '@angular/cdk/layout';

@Component({
    selector: 'app-add',
    templateUrl: './add.component.html',
    styleUrls: ['./add.component.scss'],
    animations: [routerTransition()
    ]
})
export class AddComponent implements OnInit {
    constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, private router: Router) { }
    currentStep = 0;
    //SHOULD GET USER ID HERE 
    courseInfo = { name: "", description: "", lessons_number: "", createdBy: 1 }
    ngOnInit() { }

    clickando() {
        this.currentStep = this.currentStep + 1;
        if (this.currentStep === 3) {
            this.router.navigate(['/create']);
        }
    }
}
