import React, { Component } from 'react'
import EditUser from './EditUser';

export default class Search extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            // trangthainutthem: true,
            nd: '',
            userObj:{}

        }
    }
    isChange = (event) => {
        this.setState({ nd: event.target.value })
    }
    xulyTrangthai = () => {
        this.setState({
            trangthainutthem: !this.state.trangthainutthem
        })
    }
    hienNut = () => {
        if (this.state.trangthainutthem === true)
            return <div onClick={() => this.props.ketNoi()} className="btn btn-outline-info btn-block">Thêm mới</div>
        else
            return <div onClick={() => this.props.ketNoi()} className="btn btn-outline-secondary btn-block">Đóng</div>
    }
    isShowEdit = () => {
        if(this.props.editUserStatus===true){
          return <EditUser changEditUserForm={() => this.props.changEditUserForm()}
            userEditObject={this.props.userEditObject}
            getEditInfo={(info) => this.getEditInfo(info)}/>
        }
      }
      getEditInfo= (info) => {
        this.setState({
            userObj:info
        });
        this.props.getEditInfoApp(info);
      }
    render() {
        return (
            <div className="col-12">
                <div className='' row>
                    {this.isShowEdit()}
                </div>
                <div className="row">
                    <div className="col-10">
                        <div className="serchForm">
                            <div className="input-group mb-3">
                                <input onChange={(event) => this.isChange(event)} type="text" className="form-control" placeholder="Nhập từ khoá" aria-label="Recipient's username" aria-describedby="button-addon2" />
                                <button onClick={(dl) => this.props.checkConnectProps(this.state.nd)} className="btn btn-outline-primary" type="button" id="button-addon2">Tìm kiếm</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-2">
                        {this.hienNut()}
                    </div>
                </div>
            </div>
        )
    }
}