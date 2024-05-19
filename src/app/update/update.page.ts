import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoadingController,AlertController} from "@ionic/angular";
import { FirestoreService } from 'src/app/services/data/firestore.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.page.html',
  styleUrls: ['./update.page.scss'],
})
export class UpdatePage {

  song: any={}; 
  songId:any; 
  public updateSongForm: any;  

  constructor(
    private fs: FirestoreService, 
    private r: Router, 
    private route: ActivatedRoute,
    public ar:ActivatedRoute,
    public lc:LoadingController,
    private alertController: AlertController) {}

  ngOnInit() {
    this.songId= this.ar.snapshot.paramMap.get('id');
    console.log("Id", this.songId);
    const des_subscribir= this.fs.getSongtDetail('songList',this.songId).subscribe( result => {
      this.song=result; 
      des_subscribir.unsubscribe();
      
    });
  }

  async updateSong() {
    const loading= await this.lc.create();
    const songId = this.song.id;
    const newNumberOfCabins = this.song.number_cabins;
    const newTypeOfMelody = this.song.type_of_melody;
    const newOwnerSong = this.song.owner_song;
    const newSongName = this.song.songName; 
  
    this.fs.updateSong(songId, newNumberOfCabins, newTypeOfMelody, newOwnerSong, newSongName)
      .then(
        () => {loading.dismiss().then(()=>
          this.r.navigate(['/home']));
          this.mostrarAlertaExitosa();
      })
      .catch((error) => {
        console.error(error);
      });
      return await loading.present();
  }

  async mostrarAlertaExitosa() {
    const alert = await this.alertController.create({
      header: 'Actualizacion Exitosa',
      message: 'Usted ha actualizado la canción exitosamente.',
      buttons: ['OK']
    });
  
    await alert.present();
  }
  
}
