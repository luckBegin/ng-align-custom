import { Component, EventEmitter, Input, Output } from '@angular/core';


@Component({
  selector : "common-modal" ,
  template : `<nz-modal [(nzVisible)]="isVisible" [nzTitle]="modalTitle" [nzContent]="modalContent" [nzFooter]="modalFooter" (nzOnCancel)="isVisible = false">
    <ng-template #modalTitle>
      {{ title }}
    </ng-template>

    <ng-template #modalContent>
      <div class="c-flex-row-start">
        <i nz-icon type="info-circle" theme="outline" class="modal-icon" [ngClass]="{'icon-success' : type === 'success' , 'icon-error' : type ==='error' , 'icon-error' : type==='warn'}"></i>
        <p style="margin : 0 ; padding: 0">
          {{ body }}
        </p>
      </div>
    </ng-template>

    <ng-template #modalFooter>
      <button *ngIf="cancel" nz-button nzType="default" (click)="isVisible = false">取消</button>
      <button nz-button nzType="primary" (click)="handleOk()">确定</button>
    </ng-template>
    
  </nz-modal>` ,
  styles : [`
    .modal-icon{
      font-size: 30px;
      margin-right: 20px;
    }
    .icon-success{
      color : #579e59
    }
    .icon-error{
      color : #a94442
    }
    .icon-warn{
      color : #8a6d3b
    }
  `]
})
export class ModalComponent {
  constructor(){} ;
  @Input() isVisible : boolean = false ;
  @Input() title : string = '提示' ;
  @Input() body : string = "确认操作?" ;
  @Input() type : "success" | "error" | "warn" = 'success' ;
  @Input() cancel : boolean = true ;
  @Output() confirm  : EventEmitter<any> = new EventEmitter();
  handleOk() : void{
    this.confirm.emit() ;
  };
}
