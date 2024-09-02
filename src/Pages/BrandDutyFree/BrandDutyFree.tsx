import "./BrandDutyFree.css";
import "./BrandDutyFreeResponsive.css";

const BrandDutyFree = () => {
	return (
		<div>
			<div className="brandDuty">
				<div className="brandDutyBanner">
					<div className="brandBannerLeftSide">
						<h1 className="brandDutyBannerTitle">
							Ваши любимые бренды без пошлин с{" "}
							<span className="redFont">Duty Free*</span>
						</h1>
						<p className="brandDutyBannerDesc">
							Открывайте новые горизонты путешествий вместе с нами
						</p>
						<button className="brandDutyBannerBtn brandGeneralBtn">
							Смотреть
						</button>
						<p className="brandDutyBannerDesc fullOne">
							*Duty Free – это маркет-пространства, расположенные в зонах
							беспошлинной торговли между паспортным контролем и пересечением
							границы. Эти магазины предлагают широкий ассортимент товаров без
							налогов и пошлин, предоставляя путешественникам уникальную
							возможность совершать выгодные покупки.
						</p>
					</div>
					<div className="brandBannerLightSide">
						<img
							src="/duty-free/Sources/brandDutyBannerImg.png"
							alt=""
							className="brandDutyBannerImg"
						/>
					</div>
				</div>

				<div className="principles">
					<h2 className="brandGeneralTitle principleTitle">
						ПРИНЦИП РАБОТЫ <span className="redFont">DUTY FREE</span> ТОРГОВЛИ
					</h2>

					<div className="principlesBody">
						<div className="principleItemWrap principleItemWrap1">
							<div className="principleItem principleItem1">
								<img
									src="/duty-free/Sources/principleFirstImg.png"
									alt=""
									className="principleItemImg principleItemImg1"
								/>
								<div className="principleInfo">
									<h3 className="principleItemTitle">1</h3>
									<p className="principleItemDesc principleItemDesc1">
										Выбор аэропорта и нужных товаров
									</p>
								</div>
							</div>
						</div>
						<div className="principleItemWrap principleItemWrap2">
							<div className="principleItem principleItem2">
								<img
									src="/duty-free/Sources/principleSecondImg.png"
									alt=""
									className="principleItemImg principleItemImg2"
								/>
								<div className="principleInfo">
									<h3 className="principleItemTitle">2</h3>
									<p className="principleItemDesc">
										Предварительный заказ собирается{" "}
										<span className="largerWeight">заранее</span>
									</p>
								</div>
							</div>
						</div>
						<div className="principleItemWrap principleItemWrap3">
							<div className="principleItem principleItem3">
								<img
									src="/duty-free/Sources/principleThirdImg.png"
									alt=""
									className="principleItemImg principleItemImg3"
								/>
								{/* <div className="principleInfo">
									<h3 className="principleItemTitle">3</h3>
									<p className="principleItemDesc">
										Заберите свой заказ вне очереди в Duty Free
									</p>
								</div> */}
							</div>
						</div>

						<img
							src="/duty-free/Sources/principleFirstArrow.png"
							alt=""
							className="principleFirstArrow"
						/>
						<img
							src="/duty-free/Sources/principleSecondArrow.png"
							alt=""
							className="principleSecondArrow"
						/>
					</div>
				</div>

				<div className="whyWe">
					<h2 className="brandGeneralTitle whyWeTitle">
						ПОЧЕМУ <span className="redFont">DUTY FREE?</span>
					</h2>

					<div className="whyWeBody">
						<div className="whyWeLeftSide">
							<img
								src="/duty-free/Sources/whyWeImg.png"
								alt=""
								className="whyWeImg"
							/>
						</div>
						<div className="whyWeRightSide">
							<h4 className="whyWeSubtitle">
								<span className="redFont">Широкий </span>ассортимент товаров
							</h4>
							<h4 className="whyWeSubtitle">
								<span className="redFont">Эксклюзивные </span>предложения
							</h4>
							<h4 className="whyWeSubtitle">
								Только <span className="redFont">качественные</span> товары
							</h4>
							<h4 className="whyWeSubtitle whyWeFootTitle">
								И самое главное - <span className="redFont">свобода</span> от
								налогов!
							</h4>
						</div>
					</div>
				</div>

				<div className="roadMap">
					<h2 className="brandGeneralTitle roadMapTitle">ROAD MAP</h2>
					<div className="roadMapBody">
						<div className="roadMapItem"></div>
						<div className="roadMapItem">
							<div className="circleWrapAbsolute">
								<div className="circleImgWrap">
									<img
										src="/duty-free/Sources/roadCircleImg.png"
										alt=""
										className="circleImg"
									/>
									<div className="circleInfo">
										<h3 className="circleInfoName">Q1</h3>
										<p className="circleInfoYear">2024</p>
									</div>
								</div>
							</div>
						</div>
						<div className="roadMapItem">
							<div className="circleWrapAbsolute">
								<div className="circleImgWrap">
									<img
										src="/duty-free/Sources/roadCircleImg.png"
										alt=""
										className="circleImg"
									/>
									<div className="circleInfo">
										<h3 className="circleInfoName">Q2</h3>
										<p className="circleInfoYear">2024</p>
									</div>
								</div>
							</div>
						</div>
						<div className="roadMapItem">
							<div className="circleWrapAbsolute">
								<div className="circleImgWrap">
									<img
										src="/duty-free/Sources/roadCircleImg.png"
										alt=""
										className="circleImg"
									/>
									<div className="circleInfo">
										<h3 className="circleInfoName">Q3</h3>
										<p className="circleInfoYear">2024</p>
									</div>
								</div>
							</div>
						</div>
						<div className="roadMapItem">
							<div className="circleWrapAbsolute">
								<div className="circleImgWrap">
									<img
										src="/duty-free/Sources/roadCircleImg.png"
										alt=""
										className="circleImg"
									/>
									<div className="circleInfo">
										<h3 className="circleInfoName">Q4</h3>
										<p className="circleInfoYear">2024</p>
									</div>
								</div>
							</div>
						</div>
						<div className="roadMapItem"></div>
						<div className="roadMapItem">
							<div className="roadLeftImgWrap">
								<img
									src="/duty-free/Sources/roadFirstImg.png"
									alt=""
									className="roadLeftImg"
								/>
								<div className="roadLeftImgInfo">
									<img
										src="/duty-free/Sources/roadFirstInner.png"
										alt=""
										className="roadLeftInnerImg"
									/>
									<p className="roadLeftImgDesc">Разработка и тестирование</p>
								</div>
							</div>
						</div>
						<div className="roadMapItem roadMapGrayBack">
							<div className="roadItemInfo mtMore">
								<p className="roadMapItemdesc">Создание прототипов сайта</p>
								<p className="roadMapItemdesc">Разработка дизайна сайта</p>
							</div>
						</div>
						<div className="roadMapItem roadMapGrayBack">
							<div className="roadItemInfo mtMore">
								<p className="roadMapItemdesc">Разработка функионала</p>
								<p className="roadMapItemdesc">Заполнение каталога товаров</p>
								<p className="roadMapItemdesc">
									Тестирование, исправление ошибок
								</p>
							</div>
						</div>
						<div className="roadMapItem"></div>
						<div className="roadMapItem"></div>
						<div className="roadMapItem"></div>
						<div className="roadMapItem">
							<div className="roadLeftImgWrap justifyCenter">
								<img
									src="/duty-free/Sources/roadSecondImg.png"
									alt=""
									className="roadLeftImg"
								/>
								<div className="roadLeftImgInfo">
									<img
										src="/duty-free/Sources/roadSecondInner.png"
										alt=""
										className="roadLeftInnerImg"
									/>
									<p className="roadLeftImgDesc">Запуск</p>
								</div>
							</div>
						</div>
						<div className="roadMapItem"></div>
						<div className="roadMapItem"></div>
						<div className="roadMapItem roadMapGrayBack">
							<div className="roadItemInfo">
								<p className="roadMapItemdesc">Запуск сайта</p>
								<p className="roadMapItemdesc">Настройка SEO-оптимизации</p>
							</div>
						</div>
						<div className="roadMapItem"></div>
						<div className="roadMapItem"></div>
						<div className="roadMapItem">
							<div className="roadLeftImgWrap">
								<img
									src="/duty-free/Sources/roadThirdImg.png"
									alt=""
									className="roadLeftImg"
								/>
								<div className="roadLeftImgInfo">
									<img
										src="/duty-free/Sources/roadThirdInner.png"
										alt=""
										className="roadLeftInnerImg"
									/>
									<p className="roadLeftImgDesc">Масштабирование</p>
								</div>
							</div>
						</div>
						<div className="roadMapItem"></div>
						<div className="roadMapItem"></div>
						<div className="roadMapItem"></div>
						<div className="roadMapItem roadMapGrayBack">
							<div className="roadItemInfo">
								<p className="roadMapItemdesc">
									Разработка маркетинговой стратегии
								</p>
								<p className="roadMapItemdesc">Отимизация сайта</p>
							</div>
						</div>
						<div className="roadMapItem"></div>
					</div>

					<img
						src="/duty-free/Sources/roadLeftPlane.png"
						alt=""
						className="roadLeftPlane"
					/>
					<img
						src="/duty-free/Sources/roadRightPlane.png"
						alt=""
						className="roadRightPlane"
					/>
				</div>

				<div className="workWith">
					<h2 className="brandGeneralTitle workWithTitle">
						ЗАРАБАТЫВАЙТЕ ВМЕСТЕ С <span className="redFont">DUTY FREE</span>
					</h2>

					<div className="workWithBody">
						<div className="workWithLeft">
							<p className="workWithLeftDesc">
								Используйте франшизу компании, получайте процент от продаж и
								многое другое! Оставьте заявку и получите больше подробностей о
								заработке с Duty Free.
							</p>

							<div className="workWithQuestionarie">
								<h3 className="workWithLeftTitle">Часто задаваемые вопросы</h3>

								<div className="workWithLeftBody">
									<ul className="workWith-questions-ul">
										<li className="workWith-question-item">
											<div className="workWith-question-face">
												Как я смогу заработать с помощью Duty Free?
												<div>
													<img
														src="/duty-free/Sources/plus.png"
														alt=""
														className="workWith-moreAnswerPlus getNone"
													/>
													<img
														src="/duty-free/Sources/minus.png"
														alt=""
														className="workWith-moreAnswerMinus getBlock"
													/>
												</div>
											</div>
											<p className="workWith-answer-item">
												Используйте франшизу компании, получайте процент от
												продаж и многое другое! Оставьте заявку и получите
												больше подробностей о заработке с Duty Free.
											</p>
										</li>
										<li className="workWith-question-item">
											<div className="workWith-question-face">
												Какой максимальный процент я могу получить?
												<div>
													<img
														src="/duty-free/Sources/plus.png"
														alt=""
														className="workWith-moreAnswerPlus"
													/>
													<img
														src="/duty-free/Sources/minus.png"
														alt=""
														className="workWith-moreAnswerMinus"
													/>
												</div>
											</div>
											<p className="workWith-answer-item"></p>
										</li>
										<li className="workWith-question-item">
											<div className="workWith-question-face">
												Могу ли я купить акции компании?
												<div>
													<img
														src="/duty-free/Sources/plus.png"
														alt=""
														className="workWith-moreAnswerPlus"
													/>
													<img
														src="/duty-free/Sources/minus.png"
														alt=""
														className="workWith-moreAnswerMinus"
													/>
												</div>
											</div>
											<p className="workWith-answer-item"></p>
										</li>
										<li className="workWith-question-item">
											<div className="workWith-question-face">
												Сколько стоит открыть франшизу?
												<div>
													<img
														src="/duty-free/Sources/plus.png"
														alt=""
														className="workWith-moreAnswerPlus"
													/>
													<img
														src="/duty-free/Sources/minus.png"
														alt=""
														className="workWith-moreAnswerMinus"
													/>
												</div>
											</div>
											<p className="workWith-answer-item"></p>
										</li>
									</ul>
								</div>
							</div>
						</div>

						<div className="workWithRight">
							<form className="workWithForm">
								<h2 className="workWithFormTitle">Заинтересовало?</h2>
								<h2 className="workWithFormTitle redFont">Оставьте заявку!</h2>

								<div className="workWithInputs">
									<input
										type="text"
										className="workWithInput"
										placeholder="Имя"
									/>
									<input
										type="email"
										className="workWithInput workWithEmail"
										placeholder="E-mail"
									/>
								</div>

								<textarea
									className="workWithTextArea"
									placeholder="Опишите свой вопрос"
								></textarea>

								<button className="workWithSendBtn brandGeneralBtn">
									Отправить
								</button>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default BrandDutyFree;
