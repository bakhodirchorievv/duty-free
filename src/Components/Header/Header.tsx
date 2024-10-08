import { Link } from "react-router-dom";
import "./Header.css";
import "./HeaderRespnsive.css";
import { useLocation } from "react-router-dom";

const Header = () => {
	// header logic start
	const firstPages = [
		"/myordering",
		"/myorders",
		"/completeorder",
		"/topperformers",
		"/featuredperformers",
		"/help",
		"/profile",
		"/contactinfo",
		"/balance",
		"/usermessages",
		"/userorders",
	];

	const secondPages = [
		"/lastorders",
		"/dmyorders",
		"/dcompleteorder",
		"/orders",
	];

	const thirdPages = [
		"/production",
		"/order",
		"/analyze",
		"/chatwithclient",
		"/catalog",
		"/catalogpro",
		"/moreinfo",
		"/oservice",
		"/currencyconvert",
		"/perfume",
		"/forher",
		"/alcohol",
		"/mainpage",
		"/search",
	];

	const innerpages = [
		"/catalog",
		"/catalogpro",
		"/moreinfo",
		"/oservice",
		"/currencyconvert",
		"/perfume",
		"/forher",
		"/alcohol",
		"/search",
	];

	const fourthPage = "/";
	const fifthPage = "/branddutyfree";

	const sixthPages = ["/realprofile", "/dhelp", "/dprofile", "/dcontactinfo"];

	// getting path name
	const location = useLocation();
	const currentPath = location.pathname;

	const handleHeadPages = (e: any) => {
		const headItems = document.querySelectorAll(
			".header-item"
		) as NodeListOf<HTMLLIElement>;
		headItems.forEach((headItem) => (headItem.className = "header-item"));

		e.target.classList.add("redFont");
	};

	// user login items
	const handleLoginLis = (e: any) => {
		const userLoginItems = document.querySelectorAll(
			".userLoginItem"
		) as NodeListOf<HTMLLIElement>;
		userLoginItems.forEach((userLoginItem) =>
			userLoginItem.classList.remove("loginFocus")
		);

		e.target.classList.add("loginFocus");
	};

	const showUserLoginInfo = (e: any) => {
		const userLoginWrap = document.querySelector(
			".userLoginWrap"
		) as HTMLElement;
		if (userLoginWrap.classList.contains("getNone")) {
			userLoginWrap.classList.remove("getNone");
			e.target.classList.add("headImgsActiveColor");
			console.log(e.target);
		} else {
			userLoginWrap.classList.add("getNone");
			e.target.classList.remove("headImgsActiveColor");
		}
	};

	return (
		<div>
			{firstPages.includes(currentPath) && (
				<header className="header">
					<div className="header-left">
						<Link to={"/"}>
							<img
								src="/duty-free/Sources/HeadMainImg.svg"
								alt=""
								className="headerMainImg"
							/>
						</Link>
						<div>
							<img
								src="/duty-free/Sources/Duty Free.svg"
								alt=""
								className="headTitle"
							/>
						</div>
					</div>
					<ul className="header-list">
						<Link to={"/myordering"}>
							<li
								onClick={handleHeadPages}
								className={
									currentPath === "/myordering"
										? "header-item redFont"
										: "header-item"
								}
							>
								Главная
							</li>
						</Link>

						<Link to="/userorders">
							<li
								onClick={handleHeadPages}
								className={
									currentPath === "/userorders" ||
									currentPath === "/usermessages" ||
									currentPath === "/myorders" ||
									currentPath === "/completeorder"
										? "header-item redFont"
										: "header-item"
								}
							>
								Мои заказы
							</li>
						</Link>

						<Link to="/topperformers">
							<li
								onClick={handleHeadPages}
								className={
									currentPath === "/topperformers" ||
									currentPath === "/featuredperformers"
										? "header-item redFont"
										: "header-item"
								}
							>
								Исполнители
							</li>
						</Link>
						<Link to={"/catalog"}>
							<li onClick={handleHeadPages} className="header-item">
								Каталог
							</li>
						</Link>
					</ul>
					<div className="headerNewOrder">
						<Link to={"/myordering"}>
							<button className="headnewOrderBtn">Новый заказ</button>
						</Link>
						<svg
							className="headNewOrderRing"
							width="30"
							height="30"
							viewBox="0 0 30 30"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M15 24.8083C15.5444 24.8083 16.0172 24.6183 16.4183 24.2383C16.8194 23.8583 17.0517 23.3861 17.115 22.8217H12.885C12.9494 23.3872 13.1817 23.8594 13.5817 24.2383C13.9817 24.6172 14.4544 24.8083 15 24.8083ZM11.6667 18.205V12.9483C11.6667 12.0317 11.9933 11.2472 12.6467 10.595C13.3 9.94278 14.0844 9.61611 15 9.615C15.9156 9.61389 16.7006 9.94056 17.355 10.595C18.0094 11.2494 18.3356 12.0339 18.3333 12.9483V18.205H11.6667ZM15.005 30C12.9317 30 10.9817 29.6067 9.155 28.82C7.32944 28.0322 5.74111 26.9633 4.39 25.6133C3.03889 24.2633 1.96944 22.6767 1.18167 20.8533C0.393889 19.03 0 17.0806 0 15.005C0 12.9294 0.393889 10.9794 1.18167 9.155C1.96833 7.32944 3.03556 5.74111 4.38333 4.39C5.73111 3.03889 7.31833 1.96944 9.145 1.18167C10.9717 0.393889 12.9217 0 14.995 0C17.0683 0 19.0183 0.393889 20.845 1.18167C22.6706 1.96833 24.2589 3.03611 25.61 4.385C26.9611 5.73389 28.0306 7.32111 28.8183 9.14667C29.6061 10.9722 30 12.9217 30 14.995C30 17.0683 29.6067 19.0183 28.82 20.845C28.0333 22.6717 26.9644 24.26 25.6133 25.61C24.2622 26.96 22.6756 28.0294 20.8533 28.8183C19.0311 29.6072 17.0817 30.0011 15.005 30ZM15 28.3333C18.7222 28.3333 21.875 27.0417 24.4583 24.4583C27.0417 21.875 28.3333 18.7222 28.3333 15C28.3333 11.2778 27.0417 8.125 24.4583 5.54167C21.875 2.95833 18.7222 1.66667 15 1.66667C11.2778 1.66667 8.125 2.95833 5.54167 5.54167C2.95833 8.125 1.66667 11.2778 1.66667 15C1.66667 18.7222 2.95833 21.875 5.54167 24.4583C8.125 27.0417 11.2778 28.3333 15 28.3333ZM8.975 20.2567H21.025C21.3161 20.2567 21.56 20.1583 21.7567 19.9617C21.9533 19.765 22.0517 19.5217 22.0517 19.2317C22.0517 18.9417 21.9533 18.6978 21.7567 18.5C21.56 18.3022 21.3167 18.2039 21.0267 18.205H20.385V13.68C20.385 12.2633 20.0117 10.9761 19.265 9.81833C18.5183 8.66167 17.4811 7.93167 16.1533 7.62833V6.28167C16.1533 5.93722 16.0472 5.64833 15.835 5.415C15.6228 5.18167 15.3444 5.065 15 5.065C14.6556 5.065 14.3772 5.18167 14.165 5.415C13.9528 5.64833 13.8467 5.93722 13.8467 6.28167V7.62833C12.52 7.93167 11.4828 8.65111 10.735 9.78667C9.98833 10.9222 9.615 12.1983 9.615 13.615V18.205H8.97333C8.68333 18.205 8.44 18.3033 8.24333 18.5C8.04667 18.6967 7.94833 18.9406 7.94833 19.2317C7.94833 19.5228 8.04667 19.7661 8.24333 19.9617C8.44 20.1572 8.68333 20.2556 8.97333 20.2567"
								fill="#222222"
							/>
						</svg>
						<svg
							onClick={showUserLoginInfo}
							className="headNewOrderContact"
							width="30"
							height="30"
							viewBox="0 0 30 30"
							fill="red"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M30 14.985C30 6.7125 23.28 0 15 0C6.72 0 0 6.7125 0 14.985C0 19.5413 2.07 23.6475 5.31 26.4037C5.34 26.4338 5.37 26.4338 5.37 26.4638C5.64 26.6737 5.91 26.8837 6.21 27.0938C6.36 27.1838 6.48 27.3019 6.63 27.4219C9.10988 29.1005 12.0354 29.9984 15.03 30C18.0246 29.9984 20.9501 29.1005 23.43 27.4219C23.58 27.3319 23.7 27.2138 23.85 27.1219C24.12 26.9137 24.42 26.7038 24.69 26.4937C24.72 26.4638 24.75 26.4637 24.75 26.4338C27.93 23.6456 30 19.5413 30 14.985ZM15 28.1119C12.18 28.1119 9.6 27.2119 7.47 25.7137C7.5 25.4737 7.56 25.2356 7.62 24.9956C7.79935 24.3454 8.0615 23.7209 8.4 23.1375C8.73 22.5675 9.12 22.0575 9.6 21.6075C10.05 21.1575 10.59 20.7394 11.13 20.4094C11.7 20.0794 12.3 19.8394 12.96 19.6594C13.6253 19.4812 14.3112 19.391 15 19.3913C17.0452 19.3758 19.0154 20.1604 20.49 21.5775C21.18 22.2675 21.72 23.0769 22.11 24.0056C22.32 24.5456 22.47 25.115 22.56 25.7137C20.346 27.2703 17.7064 28.1076 15 28.1119ZM10.41 14.2369C10.1462 13.6315 10.0133 12.9772 10.02 12.3169C10.02 11.6587 10.14 10.9987 10.41 10.3988C10.68 9.79875 11.04 9.26062 11.49 8.81063C11.94 8.36062 12.48 8.0025 13.08 7.7325C13.68 7.4625 14.34 7.3425 15 7.3425C15.69 7.3425 16.32 7.4625 16.92 7.7325C17.52 8.0025 18.06 8.3625 18.51 8.81063C18.96 9.26062 19.32 9.80062 19.59 10.3988C19.86 10.9987 19.98 11.6587 19.98 12.3169C19.98 13.0069 19.86 13.6369 19.59 14.235C19.3309 14.8269 18.9648 15.366 18.51 15.825C18.0508 16.2791 17.5118 16.6446 16.92 16.9031C15.6801 17.4116 14.2899 17.4116 13.05 16.9031C12.4582 16.6446 11.9192 16.2791 11.46 15.825C11.0048 15.3725 10.6475 14.8332 10.41 14.2369ZM24.33 24.1856C24.33 24.1256 24.3 24.0956 24.3 24.0356C24.0055 23.0968 23.5706 22.208 23.01 21.3994C22.449 20.5848 21.7601 19.8662 20.97 19.2712C20.3664 18.817 19.712 18.4344 19.02 18.1313C19.3333 17.9216 19.6248 17.681 19.89 17.4131C20.3373 16.9716 20.7301 16.4781 21.06 15.9431C21.7267 14.8525 22.07 13.595 22.05 12.3169C22.0598 11.3709 21.876 10.4329 21.51 9.56063C21.1491 8.71997 20.6296 7.9567 19.98 7.3125C19.3298 6.67697 18.5667 6.16827 17.73 5.8125C16.8564 5.4466 15.9171 5.26346 14.97 5.27437C14.0228 5.26406 13.0835 5.44783 12.21 5.81437C11.3641 6.1658 10.5985 6.68573 9.96 7.3425C9.32115 7.98932 8.812 8.75242 8.46 9.59062C8.09396 10.4629 7.91019 11.4009 7.92 12.3469C7.92 13.0069 8.01 13.6362 8.19 14.235C8.37 14.865 8.61 15.435 8.94 15.9731C9.24 16.5131 9.66 16.9931 10.11 17.4431C10.38 17.7131 10.68 17.9525 11.01 18.1612C10.3149 18.4707 9.66012 18.8636 9.06 19.3313C8.28 19.9313 7.59 20.6494 7.02 21.4294C6.45426 22.2349 6.01893 23.1246 5.73 24.0656C5.7 24.1256 5.7 24.1856 5.7 24.2156C3.33 21.8175 1.86 18.5812 1.86 14.985C1.86 7.7625 7.77 1.85812 15 1.85812C22.23 1.85812 28.14 7.7625 28.14 14.985C28.1361 18.4349 26.7662 21.7429 24.33 24.1856Z"
								fill="#222222"
							/>
						</svg>
					</div>
					{/* login info start */}
					<div className="userLoginWrap getNone">
						<div className="userLoginHead">
							<h3 className="userName">UserNickname</h3>
							<p className="userEmail">DutyFree@gmail.com</p>
						</div>
						<ul className="userLoginUl">
							<Link to={"/profile"}>
								<li
									onClick={handleLoginLis}
									className={
										currentPath === "/contactinfo" || currentPath === "/profile"
											? "userLoginItem loginFocus"
											: "userLoginItem"
									}
								>
									Настройки
								</li>
							</Link>
							<Link to={"/balance"}>
								<li
									onClick={handleLoginLis}
									className={
										currentPath === "/balance"
											? "userLoginItem loginFocus"
											: "userLoginItem"
									}
								>
									Баланс
								</li>
							</Link>
							<Link to={"/help"}>
								<li
									onClick={handleLoginLis}
									className={
										currentPath === "/help"
											? "userLoginItem loginFocus"
											: "userLoginItem"
									}
								>
									Помощь
								</li>
							</Link>
							<li
								onClick={handleLoginLis}
								className={
									currentPath === "/exit"
										? "userLoginItem loginFocus"
										: "userLoginItem"
								}
							>
								Выход
							</li>
						</ul>
					</div>
				</header>
			)}
			{secondPages.includes(currentPath) && (
				<header className="header">
					<div className="header-left">
						<Link to={"/"}>
							<img
								src="/duty-free/Sources/HeadMainImg.svg"
								alt=""
								className="headerMainImg"
							/>
						</Link>
						<div>
							<img
								src="/duty-free/Sources/Duty Free.svg"
								alt=""
								className="headTitle"
							/>
						</div>
					</div>

					<ul className="header-list">
						<Link to={"/lastorders"}>
							<li
								onClick={handleHeadPages}
								className={
									currentPath === "/lastorders"
										? "header-item redFont"
										: "header-item"
								}
							>
								Главная
							</li>
						</Link>
						<Link to={"/orders"}>
							<li
								onClick={handleHeadPages}
								className={
									currentPath === "/orders"
										? "header-item redFont"
										: "header-item"
								}
							>
								Заказы
							</li>
						</Link>
						<Link to={"/dmyorders"}>
							<li
								onClick={handleHeadPages}
								className={
									currentPath === "/dmyorders" ||
									currentPath === "/dcompleteorder"
										? "header-item redFont"
										: "header-item"
								}
							>
								Мои заказы
							</li>
						</Link>
					</ul>

					<div className="headerNewOrder">
						<svg
							className="headNewOrderRing"
							width="30"
							height="30"
							viewBox="0 0 30 30"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M15 24.8083C15.5444 24.8083 16.0172 24.6183 16.4183 24.2383C16.8194 23.8583 17.0517 23.3861 17.115 22.8217H12.885C12.9494 23.3872 13.1817 23.8594 13.5817 24.2383C13.9817 24.6172 14.4544 24.8083 15 24.8083ZM11.6667 18.205V12.9483C11.6667 12.0317 11.9933 11.2472 12.6467 10.595C13.3 9.94278 14.0844 9.61611 15 9.615C15.9156 9.61389 16.7006 9.94056 17.355 10.595C18.0094 11.2494 18.3356 12.0339 18.3333 12.9483V18.205H11.6667ZM15.005 30C12.9317 30 10.9817 29.6067 9.155 28.82C7.32944 28.0322 5.74111 26.9633 4.39 25.6133C3.03889 24.2633 1.96944 22.6767 1.18167 20.8533C0.393889 19.03 0 17.0806 0 15.005C0 12.9294 0.393889 10.9794 1.18167 9.155C1.96833 7.32944 3.03556 5.74111 4.38333 4.39C5.73111 3.03889 7.31833 1.96944 9.145 1.18167C10.9717 0.393889 12.9217 0 14.995 0C17.0683 0 19.0183 0.393889 20.845 1.18167C22.6706 1.96833 24.2589 3.03611 25.61 4.385C26.9611 5.73389 28.0306 7.32111 28.8183 9.14667C29.6061 10.9722 30 12.9217 30 14.995C30 17.0683 29.6067 19.0183 28.82 20.845C28.0333 22.6717 26.9644 24.26 25.6133 25.61C24.2622 26.96 22.6756 28.0294 20.8533 28.8183C19.0311 29.6072 17.0817 30.0011 15.005 30ZM15 28.3333C18.7222 28.3333 21.875 27.0417 24.4583 24.4583C27.0417 21.875 28.3333 18.7222 28.3333 15C28.3333 11.2778 27.0417 8.125 24.4583 5.54167C21.875 2.95833 18.7222 1.66667 15 1.66667C11.2778 1.66667 8.125 2.95833 5.54167 5.54167C2.95833 8.125 1.66667 11.2778 1.66667 15C1.66667 18.7222 2.95833 21.875 5.54167 24.4583C8.125 27.0417 11.2778 28.3333 15 28.3333ZM8.975 20.2567H21.025C21.3161 20.2567 21.56 20.1583 21.7567 19.9617C21.9533 19.765 22.0517 19.5217 22.0517 19.2317C22.0517 18.9417 21.9533 18.6978 21.7567 18.5C21.56 18.3022 21.3167 18.2039 21.0267 18.205H20.385V13.68C20.385 12.2633 20.0117 10.9761 19.265 9.81833C18.5183 8.66167 17.4811 7.93167 16.1533 7.62833V6.28167C16.1533 5.93722 16.0472 5.64833 15.835 5.415C15.6228 5.18167 15.3444 5.065 15 5.065C14.6556 5.065 14.3772 5.18167 14.165 5.415C13.9528 5.64833 13.8467 5.93722 13.8467 6.28167V7.62833C12.52 7.93167 11.4828 8.65111 10.735 9.78667C9.98833 10.9222 9.615 12.1983 9.615 13.615V18.205H8.97333C8.68333 18.205 8.44 18.3033 8.24333 18.5C8.04667 18.6967 7.94833 18.9406 7.94833 19.2317C7.94833 19.5228 8.04667 19.7661 8.24333 19.9617C8.44 20.1572 8.68333 20.2556 8.97333 20.2567"
								fill="#222222"
							/>
						</svg>
						<svg
							onClick={showUserLoginInfo}
							className="headNewOrderContact"
							width="30"
							height="30"
							viewBox="0 0 30 30"
							fill="red"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M30 14.985C30 6.7125 23.28 0 15 0C6.72 0 0 6.7125 0 14.985C0 19.5413 2.07 23.6475 5.31 26.4037C5.34 26.4338 5.37 26.4338 5.37 26.4638C5.64 26.6737 5.91 26.8837 6.21 27.0938C6.36 27.1838 6.48 27.3019 6.63 27.4219C9.10988 29.1005 12.0354 29.9984 15.03 30C18.0246 29.9984 20.9501 29.1005 23.43 27.4219C23.58 27.3319 23.7 27.2138 23.85 27.1219C24.12 26.9137 24.42 26.7038 24.69 26.4937C24.72 26.4638 24.75 26.4637 24.75 26.4338C27.93 23.6456 30 19.5413 30 14.985ZM15 28.1119C12.18 28.1119 9.6 27.2119 7.47 25.7137C7.5 25.4737 7.56 25.2356 7.62 24.9956C7.79935 24.3454 8.0615 23.7209 8.4 23.1375C8.73 22.5675 9.12 22.0575 9.6 21.6075C10.05 21.1575 10.59 20.7394 11.13 20.4094C11.7 20.0794 12.3 19.8394 12.96 19.6594C13.6253 19.4812 14.3112 19.391 15 19.3913C17.0452 19.3758 19.0154 20.1604 20.49 21.5775C21.18 22.2675 21.72 23.0769 22.11 24.0056C22.32 24.5456 22.47 25.115 22.56 25.7137C20.346 27.2703 17.7064 28.1076 15 28.1119ZM10.41 14.2369C10.1462 13.6315 10.0133 12.9772 10.02 12.3169C10.02 11.6587 10.14 10.9987 10.41 10.3988C10.68 9.79875 11.04 9.26062 11.49 8.81063C11.94 8.36062 12.48 8.0025 13.08 7.7325C13.68 7.4625 14.34 7.3425 15 7.3425C15.69 7.3425 16.32 7.4625 16.92 7.7325C17.52 8.0025 18.06 8.3625 18.51 8.81063C18.96 9.26062 19.32 9.80062 19.59 10.3988C19.86 10.9987 19.98 11.6587 19.98 12.3169C19.98 13.0069 19.86 13.6369 19.59 14.235C19.3309 14.8269 18.9648 15.366 18.51 15.825C18.0508 16.2791 17.5118 16.6446 16.92 16.9031C15.6801 17.4116 14.2899 17.4116 13.05 16.9031C12.4582 16.6446 11.9192 16.2791 11.46 15.825C11.0048 15.3725 10.6475 14.8332 10.41 14.2369ZM24.33 24.1856C24.33 24.1256 24.3 24.0956 24.3 24.0356C24.0055 23.0968 23.5706 22.208 23.01 21.3994C22.449 20.5848 21.7601 19.8662 20.97 19.2712C20.3664 18.817 19.712 18.4344 19.02 18.1313C19.3333 17.9216 19.6248 17.681 19.89 17.4131C20.3373 16.9716 20.7301 16.4781 21.06 15.9431C21.7267 14.8525 22.07 13.595 22.05 12.3169C22.0598 11.3709 21.876 10.4329 21.51 9.56063C21.1491 8.71997 20.6296 7.9567 19.98 7.3125C19.3298 6.67697 18.5667 6.16827 17.73 5.8125C16.8564 5.4466 15.9171 5.26346 14.97 5.27437C14.0228 5.26406 13.0835 5.44783 12.21 5.81437C11.3641 6.1658 10.5985 6.68573 9.96 7.3425C9.32115 7.98932 8.812 8.75242 8.46 9.59062C8.09396 10.4629 7.91019 11.4009 7.92 12.3469C7.92 13.0069 8.01 13.6362 8.19 14.235C8.37 14.865 8.61 15.435 8.94 15.9731C9.24 16.5131 9.66 16.9931 10.11 17.4431C10.38 17.7131 10.68 17.9525 11.01 18.1612C10.3149 18.4707 9.66012 18.8636 9.06 19.3313C8.28 19.9313 7.59 20.6494 7.02 21.4294C6.45426 22.2349 6.01893 23.1246 5.73 24.0656C5.7 24.1256 5.7 24.1856 5.7 24.2156C3.33 21.8175 1.86 18.5812 1.86 14.985C1.86 7.7625 7.77 1.85812 15 1.85812C22.23 1.85812 28.14 7.7625 28.14 14.985C28.1361 18.4349 26.7662 21.7429 24.33 24.1856Z"
								fill="#222222"
							/>
						</svg>
					</div>

					{/* login info start */}
					<div className="userLoginWrap getNone">
						<div className="userLoginHead">
							<h3 className="userName">UserNickname</h3>
							<p className="userEmail">DutyFree@gmail.com</p>
						</div>

						<ul className="userLoginUl">
							<Link to={"/profile"}>
								<li
									onClick={handleLoginLis}
									className={
										currentPath === "/contactinfo" || currentPath === "/profile"
											? "userLoginItem loginFocus"
											: "userLoginItem"
									}
								>
									Настройки
								</li>
							</Link>
							<Link to={"/balance"}>
								<li
									onClick={handleLoginLis}
									className={
										currentPath === "/balance"
											? "userLoginItem loginFocus"
											: "userLoginItem"
									}
								>
									Баланс
								</li>
							</Link>
							<Link to={"/help"}>
								<li
									onClick={handleLoginLis}
									className={
										currentPath === "/help"
											? "userLoginItem loginFocus"
											: "userLoginItem"
									}
								>
									Помощь
								</li>
							</Link>
							<li
								onClick={handleLoginLis}
								className={
									currentPath === "/exit"
										? "userLoginItem loginFocus"
										: "userLoginItem"
								}
							>
								Выход
							</li>
						</ul>
					</div>
				</header>
			)}
			{thirdPages.includes(currentPath) && (
				<header className="header">
					<div className="header-left">
						<Link to={"/"}>
							<img
								src="/duty-free/Sources/HeadMainImg.svg"
								alt=""
								className="headerMainImg"
							/>
						</Link>
						<div>
							<img
								src="/duty-free/Sources/Duty Free.svg"
								alt=""
								className="headTitle"
							/>
						</div>
					</div>

					<ul className="header-list">
						<Link to={"/"}>
							<li onClick={handleHeadPages} className="header-item">
								Главная
							</li>
						</Link>
						<Link to={"/catalog"}>
							<li
								onClick={handleHeadPages}
								className={
									currentPath === "/catalog" ||
									currentPath === "/catalogpro" ||
									currentPath === "/moreinfo"
										? "header-item redFont"
										: "header-item"
								}
							>
								Каталог
							</li>
						</Link>
						<Link to={"/perfume"}>
							<li
								onClick={handleHeadPages}
								className={
									currentPath === "/perfume" || currentPath === "/forher"
										? "header-item redFont"
										: "header-item"
								}
							>
								Парфюмерия
							</li>
						</Link>
						<Link to={"/alcohol"}>
							<li
								onClick={handleHeadPages}
								className={
									currentPath === "/alcohol"
										? "header-item redFont"
										: "header-item"
								}
							>
								Алкоголь
							</li>
						</Link>
					</ul>

					<div className="headerNewOrder">
						<Link to={"/search"}>
							<svg
								className={
									innerpages.includes(currentPath)
										? "realSearchIcon mr-More"
										: "realSearchIncon"
								}
								width="29"
								height="29"
								viewBox="0 0 29 29"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M28.0003 28.0003L21.4858 21.4858M21.4858 21.4858C22.6001 20.3715 23.4841 19.0486 24.0871 17.5926C24.6902 16.1367 25.0006 14.5762 25.0006 13.0003C25.0006 11.4244 24.6902 9.86393 24.0872 8.40799C23.4841 6.95204 22.6001 5.62914 21.4858 4.51481C20.3715 3.40048 19.0486 2.51654 17.5926 1.91347C16.1367 1.3104 14.5762 1 13.0003 1C11.4244 1 9.86393 1.3104 8.40799 1.91347C6.95204 2.51654 5.62914 3.40048 4.51481 4.51481C2.26431 6.7653 1 9.81763 1 13.0003C1 16.183 2.26431 19.2353 4.51481 21.4858C6.7653 23.7363 9.81763 25.0006 13.0003 25.0006C16.183 25.0006 19.2353 23.7363 21.4858 21.4858Z"
									stroke="#606161"
									stroke-width="2"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
							</svg>
						</Link>

						{!innerpages.includes(currentPath) && (
							<div className="cartWrap">
								<svg
									width="30"
									height="30"
									viewBox="0 0 30 30"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M29.2553 6.225C29.1783 6.13258 29.0819 6.05822 28.973 6.00718C28.8641 5.95615 28.7453 5.92969 28.625 5.92969H6.33984L5.46895 1.13496C5.43469 0.945943 5.33518 0.774942 5.18777 0.651768C5.04036 0.528594 4.8544 0.46106 4.6623 0.460938H1.28125C1.06369 0.460938 0.85504 0.547363 0.701201 0.701201C0.547363 0.85504 0.460938 1.06369 0.460938 1.28125C0.460938 1.49881 0.547363 1.70746 0.701201 1.8613C0.85504 2.01514 1.06369 2.10156 1.28125 2.10156H3.97734L7.50605 21.5074C7.61669 22.1193 7.91482 22.6817 8.35918 23.1166C7.82219 23.5455 7.42105 24.121 7.20435 24.7732C6.98764 25.4254 6.96465 26.1264 7.13817 26.7915C7.31169 27.4565 7.67426 28.0569 8.182 28.5201C8.68975 28.9833 9.32088 29.2894 9.99898 29.4013C10.6771 29.5132 11.3731 29.4261 12.0027 29.1506C12.6324 28.875 13.1686 28.4229 13.5466 27.8489C13.9245 27.2749 14.128 26.6036 14.1323 25.9163C14.1366 25.2291 13.9416 24.5553 13.5709 23.9766H20.7104C20.2853 24.6418 20.0937 25.4296 20.1659 26.2158C20.2381 27.002 20.57 27.7417 21.1092 28.3184C21.6484 28.895 22.3642 29.2758 23.1437 29.4006C23.9233 29.5254 24.7222 29.3872 25.4145 29.0077C26.1067 28.6282 26.653 28.029 26.967 27.3047C27.2811 26.5804 27.3451 25.7721 27.1489 25.0074C26.9528 24.2427 26.5076 23.5651 25.8837 23.0813C25.2598 22.5976 24.4926 22.3354 23.7031 22.3359H10.4646C10.1445 22.336 9.83441 22.2237 9.58856 22.0185C9.34271 21.8134 9.17665 21.5285 9.11934 21.2135L8.62715 18.5078H24.8105C25.515 18.508 26.1971 18.2609 26.738 17.8097C27.279 17.3585 27.6444 16.7317 27.7705 16.0387L29.4316 6.89629C29.4531 6.77831 29.4484 6.65705 29.4179 6.54107C29.3875 6.42509 29.3319 6.3172 29.2553 6.225ZM12.4922 25.8906C12.4922 26.2692 12.3799 26.6393 12.1696 26.954C11.9593 27.2688 11.6604 27.5141 11.3106 27.659C10.9609 27.8039 10.576 27.8418 10.2047 27.7679C9.83342 27.6941 9.49236 27.5118 9.22468 27.2441C8.95699 26.9764 8.7747 26.6353 8.70084 26.264C8.62699 25.8927 8.66489 25.5079 8.80976 25.1581C8.95463 24.8084 9.19996 24.5095 9.51473 24.2991C9.82949 24.0888 10.1996 23.9766 10.5781 23.9766C11.0858 23.9766 11.5726 24.1782 11.9316 24.5372C12.2905 24.8961 12.4922 25.383 12.4922 25.8906ZM25.6172 25.8906C25.6172 26.2692 25.5049 26.6393 25.2946 26.954C25.0843 27.2688 24.7854 27.5141 24.4356 27.659C24.0859 27.8039 23.701 27.8418 23.3297 27.7679C22.9584 27.6941 22.6174 27.5118 22.3497 27.2441C22.082 26.9764 21.8997 26.6353 21.8258 26.264C21.752 25.8927 21.7899 25.5079 21.9348 25.1581C22.0796 24.8084 22.325 24.5095 22.6397 24.2991C22.9545 24.0888 23.3246 23.9766 23.7031 23.9766C24.2108 23.9766 24.6976 24.1782 25.0566 24.5372C25.4155 24.8961 25.6172 25.383 25.6172 25.8906ZM26.1559 15.7447C26.0985 16.0597 25.9325 16.3447 25.6866 16.5498C25.4408 16.7549 25.1307 16.8672 24.8105 16.8672H8.3291L6.63926 7.57031H27.642L26.1559 15.7447Z"
										fill="#606162"
									/>
								</svg>
							</div>
						)}

						<svg
							onClick={showUserLoginInfo}
							className="headNewOrderContact"
							width="30"
							height="30"
							viewBox="0 0 30 30"
							fill="red"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M30 14.985C30 6.7125 23.28 0 15 0C6.72 0 0 6.7125 0 14.985C0 19.5413 2.07 23.6475 5.31 26.4037C5.34 26.4338 5.37 26.4338 5.37 26.4638C5.64 26.6737 5.91 26.8837 6.21 27.0938C6.36 27.1838 6.48 27.3019 6.63 27.4219C9.10988 29.1005 12.0354 29.9984 15.03 30C18.0246 29.9984 20.9501 29.1005 23.43 27.4219C23.58 27.3319 23.7 27.2138 23.85 27.1219C24.12 26.9137 24.42 26.7038 24.69 26.4937C24.72 26.4638 24.75 26.4637 24.75 26.4338C27.93 23.6456 30 19.5413 30 14.985ZM15 28.1119C12.18 28.1119 9.6 27.2119 7.47 25.7137C7.5 25.4737 7.56 25.2356 7.62 24.9956C7.79935 24.3454 8.0615 23.7209 8.4 23.1375C8.73 22.5675 9.12 22.0575 9.6 21.6075C10.05 21.1575 10.59 20.7394 11.13 20.4094C11.7 20.0794 12.3 19.8394 12.96 19.6594C13.6253 19.4812 14.3112 19.391 15 19.3913C17.0452 19.3758 19.0154 20.1604 20.49 21.5775C21.18 22.2675 21.72 23.0769 22.11 24.0056C22.32 24.5456 22.47 25.115 22.56 25.7137C20.346 27.2703 17.7064 28.1076 15 28.1119ZM10.41 14.2369C10.1462 13.6315 10.0133 12.9772 10.02 12.3169C10.02 11.6587 10.14 10.9987 10.41 10.3988C10.68 9.79875 11.04 9.26062 11.49 8.81063C11.94 8.36062 12.48 8.0025 13.08 7.7325C13.68 7.4625 14.34 7.3425 15 7.3425C15.69 7.3425 16.32 7.4625 16.92 7.7325C17.52 8.0025 18.06 8.3625 18.51 8.81063C18.96 9.26062 19.32 9.80062 19.59 10.3988C19.86 10.9987 19.98 11.6587 19.98 12.3169C19.98 13.0069 19.86 13.6369 19.59 14.235C19.3309 14.8269 18.9648 15.366 18.51 15.825C18.0508 16.2791 17.5118 16.6446 16.92 16.9031C15.6801 17.4116 14.2899 17.4116 13.05 16.9031C12.4582 16.6446 11.9192 16.2791 11.46 15.825C11.0048 15.3725 10.6475 14.8332 10.41 14.2369ZM24.33 24.1856C24.33 24.1256 24.3 24.0956 24.3 24.0356C24.0055 23.0968 23.5706 22.208 23.01 21.3994C22.449 20.5848 21.7601 19.8662 20.97 19.2712C20.3664 18.817 19.712 18.4344 19.02 18.1313C19.3333 17.9216 19.6248 17.681 19.89 17.4131C20.3373 16.9716 20.7301 16.4781 21.06 15.9431C21.7267 14.8525 22.07 13.595 22.05 12.3169C22.0598 11.3709 21.876 10.4329 21.51 9.56063C21.1491 8.71997 20.6296 7.9567 19.98 7.3125C19.3298 6.67697 18.5667 6.16827 17.73 5.8125C16.8564 5.4466 15.9171 5.26346 14.97 5.27437C14.0228 5.26406 13.0835 5.44783 12.21 5.81437C11.3641 6.1658 10.5985 6.68573 9.96 7.3425C9.32115 7.98932 8.812 8.75242 8.46 9.59062C8.09396 10.4629 7.91019 11.4009 7.92 12.3469C7.92 13.0069 8.01 13.6362 8.19 14.235C8.37 14.865 8.61 15.435 8.94 15.9731C9.24 16.5131 9.66 16.9931 10.11 17.4431C10.38 17.7131 10.68 17.9525 11.01 18.1612C10.3149 18.4707 9.66012 18.8636 9.06 19.3313C8.28 19.9313 7.59 20.6494 7.02 21.4294C6.45426 22.2349 6.01893 23.1246 5.73 24.0656C5.7 24.1256 5.7 24.1856 5.7 24.2156C3.33 21.8175 1.86 18.5812 1.86 14.985C1.86 7.7625 7.77 1.85812 15 1.85812C22.23 1.85812 28.14 7.7625 28.14 14.985C28.1361 18.4349 26.7662 21.7429 24.33 24.1856Z"
								fill="#222222"
							/>
						</svg>
					</div>

					{/* login info start */}
					<div className="userLoginWrap getNone">
						<div className="userLoginHead">
							<h3 className="userName">UserNickname</h3>
							<p className="userEmail">DutyFree@gmail.com</p>
						</div>

						<ul className="userLoginUl">
							<Link to={"/profile"}>
								<li
									onClick={handleLoginLis}
									className={
										currentPath === "/contactinfo" || currentPath === "/profile"
											? "userLoginItem loginFocus"
											: "userLoginItem"
									}
								>
									Настройки
								</li>
							</Link>
							<Link to={"/balance"}>
								<li
									onClick={handleLoginLis}
									className={
										currentPath === "/balance"
											? "userLoginItem loginFocus"
											: "userLoginItem"
									}
								>
									Баланс
								</li>
							</Link>
							<Link to={"/help"}>
								<li
									onClick={handleLoginLis}
									className={
										currentPath === "/help"
											? "userLoginItem loginFocus"
											: "userLoginItem"
									}
								>
									Помощь
								</li>
							</Link>
							<li
								onClick={handleLoginLis}
								className={
									currentPath === "/exit"
										? "userLoginItem loginFocus"
										: "userLoginItem"
								}
							>
								Выход
							</li>
						</ul>
					</div>
				</header>
			)}
			{fourthPage === currentPath && (
				<header className="header">
					<div className="header-left headerLeftMain">
						<Link to={"/"}>
							<img
								src="/duty-free/Sources/HeadMainImg.svg"
								alt=""
								className="headerMainImg"
							/>
						</Link>
						<div>
							<img
								src="/duty-free/Sources/Duty Free.svg"
								alt=""
								className="headTitle"
							/>
						</div>
					</div>

					<ul className="header-list">
						<Link to={"/"}>
							<li onClick={handleHeadPages} className="header-item redFont">
								Главная
							</li>
						</Link>
						<li onClick={handleHeadPages} className="header-item">
							О нас
						</li>
						<li onClick={handleHeadPages} className="header-item">
							Условия
						</li>
						<li onClick={handleHeadPages} className="header-item">
							Вопросы
						</li>
						<li onClick={handleHeadPages} className="header-item">
							Контакты
						</li>
					</ul>

					<div className="header-right-login">
						<button className="loginBtn">Вход</button>
						<Link to={"/registration/registration"}>
							<button className="loginBtn redBack">Регистрация</button>
						</Link>
					</div>
				</header>
			)}
			{fifthPage === currentPath && (
				<header className="header">
					<div className="header-left">
						<Link to={"/"}>
							<img
								src="/duty-free/Sources/HeadMainImg.svg"
								alt=""
								className="headerMainImg"
							/>
						</Link>
						<div>
							<img
								src="/duty-free/Sources/Duty Free.svg"
								alt=""
								className="headTitle"
							/>
						</div>
					</div>

					<ul className="header-list">
						<Link to={"/"}>
							<li
								onClick={handleHeadPages}
								className={
									currentPath === "/branddutyfree"
										? "header-item redFont"
										: "header-item"
								}
							>
								Главная
							</li>
						</Link>
						<li onClick={handleHeadPages} className="header-item">
							О проекте
						</li>
						<li onClick={handleHeadPages} className="header-item">
							Road Map
						</li>
						<li onClick={handleHeadPages} className="header-item">
							FAQ
						</li>
						<li onClick={handleHeadPages} className="header-item">
							Контакты
						</li>
					</ul>

					<div className="header-right-login">
						<button className="loginBtn">Вход</button>
						<Link to={"/registration"}>
							<button className="loginBtn redBack">Регистрация</button>
						</Link>
					</div>
				</header>
			)}
			{sixthPages.includes(currentPath) && (
				<header className="header">
					<div className="header-left">
						<Link to={"/"}>
							<img
								src="/duty-free/Sources/HeadMainImg.svg"
								alt=""
								className="headerMainImg"
							/>
						</Link>
						<div>
							<img
								src="/duty-free/Sources/Duty Free.svg"
								alt=""
								className="headTitle"
							/>
						</div>
					</div>
					<ul className="header-list">
						<Link to={"/myordering"}>
							<li
								onClick={handleHeadPages}
								className={
									currentPath === "/myordering"
										? "header-item redFont"
										: "header-item"
								}
							>
								Главная
							</li>
						</Link>

						<Link to="/userorders">
							<li
								onClick={handleHeadPages}
								className={
									currentPath === "/userorders" ||
									currentPath === "/usermessages" ||
									currentPath === "/myorders" ||
									currentPath === "/completeorder"
										? "header-item redFont"
										: "header-item"
								}
							>
								Мои заказы
							</li>
						</Link>

						<Link to="/topperformers">
							<li
								onClick={handleHeadPages}
								className={
									currentPath === "/topperformers" ||
									currentPath === "/featuredperformers"
										? "header-item redFont"
										: "header-item"
								}
							>
								Исполнители
							</li>
						</Link>
						<Link to={"/catalog"}>
							<li onClick={handleHeadPages} className="header-item">
								Каталог
							</li>
						</Link>
					</ul>
					<div className="headerNewOrder">
						<svg
							className="headNewOrderRing"
							width="30"
							height="30"
							viewBox="0 0 30 30"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M15 24.8083C15.5444 24.8083 16.0172 24.6183 16.4183 24.2383C16.8194 23.8583 17.0517 23.3861 17.115 22.8217H12.885C12.9494 23.3872 13.1817 23.8594 13.5817 24.2383C13.9817 24.6172 14.4544 24.8083 15 24.8083ZM11.6667 18.205V12.9483C11.6667 12.0317 11.9933 11.2472 12.6467 10.595C13.3 9.94278 14.0844 9.61611 15 9.615C15.9156 9.61389 16.7006 9.94056 17.355 10.595C18.0094 11.2494 18.3356 12.0339 18.3333 12.9483V18.205H11.6667ZM15.005 30C12.9317 30 10.9817 29.6067 9.155 28.82C7.32944 28.0322 5.74111 26.9633 4.39 25.6133C3.03889 24.2633 1.96944 22.6767 1.18167 20.8533C0.393889 19.03 0 17.0806 0 15.005C0 12.9294 0.393889 10.9794 1.18167 9.155C1.96833 7.32944 3.03556 5.74111 4.38333 4.39C5.73111 3.03889 7.31833 1.96944 9.145 1.18167C10.9717 0.393889 12.9217 0 14.995 0C17.0683 0 19.0183 0.393889 20.845 1.18167C22.6706 1.96833 24.2589 3.03611 25.61 4.385C26.9611 5.73389 28.0306 7.32111 28.8183 9.14667C29.6061 10.9722 30 12.9217 30 14.995C30 17.0683 29.6067 19.0183 28.82 20.845C28.0333 22.6717 26.9644 24.26 25.6133 25.61C24.2622 26.96 22.6756 28.0294 20.8533 28.8183C19.0311 29.6072 17.0817 30.0011 15.005 30ZM15 28.3333C18.7222 28.3333 21.875 27.0417 24.4583 24.4583C27.0417 21.875 28.3333 18.7222 28.3333 15C28.3333 11.2778 27.0417 8.125 24.4583 5.54167C21.875 2.95833 18.7222 1.66667 15 1.66667C11.2778 1.66667 8.125 2.95833 5.54167 5.54167C2.95833 8.125 1.66667 11.2778 1.66667 15C1.66667 18.7222 2.95833 21.875 5.54167 24.4583C8.125 27.0417 11.2778 28.3333 15 28.3333ZM8.975 20.2567H21.025C21.3161 20.2567 21.56 20.1583 21.7567 19.9617C21.9533 19.765 22.0517 19.5217 22.0517 19.2317C22.0517 18.9417 21.9533 18.6978 21.7567 18.5C21.56 18.3022 21.3167 18.2039 21.0267 18.205H20.385V13.68C20.385 12.2633 20.0117 10.9761 19.265 9.81833C18.5183 8.66167 17.4811 7.93167 16.1533 7.62833V6.28167C16.1533 5.93722 16.0472 5.64833 15.835 5.415C15.6228 5.18167 15.3444 5.065 15 5.065C14.6556 5.065 14.3772 5.18167 14.165 5.415C13.9528 5.64833 13.8467 5.93722 13.8467 6.28167V7.62833C12.52 7.93167 11.4828 8.65111 10.735 9.78667C9.98833 10.9222 9.615 12.1983 9.615 13.615V18.205H8.97333C8.68333 18.205 8.44 18.3033 8.24333 18.5C8.04667 18.6967 7.94833 18.9406 7.94833 19.2317C7.94833 19.5228 8.04667 19.7661 8.24333 19.9617C8.44 20.1572 8.68333 20.2556 8.97333 20.2567"
								fill="#222222"
							/>
						</svg>
						<svg
							onClick={showUserLoginInfo}
							className="headNewOrderContact"
							width="30"
							height="30"
							viewBox="0 0 30 30"
							fill="red"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M30 14.985C30 6.7125 23.28 0 15 0C6.72 0 0 6.7125 0 14.985C0 19.5413 2.07 23.6475 5.31 26.4037C5.34 26.4338 5.37 26.4338 5.37 26.4638C5.64 26.6737 5.91 26.8837 6.21 27.0938C6.36 27.1838 6.48 27.3019 6.63 27.4219C9.10988 29.1005 12.0354 29.9984 15.03 30C18.0246 29.9984 20.9501 29.1005 23.43 27.4219C23.58 27.3319 23.7 27.2138 23.85 27.1219C24.12 26.9137 24.42 26.7038 24.69 26.4937C24.72 26.4638 24.75 26.4637 24.75 26.4338C27.93 23.6456 30 19.5413 30 14.985ZM15 28.1119C12.18 28.1119 9.6 27.2119 7.47 25.7137C7.5 25.4737 7.56 25.2356 7.62 24.9956C7.79935 24.3454 8.0615 23.7209 8.4 23.1375C8.73 22.5675 9.12 22.0575 9.6 21.6075C10.05 21.1575 10.59 20.7394 11.13 20.4094C11.7 20.0794 12.3 19.8394 12.96 19.6594C13.6253 19.4812 14.3112 19.391 15 19.3913C17.0452 19.3758 19.0154 20.1604 20.49 21.5775C21.18 22.2675 21.72 23.0769 22.11 24.0056C22.32 24.5456 22.47 25.115 22.56 25.7137C20.346 27.2703 17.7064 28.1076 15 28.1119ZM10.41 14.2369C10.1462 13.6315 10.0133 12.9772 10.02 12.3169C10.02 11.6587 10.14 10.9987 10.41 10.3988C10.68 9.79875 11.04 9.26062 11.49 8.81063C11.94 8.36062 12.48 8.0025 13.08 7.7325C13.68 7.4625 14.34 7.3425 15 7.3425C15.69 7.3425 16.32 7.4625 16.92 7.7325C17.52 8.0025 18.06 8.3625 18.51 8.81063C18.96 9.26062 19.32 9.80062 19.59 10.3988C19.86 10.9987 19.98 11.6587 19.98 12.3169C19.98 13.0069 19.86 13.6369 19.59 14.235C19.3309 14.8269 18.9648 15.366 18.51 15.825C18.0508 16.2791 17.5118 16.6446 16.92 16.9031C15.6801 17.4116 14.2899 17.4116 13.05 16.9031C12.4582 16.6446 11.9192 16.2791 11.46 15.825C11.0048 15.3725 10.6475 14.8332 10.41 14.2369ZM24.33 24.1856C24.33 24.1256 24.3 24.0956 24.3 24.0356C24.0055 23.0968 23.5706 22.208 23.01 21.3994C22.449 20.5848 21.7601 19.8662 20.97 19.2712C20.3664 18.817 19.712 18.4344 19.02 18.1313C19.3333 17.9216 19.6248 17.681 19.89 17.4131C20.3373 16.9716 20.7301 16.4781 21.06 15.9431C21.7267 14.8525 22.07 13.595 22.05 12.3169C22.0598 11.3709 21.876 10.4329 21.51 9.56063C21.1491 8.71997 20.6296 7.9567 19.98 7.3125C19.3298 6.67697 18.5667 6.16827 17.73 5.8125C16.8564 5.4466 15.9171 5.26346 14.97 5.27437C14.0228 5.26406 13.0835 5.44783 12.21 5.81437C11.3641 6.1658 10.5985 6.68573 9.96 7.3425C9.32115 7.98932 8.812 8.75242 8.46 9.59062C8.09396 10.4629 7.91019 11.4009 7.92 12.3469C7.92 13.0069 8.01 13.6362 8.19 14.235C8.37 14.865 8.61 15.435 8.94 15.9731C9.24 16.5131 9.66 16.9931 10.11 17.4431C10.38 17.7131 10.68 17.9525 11.01 18.1612C10.3149 18.4707 9.66012 18.8636 9.06 19.3313C8.28 19.9313 7.59 20.6494 7.02 21.4294C6.45426 22.2349 6.01893 23.1246 5.73 24.0656C5.7 24.1256 5.7 24.1856 5.7 24.2156C3.33 21.8175 1.86 18.5812 1.86 14.985C1.86 7.7625 7.77 1.85812 15 1.85812C22.23 1.85812 28.14 7.7625 28.14 14.985C28.1361 18.4349 26.7662 21.7429 24.33 24.1856Z"
								fill="#222222"
							/>
						</svg>
					</div>
					{/* login info start */}
					<div className="userLoginWrap getNone">
						<div className="userLoginHead">
							<h3 className="userName">UserNickname</h3>
							<p className="userEmail">DutyFree@gmail.com</p>
						</div>
						<ul className="userLoginUl">
							<Link to={"/realprofile"}>
								<li
									onClick={handleLoginLis}
									className={
										currentPath === "/realprofile"
											? "userLoginItem loginFocus"
											: "userLoginItem"
									}
								>
									Профиль
								</li>
							</Link>

							<Link to={currentPath === "/dhelp" ? "/dbalance" : "/dprofile"}>
								<li
									onClick={handleLoginLis}
									className={
										currentPath === "/dcontactinfo" ||
										currentPath === "/dprofile"
											? "userLoginItem loginFocus"
											: "userLoginItem"
									}
								>
									{currentPath === "/dhelp" ? "Баланс" : "Настройки"}
								</li>
							</Link>
							<Link to={"/dhelp"}>
								<li
									onClick={handleLoginLis}
									className={
										currentPath === "/dhelp"
											? "userLoginItem loginFocus"
											: "userLoginItem"
									}
								>
									Помощь
								</li>
							</Link>
							<li
								onClick={handleLoginLis}
								className={
									currentPath === "/exit"
										? "userLoginItem loginFocus"
										: "userLoginItem"
								}
							>
								Выход
							</li>
						</ul>
					</div>
				</header>
			)}
		</div>
	);
};

export default Header;
