import { Link } from "react-router-dom";
import "./AboutDutyFree.css";
import "./AboutDutyFreeResponsive.css";

const AboutDutyFree = () => {
	return (
		<div>
			<div className="aboutDutyFree">
				<div className="aboutBanner">
					<div className="about-left-side">
						<h1 className="about-banner-title">
							<span className="redFont">Duty Free:</span> Ваш пропуск в мир
							сбережений и роскоши
						</h1>

						<p className="about-banner-desc">
							Открывайте мир безналоговых покупок с удобством. Путешествуйте,
							зарабатывайте ,отдыхайте.
						</p>

						<div className="about-banner-btns">
							<button className="aboutBannerBtn redBack ">Смотреть</button>
							<button className="aboutBannerBtn">Подробнее</button>
						</div>
					</div>
					<div className="about-right-side">
						<img
							src="/duty-free/Sources/about-banner-img.png"
							alt=""
							className="about-right-img"
						/>
					</div>
					<img
						src="/duty-free/Sources/about-giftbox.png"
						alt=""
						className="about-giftbox"
					/>
				</div>

				<div className="aboutTrading">
					<h2 className="aboutTradingTitle generalTitle">
						ЧТО ТАКОЕ <span className="redFont">DUTY-FREE</span>
						ТОРГОВЛЯ
					</h2>

					<div className="aboutTrading-body">
						<div className="aboutTrading-leftSide">
							<img
								src="/duty-free/Sources/about-trading-img.png"
								alt=""
								className="aboutTardingImg"
							/>
						</div>
						<div className="aboutTrading-rightSide">
							<p className="aboutTardingdesc">
								<span className="redFont largerFont">Duty-free</span> магазины –
								это маркет-пространства в зоне свободной от пошлин торговли.
								Практически всегда они расположены после пункта, где проходит
								паспортный контроль для выезда, и до пересечения следующей
								границы.
							</p>
							<p className="aboutTardingdesc">
								Например, на железнодорожных вокзалах или в аэропортах. Впрочем,
								флаконом духов тебе предложат разжиться и во время полета, в
								самолете, или на борту морского судна.
							</p>
							<Link to={"/branddutyfree"}>
								<button className="aboutTradingBtn generalBtn">
									Подробнее
								</button>
							</Link>
						</div>
					</div>
				</div>

				<div className="howItWork">
					<h2 className="generalTitle howItWorkTitle">
						КАК ЭТО <span className="redFont">РАБОТАЕТ?</span>{" "}
					</h2>

					<div className="howItWorkBody">
						<div className="howItWorkItem">
							<img
								src="/duty-free/Sources/howItWork-first.png"
								alt=""
								className="howItWorkImg"
							/>
							<p className="howItWorkDesc">
								Выбираете аэропорт и нужные Вам товары
							</p>
						</div>
						<div className="howItWorkItem">
							<img
								src="/duty-free/Sources/howItWork-second.png"
								alt=""
								className="howItWorkImg"
							/>
							<p className="howItWorkDesc">
								Ваш предвардительный заказ будет собран{" "}
								<span className="largerWeight">заранее</span>
							</p>
						</div>
						<div className="howItWorkItem">
							<img
								src="/duty-free/Sources/howItWork-third.png"
								alt=""
								className="howItWorkImg"
							/>
							<p className="howItWorkDesc">
								Заберите свой заказ удобным для Вас способом
							</p>
						</div>
					</div>

					<div className="howItworkFoot">
						<h3 className="howItWork-subtitle">
							Заинтересовало? <span className="redFont">Оставьте заявку!</span>
						</h3>
						<div className="howItWorkFoot-body">
							<input
								type="text"
								className="enterYourEmail"
								placeholder="Введите ваш E-mail"
							/>
							<button className="howItWorkBtn generalBtn">Отправить</button>
						</div>
					</div>
				</div>

				<div className="topProducts">
					<h2 className="generalTitle topProductsTitle">
						ТОП ТОВАРЫ <span className="redFont">DUTY FREE</span>
					</h2>

					<div className="topProducts-body">
						<div className="topProduct-item">
							<div className="topProductGrayBack">
								<img
									src="/duty-free/Sources/topProduct-first.png"
									alt=""
									className="topProductImg"
								/>
							</div>
							<p className="topProductDesc">
								ТОП ПРОДАЖ <span className="pinkFont">БЕЗ СКИДКИ</span>
							</p>
							<p className="topProductPrice">$20</p>
							<p className="topProductName">Moschino Funny EdT 50ml</p>
						</div>
						<div className="topProduct-item">
							<div className="topProductGrayBack">
								<img
									src="/duty-free/Sources/topProduct-second.png"
									alt=""
									className="topProductImg"
								/>
							</div>
							<p className="topProductDesc">
								<span className="pinkFont">-7%</span> ТОП ПРОДАЖ
							</p>
							<p className="topProductPrice">
								$17 <span className="oldPrice">$18</span>
							</p>
							<p className="topProductName">Jagermeister 1L</p>
						</div>
						<div className="topProduct-item">
							<div className="topProductGrayBack">
								<img
									src="/duty-free/Sources/topProduct-third.png"
									alt=""
									className="topProductImg"
								/>
							</div>
							<p className="topProductDesc">
								<span className="pinkFont">-7%</span> ТОП ПРОДАЖ
							</p>
							<p className="topProductPrice">
								$9 <span className="oldPrice">$10</span>
							</p>
							<p className="topProductName">The Claymore whisky 1L</p>
						</div>
						<div className="topProduct-item">
							<div className="topProductGrayBack">
								<img
									src="/duty-free/Sources/topProduct-fourth.png"
									alt=""
									className="topProductImg"
								/>
							</div>
							<p className="topProductDesc">
								ТОП ПРОДАЖ <span className="pinkFont">БЕЗ СКИДКИ</span>
							</p>
							<p className="topProductPrice">$30</p>
							<p className="topProductName">Moschino Funny EdT 100ml</p>
						</div>
						<div className="topProduct-item">
							<div className="topProductGrayBack">
								<img
									src="/duty-free/Sources/topProduct-fifth.png"
									alt=""
									className="topProductImg"
								/>
							</div>
							<p className="topProductDesc">
								ТОП ПРОДАЖ <span className="pinkFont">БЕЗ СКИДКИ</span>
							</p>
							<p className="topProductPrice">$20</p>
							<p className="topProductName">Moschino Uomo EdT 75ml</p>
						</div>
						<div className="topProduct-item">
							<div className="topProductGrayBack">
								<img
									src="/duty-free/Sources/topProduct-sixth.png"
									alt=""
									className="topProductImg"
								/>
							</div>
							<p className="topProductDesc">
								<span className="pinkFont">-7%</span> ТОП ПРОДАЖ
							</p>
							<p className="topProductPrice">
								{" "}
								$17 <span className="oldPrice">$18</span>
							</p>
							<p className="topProductName">
								Bushmills Original Irish Whiskey 40% 1L
							</p>
						</div>
					</div>

					<button className="topProductsBtn">ПЕРЕЙТИ НА САЙТ</button>

					<img
						src="/duty-free/Sources/topProduct-last.png"
						alt=""
						className="topProductLastImg"
					/>
				</div>

				<div className="restWith">
					<h2 className="generalTitle restWithTitle">
						ПУТЕШЕСТВУЙ, ЗАРАБАТЫВАЙ, ОТДЫХАЙ С{" "}
						<span className="redFont">DUTY-FREE</span>
					</h2>

					<div className="restWithBody">
						<div className="restWithLeft">
							<p className="restWithDesc">
								<span className="redFont largerWeight">DUTY FREE</span> в
								большинстве случаев располагаются в транзитных зонах и зонах
								вылета в международных аэропортах, на круизных лайнерах.
								Беспошлинные магазины можете встретить и на границе двух стран,
								через которую осуществляется переход пешком или на авто.{" "}
							</p>
							<p className="restWithDesc">
								Зоной торговли могут быть целые города и страны, как итальянское
								город Ливиньо на границе между Австрией и Швейцарией, или
								княжество Андорра.
							</p>
							<button className="restWithBtn generalBtn">
								Перейти на сайт
							</button>
						</div>
						<div className="restWithRight">
							<img
								src="/duty-free/Sources/restWith-first.png"
								alt=""
								className="restWith-first"
							/>
						</div>
					</div>

					<img
						src="/duty-free/Sources/restWith-second.png"
						alt=""
						className="restwith-second"
					/>
				</div>

				<div className="questionarie">
					<h2 className="generalTitle questionarieTitle">
						ВОПРОСЫ-<span className="redFont">ОТВЕТЫ</span>
					</h2>

					<div className="questionarieBody">
						<ul className="questions-ul">
							<li className="question-item">
								<div className="question-face">
									Где дешевле в обычных магазинах или дьюти фри?
									<div>
										<img
											src="/duty-free/Sources/plus.png"
											alt=""
											className="moreAnswerPlus getNone"
										/>
										<img
											src="/duty-free/Sources/minus.png"
											alt=""
											className="moreAnswerMinus getBlock"
										/>
									</div>
								</div>
								<p className="answer-item">
									Выгоднее всего покупать в Duty Free импортные алкоголь, табак
									или косметику – в обычных магазинах на территории нашей страны
									они будут стоить дороже. Однако и здесь картина будет разная в
									зависимости от страны и конкретной точки магазина.
								</p>
							</li>
							<li className="question-item">
								<div className="question-face">
									Можно ли в дьюти фри расплачиваться долларами?
									<div>
										<img
											src="/duty-free/Sources/plus.png"
											alt=""
											className="moreAnswerPlus"
										/>
										<img
											src="/duty-free/Sources/minus.png"
											alt=""
											className="moreAnswerMinus"
										/>
									</div>
								</div>
								<p className="answer-item"></p>
							</li>
							<li className="question-item">
								<div className="question-face">
									Какая валюта в дьюти фри?
									<div>
										<img
											src="/duty-free/Sources/plus.png"
											alt=""
											className="moreAnswerPlus"
										/>
										<img
											src="/duty-free/Sources/minus.png"
											alt=""
											className="moreAnswerMinus"
										/>
									</div>
								</div>
								<p className="answer-item"></p>
							</li>
							<li className="question-item">
								<div className="question-face">
									Сколько можно покупать алкоголя в дьюти фри на человека?
									<div>
										<img
											src="/duty-free/Sources/plus.png"
											alt=""
											className="moreAnswerPlus"
										/>
										<img
											src="/duty-free/Sources/minus.png"
											alt=""
											className="moreAnswerMinus"
										/>
									</div>
								</div>
								<p className="answer-item"></p>
							</li>
							<li className="question-item">
								<div className="question-face">
									Есть ли duty free на внутренних рейсах?
									<div>
										<img
											src="/duty-free/Sources/plus.png"
											alt=""
											className="moreAnswerPlus"
										/>
										<img
											src="/duty-free/Sources/minus.png"
											alt=""
											className="moreAnswerMinus"
										/>
									</div>
								</div>
								<p className="answer-item"></p>
							</li>
							<li className="question-item">
								<div className="question-face">
									Кому принадлежит duty free?
									<div>
										<img
											src="/duty-free/Sources/plus.png"
											alt=""
											className="moreAnswerPlus"
										/>
										<img
											src="/duty-free/Sources/minus.png"
											alt=""
											className="moreAnswerMinus"
										/>
									</div>
								</div>
								<p className="answer-item"></p>
							</li>
						</ul>
						<img
							src="/duty-free/Sources/questionarieImg.png"
							alt=""
							className="questionarieImg"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AboutDutyFree;
