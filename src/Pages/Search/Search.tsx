import "./Search.css";
import "./SearchResponsive.css";

const Search = () => {
	return (
		<>
			<div className="searchPage">
				<input type="text" className="searchPageInput" placeholder="Поиск" />

				<div className="searchPageBody">
					<div className="searchLeftSide">
						<h2 className="searchREsultTitle">Результаты поиска</h2>
						<ul className="searchResults">
							<li className="searchResult">Moschino Funny</li>
							<li className="searchResult">Moschino Funny Edt 50ml</li>
							<li className="searchResult">Moschino Funny Edt 30ml</li>
							<li className="searchResult">Moschino Uomo Edt 30ml</li>
							<li className="searchResult">Moschino Uomo Edt 75ml</li>
						</ul>
					</div>
					<div className="searchRightSide">
						<div className="searchedProduct">
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
						<div className="searchedProduct">
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
						<div className="searchedProduct">
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
					</div>
				</div>
			</div>
		</>
	);
};

export default Search;
