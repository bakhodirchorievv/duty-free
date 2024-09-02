import "./Alcohol.css";
import "./AlcoholResponsive.css";

const Alcohol = () => {
	return (
		<>
			<div className="catalogWrapper">
				<h2 className="catalogTitle">Алкоголь</h2>

				<div className="catalogBody">
					<div className="catalogLeftSide">
						<div className="catalogSearchWrap">
							<input
								type="text"
								className="catalogFirstInput"
								placeholder="Поиск"
							/>
							<img
								src="/Sources/realSearchIcon.png"
								alt=""
								className="catalogSearchIcon"
							/>
						</div>

						<select name="" id="" className="catalogFirstSelect">
							<option value="">Сортировать по</option>
						</select>
						<select name="" id="" className="catalogFirstSelect">
							<option value="">Бренд</option>
						</select>
						<select name="" id="" className="catalogFirstSelect">
							<option value="">Тип</option>
						</select>
						<select name="" id="" className="catalogFirstSelect">
							<option value="">Страна происхождения</option>
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
								{" "}
								<div className="grayBack">
									<img
										src="/Sources/pProductImg4.png"
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
										src="/Sources/pProductImg5.png"
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
							<div className="popular-product">
								{" "}
								<div className="grayBack">
									<img
										src="/Sources/pProductImg6.png"
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

			<div className="alcoholLimit">
				<div className="eighteenRelative">
					<img
						src="/Sources/18PlusImg.png"
						alt=""
						className="eighteenPlusImg"
					/>
					<p className="alcoLimitDesc">
						Сайт содержит информацию, которая не рекомендована лицам, не
						достигшим совершеннолетия. Для входа на сайт, подтвердите свой
						возраст.
					</p>
					<div className="eighteenPlusBtns">
						<button className="eighteenPlusBtn redBack18Plus">
							Подтверждаю, мне есть 18 лет
						</button>
						<button className="eighteenPlusBtn">Мне не 18 лет</button>
					</div>
					<img
						src="/Sources/18PlusCloseImg.png"
						alt=""
						className="eighteenPlusClose"
					/>
				</div>
			</div>

			<div className="overlayAlcohol"></div>
		</>
	);
};

export default Alcohol;
