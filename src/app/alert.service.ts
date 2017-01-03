import { Injectable } from '@angular/core';

import swal, { SweetAlertOptions } from 'sweetalert2';

@Injectable()
export class AlertService {

  alert(title, text, type) {
    const options: SweetAlertOptions = {
      type,
      title,
      text,
    };

    return swal(options);
  }

}
