import React,{useEffect} from 'react'
import { Form,Table,Image } from 'react-bootstrap'
import './Showtime.scss'
import { useDispatch, useSelector} from 'react-redux'
import { fetchAllMoviePageAction } from 'store/action/movieActions'
import {FaPencilAlt} from 'react-icons/fa'
import {MdDelete,MdLocalMovies} from 'react-icons/md'
import moment from 'moment'
export default function Showtime() {
    const dispatch = useDispatch()
    const {movie,page} = useSelector(state => state.movieReducer)
    useEffect(() => {
        dispatch(fetchAllMoviePageAction(page))
    }, [])
    return (
        <div className="site-admin-bg">
            <div className="admin-search">
                <Form>
                    <Form.Group className="" controlId="formBasicPassword">
                        <Form.Label>Tìm Kiếm</Form.Label>
                        <Form.Control type="text" placeholder="Tìm Kiếm Theo Tên Phim" />
                    </Form.Group>
                </Form>
            </div>
            <div className="admin-btnAdd">
                <button className="btnAddMovie">Thêm Phim</button>
            </div>
            <div className="admin-dsShowtime">
                <Table responsive="xs" bordered hover size="lg">
                    <thead>
                        <tr style={{textAlign:'center',color:"#fff",backgroundColor:"#ff1744"}}>
                            <th>Mã Phim</th>
                            <th>Tên Phim</th>
                            <th>Trailer</th>
                            <th>Hình Ảnh</th>
                            <th>Mô Tả</th>
                            <th>Ngày Khởi Chiếu</th>
                            <th>Đánh Giá</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {movie?.map((item,index)=>{
                            return <tr style={{textAlign:'center'}} key={index}>
                            <td>{item.maPhim}</td>
                            <td>{item.tenPhim}</td>
                            <td style={{color:'#0d6efd'}}><a target="_blank">{item.trailer?.length > 24 ? item.trailer?.substring(0,24)+'...':item.trailer}</a></td>
                            <td><Image style={{height:"100px",width:"100px"}} src={item.hinhAnh}/></td>
                            <td>{item.moTa?.length > 100 ? item.moTa?.substring(0,100)+'...':item.moTa}</td>
                            <td>{moment(item.ngayKhoiChieu).format('DD-MM-YYYY / hh:mm')}</td>
                            <td>{item.danhGia}</td>
                            <td>
                                <button className="btnUpdate"> <FaPencilAlt/>Sửa</button>
                                <button className="btnDelete"><MdDelete/> Xóa</button>
                                <button className="btnShowtime"><MdLocalMovies/>Lịch Chiếu</button>
                            </td>
                        </tr>
                        })}
                        
                    </tbody>
                </Table>
            </div>
        </div>
    )
}
