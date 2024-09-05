import { Link } from "react-router-dom";
import "./TopPerformers.css";
import "./TopPerformersResponsive.css";

const TopPerFormers = () => {
	return (
		<>
			<div className="performersWrapper">
				<div className="performersHead">
					<h3 className="topPerformerTitle onCurrentlyy">
						<Link to={"/topperformers"}>
							<span className="borderBottomDiv onCurrently">
								Топ исполнителей
							</span>
						</Link>
					</h3>

					<h3 className="topPerformerTitle">
						<Link to={"/featuredperformers"}>
							<span className="borderBottomDiv">Избранные исполнители</span>
						</Link>
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

						<div className="topPerformersSelectWrap">
							<select name="" id="" className="selectDirection">
								<option value="">Основные направления</option>
							</select>
							<img
								src="/duty-free/Sources/arrowOpen.svg"
								alt=""
								className="arrowOpenTopPerformers"
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
									<h3 className="performerNick">
										Nickname{" "}
										<img
											src="/duty-free/Sources/onlineSign.png"
											alt=""
											className="onlineSign"
										/>
									</h3>
									<img
										src="/duty-free/Sources/realStars.svg"
										alt=""
										className="performerStar"
									/>

									<p className="performerDesc">
										{" "}
										<div>
											<img
												src="/duty-free/Sources/realClockIcon.svg"
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
										src="/duty-free/Sources/realStars.svg"
										alt=""
										className="performerStar"
									/>

									<p className="performerDesc">
										{" "}
										<div>
											<img
												src="/duty-free/Sources/realClockIcon.svg"
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
								src="/duty-free/Sources/grayHeart.png"
								alt=""
								className="redHeart"
							/>
						</div>

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
										src="/duty-free/Sources/realStars.svg"
										alt=""
										className="performerStar"
									/>

									<p className="performerDesc">
										{" "}
										<div>
											<img
												src="/duty-free/Sources/realClockIcon.svg"
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
								src="/duty-free/Sources/grayHeart.png"
								alt=""
								className="redHeart"
							/>
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
								src="/duty-free/Sources/recoUserImg.png"
								alt=""
								className="topNavBarImg"
							/>
						</div>
						<div className="topBarRight">
							<h3 className="topBarTitle">Nickname</h3>
							<img
								src="/duty-free/Sources/realStars.svg"
								alt=""
								className="topBarDesc"
							/>
							<p className="performerDesc navBarClock">
								{" "}
								<div>
									<img
										src="/duty-free/Sources/realClockIcon.svg"
										alt=""
										className="performerClock"
									/>{" "}
								</div>
								&gt;<span className="montserratFamily">1</span> года на сервисе
							</p>
						</div>

						<img
							src="/duty-free/Sources/redHeart.png"
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
									src="/duty-free/Sources/grayStars.png"
									alt=""
									className="grayStars"
								/>
							</div>
						</div>

						<div className="navBarSelectWrap">
							<select name="" id="" className="navBarSelect">
								<option value="">Сначала новые</option>
							</select>
							<img
								src="/duty-free/Sources/arrowOpen.svg"
								alt=""
								className="arrowOpenNavBar"
							/>
						</div>
					</div>
					<img
						src="/duty-free/Sources/closeImg.png"
						alt=""
						className="navBarCloseImg"
					/>
				</div>
			</div> */}
		</>
	);
};

export default TopPerFormers;
