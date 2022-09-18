import React, { Component } from "react";
import "../App.css";
import Adduser from "./Adduser";
import Header from "./Header";
import List from "./List";
import Search from "./Search";
import Datauser from "./Data.json";


class App extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      hienthiForm: true,
      data: Datauser,
      searchResult: '',
      editUserStatus: false,
      userEditObject:{} //Khai báo 1 biến state để lưu đối tượng
    };
  }

  doiTrangThai = () => {
    this.setState({
      hienthiForm: !this.state.hienthiForm,
    });
  };
  checkConnect = (data) => {
    this.setState({ searchResult: data });
  };

  addInfo = (name, tel, permission) => {
    var pt = {};
    pt.id = 0;
    pt.name = name;
    pt.tel = tel;
    pt.Permission = permission;
    let newItem = this.state.data
    newItem.push(pt)
    this.setState({ data: newItem })
  };
  //Ham lấy thông tin cần sửa
  editUser = (info) => {
    // alert("thông tin nhận được " + info);
    this.setState({
      userEditObject:info
    });
  }
  //hàm lấy trạng thái form sửa
  changEditUserForm = () => {
    this.setState({
      editUserStatus:!this.state.editUserStatus
    });
  }
  //Hàm lấy thông tin sửa từ search gửi lên
  getEditInfoApp= (info) => {
    // alert('thong tin da sua xong'+info.name);
    this.state.data.forEach((value, key) => {
      if(value.id===info.id){
        value.name=info.name;
        value.tel=info.tel;
        value.Permission=info.Permission;
      }
    })
  }
  render() {
    var ketQua = [];
    this.state.data.forEach((item) => {
      if (item.name.indexOf(this.state.searchResult) !== -1) {
        ketQua.push(item);
      }
    });
    return (
      <div>
        <Header />
        <div className="container">
          <div className="row">
            <Search checkConnectProps={(dl) => this.checkConnect(dl)}
              ketNoi={() => this.doiTrangThai()}
              editUserStatus={this.state.editUserStatus}
              changEditUserForm={() => this.changEditUserForm()}
              userEditObject={this.state.userEditObject}
              getEditInfoApp= {(info) => this.getEditInfoApp(info)}
            />
            <List
              dataUserProps={this.state.data}
              edit={(info) => this.editUser(info)}
              changEditUserForm={() => this.changEditUserForm()}
            />
            <Adduser hienthiForm={this.state.hienthiForm} getUser={(name, tel, permission) => this.addInfo(name, tel, permission)} />
          </div>
        </div>
      </div>
    );
  }
}
export default App;