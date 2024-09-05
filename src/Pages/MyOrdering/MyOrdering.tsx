import "./MyOrdering.css";
import "./MyOrderingResponsive.css";

const MyOrdering = () => {
	const handleNewOrdering = () => {
		const realNewOrdering = document.querySelector(
			".realNewOrdering"
		) as HTMLElement;
		if (realNewOrdering.classList.contains("getNone")) {
			realNewOrdering.classList.remove("getNone");
			document.body.style.overflowY = "hidden";
		} else {
			realNewOrdering.classList.add("getNone");
			document.body.style.overflowY = "visible";
		}
	};

	return (
		<div className="allOrderingWrapper">
			<div className="myOrderingWrapper">
				<div className="myOrderingHead">
					<div className="orderingHeadItem">
						<img
							src="/duty-free/Sources/orderingHead1.svg"
							alt=""
							className="orderingHeadItemImg"
						/>
						<p className="orderingHeadItemDesc">Выберите желаемые товары</p>
					</div>
					<div>
						<img
							src="/duty-free/Sources/orderingDashImg.svg"
							alt=""
							className="orderingHeadDash"
						/>
					</div>
					<div className="orderingHeadItem">
						<img
							src="/duty-free/Sources/orderingHead2.svg"
							alt=""
							className="orderingHeadItemImg"
						/>
						<p className="orderingHeadItemDesc">
							Выберите исполнителя и договорись о сделке
						</p>
					</div>
					<div>
						<img
							src="/duty-free/Sources/orderingDashImg.svg"
							alt=""
							className="orderingHeadDash"
						/>
					</div>
					<div className="orderingHeadItem">
						<img
							src="/duty-free/Sources/orderingHead3.png"
							alt=""
							className="orderingHeadItemImg"
						/>
						<p className="orderingHeadItemDesc">Оплатите товары </p>
					</div>
					<div>
						<img
							src="/duty-free/Sources/orderingDashImg.svg"
							alt=""
							className="orderingHeadDash"
						/>
					</div>
					<div className="orderingHeadItem">
						<img
							src="/duty-free/Sources/orderingHead4.png"
							alt=""
							className="orderingHeadItemImg"
						/>
						<p className="orderingHeadItemDesc">
							Заберите заказ удобным для себя способом
						</p>
					</div>
				</div>

				<div className="newOrder">
					<div className="orderingGeneralTitle newOrderTitle">Новый заказ</div>

					<div className="newOrderMessageWrap">
						<textarea
							name=""
							id=""
							className="newOrderMessage"
							placeholder="Опиши желаемые товары (ссылки или изображения помогут лучше понять, что требуется)"
						></textarea>

						<div className="doOrderingWrap">
							<div className="fileUploadWrap">
								<input
									type="file"
									id="fileOrderingInput"
									className="fileOrderingInput"
								/>
								<label
									htmlFor="fileOrderingInput"
									className="fileOrderingLabel"
								>
									<img
										src="/duty-free/Sources/uploadingImg.png"
										alt=""
										className="uploadingImg"
									/>
									Прикрепить файл
								</label>
							</div>
							<button onClick={handleNewOrdering} className="doOrderBtn">
								Создать заказ
							</button>
						</div>
					</div>
				</div>

				<div className="myOrders">
					<h2 className="orderingGeneralTitle myOrdersTitle">
						Мои заказы <span className="pinkBackFont">ВСЕ ЗАКАЗЫ</span>
					</h2>

					<div className="allOrdersWrapper">
						<div className="allOrderItem">
							<div className="orderItemHead">
								<button className="inProccess">В процессе</button>
								<h3 className="numberOfOrder">Заказ №123</h3>
							</div>

							<div className="orderItemBody">
								<p className="orderItemInfo orderItemNickname">
									Исполнитель: <span className="lighterSpan">Nickname</span>
								</p>
								<p className="orderItemInfo orderItemPrice">
									Сумма заказа: <span className="orderPriceWeight">20$</span>
								</p>
								<p className="orderItemInfo orderItemAddress">
									Доставка: <span className="lighterSpan">улица, дом </span>
								</p>
							</div>

							<div className="orderItemFoot">
								<p className="orderItemDate">
									Создан<span className="orderPriceWeight"> 25.05.24</span>
								</p>
								<button className="orderItemState">В заказ</button>
							</div>
						</div>
					</div>
				</div>

				<div className="popProducts">
					<h2 className="orderingGeneralTitle popProductsTitle">
						Популярные товары
					</h2>

					<div className="popProducts-body">
						<div className="popProduct-item">
							<div className="popProductGrayBack">
								<img
									src="/duty-free/Sources/topProduct-first.png"
									alt=""
									className="popProductImg"
								/>
							</div>
							<p className="popProductDesc">
								ТОП ПРОДАЖ <span className="pinkFont">БЕЗ СКИДКИ</span>
							</p>
							<p className="popProductPrice">$20</p>
							<p className="popProductName">Moschino Funny EdT 50ml</p>
						</div>
						<div className="popProduct-item">
							<div className="popProductGrayBack">
								<img
									src="/duty-free/Sources/topProduct-second.png"
									alt=""
									className="popProductImg"
								/>
							</div>
							<p className="popProductDesc">
								<span className="pinkFont">-7%</span> ТОП ПРОДАЖ
							</p>
							<p className="popProductPrice">
								$17 <span className="oldPrice">$18</span>
							</p>
							<p className="popProductName">Jagermeister 1L</p>
						</div>
						<div className="popProduct-item">
							<div className="popProductGrayBack">
								<img
									src="/duty-free/Sources/topProduct-third.png"
									alt=""
									className="popProductImg"
								/>
							</div>
							<p className="popProductDesc">
								<span className="pinkFont">-7%</span> ТОП ПРОДАЖ
							</p>
							<p className="popProductPrice">
								$9 <span className="oldPrice">$10</span>
							</p>
							<p className="popProductName">The Claymore whisky 1L</p>
						</div>
						<div className="popProduct-item">
							<div className="popProductGrayBack">
								<img
									src="/duty-free/Sources/topProduct-fourth.png"
									alt=""
									className="popProductImg"
								/>
							</div>
							<p className="popProductDesc">
								ТОП ПРОДАЖ <span className="pinkFont">БЕЗ СКИДКИ</span>
							</p>
							<p className="popProductPrice">$30</p>
							<p className="popProductName">Moschino Funny EdT 100ml</p>
						</div>
						<div className="popProduct-item">
							<div className="popProductGrayBack">
								<img
									src="/duty-free/Sources/topProduct-fifth.png"
									alt=""
									className="popProductImg"
								/>
							</div>
							<p className="popProductDesc">
								ТОП ПРОДАЖ <span className="pinkFont">БЕЗ СКИДКИ</span>
							</p>
							<p className="popProductPrice">$20</p>
							<p className="popProductName">Moschino Uomo EdT 75ml</p>
						</div>
						<div className="popProduct-item">
							<div className="popProductGrayBack">
								<img
									src="/duty-free/Sources/topProduct-sixth.png"
									alt=""
									className="popProductImg"
								/>
							</div>
							<p className="popProductDesc">
								<span className="pinkFont">-7%</span> ТОП ПРОДАЖ
							</p>
							<p className="popProductPrice">
								{" "}
								$17 <span className="oldPrice">$18</span>
							</p>
							<p className="popProductName">
								Bushmills Original Irish Whiskey 40% 1L
							</p>
						</div>
					</div>
				</div>

				<div className="recommendations">
					<h2 className="orderingGeneralTitle recommendTitle">
						Рекомендованные исполнители{" "}
						<span className="pinkBackFont">ВСЕ ИСПОЛНИТЕЛИ</span>
					</h2>

					<div className="recommendationBody">
						<div className="recoItem">
							<div className="recommendationHead">
								<div className="recoHeadLeft">
									<img
										src="/duty-free/Sources/recoUserImg.png"
										alt=""
										className="recoUserImg"
									/>
								</div>
								<div className="recoHeadRight">
									<h3 className="realNickName">Nickname</h3>
									<img
										src="/duty-free/Sources/realStars.svg"
										alt=""
										className="recoStarImg"
									/>
									<div className="recoRightPeriod">
										<img
											src="/duty-free/Sources/realClockIcon.svg"
											alt=""
											className="recoRightClock"
										/>
										<p className="recoRightDesc">&gt;1 года на сервисе</p>
									</div>
								</div>
							</div>

							<div className="recoFoot">
								<p className="controlCountry">
									Основные направления:{" "}
									<span className="lighterSpan">Россия, Германия</span>
								</p>

								<button className="recoOfferBtn">
									Предложить исполнить заказ
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="realNewOrdering getNone">
				<div className="relativeInAbsolute">
					<h2 className="realNewOrderTitle">Новый заказ</h2>
					<div className="realNewOrderBody">
						<h3 className="realNewOrderGeneralTitle">
							Опишите, что желаете приобрести
						</h3>
						<div className="realnewOrderMessageWrap">
							<textarea
								name=""
								id=""
								className="realnewOrderMessage"
								placeholder="Описание заказа"
							></textarea>
							<div className="realdoOrderingWrap">
								<div className="realfileUploadWrap">
									<input
										type="file"
										id="fileOrderingInput"
										className="realfileOrderingInput"
									/>
									<label
										htmlFor="fileOrderingInput"
										className="realfileOrderingLabel"
									>
										<img
											src="/duty-free/Sources/uploadingImg.png"
											alt=""
											className="realuploadingImg"
										/>
										Прикрепить файл
									</label>
								</div>
							</div>
						</div>
						<div className="realOrderInputs">
							<div className="realOrderInputsBody mtbMore">
								<div className="deliveryInput">
									<h3 className="realNewOrderGeneralTitle">Доставка</h3>
									<select className="realOrderGInput" name="" id="">
										<option value="">До адреса</option>
									</select>
								</div>
								<div className="offeredMoney">
									<h3 className="realNewOrderGeneralTitle offerMoneyTitle">
										Предлагаемая сумма:{" "}
									</h3>
									<div>
										<input type="text" className="offeredMoneyInput" />
									</div>
								</div>
							</div>
							<div className="realOrderInputsBody">
								<div className="deliveryInput">
									<h3 className="realNewOrderGeneralTitle">Город</h3>
									<input type="text" className="realOrderGInput" />
								</div>
								<div className="deliveryInput">
									<h3 className="realNewOrderGeneralTitle">Улица</h3>
									<input type="text" className="realOrderGInput" />
								</div>
								<div className="deliveryInput">
									<h3 className="realNewOrderGeneralTitle">Дом</h3>
									<input type="text" className="realOrderGInput" />
								</div>
								<div className="deliveryInput">
									<h3 className="realNewOrderGeneralTitle">Строение</h3>
									<input type="text" className="realOrderGInput" />
								</div>
							</div>
						</div>
						<button className="realdoOrderBtn">Создать заказ</button>
					</div>

					<img
						onClick={handleNewOrdering}
						src="/duty-free/Sources/newOrderExitImg.svg"
						alt=""
						className="newOrderExitImg"
					/>
				</div>
			</div>
		</div>
	);
};

export default MyOrdering;
