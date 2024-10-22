import { Link } from "react-router-dom";
import "./FeaturedPerformer.css";
import "./FeaturedPerformerRes.css";

const FeaturedPerformer = () => {
	return (
		<>
			<div className="performersWrapper">
				<div className="performersHead">
					<h3 className="topPerformerTitle">
						<Link to={"/topperformers"}>
							<span className="borderBottomDiv">Топ исполнителей</span>
						</Link>
					</h3>
					<h3 className="topPerformerTitle onCurrentlyy">
						<Link to={"/featuredperformers"}>
							<span className="borderBottomDiv onCurrently">
								Избранные исполнители
							</span>
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
										<span className="montserratFamily"> &gt;1</span> года на
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
