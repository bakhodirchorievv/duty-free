import { useEffect, useState } from "react";
import "./ForHer.css";
import "./ForHerResponsive.css";
import { Link } from "react-router-dom";

const ForHer = () => {
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
				<h2 className="catalogTitle">Парфюмерия</h2>

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

						<div className="forWhoWrapper">
							<div className="forHer">
								<input
									checked={true}
									type="radio"
									id="forHer"
									className="forHerInput forWhoInput"
									name="forWho"
								/>
								<label className="forWhoLabel" htmlFor="forHer">
									Для нее
								</label>
							</div>
							<Link to={"/perfume"}>
								<div className="forHim">
									<input
										type="radio"
										id="forHim"
										className="forHimInput forWhoInput"
										name="forWho"
									/>
									<label className="forWhoLabel" htmlFor="forHim">
										Для него
									</label>
								</div>
							</Link>
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
						<div className="popular-products-bodyP forHerContent">
							<div className="popular-product">
								<div className="grayBackP">
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
								<div className="grayBackP">
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
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default ForHer;
