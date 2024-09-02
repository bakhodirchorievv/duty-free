import "./TopPerformers.css";
import "./TopPerformersResponsive.css";

const TopPerFormers = () => {
	return (
		<>
			<div className="performersWrapper">
				<div className="performersHead">
					<h3 className="topPerformerTitle onCurrently">Топ исполнителей</h3>
					<h3 className="topPerformerTitle">Избранные исполнители</h3>
				</div>

				<div className="performersBody">
					<div className="performersBodyHead">
						<div className="inputWrapper">
							<img
								src="/Sources/searchIcon.png"
								alt=""
								className="searchIcon"
							/>
							<input
								type="text"
								className="performerInput"
								placeholder="Поиск"
							/>
						</div>

						<div>
							<select name="" id="" className="selectDirection">
								<option value="">Основные направления</option>
							</select>
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
									src="/Sources/recoUserImg.png"
									alt=""
									className="performerImg"
								/>

								<div className="performerItemRight">
									<h3 className="performerNick">
										Nickname{" "}
										<img
											src="/Sources/onlineSign.png"
											alt=""
											className="onlineSign"
										/>
									</h3>
									<img
										src="/Sources/recoStar.png"
										alt=""
										className="performerStar"
									/>

									<p className="performerDesc">
										{" "}
										<div>
											<img
												src="/Sources/recoClock.png"
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

							<img src="/Sources/redHeart.png" alt="" className="redHeart" />
						</div>

						<div className="performerItem">
							<div className="performerItemHead">
								<img
									src="/Sources/recoUserImg.png"
									alt=""
									className="performerImg"
								/>

								<div className="performerItemRight">
									<h3 className="performerNick">Nickname </h3>
									<img
										src="/Sources/recoStar.png"
										alt=""
										className="performerStar"
									/>

									<p className="performerDesc">
										{" "}
										<div>
											<img
												src="/Sources/recoClock.png"
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

							<img src="/Sources/grayHeart.png" alt="" className="redHeart" />
						</div>

						<div className="performerItem">
							<div className="performerItemHead">
								<img
									src="/Sources/recoUserImg.png"
									alt=""
									className="performerImg"
								/>

								<div className="performerItemRight">
									<h3 className="performerNick">Nickname </h3>
									<img
										src="/Sources/recoStar.png"
										alt=""
										className="performerStar"
									/>

									<p className="performerDesc">
										{" "}
										<div>
											<img
												src="/Sources/recoClock.png"
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

							<img src="/Sources/grayHeart.png" alt="" className="redHeart" />
						</div>
					</div>
				</div>
			</div>

			{/* <div className="topNavBarWrap">
				<div className="topPerNavBar">
					<div className="flexDisplay">
						<button className="performerBtn navBarBtn">
							Предложить исполнить заказ
						</button>
					</div>
					<div className="topBarBody">
						<div className="topBarLeft">
							<img
								src="/Sources/recoUserImg.png"
								alt=""
								className="topNavBarImg"
							/>
						</div>
						<div className="topBarRight">
							<h3 className="topBarTitle">Nickname</h3>
							<img src="/Sources/recoStar.png" alt="" className="topBarDesc" />
							<p className="performerDesc navBarClock">
								{" "}
								<div>
									<img
										src="/Sources/recoClock.png"
										alt=""
										className="performerClock"
									/>{" "}
								</div>
								&gt;<span className="montserratFamily">1</span> года на сервисе
							</p>
						</div>

						<img
							src="/Sources/redHeart.png"
							alt=""
							className="navBarRedHeart"
						/>
					</div>

					<div className="navBarFoot">
						<p className="NavBarAddress">
							Основные направления:
							<span className="lighterWeight"> Россия, Германия</span>
						</p>
						<div className="navbarFootCenter">
							<h3 className="aboutUser">О пользователе</h3>
							<p className="navBarFootdesc">
								Краткая информация, которую напишет пользователь
							</p>
						</div>

						<div className="navBarBottom">
							<h3 className="navbarBottomTitle">Отзывы</h3>

							<div className="inputAndStar">
								<input
									type="text"
									className="writeReviewInput"
									placeholder="Написать отзыв"
								/>
								<img
									src="/Sources/grayStars.png"
									alt=""
									className="grayStars"
								/>
							</div>
						</div>

						<select name="" id="" className="navBarSelect">
							<option value="">Сначала новые</option>
						</select>
					</div>
					<img src="/Sources/closeImg.png" alt="" className="navBarCloseImg" />
				</div>
			</div> */}
		</>
	);
};

export default TopPerFormers;
