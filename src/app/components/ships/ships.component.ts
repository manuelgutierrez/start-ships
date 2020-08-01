import { Component, OnInit } from '@angular/core';
import { ShipsService } from 'src/app/services/ships.service';

// JSON
import shipsList from 'src/assets/json/shipsList.json';

@Component({
  selector: 'app-ships',
  templateUrl: './ships.component.html',
  styleUrls: ['./ships.component.scss']
})
export class ShipsComponent implements OnInit {

  public dataList: any = shipsList;

  constructor( private shipsService: ShipsService) { }

  ngOnInit(): void {

    console.log('Datos Json -->', this.dataList)

    this.shipsService.getShips().subscribe((ships) => {
      console.log('SHIPS -->', ships)
    })
  }

}
