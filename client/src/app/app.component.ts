import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EditorModule } from '@tinymce/tinymce-angular';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, EditorModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {}
