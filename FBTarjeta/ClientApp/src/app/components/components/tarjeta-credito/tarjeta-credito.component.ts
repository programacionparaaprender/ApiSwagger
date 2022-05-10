import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { ToastrService } from 'ngx-toastr';
import { TarjetaService } from 'src/app/services/tarjeta.service';
import { Observable } from 'rxjs';
import { TarjetaCredito } from '../../../models/tarjetacredito';


@Component({
  selector: 'app-tarjeta-credito',
  templateUrl: './tarjeta-credito.component.html',
  styleUrls: ['./tarjeta-credito.component.css']
})
export class TarjetaCreditoComponent implements OnInit {
  listTarjetas: any[] = [];
  form: FormGroup;
  accion = "Agregar";
  data = "Datos del hijo";
  id: number | undefined;
  constructor(private fb: FormBuilder, private toastr: ToastrService, private _tarjetaService: TarjetaService) {

    this.form = this.fb.group({
      tarjetaId: [''], 
      titular: ['', Validators.required], 
      numeroTarjeta: ['', [Validators.required, Validators.maxLength(16), Validators.minLength(16)]],
      fechaExpiracion: ['', [Validators.required, Validators.maxLength(5), Validators.minLength(5)]],
      cvv: ['', [Validators.required, Validators.maxLength(3), Validators.minLength(3)]]
    }); 
  }

  ngOnInit(): void {
    this.obtenerTarjetas();
  }

  obtenerTarjetas(): void {
    this._tarjetaService.getListTarjetas().subscribe(data => {
      console.log(data);
      this.listTarjetas = data;
    }, error => {
      console.log(error);
    });
  }

  agregarTarjeta(): void{
    //console.log(this.form)
    var tarjeta: TarjetaCredito = {
      id:0,
      titular: this.form.get('titular')?.value, 
      numeroTarjeta: String(this.form.get('numeroTarjeta')?.value), 
      fechaExpiracion: this.form.get('fechaExpiracion')?.value, 
      cvv: this.form.get('cvv')?.value
    } 
    console.log(tarjeta);
    console.log(this.id);
    console.log(this.form.get('tarjetaId')?.value);
    if(this.id == undefined || this.id == 0){
      //console.log('Guardar tarjeta');
      //this.listTarjetas.push(tarjeta);
      this._tarjetaService.saveTarjeta(tarjeta).subscribe(data => {
      //console.log(data);
      this.obtenerTarjetas();
      this.toastr.success('Hello world!', 'Tarjeta registrada!');
      this.form.reset();
    }, error => {
      //console.log(error);
      this.toastr.error('Tarjeta no fue registrada con exito!', error);
    }); 
    }else{
      //console.log("Actualizar tarjeta");
      tarjeta.id = this.id;
      this._tarjetaService.updateTarjeta(tarjeta, this.id).subscribe(data => {
        //console.log(data);
        this.obtenerTarjetas();
        this.toastr.success('Hello world!', 'Tarjeta actualizada!');
        this.form.reset();
        this.id = 0;
        this.accion = "Agregar";
      }, error => {
        //console.log(error);
        this.toastr.error('Tarjeta no fue actualizada con exito!', error);
      }); 
    }
  }

  eliminarTarjeta(id: number): void{
    //console.log(index);
    //this.listTarjetas.splice(index, 1);
    this._tarjetaService.deleteTarjeta(id).subscribe(data => {
      //console.log(data);
      this.obtenerTarjetas();
      this.toastr.success('Tarjeta eliminada con exito!', 'Tarjeta eliminada!');
    }, error => {
      //console.log(error);
      this.toastr.error('Tarjeta no fue eliminada con exito!', error);
    });
    
  }

  editarTarjeta(tarjeta: TarjetaCredito): void {
    this.accion = "Editar";
    this.id = tarjeta.id;
    this.form.patchValue({
      tarjetaId: tarjeta.id,
      titular: String(tarjeta.titular),
      numeroTarjeta: parseInt(tarjeta.numeroTarjeta),
      fechaExpiracion: tarjeta.fechaExpiracion,
      cvv: String(tarjeta.cvv)
    });
    console.log(tarjeta.titular);
    console.log(tarjeta);
  }

}
