import "./ForWho.css";
import "./ForWhoResponsive.css";

const ForWho = () => {
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

						<div className="forWhoWrapper">
							<div className="forHer">
								<input
									type="radio"
									id="forHer"
									className="forHerInput forWhoInput"
									name="forWho"
								/>
								<label className="forWhoLabel" htmlFor="forHer">
									Для нее
								</label>
							</div>
							<div className="forHim">
								<input
									checked={true}
									type="radio"
									id="forHim"
									className="forHimInput forWhoInput"
									name="forWho"
								/>
								<label className="forWhoLabel" htmlFor="forHim">
									Для него
								</label>
							</div>
						</div>

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
						<div className="popular-products-body forHerContent">
							<div className="popular-product">
								<div className="grayBack">
									<img
										src="/Sources/banner-right-img.png"
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
										src="/Sources/pProductImg3.png"
										alt=""
										className="product-img"
									/>
								</div>
								<h4 className="p-product-name">Moschino</h4>
								<p className="p-product-size">Funny EdT 30ml</p>
								<p className="p-product-price">$30</p>
							</div>
						</div>
						<div className="popular-products-body forHimContent">
							<div className="popular-product">
								{" "}
								<div className="grayBack">
									<img
										src="/Sources/pProductImg2.png"
										alt=""
										className="product-img"
									/>
								</div>
								<h4 className="p-product-name">Moschino</h4>
								<p className="p-product-size">Uomo EdT 75ml</p>
								<p className="p-product-price">$20</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default ForWho;
