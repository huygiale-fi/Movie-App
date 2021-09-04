import React, { Component } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { connect } from "react-redux";
import "./Banner.scss";
import Loader from "react-loader-spinner";
import { fetchBannerAction } from "../../../../store/action/movieActions";

class Banner extends Component {
    componentDidMount() {
        this.props.fetchBanner();
    }

    renderListBanner = () =>
        this.props.listBanner.map((banner) => (
            <div>
                <img src={banner.hinhAnh} alt="" />
            </div>
        ));

    render() {
        const settings = {
            dots: true,
            infinite: true,
            autoplay: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
        };

        const { isLoading } = this.props;

        if (isLoading) {
            return (
                <Loader type="Bars" color="#00BFFF" height={80} width={80} />
            );
        } else {
            return (
                <section className="banner">
                    <Slider {...settings}>{this.renderListBanner()}</Slider>
                </section>
            );
        }
    }
}

const mapStateToProps = (state) => ({
    listBanner: state.bannerReducer.listBanner,
    isLoading: state.bannerReducer.isLoading,
});

const mapDispatchToProps = (dispatch) => ({
    fetchBanner: () => dispatch(fetchBannerAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Banner);
