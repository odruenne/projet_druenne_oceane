import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-detail-kibble',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './detail-kibble.component.html',
  styleUrl: './detail-kibble.component.css'
})
export class DetailKibbleComponent {
  kibblesName: string = "NOM DES CROQUETTES";
  kibblesInStock: boolean = true;
  kibblesSoonOutOfStock: boolean = true;
  kibblesOutOfStock: boolean = true;
  kibblesDescription: string = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum";
  kibblesTaste: string = "Chimken";
  approvedByTokyo: boolean = true;
  kibblesTokyoOpinion: string = "Ces croquettes sont très bonnes, elles ont une bonne composition et ne me donnent pas de problèmes de transit !";
  kibblesHumidity: string = "9%";
  kibblesCalcium : string = "1,7%";
  kibblesRawAshes : string = "8%";
  kibblesRawProteins : string = "32%";
  kibblesRawFats : string = "15,7%";
  kibblesRawFibers: string = "2,5%";
  kibblesPrice: string = "13,90€";


}
