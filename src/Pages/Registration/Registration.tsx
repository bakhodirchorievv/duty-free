import "./Registration.css";
import "./RegistrationResponsive.css";

const Registration = () => {
	const handleAsWho = (e: any) => {
		const asWhoBtns = document.querySelectorAll(
			".asWhoBtn"
		) as NodeListOf<HTMLButtonElement>;

		asWhoBtns.forEach((input) => input.classList.remove("asWhoChoosen"));
		e.target.classList.add("asWhoChoosen");

		const asUser = document.querySelector(".asUser") as HTMLDivElement;
		const asCustomer = document.querySelector(".asCustomer") as HTMLDivElement;
		if (e.target.textContent === "Как исполнитель") {
			asUser.classList.remove("getNone");
			asCustomer.classList.add("getNone");
		} else {
			asUser.classList.add("getNone");
			asCustomer.classList.remove("getNone");
		}
	};

	return (
		<>
			<div className="asBody">
				<div className="registrationWrapper">
					<h2 className="registerTitle">Регистрация</h2>
					<div className="asWhoWrapper">
						<button onClick={handleAsWho} className="asWhoBtn asWhoChoosen">
							Как заказчик
						</button>
						<button onClick={handleAsWho} className="asWhoBtn">
							Как исполнитель
						</button>
					</div>
					<div className="registerBody asCustomer">
						<div className="asWhoInputsWrap">
							<input type="text" className="asWhoInput" placeholder="Email" />
							<input type="text" className="asWhoInput" placeholder="Логин" />
							<input type="text" className="asWhoInput" placeholder="Пароль" />
							<input
								type="text"
								className="asWhoInput"
								placeholder="Повторите пароль"
							/>
						</div>
						<button className="registrationBtn">Зарегистрироваться</button>
						<div className="orWrapper">
							<div className="orLeft"></div>
							<p className="orWord">Или</p>
							<div className="orRght"></div>
						</div>
						<button className="byGoogleBtn">Войти через Google</button>
						<p className="alreadySignedIn">
							Уже регистрировались?{" "}
							<a className="alreadyHaveOne" href="">
								Войти
							</a>
						</p>
					</div>
					<div className="registerBody asUser getNone">
						<div className="asWhoInputsWrap">
							<input type="text" className="asWhoInput" placeholder="Email" />
							<input type="text" className="asWhoInput" placeholder="Логин" />
							<input type="text" className="asWhoInput" placeholder="Пароль" />
							<input
								type="text"
								className="asWhoInput"
								placeholder="Повторите пароль"
							/>
						</div>
						<button className="registrationBtn">Зарегистрироваться</button>
						<div className="orWrapper">
							<div className="orLeft"></div>
							<p className="orWord">Или</p>
							<div className="orRght"></div>
						</div>
						<button className="byGoogleBtn">Войти через Google</button>
						<p className="alreadySignedIn">
							Уже регистрировались?{" "}
							<a className="alreadyHaveOne" href="">
								Войти
							</a>
						</p>
					</div>
				</div>
			</div>
		</>
	);
};

export default Registration;
