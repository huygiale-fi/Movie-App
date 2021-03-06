import React, { Fragment, useEffect, useState } from 'react'
import { Col, Row, Button, Image, Nav, Tab, Modal } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { useParams,useHistory } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { AiOutlineClose } from 'react-icons/ai'
import _ from 'lodash'
import { CgDanger } from 'react-icons/cg'
import { fetchListSeatAction, postDatVeAction, SeletedTicket } from 'store/action/bookingAction'
import './BookingTicket.scss'
export default function BookingTicket() {
    const history = useHistory();
    const dispatch = useDispatch()
    const { id } = useParams()
    const { DsGhe, DsGheDangDat } = useSelector(state => state.bookingReducer)
    const user = JSON.parse(localStorage.getItem('user'))
    const islogged = user ? true : false;
    const [show, setshow] = useState(false)
    const handleClose = () => setshow(false);
    const handleShow = () => setshow(true);
    const { thongTinPhim } = DsGhe;
    useEffect(() => {
        dispatch(fetchListSeatAction(id))
    }, [])
    const renderDsGHe = () => {
        return DsGhe?.danhSachGhe?.map((ghe, index) => {
            let seatVip = ''
            if (ghe.loaiGhe === "Vip") {
                seatVip = 'seat-vip'
            }
            let gheDD = ''
            if (ghe.daDat === true) {
                gheDD = 'seat-booked'
            }
            let seatSelect = ''
            let indexSelect = DsGheDangDat.findIndex(gheDD => gheDD.maGhe === ghe.maGhe)
            if (indexSelect !== -1) {
                seatSelect = 'seat-select'
            }

            return <Fragment>
                <button disabled={ghe.daDat ? true : false} onClick={() => dispatch(SeletedTicket(ghe))} key={index}
                    className={`seat ${seatVip} ${seatSelect} ${gheDD} `}
                >
                    {ghe.daDat ? <AiOutlineClose style={{ marginBottom: '3px' }} /> : ghe.tenGhe}
                </button>
                {(index + 1) % 16 === 0 ? <br /> : ''}
            </Fragment>
        })
    }

    if(!islogged){
        return (
        <Modal.Dialog>
            <Modal.Body style={{textAlign:'center'}}>
                <CgDanger style={{color:"#ffccc7", fontSize:'50px'}}/>
              <p>B???n Ch??a ????ng Nh???p. Vui L??ng ????ng Nh???p</p>
              <Button onClick={()=>history.push("/login")} style={{backgroundColor:"#ff1744",border:"none"}}>Login</Button>
            </Modal.Body>
          </Modal.Dialog>)
    }

    return (
        <div className="booking-ticket">
            <Row>
                <Col xs={12} md={12} sm={12} lg={9}>
                    <Tab.Container defaultActiveKey="first">
                        <Nav variant="pills" className="flex-row" className="navbar-booking">
                            <Nav.Item className="booking-item">
                                <Link to="/">
                                    <Image src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAMAAABHPGVmAAABNVBMVEUAAAD////////////////////////////////////////////////////////////////////////////////////////////7QibkNivkNCn/+/v9q577Si/+8/L/7uz62tj8jHvvh4D8g3HqX1bMzc37SC3Rvrv+9/bwkozsbVn/8/HMzc7kOS7mOyW/LSP+8O/5y8joUkj8QibvgXr8/f35+frQ0ND5SS/iNSrYMyj9ppnQMSb39vbg39/W1tbfNCnHLyT//fz9+fjv7+/8qZzwPSbz8/Pr6+vn5+fj4+Pb29v6xsLyopr5opTnnJHhlIj7Ryz+6ef9rqP0qaH5UzrlOjD7RSnqOyW6KyL/4t3kz8zgzcrQtrP9tar9sqfte3TCd3L6emftbVrsbFnpUj3mQjgGeX2GAAAAF3RSTlMA+9EF9vDruKakj2lPSS8sGQ3i4b69OIta07gAAAM+SURBVGje1drpUhNBFIbhnuwrYe9JIIoLERQJqAkkJmELsqNsIu77/V+CJrH8JsxUf52R6SrfG3iqq7t/nSOchXPpZChmyX/KioWS6VxYeDeSSYwSQBsaTWRGPIhwNh6RN1gknnWdZjgVlTdcNDXcbwyNywAaH3IakyEZSKFJGEPM8K/8PcvwhAysiT/3Ek7JAEv13lg2KgMsmu3+wbgMtHjnV2YiMtAiGSHCCRlwibDIjcmAG8uJtCUDzkqLpAy8pAjJwAuJmAy8mLBk4FlCGuh/QZrtilTEkJnzOW7srK20qqfTt30iM/cfz1OluTY7u/D+q31PoQiVUShQpXrw23jw3bZVilAZ+TxTqq2O8dC2lYpQGkyp7MNQKEJlUGVvBYZCEQqDKrswlIpQGExpw1ArghpQ3I8XBhSOwKBK9QAGUYTKgJI/cj9eGEwRKgPIk2XX44VBFaFtzG05jb0FGFQRusbSs+694PHCoIrQNpy334ZBFSDccL6xnTUYXAHCDShNGHqK0DWgVA9w51wBwg0olRYMTUVoGlBaKzA0FaE0fh72DFRrfPnwTcuAAuSo4HWQ056BGlflH09tVycXl7ar4uF15NbdvFt5PX/4Oe+sflVetD2M7XevVl3G9BQQLwVMoc8olxdxDnTxtrIPBQaQPkXZOoz+Lo+nKntQYAAhCowNGNcqPZ+Suy+hwACipdRgeCttKDCA6Ci1RtdQKTtdBQYQXaVnqJXm0SoMF0KVWp0YHWVLVs+LMFwIU+obHYMox1ty81OxBAMIUWDQTjrKxzMYQBQKHi/+ObuXzU3JESgwGjCIMi2RA+FKDQZFzrQQKHhY3MAf9EaoUn/j1wDClHX/BhCi1F74N4AQxafBESh+DY5A8W1wBMod7f8BQxNBj6BQgyH8LNxgCFe4QRGucIMjXOEGR+jt87fLEa5wgyNc4QZHuMINjnCFGxzhCjc4whVucIQr3OAIV7jBEa5wgyNcgaEfRhuDKKWBDAtDmgGU0jYMjWIYN+kqMHQLYXCmrRRh6JUcfAS4tDygYaWNDDONjGVNDJiNjMpNDP2NrC+YWMQwsVJiYjnGxJqPiYUlE6tXRpfIjKzD/QKIj6Xp8VGBdwAAAABJRU5ErkJggg=="></Image>
                                </Link>
                            </Nav.Item>
                            <Nav.Item className="booking-item">
                                <Nav.Link eventKey="first">01 CH???N GH??? V?? THANH TO??N</Nav.Link>
                            </Nav.Item>
                            <Nav.Item className="booking-item">
                                <Nav.Link eventKey="second">02 K???T QU??? ?????T V??</Nav.Link>
                            </Nav.Item>
                        </Nav>
                        <Tab.Content>
                            <Tab.Pane eventKey="first">
                                <div className="booking-screen">
                                    <Image src="https://tix.vn/app/assets/img/icons/screen.png"></Image>
                                </div>
                                <div className="listseat-res">
                                    <div className="listseat">
                                        {renderDsGHe()}
                                    </div>
                                </div>

                                <Row className="typeseat" style={{ marginTop: '20px' }}>
                                    <Col lg={2} sm={4} md={4} xs={4}>
                                        <div className="colorSeat" style={{ backgroundColor: "#3e515d" }}></div>
                                        <div className="noteSeat">Gh??? Th?????ng</div>
                                    </Col>
                                    <Col lg={2} sm={4} md={4} xs={4}>
                                        <div className="colorSeat" style={{ backgroundColor: "#f7b500" }}></div>
                                        <div className="noteSeat">Gh??? Vip</div>
                                    </Col>
                                    <Col lg={2} sm={4} md={4} xs={4}>
                                        <div className="colorSeat" style={{ backgroundColor: "green" }}></div>
                                        <div className="noteSeat">Gh??? ??ang Ch???n</div>
                                    </Col>
                                    <Col lg={2} sm={4} md={4} xs={4}>
                                        <div className="colorSeat" style={{ backgroundColor: "#ccc" }}></div>
                                        <div className="noteSeat">Gh??? ???? B??n</div>
                                    </Col>
                                    <Col lg={2} sm={4} md={4} xs={4}>
                                        <div className="colorSeat" style={{ backgroundColor: "orange" }}></div>
                                        <div className="noteSeat">Gh??? B???n ???? Mua</div>
                                    </Col>
                                </Row>
                                <Button onClick={handleShow} className="buyticket-mobile">Ti???p T???c</Button>
                            </Tab.Pane>
                            <Tab.Pane eventKey="second">
                                <div className="text-center mt-5">
                                <Link to="/history" style={{padding:"10px 20px",backgroundColor:"#ff1744",color:"#fff",fontWeight:"500",borderRadius:"10px",textDecoration:"none"}}>L???ch S??? ?????t V??</Link>
                                </div>
                            </Tab.Pane>
                        </Tab.Content>
                    </Tab.Container>
                </Col>
                <Col sm={3} className="buyticket">
                    <div className="total">
                        {DsGheDangDat?.reduce((TongTien, ghe) => {
                            return TongTien += ghe.giaVe;
                        }, 0)}
                    </div>
                    <div className="filmInfo">
                        <div className="nameFilm">{thongTinPhim?.tenPhim}</div>
                        <Image className="imginfo" src={thongTinPhim?.hinhAnh}></Image>
                    </div>
                    <div className="seatBooking">
                        <div className="title">Gh???: {_.orderBy(DsGheDangDat,['stt'])?.map((ghedd, index) => {
                            return <span key={index}>{ghedd.stt}, </span>
                        }
                        )}</div>
                        <div className="totalMoney">S??? Gh???: {DsGheDangDat.length}</div>
                    </div>
                    <div className="infoBookingFilm">
                        <div className="title">Ng??y Gi??? Chi???u: </div>
                        <div className="content">{thongTinPhim?.ngayChieu} - {thongTinPhim?.gioChieu}</div>
                    </div>
                    <div className="infoBookingFilm">
                        <div className="title">C???m R???p: </div>
                        <div className="content">{thongTinPhim?.tenCumRap}</div>
                    </div>
                    <div className="infoBookingFilm">
                        <div className="title">T??n R???p:</div>
                        <div className="content">{thongTinPhim?.tenRap}</div>
                    </div>
                    <div className="infoUser">
                        <div className="title">H??? T??n Kh??ch H??ng:</div>
                        <div className="content">{user?.hoTen}</div>
                    </div>
                    <div className="infoUser">
                        <div className="title">Email</div>
                        <div className="content">{user?.email}</div>
                    </div>
                    <Button onClick={() => {
                        const data = {
                            maLichChieu: thongTinPhim.maLichChieu,
                            danhSachVe: DsGheDangDat,
                        }
                        dispatch(postDatVeAction(data))
                    }
                    }
                        className="btnDatVe" disabled={DsGheDangDat.length > 0 ? false : true}>?????t V??</Button>
                </Col>
            </Row>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body >
                    <div>
                    <div className="total">
                        {DsGheDangDat?.reduce((TongTien, ghe) => {
                            return TongTien += ghe.giaVe;
                        }, 0)}
                    </div>
                    <div className="filmInfo">
                        <div className="nameFilm">{thongTinPhim?.tenPhim}</div>
                        <Image className="imginfo" src={thongTinPhim?.hinhAnh}></Image>
                    </div>
                    <div className="seatBooking">
                        <div className="title">Gh???: {DsGheDangDat?.map((ghedd, index) => {
                            return <span key={index}>{ghedd.stt}, </span>
                        }
                        )}</div>
                        <div className="totalMoney">S??? Gh???: {DsGheDangDat.length}</div>
                    </div>
                    <div className="infoBookingFilm">
                        <div className="title">Ng??y Gi??? Chi???u: </div>
                        <div className="content">{thongTinPhim?.ngayChieu} - {thongTinPhim?.gioChieu}</div>
                    </div>
                    <div className="infoBookingFilm">
                        <div className="title">C???m R???p: </div>
                        <div className="content">{thongTinPhim?.tenCumRap}</div>
                    </div>
                    <div className="infoBookingFilm">
                        <div className="title">T??n R???p:</div>
                        <div className="content">{thongTinPhim?.tenRap}</div>
                    </div>
                    <div className="infoUser">
                        <div className="title">H??? T??n Kh??ch H??ng:</div>
                        <div className="content">{user?.hoTen}</div>
                    </div>
                    <div className="infoUser">
                        <div className="title">Email</div>
                        <div className="content">{user?.email}</div>
                    </div>
                    <Button onClick={() => {
                        const data = {
                            maLichChieu: thongTinPhim.maLichChieu,
                            danhSachVe: DsGheDangDat,
                        }
                        dispatch(postDatVeAction(data))
                    }
                    }
                        className="btnDatVe" disabled={DsGheDangDat.length > 0 ? false : true}>?????t V??</Button>
                    </div>
                    
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="danger" onClick={() => {
                        const data = {
                            maLichChieu: thongTinPhim.maLichChieu,
                            danhSachVe: DsGheDangDat,
                        }
                        dispatch(postDatVeAction(data))
                    }
                    }>
                        Mua V??
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}
