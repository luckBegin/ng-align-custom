import { AfterViewChecked, Component, OnInit } from '@angular/core' ;
import { MsgService } from '../../../service/msg/msg.service';
import { FormValid } from '../../../../decorators/formValid.decorator';
import { Service } from '../../../../decorators/service.decorator';
import { TemplateService, TemplateEnumService, TemplateModel } from '../../../service/sms';
import { RESPONSE, ENUM } from '../../../models' ;
import { QueryModel } from './query.model';
import { filter, map } from 'rxjs/operators';
import { DateUtils, ObjectUtils } from '../../../shared/utils';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SearchBarModel } from '@shared/component/search-bar/search-bar.model';
@Component({
  selector: 'Sms-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.less']
})
export class TemplateComponent implements OnInit{
  constructor(
    private msg: MsgService,
    private templateSer: TemplateService,
    private eunmSer: TemplateEnumService,
    private fb: FormBuilder,
  ) {} ;

  ngOnInit(): void {
    this.getStatus();
    this.getType();
  };

  status: ENUM[] = [];

  type: ENUM[] = [];

  searchModel = new QueryModel();

  selected: TemplateModel;

  form: FormGroup = this.fb.group({
    id: [null],
    projectType: [null, [Validators.required]],
    status: [null, [Validators.required]],
    smsText: [null, [Validators.required]],
  });

  tableData = {
    loading: true,
    page: 1,
    columns: [
      {
        title: '业务类型', reflect: 'projectType', type: 'text', filter: (column) => {
          let _item = this.type.filter(item => item.value == column.projectType)[0];
          return (_item as any).key;
        },
      },
      {
        title: '状态', reflect: 'status', type: 'switch', filter: (column) => {
          return column.status === 1;
        }, fn: (data) => {
          this.changeStatus(data);
        },
      },
      {
        title: '创建时间', reflect: 'createTime', type: 'text', filter: (column) => {
          return DateUtils.format(column.createTime, 'y-m-d');
        },
      },
    ],
    data: [],
    btn: {
      title: '操作',
      items: [
        {
          type: 'del',
          title: '删除',
          fn: (data) => {
            this.selected = data;
            this.isVisible = true;
          },
        }, {
          type: 'edit',
          title: '编辑',
          fn: (data) => {
            this.selected = data;
            this.isEdit = true;
            this.formVisible = true;
            this.form.patchValue(data);
          },
        },
      ],
    },
  };

  searchBarData : SearchBarModel = {
      conditions: [
        { name: '状态', type: 'select', model : "status" , default : 'null' , data:[], placeHolder: '选择状态'},
        { name: '类型', type: 'select',model : "type" , default : 'null' , data: [], placeHolder: '选择类型'},
        { name: '创建时间', type: 'date' , model : 'createTime'  , format : "y-m-d" , placeHolder: '选择创建时间'},
      ],
      notify : {
        query : ( data : QueryModel ) => {  this.searchModel = ObjectUtils.extend(this.searchModel , data ) as QueryModel ; this.getList() } ,
        reset : ( data : QueryModel ) => { this.searchModel = new QueryModel ; this.getList() }
      }
  };

  pageChange(): void {
    this.getList();
  };

  isVisible: boolean = false;

  formVisible: boolean = false;

  isEdit: boolean = false;

  // 删除
  modalConfirm() {
    this.templateSer.delete(this.selected.id)
      .subscribe(data => {
        this.isVisible = false;
      });
  };

  // 获取列表
  getList(): void {
    this.tableData.loading = true;
    this.templateSer.get(this.searchModel)
      .subscribe((data: TemplateModel[]) => {
        this.tableData.data = data;
        this.tableData.loading = false;
      });
  };

  // 获取状态枚举
  getStatus(): void {
    this.eunmSer.status()
      .subscribe((res: ENUM[]) => {
        this.status = res;
        this.searchBarData.conditions[0].data = res;
      });
  };

  // 获取类型枚举
  getType(): void {
    this.eunmSer.type()
      .subscribe((res: ENUM[]) => {
        this.type = res;
        this.searchBarData.conditions[1].data = res;
      });
  };

  // 新增
  add(): void {
    this.form.reset();
    this.formVisible = true;
    this.isEdit = false;
  };

  // 发送修改
  @Service('templateSer.put', true, 'form')
  save($event: Event): void {
    this.msg.success('修改成功');
    this.formVisible = !this.formVisible;
  };

  // 发送新增
  @Service('templateSer.post', true, 'form')
  make($event: Event) {
    this.msg.success('添加成功');
    this.formVisible = !this.formVisible;
  };

  changeStatus(data: TemplateModel) {
    data.status = (<any>!data.status) * 1;
    this.templateSer.put(data)
      .subscribe(res => {
        this.msg.success('修改成功');
      });
  };
};
