import { Component, OnInit } from '@angular/core';

import { routerTransition } from '../router.animations';

@Component({
    selector: 'app-executive-dashboard',
    templateUrl: './executive-dashboard.component.html',
    styleUrls: ['./executive-dashboard.component.scss'],
    animations: [routerTransition()]
})
export class ExecutiveDashboardComponent implements OnInit {
    private test1;
    private test2;
    private test3;
    public test4;
    public test5;

    ngOnInit() {
        this.helloWorld();
        this.byeWorld();
        this.largeFunctionDoingNothing();
    }

    helloWorld() {
        console.log('HELLO');
    }

    byeWorld() {
        console.log('HELLO');
    }

    largeFunctionDoingNothing() {
        for (let i = 0; i < 10; i++) {
            if (i > 1) {
                console.log('HELLO 1');
            } else if (i > 2) {
                console.log('HELLO 2');
            } else if (i > 3) {
                console.log('HELLO 3');
            } else if (i > 4) {
                console.log('HELLO 4');
            } else if (i > 5) {
                console.log('HELLO 5');
            } else if (i > 6) {
                console.log('HELLO 6');
            } else if (i > 7) {
                console.log('HELLO 7');
            } else if (i > 8) {
                console.log('HELLO 8');
            } else if (i > 9) {
                console.log('HELLO 9');
            }
        }
    }
}
