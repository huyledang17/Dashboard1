import React, { Component } from 'react'
import ListRow from './ListRow'

export default class List extends Component {
  mappingDataUser = () => this.props.dataUserProps.map((value, key) => (
    <ListRow
      stt={key}
      id={value.id}
      userName={value.name}
      tel={value.tel}
      Permission={value.Permission}
      eidtFunClick={(info) => this.props.edit(value)}
      changEditUserForm={() => this.props.changEditUserForm()}
      deleteClick={(idUser) => this.deleteClick(idUser)}
    />
  ))
  deleteClick = (idUser) => {
    // console.log('id cuả user là: '+ idUser);
    // console.log(idUser);
    this.props.deleteUserInfo(idUser);


    //cách sử dụng hàm Filter
    
  }
  
  render() {
    // console.log(this.props.dataUserProps);
    return (
      <div className="col-9">
        <table className="table table-striped table-hover">
          <thead className="thead-inverse">
            <tr>
              <th>STT</th>
              <th>Họ tên</th>
              <th>Số diện thoại</th>
              <th>Phân quyền</th>
              <th>chức năng</th>
            </tr>
          </thead>
          <tbody>
            {/* gọi hàm hiển thị data */}
            {this.mappingDataUser()}

          </tbody>
        </table>
      </div>

    )
  }
}
