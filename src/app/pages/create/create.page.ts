import { Component, OnInit } from '@angular/core';
import {FormBuilder,Validators} from "@angular/forms";
import { LoadingController,AlertController} from "@ionic/angular";
import {FirestoreService  } from "../../services/data/firestore.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-create',
  templateUrl: './create.page.html',
  styleUrls: ['./create.page.scss'],
})
export class CreatePage implements OnInit {

  public createSongForm: any;  

  constructor(public lc:LoadingController, 
    public AlertControll:AlertController, 
    public fireservice:FirestoreService,
    public formb:FormBuilder,
    public r:Router  ) {

     this.createSongForm=formb.group({
      number_cabins:['',Validators.required],
      type_of_melody:['',Validators.required],
      owner_song:['',Validators.required],
      songName:['',Validators.required], 
     });


     }

  ngOnInit() {
  }
   
  async createSong(){
   const loading= await this.lc.create();
   const number_cabins= this.createSongForm.value.number_cabins;
   const type_of_melody= this.createSongForm.value.type_of_melody;
   const owner_song= this.createSongForm.value.owner_song;
   const songName= this.createSongForm.value.songName;
   this.fireservice.createSong(number_cabins, type_of_melody, owner_song,songName).then(
     ()=>{loading.dismiss().then(()=>
      {this.r.navigateByUrl('/home'); });  },
     error =>{
       console.error(error);
     }); 
     return await loading.present();
     }
       


}
