import { Component, OnInit } from "@angular/core" ;
import { MsgService } from "../../../service/msg/msg.service";
import { FormValid } from "../../../../decorators/formValid.decorator";
import { Service } from "../../../../decorators/service.decorator";

@Component({
  selector: "Sms-template",
  templateUrl: "./template.component.html",
  styleUrls: ["./template.component.less"],
})
export class TemplateComponent implements OnInit {
  constructor(
    private msg: MsgService,
  ) {
  } ;

  ngOnInit(): void {
  };

  tableData = {
    columns: [
      { title: "name", reflect: "name", type: "text", fn: (data) => console.log(123) },
      { title: "name", reflect: "name", type: "mark", fn: (data) => console.log(123) },
      { title: "name", reflect: "url", type: "img" },
    ],
    data: [{
      name: 1,
      age: 3,
      url: "http://life.southmoney.com/tuwen/UploadFiles_6871/201808/20180808151217303.jpg",
    },{
      name: 1,
      age: 3,
      url: "http://life.southmoney.com/tuwen/UploadFiles_6871/201808/20180808151217303.jpg",
    },{
      name: 1,
      age: 3,
      url: "http://life.southmoney.com/tuwen/UploadFiles_6871/201808/20180808151217303.jpg",
    },{
      name: 1,
      age: 3,
      url: "http://life.southmoney.com/tuwen/UploadFiles_6871/201808/20180808151217303.jpg",
    },{
      name: 1,
      age: 3,
      url: "http://life.southmoney.com/tuwen/UploadFiles_6871/201808/20180808151217303.jpg",
    },{
      name: 1,
      age: 3,
      url: "http://life.southmoney.com/tuwen/UploadFiles_6871/201808/20180808151217303.jpg",
    },{
      name: 1,
      age: 3,
      url: "http://life.southmoney.com/tuwen/UploadFiles_6871/201808/20180808151217303.jpg",
    },{
      name: 1,
      age: 3,
      url: "http://life.southmoney.com/tuwen/UploadFiles_6871/201808/20180808151217303.jpg",
    },{
      name: 1,
      age: 3,
      url: "http://life.southmoney.com/tuwen/UploadFiles_6871/201808/20180808151217303.jpg",
    },{
      name: 1,
      age: 3,
      url: "http://life.southmoney.com/tuwen/UploadFiles_6871/201808/20180808151217303.jpg",
    },{
      name: 1,
      age: 3,
      url: "http://life.southmoney.com/tuwen/UploadFiles_6871/201808/20180808151217303.jpg",
    },{
      name: 1,
      age: 3,
      url: "http://life.southmoney.com/tuwen/UploadFiles_6871/201808/20180808151217303.jpg",
    },{
      name: 1,
      age: 3,
      url: "http://life.southmoney.com/tuwen/UploadFiles_6871/201808/20180808151217303.jpg",
    },{
      name: 1,
      age: 3,
      url: "http://life.southmoney.com/tuwen/UploadFiles_6871/201808/20180808151217303.jpg",
    },{
      name: 1,
      age: 3,
      url: "http://life.southmoney.com/tuwen/UploadFiles_6871/201808/20180808151217303.jpg",
    },{
      name: 1,
      age: 3,
      url: "http://life.southmoney.com/tuwen/UploadFiles_6871/201808/20180808151217303.jpg",
    },{
      name: 1,
      age: 3,
      url: "http://life.southmoney.com/tuwen/UploadFiles_6871/201808/20180808151217303.jpg",
    },{
      name: 1,
      age: 3,
      url: "http://life.southmoney.com/tuwen/UploadFiles_6871/201808/20180808151217303.jpg",
    },{
      name: 1,
      age: 3,
      url: "http://life.southmoney.com/tuwen/UploadFiles_6871/201808/20180808151217303.jpg",
    },{
      name: 1,
      age: 3,
      url: "http://life.southmoney.com/tuwen/UploadFiles_6871/201808/20180808151217303.jpg",
    },{
      name: 1,
      age: 3,
      url: "http://life.southmoney.com/tuwen/UploadFiles_6871/201808/20180808151217303.jpg",
    },{
      name: 1,
      age: 3,
      url: "http://life.southmoney.com/tuwen/UploadFiles_6871/201808/20180808151217303.jpg",
    },{
      name: 1,
      age: 3,
      url: "http://life.southmoney.com/tuwen/UploadFiles_6871/201808/20180808151217303.jpg",
    },{
      name: 1,
      age: 3,
      url: "http://life.southmoney.com/tuwen/UploadFiles_6871/201808/20180808151217303.jpg",
    },{
      name: 1,
      age: 3,
      url: "http://life.southmoney.com/tuwen/UploadFiles_6871/201808/20180808151217303.jpg",
    }, {
      name: 2,
      age: 4,
      url: "http://life.southmoney.com/tuwen/UploadFiles_6871/201808/20180808151217303.jpg",
    }, { name: 3, age: 4, url: "http://life.southmoney.com/tuwen/UploadFiles_6871/201808/20180808151217303.jpg" }],
    btn: {
      title: "操作",
      items: [
        {
          type: "del",
          title: "删除",
          fn: (data) => {
            this.msg.error("删除失败");
          },
        }, {
          type: "add",
          title: "添加",
          fn: (data) => {
            console.log(data);
          },
        }, {
          type: "edit",
          title: "编辑",
          fn: (data) => {
            console.log(data);
          },
        },
      ],
    },
    loading: false,
  };

  searchBarData = {
    classify: {
      name: "分类",
      data: [{ id: 1, name: 123 }],
      fn(data) {
        console.log(data);
      },
    },
    btn: [{
      name: "搜索",
      type: "search",
      fn: () => {
        console.log(this);
      },
    }, {
      name: "搜索",
      type: "reset",
      fn: () => {
        console.log(321);
        this.isVisible = true;
      },
    }],
    sections: [
      {
        name: "开始时间", type: "dateRange", placeHolders: ["请输入", "请输入"], change: ($event) => {
          console.log($event);
        },
      },
    ],
    conditions: [
      {
        name: "姓名", type: "input", placeHolder: "123", change: ($event) => {
          console.log($event);
        },
      }, {
        name: "姓名", type: "select", data: [{ key: "123", value: "123" }], placeHolder: "123", change: ($event) => {
          console.log($event);
        },
      }, {
        name: "姓名", type: "date", placeHolder: "123", change: ($event) => {
          console.log($event);
        },
      },
    ],
  };

  pageChange(): void {
    console.log(123);
  };

  isVisible: boolean = false;

  modalConfirm() {
    this.isVisible = false;
  };

  @FormValid(["form"])
  @Service("menuSer.post", true, { a: 1 })
  check($event, data) {
    console.log(data);
  };
};
