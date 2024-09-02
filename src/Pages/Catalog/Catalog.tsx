import "./Catalog.css";
import "./CatalogResponsive.css";

const Catalog = () => {
	return (
		<>
			<div className="catalogWrapper">
				<h2 className="catalogTitle">Популярные товары</h2>

				<div className="catalogBody">
					<div className="catalogLeftSide">
						<div className="catalogSearchWrap">
							<input
								type="text"
								className="catalogFirstInput"
								placeholder="Поиск"
							/>
							<img
								src="/duty-free/Sources/realSearchIcon.png"
								alt=""
								className="catalogSearchIcon"
							/>
						</div>

						<select name="" id="" className="catalogFirstSelect">
							<option value="">Сортировать по</option>
						</select>
						<select name="" id="" className="catalogFirstSelect">
							<option value="">Категория</option>
						</select>

						<div className="rangeSliderWrapper">
							<p className="sliderPrice">Цена: $20 - $1000 </p>
						</div>

						<div className="discountProduct">
							<p className="discountDesc">Товар со скидкой</p>
							<input
								checked={true}
								type="checkbox"
								id="performCheck"
								className="performSwitchInput"
							/>
							<label
								htmlFor="performCheck"
								className="performSwitchBtn"
							></label>
						</div>
					</div>
					<div className="catalogRightSide">
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
							<div className="popular-product">
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
									$9<span className="formerPrice">$10</span>
								</p>
								<p className="discount">7%</p>
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
			</div>
		</>
	);
};

export default Catalog;
