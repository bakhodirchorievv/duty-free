import "./Production.css";
import "./ProductionResponsive.css";

const Production = () => {
	return (
		<>
			<div className="productionWrapper">
				<h4 className="adminWord">Admin</h4>
				<ul className="actions">
					<li className="action-type onIt">Продукция</li>
					<li className="action-type">Заказы</li>
					<li className="action-type">Клиенты</li>
					<li className="action-type">Аналитика</li>
					<li className="action-type">Обратная связь</li>
				</ul>
				<ul className="catalogProducts">
					<li className="catalogProduct onIt">Каталог товаров</li>
				</ul>
				<div className="creatingProduct">
					<div className="createProductHead">
						<div className="createProductLeft">
							<h3 className="createProductLeftTitle createTitle">
								Категории
								<span className="redFont createTitlePlus"> +</span>
							</h3>
							<h3 className="readyProductName">Парфюмерия</h3>
							<div className="ageLimit">
								<p className="ageLimitDesc">Возрастное ограничение</p>
								<div className="toggleWrap">
									<input type="checkbox" id="check" className="switchInput" />
									<label htmlFor="check" className="switchBtn"></label>
								</div>
							</div>
							<h3 className="readyProductName">Алкоголь</h3>
							<div className="ageLimit">
								<p className="ageLimitDesc">Возрастное ограничение</p>
								<div className="toggleWrap">
									<input
										type="checkbox"
										id="checkAlco"
										className="switchInputAlco"
										checked={true}
									/>
									<label htmlFor="checkAlco" className="switchBtnAlco"></label>
								</div>
							</div>
						</div>
						<div className="createProductRight">
							<h3 className="createProductRightTitle createTitle">
								Создание товара
							</h3>
							<div className="createProductBody">
								<div className="addingInputsWrapper">
									<div className="file-upload-container">
										<input type="file" id="file-input" className="file-input" />
										<label htmlFor="file-input" className="file-label">
											<img
												src="/Sources/cameraImg.png"
												alt="Upload"
												className="camera-icon"
											/>
										</label>
									</div>
									<div className="fileDescAllInputs">
										<input
											type="text"
											className="productDescInput productBrandInput"
											placeholder="Бренд"
										/>
										<input
											type="text"
											className="productDescInput productNameInput"
											placeholder="Наименование"
										/>
										<div className="productPriceWrap">
											<input
												type="text"
												className="productDescPrice"
												placeholder="Установка цены"
											/>
											<select className="currencies" name="" id="">
												<option value="$">$</option>
											</select>
										</div>
										<select className="categoryOptions" name="" id="">
											<option value="Категория">Категория</option>
										</select>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="textAreaWrapper">
						<h4 className="productFullDescTitle">Описание товара</h4>
						<textarea className="textareaProductDesc"></textarea>
						<button className="addProductBtn">Добавить товар</button>
					</div>
				</div>
			</div>

			<div className="productionSecondWrapper">
				<h4 className="adminWord">Admin</h4>
				<ul className="actions">
					<li className="action-type onIt">Продукция</li>
					<li className="action-type">Заказы</li>
					<li className="action-type">Клиенты</li>
					<li className="action-type">Аналитика</li>
					<li className="action-type">Обратная связь</li>
				</ul>

				<ul className="catalogProducts">
					<li className="catalogProduct">Каталог товаров</li>
					<li className="catalogProduct onIt relativeCatalog">
						Поставщики <span className="absoluteSpan">+</span>
					</li>
				</ul>

				<ul className="productInfos">
					<li className="productInfo productCode">КОД</li>
					<li className="productInfo productName">НАИМЕНОВАНИЕ</li>
					<li className="productInfo productDoc">НАИМЕНОВАНИЕ</li>
				</ul>

				<ul className="productRealInfos">
					<li className="productRealInfo productRealCode">001</li>
					<li className="productRealInfo productRealName">ООО “DUTY FREE”</li>
					<li className="productRealInfo productRealDoc liHasImg">
						<span className="prosmotr">Просмотр </span>
						<img
							src="/Sources/downloadIndicator.png"
							alt=""
							className="downloadIndicator"
						/>
					</li>
				</ul>
			</div>

			<div className="productionThirdWrapper">
				<h4 className="adminWord">Admin</h4>
				<ul className="actions">
					<li className="action-type onIt">Продукция</li>
					<li className="action-type">Заказы</li>
					<li className="action-type">Клиенты</li>
					<li className="action-type">Аналитика</li>
				</ul>

				<ul className="catalogProducts">
					<li className="catalogProduct">Каталог товаров</li>
					<li className="catalogProduct onIt relativeCatalog">
						Поставщики <span className="absoluteSpan">+</span>
					</li>
				</ul>

				<ul className="productInfos">
					<li className="productInfo productCode">КОД</li>
					<li className="productInfo productName">НАИМЕНОВАНИЕ</li>
					<li className="productInfo productDoc">НАИМЕНОВАНИЕ</li>
				</ul>

				<ul className="productRealInfos">
					<li className="productRealInfo productRealCode">002</li>
					<li className="productRealInfo productRealName">
						<input type="text" />
					</li>
					<li className="productRealInfo productRealDoc liHasImg">Загрузить</li>
				</ul>
			</div>
		</>
	);
};

export default Production;
