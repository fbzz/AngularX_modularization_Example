export interface Lesson {
    name: string;
    content: object;
    questions: Array<any>;
}


export interface Course extends Array<Lesson> { }

