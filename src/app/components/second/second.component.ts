import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-second',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h2>This is Second Component, hello my friend</h2>
  `,

  styles: [],
})
export class SecondComponent {}
