import { Component, OnInit } from '@angular/core';
import { AlbumsService } from '../albums.service';
import { Album } from '../album';
import { CommonModule } from '@angular/common'; 
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-albums',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './albums.component.html',
  styleUrl: './albums.component.css'
})

export class AlbumsComponent {
  albums: Album[] = [];

  constructor(private albumsService: AlbumsService) {}

  ngOnInit(){
    this.showAlbums();
  }

  showAlbums() {
    this.albumsService.getAlbums()
      .subscribe((data: Album[]) => {
        this.albums = data; // Присваиваем данные ответа непосредственно массиву альбомов
      });
      console.log("Все ок")
  }

  removeAlbum(id: number){
    this.albumsService.deleteAlbum(id).subscribe(() => {
        // Удаление альбома из массива albums после успешного удаления на сервере
        this.albums = this.albums.filter(album => album.id !== id);
        console.log("Альбом успешно удален");
    }, error => {
        console.error("Ошибка при удалении альбома", error);
    });
}

}
