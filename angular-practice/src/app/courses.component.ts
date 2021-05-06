import { Component } from '@angular/core';

@Component({
    selector: 'app-courses',
    template: `
    <card *ngFor="let card in cards" >
        {{ card }}
    </card>
    <h2>{{ title }}</h2>
    <ul> 
        <li *ngFor="let course of courses"> 
            {{course}} 
        </li>
    `
})

export class CoursesComponent {
    title = "List of cards";
    cards = ["card one", "card two", "card three"]
    courses = ["course1", "course2", "course3"]
}
