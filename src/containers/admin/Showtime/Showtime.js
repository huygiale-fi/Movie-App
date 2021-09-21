import React, { useEffect, useState } from 'react'
import { Form, Table, Image, Modal, Button } from 'react-bootstrap'
import './Showtime.scss'
import { withFormik } from 'formik'
import * as Yup from 'yup'
import { useDispatch, useSelector, connect } from 'react-redux'
import { addMovieUpLoadImgAction, deleteMovieAction, fetchAllMoviePageAction, fetchMovieInfoAction } from 'store/action/movieActions'
import { FaPencilAlt } from 'react-icons/fa'
import { MdDelete, MdLocalMovies } from 'react-icons/md'
import ReactPaginate from 'react-paginate';
import DatePicker from "react-datepicker";

import moment from 'moment'
import AddFilms from './AddFilms/AddFilms'
import { UpdateFilm } from './Updatefilms/UpdateFilms'

export default function Showtime(props) {
    const dispatch = useDispatch()
    const { movie,allpage } = useSelector(state => state.movieReducer)
    const [search, setSearch] = useState('')
    const [addMovie, setAddMovie] = useState(false)
    const [updateMovie,setupdateMovie] = useState(false)
    const [pagenumber,setPageNumber] = useState(1)
    const handleCloseAdd = () => setAddMovie(false)
    const handleCloseUpdate = ()=> setupdateMovie(false)
    const handleShowAdd = () => setAddMovie(true);
    const handleShowUpdate = (maphim) => {
        setupdateMovie(true);
        dispatch(fetchMovieInfoAction(maphim))
    }
    useEffect(() => {
        dispatch(fetchAllMoviePageAction(pagenumber))
    }, [pagenumber])
    const changePage = ({ selected }) => {
        setPageNumber(selected);
      };
      const handleDeleteMovie = (maphim)=>{
        dispatch(deleteMovieAction(maphim))
      }
    return (
        <div className="site-admin-bg">
            <div className="admin-search">
                <Form>
                    <Form.Group className="" controlId="formBasicPassword">
                        <Form.Label>Tìm Kiếm</Form.Label>
                        <Form.Control type="text" placeholder="Tìm Kiếm Theo Tên Phim" onChange={(e) => setSearch(e.target.value)} />
                    </Form.Group>
                </Form>
            </div>
            <div className="admin-btnAdd">
                <button onClick={handleShowAdd} className="btnAddMovie">Thêm Phim</button>
            </div>
            <div className="admin-dsShowtime">
                <Table responsive="xs" bordered hover size="lg">
                    <thead>
                        <tr style={{ textAlign: 'center', color: "#fff", backgroundColor: "#ff1744" }}>
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
                        {movie?.filter((value) => {
                            if (search == '') {
                                return value
                            } else if (value.tenPhim.toLocaleLowerCase().includes(search.toLocaleLowerCase())) {
                                return value
                            }
                        }).map((item, index) => {
                            return <tr style={{ textAlign: 'center' }} key={index}>
                                <td>{item.maPhim}</td>
                                <td>{item.tenPhim}</td>
                                <td style={{ color: '#0d6efd' }}><a target="_blank">{item.trailer?.length > 24 ? item.trailer?.substring(0, 24) + '...' : item.trailer}</a></td>
                                <td><Image style={{ height: "100px", width: "100px" }} src={item.hinhAnh} /></td>
                                <td>{item.moTa?.length > 100 ? item.moTa?.substring(0, 100) + '...' : item.moTa}</td>
                                <td>{moment(item.ngayKhoiChieu).format('DD-MM-YYYY / hh:mm')}</td>
                                <td>{item.danhGia}</td>
                                <td>
                                    <button className="btnUpdate" onClick={()=>handleShowUpdate(item.maPhim)}> <FaPencilAlt />Sửa</button>
                                    <button className="btnDelete" onClick={()=>handleDeleteMovie(item.maPhim)}><MdDelete /> Xóa</button>
                                    <button className="btnShowtime"><MdLocalMovies />Lịch Chiếu</button>
                                </td>
                            </tr>
                        })}

                    </tbody>
                </Table>
            </div>
            <ReactPaginate
        previousLabel={"Previous"}
        nextLabel={"Next"}
        pageCount={allpage}
        onPageChange={changePage}
        containerClassName={"paginationBttns"}
        previousLinkClassName={"previousBttn"}
        nextLinkClassName={"nextBttn"}
        disabledClassName={"paginationDisabled"}
        activeClassName={"paginationActive"}
      />
            <AddFilms addMovie={addMovie} handleCloseAdd={handleCloseAdd} />
            <UpdateFilm updateMovie={updateMovie} handleCloseUpdate={handleCloseUpdate}/>
        </div>
    )
}
