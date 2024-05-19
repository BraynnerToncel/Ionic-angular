import { Injectable } from '@angular/core';
import {AngularFirestore,AngularFirestoreCollection,AngularFirestoreDocument} from "@angular/fire/compat/firestore";
import {Song} from "../../song";

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor( public firestore:AngularFirestore) { }

  createSong(number_cabins:string, type_of_melody:string, owner_song:string,songName:string): Promise<void>
  { const id= this.firestore.createId();
    return this.firestore.doc(`songList/${id}`).set({id, number_cabins, type_of_melody, owner_song ,songName});
  }

  getSongList():AngularFirestoreCollection<Song>{
   return this.firestore.collection('songList');
  } 

  getSongtDetail(path: string, songId: string){
    const value=this.firestore.collection(path);
    return value.doc(songId).valueChanges(); 
   }
   
   deleteSong(songId: string):Promise<void>{
    return this.firestore.doc(`songList/${songId}`).delete();
   }
   updateSong(id: string, number_cabins:string, type_of_melody:string, owner_song:string,songName:string): Promise<void> {
    return this.firestore.doc(`songList/${id}`).update({id, number_cabins, type_of_melody, owner_song , songName });
  }

}
