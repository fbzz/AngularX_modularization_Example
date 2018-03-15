import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../router.animations';
import { MediaMatcher } from '@angular/cdk/layout';
import { Course, Lesson } from './lesson.interface';
@Component({
    selector: 'app-create',
    templateUrl: './create.component.html',
    styleUrls: ['./create.component.scss'],
    animations: [routerTransition()
    ]
})


export class CreateComponent implements OnInit {
    lessons: Course = []
    url = '//cdn.mozilla.net/pdfjs/helloworld.pdf';

    // Loaded via <script> tag, create shortcut to access PDF.js exports.
    pdfjs = window['pdfjs-dist/build/pdf'];


    loadingTask = this.pdfjs.getDocument(this.url);

    currentEditing: number;
    constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
        this.pdfjs.GlobalWorkerOptions.workerSrc = '//mozilla.github.io/pdf.js/build/pdf.worker.js';
    }

    ngOnInit() {
        for (let i = 0; 10 > i; i++) {
            const lesson: Lesson = { 'name': null, 'content': null, 'questions': [] }
            this.lessons.push(lesson);
        }
    }

    changeListenerForPdf($event): void {
        let fileElement = $event.target;
        let file = fileElement.files[0];
        this.lessons[this.currentEditing].content = { 'file': file };

        let pdfDoc = null,
            pageNum = 1,
            pageRendering = false,
            pageNumPending = null,
            scale = 0.8,
            canvas = <HTMLCanvasElement>document.getElementById('the-canvas' + this.currentEditing),
            ctx = canvas.getContext('2d');

        function renderPage(num, _self) {
            pageRendering = true;
            // Using promise to fetch the page
            pdfDoc.getPage(num).then(function (page) {
                var viewport = page.getViewport(scale);
                canvas.height = viewport.height;
                canvas.width = viewport.width;

                // Render PDF page into canvas context
                var renderContext = {
                    canvasContext: ctx,
                    viewport: viewport
                };
                var renderTask = page.render(renderContext);

                // Wait for rendering to finish
                renderTask.promise.then(function () {
                    pageRendering = false;
                    if (pageNumPending !== null) {
                        // New page rendering is pending
                        renderPage(pageNumPending, _self);
                        pageNumPending = null;
                    }
                });
            });

            // Update page counters
            document.getElementById('page_num' + _self.currentEditing).textContent = num;
        }

        /**
         * If another page rendering in progress, waits until the rendering is
         * finised. Otherwise, executes rendering immediately.
         */
        function queueRenderPage(num, _self) {
            if (pageRendering) {
                pageNumPending = num;
            } else {
                renderPage(num, _self);
            }
        }

        /**
         * Displays previous page.
         */
        function onPrevPage() {
            if (pageNum <= 1) {
                return;
            }
            pageNum--;
            queueRenderPage(pageNum, _self);
        }
        document.getElementById('prev' + this.currentEditing).addEventListener('click', onPrevPage);

        /**
         * Displays next page.
         */
        function onNextPage() {
            if (pageNum >= pdfDoc.numPages) {
                return;
            }
            pageNum++;
            queueRenderPage(pageNum, _self);
        }
        document.getElementById('next' + this.currentEditing).addEventListener('click', onNextPage);
        // Asynchronous download of PDF
        let loadingTask = this.pdfjs.getDocument(URL.createObjectURL(file));
        let _self = this;
        this.pdfjs.getDocument(URL.createObjectURL(file), _self).then(function (pdfDoc_) {
            pdfDoc = pdfDoc_;
            document.getElementById('page_count' + _self.currentEditing).textContent = pdfDoc.numPages;

            // Initial/first page rendering
            renderPage(pageNum, _self);
        });

    }



    selectContent(index, opt) {
        this.currentEditing = index;
        //  this.lessons[index].content = { 'ola': 'ola' };
        if (opt === 2) {
            document.getElementById('fileUpload').click();
        }
    }

    setName(index) {
        this.lessons[index].name = document.getElementById('lessonName').getAttribute('value');
    }

}
