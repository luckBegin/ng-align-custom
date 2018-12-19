import { Component ,OnInit} from '@angular/core' ;
import { MsgService } from "../../../service/msg/msg.service";
@Component({
  selector : 'System-role' ,
  templateUrl : './role.component.html' ,
  styleUrls : ['./role.component.less']
})
export class RoleComponent implements OnInit{
  constructor(
    private msg : MsgService ,
  ){} ;

  ngOnInit(): void {

  };
};
