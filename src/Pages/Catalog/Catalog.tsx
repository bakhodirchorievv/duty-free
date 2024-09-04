import { useEffect, useState } from "react";
import "./Catalog.css";
import "./CatalogResponsive.css";
import { Link } from "react-router-dom";

const Catalog = () => {
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
								<option value="">Категория</option>
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
							<div className="popular-productC">
								<div className="grayBack">
									<Link to={"/moreinfo"}>
										<img
											src="/duty-free/Sources/banner-right-img.png"
											alt=""
											className="product-img firstProductImg"
										/>
									</Link>
								</div>
								<h4 className="p-product-name">Moschino</h4>
								<p className="p-product-size">Funny EdT 50ml</p>
								<p className="p-product-price">$20</p>
							</div>
							<div className="popular-productC">
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
							<div className="popular-productC">
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
							<div className="popular-productC">
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
							<div className="popular-productC">
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
							<div className="popular-productC">
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
