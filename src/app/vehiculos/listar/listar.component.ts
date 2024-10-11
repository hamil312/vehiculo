import { Component, OnInit } from '@angular/core';
import { Vehiculo } from '../vehiculo';
import { VehiculosService } from '../vehiculos.service';
import { Router, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-listar',
  standalone: true,
  imports: [NgFor,RouterModule],
  templateUrl: './listar.component.html',
  styleUrl: './listar.component.css'
})
export class ListarComponent implements OnInit {
  vehiculos: Array<Vehiculo>=[];
  constructor(private routerPath: Router, private vehiculoService: VehiculosService){

  }

  ngOnInit(){
    this.obtenerVehiculos();
  }

  obtenerVehiculos(){
    this.vehiculoService.obtenerVehiculos().subscribe(vs=>{
      this.vehiculos=vs;
      console.log(this.vehiculos);
    })
  }

  onEditarNavigate(id: number){
    this.routerPath.navigate([`/vehiculos/editar/$(id)`])
  }
}
