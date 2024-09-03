import { useEffect, useState } from "react";
import "./Alcohol.css";
import "./AlcoholResponsive.css";

const Alcohol = () => {
	const [minPrice, setMinPrice] = useState<number>(0);
	const [maxPrice, setMaxPrice] = useState<number>(1000);

	const gradientStyle = {
		background: `linear-gradient(to right, 
		  rgba(96, 97, 97, 0.6) 0%, 
		  rgba(96, 97, 97, 0.6) ${minPrice / 10}%, 
		  rgba(255, 0, 20, 1) ${minPrice / 10}%, 
		  rgba(255, 0, 20, 1) ${maxPrice / 10}%, 
		  rgba(96, 97, 97, 0.6) ${maxPrice / 10}%, 
		  rgba(96, 97, 97, 0.6) 100%)`,
	};

	useEffect(() => {
		document.documentElement.style.setProperty(
			"--min-price",
			`${minPrice / 10}%`
		);
		document.documentElement.style.setProperty(
			"--max-price",
			`${maxPrice / 10}%`
		);
	}, [minPrice, maxPrice]);

	const handleMinPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const value = Number(e.target.value);
		if (value <= maxPrice) {
			setMinPrice(value);
		}
	};

	const handleMaxPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const value = Number(e.target.value);
		if (value >= minPrice) {
			setMaxPrice(value);
		}
	};

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
								src="/duty-free/Sources/realSearchIcon.png"
								alt=""
								className="catalogSearchIcon"
							/>
						</div>

						<div className="catalogSelectWrap">
							<select name="" id="" className="catalogFirstSelect">
								<option value="">Сортировать по</option>
							</select>
							<img
								src="/duty-free/Sources/arrowOpen.svg"
								alt=""
								className="arrowOpenCatalog"
							/>
						</div>
						<div className="catalogSelectWrap">
							<select name="" id="" className="catalogFirstSelect">
								<option value="">Бренд</option>
							</select>
							<img
								src="/duty-free/Sources/arrowOpen.svg"
								alt=""
								className="arrowOpenCatalog"
							/>
						</div>
						<div className="catalogSelectWrap">
							<select name="" id="" className="catalogFirstSelect">
								<option value="">Тип</option>
							</select>
							<img
								src="/duty-free/Sources/arrowOpen.svg"
								alt=""
								className="arrowOpenCatalog"
							/>
						</div>
						<div className="catalogSelectWrap">
							<select name="" id="" className="catalogFirstSelect">
								<option value="">Страна происхождения</option>
							</select>
							<img
								src="/duty-free/Sources/arrowOpen.svg"
								alt=""
								className="arrowOpenCatalog"
							/>
						</div>

						<div className="rangeSliderWrapper">
							<div className="sliderContainer">
								<input
									type="range"
									min="0"
									max="1000"
									step="10"
									className="rangeSlider"
									value={minPrice}
									onChange={handleMinPriceChange}
									style={gradientStyle}
								/>
								<input
									type="range"
									min="0"
									max="1000"
									step="10"
									className="rangeSlider"
									value={maxPrice}
									onChange={handleMaxPriceChange}
									style={gradientStyle}
								/>
							</div>
							<p className="sliderPrice">
								Цена: ${minPrice} - ${maxPrice}
							</p>
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
									$9<span className="formerPrice"> $10</span>
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
						src="/duty-free/Sources/18PlusImg.png"
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
						src="/duty-free/Sources/18PlusCloseImg.png"
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
