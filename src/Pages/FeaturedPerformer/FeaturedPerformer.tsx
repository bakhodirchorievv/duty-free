import "./FeaturedPerformer.css";
import "./FeaturedPerformerRes.css";

const FeaturedPerformer = () => {
	return (
		<>
			<div className="performersWrapper">
				<div className="performersHead">
					<h3 className="topPerformerTitle">Топ исполнителей</h3>
					<h3 className="topPerformerTitle onCurrently">
						Избранные исполнители
					</h3>
				</div>

				<div className="performersBody">
					<div className="performersBodyHead">
						<div className="inputWrapper">
							<img
								src="/duty-free/Sources/searchIcon.png"
								alt=""
								className="searchIcon"
							/>
							<input
								type="text"
								className="performerInput"
								placeholder="Поиск"
							/>
						</div>

						<div className="featuredSelectWrap">
							<select name="" id="" className="selectDirection">
								<option value="">Основные направления</option>
							</select>
							<img
								src="/duty-free/Sources/arrowOpen.svg"
								alt=""
								className="arrowOpenFeatured"
							/>
						</div>

						<div className="performToggleWrap">
							<p className="toggleDesc">Онлайн</p>
							<input
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

					<div className="performersItemWrapper">
						<div className="performerItem">
							<div className="performerItemHead">
								<img
									src="/duty-free/Sources/recoUserImg.png"
									alt=""
									className="performerImg"
								/>

								<div className="performerItemRight">
									<h3 className="performerNick">Nickname </h3>
									<img
										src="/duty-free/Sources/recoStar.png"
										alt=""
										className="performerStar"
									/>

									<p className="performerDesc">
										{" "}
										<div>
											<img
												src="/duty-free/Sources/recoClock.png"
												alt=""
												className="performerClock"
											/>{" "}
										</div>
										&gt;<span className="montserratFamily">1</span> года на
										сервисе
									</p>
								</div>
							</div>

							<div className="performerItemFoot">
								<p className="performerAddress">
									Основные направления:
									<span className="lighterWeight"> Россия, Германия</span>
								</p>
								<button className="performerBtn">
									Предложить исполнить заказ
								</button>
							</div>

							<img
								src="/duty-free/Sources/redHeart.png"
								alt=""
								className="redHeart"
							/>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default FeaturedPerformer;
