import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.sass']
})
export class GamesComponent implements OnInit {

  constructor(private router: Router) {}

  ngOnInit(): void {
  }

  navigateToHome() {
    this.router.navigate(['/']);
  }

  openTetris(event: Event) {
    event.preventDefault();
    const gameUrl = `${window.location.origin}/assets/games/tetris/index.html`;
    window.open(gameUrl, '_blank', 'width=600,height=700');
  }

  openMinesweeper(event: Event) {
    event.preventDefault();
    const gameUrl = `${window.location.origin}/assets/games/minesweeper/index.html`;
    window.open(gameUrl, '_blank', 'width=600,height=700');
  }

  openSnake(event: Event) {
    event.preventDefault();
    const gameUrl = `${window.location.origin}/assets/games/snake/index.html`;
    window.open(gameUrl, '_blank', 'width=600,height=700');
  }

  openArkanoid(event: Event) {
    event.preventDefault();
    const gameUrl = `${window.location.origin}/assets/games/arkanoid/index.html`;
    window.open(gameUrl, '_blank');
  }

}