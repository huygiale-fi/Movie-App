import React,{useEffect} from "react";
import { Link, useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import "./Header.scss";
import {Dropdown} from 'react-bootstrap'
import { postUserAction,LogoutAction } from "store/action/authAction";
export default function Header() {
    const history = useHistory()
    const dispatch = useDispatch()
    const {user,userpost} = useSelector(state => state.authReducer)
    console.log(user);
    const islogged = user ? true : false;
    const onLogout = (e) => {
        e.preventDefault();
        dispatch(LogoutAction())
        history.push("/")
    }
    useEffect(() => {
        if(islogged){
            dispatch(postUserAction())
        }
    }, [islogged])
  return (
    <section className="header ">
      <nav className="navbar navbar-expand-sm navbar-light justify-content-between">
        <div className="container">
          <div className="name">
            <img src="./images/R.png" alt="" width="200px" height="200px" />
            <Link className="navbar-brand" to="/">
              Cinema Booking
            </Link>
          </div>
          <button
            className="navbar-toggler d-lg-none"
            type="button"
            data-toggle="collapse"
            data-target="#collapsibleNavId"
            aria-controls="collapsibleNavId"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div
            className="collapse navbar-collapse justify-content-around flex-grow-1"
            id="collapsibleNavId"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item dropdownhihi">
                <Link className="nav-link" aria-disabled to="/">
                  Phim
                </Link>
                <div className="dropdown-menu-content">
                  <ul>
                    <li><Link to="/nowshowing">Đang Chiếu</Link></li>
                    <li><Link to="/comingsoon">Sắp Chiếu</Link></li>
                  </ul>
                </div>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/news">
                  News
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/application">
                  Application
                </Link>
              </li>
            </ul>
          </div>
          <div
            className="collapse navbar-collapse flex-grow-0"
            id="collapsibleNavId"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <i className="fa fa-user"></i>
                {!userpost ? (<Link className="nav-link btn btn-primary" to="/login">
                  LOGIN
                </Link>):(
                    <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                     {userpost.hoTen?.length > 9 ? userpost.hoTen?.substring(0,9) : userpost.hoTen}
                    </Dropdown.Toggle>
                  
                    <Dropdown.Menu classname="dropdown-user">
                    <Dropdown.Item > <Link to="/userinfo" >Your Info</Link></Dropdown.Item>
                    <Dropdown.Item> <Link to="/history">History Booking Ticket</Link> </Dropdown.Item>
                    <Dropdown.Item onClick={onLogout}><Link  to="/logout"></Link>Logout</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                )}
                
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </section>
  );
}


