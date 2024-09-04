import { Link } from "react-router-dom";
import "./MainPage.css";
import "./MainPageResponsive.css";

const MainPage = () => {
	return (
		<div>
			<div className="mainPageWrapper">
				<div className="banner-part">
					<div className="left-side">
						<h1 className="mainPage-title">ТОП ПРОДАЖ!</h1>

						<h3 className="mainParfume-name">Moschino Funny EdT 50ml</h3>
						<p className="real-price">$20</p>

						<button className="mainWatch-product">Смотреть продукт</button>
					</div>
					<div className="right-side">
						<img
							src="/duty-free/Sources/banner-right-img.png"
							alt=""
							className="mainBanner-right"
						/>
					</div>
					{/* <img
						src="/duty-free/Sources/banner-dots.png"
						alt=""
						className="banner-dots"
					/> */}
					<div className="banner-dots">
						<div className="bannerDot onThisDot"></div>
						<div className="bannerDot"></div>
						<div className="bannerDot"></div>
						<div className="bannerDot"></div>
					</div>
				</div>

				<div className="popular-products">
					<div className="popular-head">
						<h3 className="popular-products-title">Популярные товары</h3>
						<Link to={"/catalogpro"}>
							<p className="seeAll">Смотреть все</p>
						</Link>
					</div>
					<div className="Mpopular-products-body">
						<div className="Mpopular-product">
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
						<div className="Mpopular-product">
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
						<div className="Mpopular-product">
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
						<div className="Mpopular-product">
							{" "}
							<div className="grayBack">
								<img
									src="/duty-free/Sources/pProductImg4.png"
									alt=""
									className="product-img"
								/>
							</div>
							<h4 className="p-product-name">Jagermeister 1L</h4>
							<p className="p-product-price">
								$17 <span className="formerPrice">$18</span>
							</p>
							<p className="discount">7%</p>
						</div>
						<div className="Mpopular-product">
							{" "}
							<div className="grayBack">
								<img
									src="/duty-free/Sources/pProductImg5.png"
									alt=""
									className="product-img"
								/>
							</div>
							<h4 className="p-product-name">The Claymore whisky 1L</h4>
							<p className="p-product-price">
								$9<span className="formerPrice"> $10</span>
							</p>
							<p className="discount">7%</p>
						</div>
						<div className="Mpopular-product">
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
								$17<span className="formerPrice"> $18</span>
							</p>
							<p className="discount">7%</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default MainPage;
