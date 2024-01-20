import { Component, OnInit} from '@angular/core';
@Component({
    selector: 'app-book-list',
    templateUrl: './book-list.component.html',
    styleUrls: ['./book-list.component.scss'],
})
export class BookListComponent implements OnInit {
    books = [
        {title: 'Мастер и Маргарита', image: 'assets/mim.jpeg'},
        {title: 'Недоросль', image: 'assets/ned.jpeg'},
        {title: 'Преступление и наказание', image: 'assets/pin.jpeg'},
    ];

    constructor() {}

    ngOnInit() {}
}