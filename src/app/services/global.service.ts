import { Injectable } from '@angular/core';
import { DialogService } from 'primeng/dynamicdialog';
import { BehaviorSubject } from 'rxjs';
import { MessageComponent } from '../shared/message/message.component';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  private message = new BehaviorSubject({});
  message$: any;
  

  constructor(
    private dialog : DialogService,
  ) { }

  public setMessage(data: any) {
    this.message.next(data);
  }

  showMessage(status: string, message: string) {
    this.dialog.open(MessageComponent, {
      data: {
        message: message
      },
      closable: false,
      header: status,
    });
  }

  setNav(value: string) {
    const navList = document.querySelector('.nav-bar');
    let buttons = navList?.querySelectorAll('.nav');

    buttons?.forEach((element) => {
      element.classList.remove('active');
    });

    const nav = document.querySelector('#' + value);
    nav?.classList.add('active');
    sessionStorage.setItem('currentNavId', value);
  }
}
