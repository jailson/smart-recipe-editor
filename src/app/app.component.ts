import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EditorModule } from '@tinymce/tinymce-angular';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { environment } from '../environments/environment';
import { SmartService } from './services/smart.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, EditorModule, FormsModule],
  providers: [HttpClient],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  editorApiKey = environment.editorApiKey;
  recipe: string = '';

  prompts = {
    headings: 'Add headings. h1 for title, h2 for sections (ingredients and directions) and so on.',
    measurements: 'Add an alternative measurements on the same line',
    substitutions: 'Add  substitutions suggestions for each ingredient considering different dietary restrictions one the same line.',
    checklist: 'Add unordered listing for ingredients and for steps. Add the class \'tox-checklist\' for ol or ul',
    servings: 'Estimate how many servings the recipe with make. Add it to the end of the recipe. ',
    nutrition: 'Calculate and show nutritional information if possible at the end as a table. In the top how much is a serving. Left column with Nutrient, and right column amount per serving. Add it to the end of the recipe.',
    double: 'Modify recipe to use double the ingredients.',
    half: 'Modify recipe to use half of the ingredients.'
  }

  editorConfig = {
    menubar: false,
    plugins: 'ai lists checklist link image table code help wordcount',
    ai_request: this.smartService.sendMessage,
    ai_shortcuts: [
      { title: 'Make it pretty', prompt: Object.values(this.prompts).join(), selection: true  },
      { title: 'Format headings', prompt: this.prompts.headings, selection: true },
      { title: 'Add alternative measurements', prompt: this.prompts.measurements, selection: true },
      { title: 'Add substitutions', prompt: this.prompts.substitutions, selection: true },
      { title: 'Add checklist', prompt: this.prompts.checklist, selection: true },
      { title: 'Estimate servings', prompt: this.prompts.servings, selection: true },
      { title: 'Nutritional information', prompt: this.prompts.nutrition, selection: true },
      { title: 'Double the recipe', prompt: this.prompts.double, selection: true },
      { title: 'Half the recipe', prompt: this.prompts.half, selection: true },
    ],
    toolbar:
      'aidialog aishortcuts | undo redo | blocks bold italic underline strikethrough | link image media | checklist numlist bullist | removeformat',
  };

  constructor(private smartService: SmartService) {}
}
