import './style.scss'
import React, { useRef, useState } from "react";
import Milton from '../../images/milton.jpeg'
import Wagner from '../../images/wagner.jpeg'
import Junior from '../../images/junior.jpeg'
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
									<img src={Wagner} alt="" />
									<p>"-Antes da energia solar, pagávamos todo mês na padaria cerca de 2.000,00 reais todo mês a Cemig, após a instalação além de pagarmos apenas 45 reais em conta de energia sobra todo mes 200 kwh acumulando em cada mês, foi o melhor investimento que tivemos aqui, consegui usar o forno elétrico sem me preocupar novamente." </p>
									<h4>Wagner</h4>
									<span>Caldas - MG</span>
								</div>
							</SwiperSlide>
							<SwiperSlide>
								<div className='customer-card swiper-slide'>
									<img src={Junior} alt="" />
									<p>"- Sem dúvidas colocar energia solar foi muito bom pra gente sabe... com essa instabilidade de Governo entra e sai, com um país aonde a SELIC muda demais, um investimento seguro como a energia solar que o retorno anual é em média 33% é perfeito, estamos falando 3 vezes o valor da taxa SELIC, hoje pagamos o minimo aqui e eu pago o mesmo valor na parcela que eu pagava na conta de energia... Troquei o boleto pelo mesmo valor, mas agora pago pelo que é meu."</p>
									<h4>Junior</h4>
									<span>Bandeira do Sul - MG</span>
								</div>
							</SwiperSlide>
							<SwiperSlide>
								<div className='customer-card swiper-slide'>
									<img src={Milton} alt="" />
									<p>"-Olha, falar sobre a energia solar pra gente aqui é até muito fácil e simples, nós instalamos, a conta veio apartir da ligação no minimo e estamos muito satisfeitos com os serviços prestados e os prazos de instalação."</p>
									<h4>Milton</h4>
									<span>Bandeira do Sul - MG</span>
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