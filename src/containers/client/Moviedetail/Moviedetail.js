import React, { useEffect } from 'react'
import './Moviedetail.scss'
import { CustomCard } from '@tsamantanis/react-glassmorphism'
import { AiFillStar } from 'react-icons/ai'
import { FaWallet } from 'react-icons/fa'
import { MdLocalMovies } from 'react-icons/md'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { fetchInfoShowtimeAction } from 'store/action/showtimesAction'
export default function Moviedetail() {
    const dispatch = useDispatch();
    const { showtime } = useSelector(state => state.showtimeReducer);
    const { id } = useParams();
    useEffect(() => {
        dispatch(fetchInfoShowtimeAction(id))
    }, [])
    return (
        <div>
            <div className="moviedetail-bg" style={{ backgroundImage: `url(${showtime.hinhAnh})`, minHeight: '400px' }}>
                <CustomCard
                    style={{ paddingTop: '200px', minHeight: '400px', position: 'relative' }}
                    effectColor="#060f19" // required
                    color="#fff" // default color is white
                    blur={10} // default blur value is 10px
                    borderRadius={0} // default border radius value is 10px
                >
                </CustomCard>
            </div>
            <div className="vh-100" style={{ backgroundColor: '#060f19' }}>
                <div className="moviedetail-card">
                    <div className="row">
                        <div className="col-4">
                            <div className="moviedetail-img">
                                <img src={showtime.hinhAnh}></img>
                            </div>
                        </div>
                        <div className="col-8">
                            <div className="moviedetail-namemovie">
                                <h3>{showtime.tenPhim}</h3>
                            </div>
                            <div className="moviedetail-type">
                                <button className="moviedetail-type-btn">Anime</button>
                                <button className="moviedetail-type-btn">Legiahuy</button>
                                <button className="moviedetail-type-btn">{showtime.maNhom}</button>
                            </div>
                            <div className="moviedetail-mota">
                                <p>{showtime.moTa?.length > 250 ? showtime.moTa?.substring(0,250)+ ' ...':showtime.moTa}</p>
                            </div>
                            <div className="moviedetail-rating">
                                <div className="moviedetail-rating-flex">
                                    <AiFillStar className="moviedetail-rating-star" /><span className="moviedetail-rating-ibm">{showtime.danhGia}</span><span>IBM Rating</span>
                                </div>
                            </div>
                            <div className="moviedetail-btn">
                                <button className="moviedetail-btn-buy"> <FaWallet style={{ marginBottom: '4px', marginRight: '4px' }} /> Mua vé</button>
                                <button className="moviedetail-btn-trailer"> <MdLocalMovies style={{ marginBottom: '4px', marginRight: '4px' }} />Trailer</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
