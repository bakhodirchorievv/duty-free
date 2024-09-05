import { Link } from "react-router-dom";
import "./OService.css";
import "./OServiceResponsive.css";

const OService = () => {
	return (
		<>
			<div className="moreInfoWrapper">
				<div className="moreInfoHead">
					<div className="moreInfoHeadLeft">
						<div className="infoHeadleftItems">
							<div className="infoHeadLeftItemWrap">
								<img
									src="/duty-free/Sources/topProduct-first.png"
									alt=""
									className="infoHeadleftItem"
								/>
							</div>
							<div className="infoHeadLeftItemWrap">
								<img
									src="/duty-free/Sources/topProduct-first.png"
									alt=""
									className="infoHeadleftItem"
								/>
							</div>
							<div className="infoHeadLeftItemWrap">
								<img
									src="/duty-free/Sources/topProduct-first.png"
									alt=""
									className="infoHeadleftItem"
								/>
							</div>
							<div className="infoHeadLeftItemWrap mtNone">
								<img
									src="/duty-free/Sources/topProduct-first.png"
									alt=""
									className="infoHeadleftItem"
								/>
							</div>
						</div>

						<div className="infoHeadMainImgWrap">
							<img
								src="/duty-free/Sources/topProduct-first.png"
								alt=""
								className="infoHeadMainImg"
							/>
							<div className="justBorders">
								<div className="justBorder redBorderOn"></div>
								<div className="justBorder"></div>
								<div className="justBorder"></div>
								<div className="justBorder"></div>
							</div>
						</div>
					</div>

					<div className="moreInfoHeadRight">
						<div className="infoRightHeadTop">
							<h4 className="perfumeName">Moschino</h4>
							<p className="perfumeMl">Funny EdT 50ml</p>
							<h3 className="perfumeRealPrice">$20</h3>
							<h4 className="perfumeName">Парфюмерия</h4>
						</div>

						<div className="infoRightHeadBottom">
							<h3 className="perfumeProDesc perfumeName">Описание товара</h3>
							<p className="perfumeProRealDesc">
								Это восхитительный, игривый аромат, дерзкий и возбуждающий,
								ослепительный и волнующий. Фруктовые нотки, пикантно оттеняющие
								цветочный аккорд, придают аромату шарм и наполняют его жизненной
								энергией, легкостью и спонтанностью. Аромат: Цитрусовый,
								цветочный, древесный. ВЕРХНИЕ НОТЫ: Розовый перец, Горький
								апельсин, Красная смородина; СРЕДНИЕ НОТЫ: Зелёный чай, Жасмин,
								Пион, Фиалка; ШЛЕЙФ: Кедр, Амбра, Мускус с оттенком мха.
							</p>
						</div>
					</div>
				</div>

				<div className="moreInfoCenter">
					<div className="moreInfocenterHead">
						<h3 className="moreInfoSection">
							{" "}
							<Link to={"/moreinfo"}>Дополнительная информация</Link>
						</h3>

						<h3 className="moreInfoSection sectionFocus">
							<Link to={"/oservice"}>О работе сервиса </Link>
						</h3>

						<h3 className="moreInfoSection">
							{" "}
							<Link to={"/currencyconvert"}>Конвертер валют</Link>
						</h3>
					</div>

					<ul className="productFullDesc">
						<li className="proFullDesc">
							1. Выберите аэропорт и нужные Вам товары
						</li>
						<li className="proFullDesc">
							2. Ваш предварительный заказ будет собран заранее
						</li>
						<li className="proFullDesc">
							3. Заберите свой заказ удобным для Вас способом
						</li>
					</ul>
				</div>

				<div className="lastSeenProducts">
					<h3 className="lastSeenProTitle">Последние просмотренные товары</h3>

					<div className="lastSeenProBody">
						<div className="popular-products-body">
							<div className="popular-product">
								<div className="grayBack">
									<img
										src="/duty-free/Sources/banner-right-img.png"
										alt=""
										className="product-img firstProductImg"
									/>
								</div>
								<h4 className="p-product-name">Moschino</h4>
								<p className="p-product-size">Funny EdT 50ml</p>
								<p className="p-product-price">$20</p>
							</div>
							<div className="popular-product">
								{" "}
								<div className="grayBack">
									<img
										src="/duty-free/Sources/pProductImg2.png"
										alt=""
										className="product-img"
									/>
								</div>
								<h4 className="p-product-name">Moschino</h4>
								<p className="p-product-size">Uomo EdT 75ml</p>
								<p className="p-product-price">$20</p>
							</div>
							<div className="popular-product">
								{" "}
								<div className="grayBack">
									<img
										src="/duty-free/Sources/pProductImg3.png"
										alt=""
										className="product-img"
									/>
								</div>
								<h4 className="p-product-name">Moschino</h4>
								<p className="p-product-size">Funny EdT 30ml</p>
								<p className="p-product-price">$30</p>
							</div>
							<div className="popular-product">
								{" "}
								<div className="grayBack">
									<img
										src="/duty-free/Sources/pProductImg6.png"
										alt=""
										className="product-img"
									/>
								</div>
								<h4 className="p-product-name">
									Bushmills original irish whiskey 1L{" "}
								</h4>
								<p className="p-product-price">
									$17<span className="formerPrice">$18</span>
								</p>
								<p className="discount">7%</p>
							</div>
						</div>
					</div>
				</div>

				<img src="/duty-free/Sources/empty.png" alt="" className="emptyHeart" />
			</div>
		</>
	);
};

export default OService;
