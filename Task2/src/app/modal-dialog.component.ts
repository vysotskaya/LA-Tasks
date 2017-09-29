import { Data } from './data.model';
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'modal-dialog',
  templateUrl: './modal-dialog.component.html',
  styleUrls: ['./modal-dialog.component.css']
})

export class ModalDialogComponent implements OnChanges {
    @Input() data: Data;
    visibility:boolean = false;
    
    ngOnChanges(changes: SimpleChanges): void {
        if(changes.data.firstChange) { return; }
        this.visibility = !this.visibility;
    }

    closeModal(): void {
        this.visibility = false;
    }
}
