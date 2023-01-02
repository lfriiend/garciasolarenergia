import './style.scss'
import React, { useRef, useState } from "react";
import House from '../../images/house.png'
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function CustomerSatisfaction() {

	return (
		<section className='container-customer' id='customer'>
			<div className='grid-container3'>
				<div className='customer-intro customer'>
					<h4>Depoimentos</h4>
					<h2>O que nossos clientes dizem</h2>
					<p>Nós colocamos grande valor em fortalecer relações e ter visto o benefício que trouxeram para nosso negócio. O feedback do nosso cliente é vital em nos ajudar para continuar no caminho certo!</p>
				</div>
				<div className='swiper mySwiper'>
					<div className='customers-cards swiper-wrapper'>
						<Swiper
							slidesPerView={1}
							spaceBetween={30}
							loop={true}
							pagination={{
								clickable: true,
							}}
							navigation={true}
							modules={[Pagination, Navigation]}
							className="mySwiper"
						>
							<SwiperSlide>
								<div className='customer-card swiper-slide'>
									<img src={House} alt="" />
									<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque placerat condimentum facilisis. Quisque laoreet purus. Pellentesque placerat condimentum facilisis. Quisque laoreet purus </p>
									<h4>Lucas</h4>
									<span>Morador ZN</span>
								</div>
							</SwiperSlide>
							<SwiperSlide>
								<div className='customer-card swiper-slide'>
									<img src={House} alt="" />
									<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque placerat condimentum facilisis. Quisque laoreet purus. Pellentesque placerat condimentum facilisis. Quisque laoreet purus</p>
									<h4>Leandro</h4>
									<span>Supermercado</span>
								</div>
							</SwiperSlide>
							<SwiperSlide>
								<div className='customer-card swiper-slide'>
									<img src={House} alt="" />
									<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque placerat condimentum facilisis. Quisque laoreet purus. Pellentesque placerat condimentum facilisis. Quisque laoreet purus</p>
									<h4>Leonardo</h4>
									<span>Morador ZL</span>
								</div>
							</SwiperSlide>
						</Swiper>
					</div>
					<div class="swiper-button-next"></div>
					<div class="swiper-button-prev"></div>
					<div class="swiper-pagination"></div>
				</div>
			</div>
		</section>
	)
}