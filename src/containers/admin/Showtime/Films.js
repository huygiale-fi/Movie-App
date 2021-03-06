import React, { useEffect, useState } from 'react'
import { Form, Table, Image, Modal, Button } from 'react-bootstrap'
import './Films.scss'
import { useDispatch, useSelector } from 'react-redux'
import { deleteMovieAction, fetchAllMovieAction, fetchAllMoviePageAction, fetchMovieInfoAction } from 'store/action/movieActions'
import { FaPencilAlt } from 'react-icons/fa'
import { MdDelete, MdLocalMovies } from 'react-icons/md'
import ReactPaginate from 'react-paginate';
import moment from 'moment'
import { FaRegQuestionCircle } from 'react-icons/fa'
import AddFilms from './AddFilms/AddFilms'
import { UpdateFilm } from './Updatefilms/UpdateFilms'
import { Link } from 'react-router-dom'

export default function Films(props) {
    const dispatch = useDispatch()
    const { movieAll } = useSelector(state => state.movieReducer)
    const [search, setSearch] = useState('')
    const [addMovie, setAddMovie] = useState(false)
    const [deleteMovie, setdeleteMovie] = useState(false)
    const [updateMovie, setupdateMovie] = useState(false)
    const [pagenumber, setPageNumber] = useState(1)
    const [item,setitem]=useState()
    const handleCloseDelete = () => setdeleteMovie(false)
    let handleShowDelete = (item) =>{
         setdeleteMovie(true) 
         setitem(item)
    } 
    const handleCloseAdd = () => setAddMovie(false)
    const handleCloseUpdate = () => setupdateMovie(false)
    const handleShowAdd = () => setAddMovie(true);
    //pagi
    const usersPerPage = 10;
    const pagesVisited = pagenumber * usersPerPage;
    const displayUsers = movieAll?.slice(pagesVisited, pagesVisited + usersPerPage)
    const pageCount = Math.ceil(movieAll?.length / usersPerPage);
    const handleShowUpdate = (maphim) => {
        setupdateMovie(true);
        dispatch(fetchMovieInfoAction(maphim))
    }
    useEffect(() => {
        dispatch(fetchAllMovieAction())
    }, [dispatch])
    const changePage = ({ selected }) => {
        setPageNumber(selected);
    };
    const handleDeleteMovie = (maphim) => {
        dispatch(deleteMovieAction(maphim))
        handleCloseDelete()
    }
    return (
        <div className="site-admin-bg">
            <div className="admin-search">
                <Form>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label style={{color: '#ff1744',fontSize: '25px',fontWeight: '500'}}>T??m Ki???m</Form.Label>
                        <Form.Control type="text" placeholder="T??m Ki???m Theo T??n Phim" onChange={(e) => setSearch(e.target.value)} />
                    </Form.Group>
                </Form>
            </div>
            <div className="admin-btnAdd">
                <button onClick={handleShowAdd} className="btnAddMovie">Th??m Phim</button>
            </div>
            <div className="admin-dsShowtime">
                <Table responsive="xs" bordered hover size="lg">
                    <thead>
                        <tr style={{ textAlign: 'center', color: "#fff", backgroundColor: "#ff1744" }}>
                            <th>M?? Phim</th>
                            <th>T??n Phim</th>
                            <th>Trailer</th>
                            <th>H??nh ???nh</th>
                            <th>M?? T???</th>
                            <th>Ng??y Kh???i Chi???u</th>
                            <th>????nh Gi??</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                    
                        {displayUsers?.filter((value) => {
                            if (search === '') {
                                return value
                            } else if (value.tenPhim.toLocaleLowerCase().includes(search.toLocaleLowerCase())) {
                                return value
                            }
                        }).map((item, index) => {
                            return (<tr style={{ textAlign: 'center' }} key={index}>
                                <td>{item.maPhim}</td>
                                <td>{item.tenPhim}</td>
                                <td style={{ color: '#0d6efd' }}><a target="_blank">{item.trailer?.length > 24 ? item.trailer?.substring(0, 24) + '...' : item.trailer}</a></td>
                                <td><Image style={{ height: "100px", width: "100px" }} src={item.hinhAnh} /></td>
                                <td>{item.moTa?.length > 100 ? item.moTa?.substring(0, 100) + '...' : item.moTa}</td>
                                <td>{moment(item.ngayKhoiChieu).format('DD-MM-YYYY / hh:mm')}</td>
                                <td>{item.danhGia}</td>
                                <td>
                                    <button className="btnUpdate" onClick={() => handleShowUpdate(item.maPhim)}> <FaPencilAlt />S???a</button>
                                    <button className="btnDelete" onClick={()=>handleShowDelete(item)}><MdDelete /> X??a</button>
                                    <Link className="btnShowtime" style={{textDecoration:"none",hover:""}} to={`/admin/film/showtime/${item.maPhim}`}>L???ch Chi???u</Link>
                                </td>
                            </tr>
                            )
                        })}
                    </tbody>
                    <div><Modal className="modaldelete" show={deleteMovie}>
                <Modal.Body style={{ textAlign: 'center' }}>
                    <FaRegQuestionCircle style={{ color: "#ffccc7", fontSize: '50px' }} />
                    <h3>B???n C?? Ch???c mu???n x??a phim</h3>
                    <p>{item?.tenPhim}</p>
                    <Button onClick={handleCloseDelete} style={{ backgroundColor: "rgb(167, 167, 167)", border: "none", marginRight: '10px' }}>????ng</Button>
                    <Button onClick={() => handleDeleteMovie(item?.maPhim)} style={{ backgroundColor: "#ff1744", border: "none" }}>OK</Button>
                </Modal.Body>
            </Modal></div>
                </Table>
            </div>
            <ReactPaginate
                previousLabel={"Previous"}
                nextLabel={"Next"}
                pageCount={pageCount}
                onPageChange={changePage}
                containerClassName={"paginationBttns"}
                previousLinkClassName={"previousBttn"}
                nextLinkClassName={"nextBttn"}
                disabledClassName={"paginationDisabled"}
                activeClassName={"paginationActive"}
            />

            <AddFilms addMovie={addMovie} handleCloseAdd={handleCloseAdd} />
            <UpdateFilm updateMovie={updateMovie} handleCloseUpdate={handleCloseUpdate} />
        </div>
    )
}
