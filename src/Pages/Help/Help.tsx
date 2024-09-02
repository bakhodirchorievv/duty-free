import "./Help.css";
import "./HelpResponsive.css";

const Help = () => {
	return (
		<>
			<div className="helpWrapper">
				<div className="helpHead">
					<h2 className="helpTitle">Помощь</h2>
					<p className="helpHeadDesc">
						Посмотрите часто задаваемые вопросы пользователей или напишите свой,
						если не нашли ответ
					</p>
				</div>

				<div className="questionarie">
					<div className="questionarieBody">
						<ul className="questions-ul">
							<li className="question-item">
								<div className="question-face">
									Где дешевле в обычных магазинах или дьюти фри?
									<div>
										<img
											src="/Sources/plus.png"
											alt=""
											className="moreAnswerPlus getNone"
										/>
										<img
											src="/Sources/minus.png"
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
											src="/Sources/plus.png"
											alt=""
											className="moreAnswerPlus"
										/>
										<img
											src="/Sources/minus.png"
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
											src="/Sources/plus.png"
											alt=""
											className="moreAnswerPlus"
										/>
										<img
											src="/Sources/minus.png"
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
											src="/Sources/plus.png"
											alt=""
											className="moreAnswerPlus"
										/>
										<img
											src="/Sources/minus.png"
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
											src="/Sources/plus.png"
											alt=""
											className="moreAnswerPlus"
										/>
										<img
											src="/Sources/minus.png"
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
											src="/Sources/plus.png"
											alt=""
											className="moreAnswerPlus"
										/>
										<img
											src="/Sources/minus.png"
											alt=""
											className="moreAnswerMinus"
										/>
									</div>
								</div>
								<p className="answer-item"></p>
							</li>
						</ul>
					</div>
				</div>

				<div className="askQuestion">
					<h2 className="askQuestionTitle">Задать вопрос</h2>

					<div className="askQuestionBody">
						<textarea
							name=""
							id=""
							className="askTextarea"
							placeholder="Опишите свой вопрос"
						></textarea>

						<button className="askBtn">Задать вопрос</button>
					</div>
				</div>

				<div className="userLoginWrap">
					<div className="userLoginHead">
						<h3 className="userName">UserNickname</h3>
						<p className="userEmail">DutyFree@gmail.com</p>
					</div>

					<ul className="userLoginUl">
						<li className="userLoginItem">Настройки</li>
						<li className="userLoginItem">Баланс</li>
						<li className="userLoginItem loginFocus">Помощь</li>
						<li className="userLoginItem">Выход</li>
					</ul>
				</div>
			</div>
		</>
	);
};

export default Help;
