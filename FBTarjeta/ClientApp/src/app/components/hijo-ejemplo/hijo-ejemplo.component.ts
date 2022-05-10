import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { ToastrService } from 'ngx-toastr';
import { TarjetaService } from 'src/app/services/tarjeta.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-hijo-ejemplo',
  templateUrl: './hijo-ejemplo.component.html',
  styleUrls: ['./hijo-ejemplo.component.css']
})
export class HijoEjemploComponent implements OnInit {
  @Input() data: string = "";

  constructor(private fb: FormBuilder, private toastr: ToastrService, private _tarjetaService: TarjetaService) {


  }

  ngOnInit(): void { 
    console.log(this.data) // Da como resultado []
  }
  ngAfterViewInit() {
    /* console.log(this.data) // Da como resultado []
    setTimeout(() => {
    console.log(this.(data); // Da como resultado mi objeto
    },2000); */
  }

  ngOnChanges(): void {
    console.log(this.data); // Da como resultado []
  }

}
