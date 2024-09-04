import { Suspense, lazy } from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Container from "./Utils/Container";

const Footer = lazy(() => import("./Components/Footer/Footer"));
const Header = lazy(() => import("./Components/Header/Header"));
const AboutDutyFree = lazy(() => import("./Pages/AboutDutyFree/AboutDutyFree"));
const MainPage = lazy(() => import("./Pages/MainPage/MainPage"));
const BrandDutyFree = lazy(() => import("./Pages/BrandDutyFree/BrandDutyFree"));
const Production = lazy(() => import("./Admin/Production/Production"));
const Order = lazy(() => import("./Admin/Order/Order"));
const Analyze = lazy(() => import("./Admin/Analayze/Analyze"));
const MyOrdering = lazy(() => import("./Pages/MyOrdering/MyOrdering"));
const MyOrders = lazy(() => import("./Pages/MyOrders/MyOrders"));
const TopPerformers = lazy(() => import("./Pages/TopPerformers/TopPerFormers"));
const FeaturedPerformer = lazy(
	() => import("./Pages/FeaturedPerformer/FeaturedPerformer")
);
const CompleteOrder = lazy(
	() => import("./Pages/CompletedOrder/CompleteOrder")
);
const Balance = lazy(() => import("./Pages/Balance/Balance"));
const Help = lazy(() => import("./Pages/Help/Help"));
const Profile = lazy(() => import("./Pages/Profile/Profile"));
const ContactInfo = lazy(() => import("./Pages/ContactInfo/ContactInfo"));
const LastOrders = lazy(() => import("./Pages/LastOrders/LastOrders"));
const Orders = lazy(() => import("./Pages/Orders/Orders"));
const DMyOrders = lazy(() => import("./Pages/DMyOrders/DMyOrders"));
const DCompleteOrder = lazy(
	() => import("./Pages/DCompleteOrder/DCompleteOrder")
);
const RealProfile = lazy(() => import("./Pages/RealProfile/RealProfile"));
const Catalog = lazy(() => import("./Pages/Catalog/Catalog"));
const MoreInfo = lazy(() => import("./Pages/MoreInfo/MoreInfo"));
const OService = lazy(() => import("./Pages/OService/OService"));
const CurrencyConvert = lazy(
	() => import("./Pages/CurrencyConvert/CurrencyConvert")
);
const ForWho = lazy(() => import("./Pages/ForWho/ForWho"));
const Alcohol = lazy(() => import("./Pages/Alcohol/Alcohol"));
const Search = lazy(() => import("./Pages/Search/Search"));
const ChatWithClient = lazy(
	() => import("./Admin/ChatWithClient/ChatWithClient")
);
const Registration = lazy(() => import("./Pages/Registration/Registration"));
const UserOrders = lazy(() => import("./Pages/UserOrders/UserOrders"));
const UserMessages = lazy(() => import("./Pages/UserMessages/UserMessages"));

const App = () => {
	return (
		<Router>
			<Suspense fallback={<div>Loading...</div>}>
				<Container>
					<Header />
					<Routes>
						<Route path="/" element={<AboutDutyFree />} />
						<Route path="/catalog" element={<MainPage />} />
						<Route path="/branddutyfree" element={<BrandDutyFree />} />
						<Route path="/production" element={<Production />} />
						<Route path="/order" element={<Order />} />
						<Route path="/chatwithclient" element={<ChatWithClient />} />
						<Route path="/analyze" element={<Analyze />} />
						<Route path="/myordering" element={<MyOrdering />} />
						<Route path="/myorders" element={<MyOrders />} />
						<Route path="/topperformers" element={<TopPerformers />} />
						<Route path="/featuredperformer" element={<FeaturedPerformer />} />
						<Route path="/completeorder" element={<CompleteOrder />} />
						<Route path="/balance" element={<Balance />} />
						<Route path="/help" element={<Help />} />
						<Route path="/profile" element={<Profile />} />
						<Route path="/contactinfo" element={<ContactInfo />} />
						<Route path="/lastorders" element={<LastOrders />} />
						<Route path="/orders" element={<Orders />} />
						<Route path="/dmyorders" element={<DMyOrders />} />
						<Route path="/dcompleteorder" element={<DCompleteOrder />} />
						<Route path="/realprofile" element={<RealProfile />} />
						<Route path="/catalogpro" element={<Catalog />} />
						<Route path="/moreinfo" element={<MoreInfo />} />
						<Route path="/oservice" element={<OService />} />
						<Route path="/currencyconvert" element={<CurrencyConvert />} />
						<Route path="/perfume" element={<ForWho />} />
						<Route path="/alcohol" element={<Alcohol />} />
						<Route path="/search" element={<Search />} />
						<Route path="/userorders" element={<UserOrders />} />
						<Route path="/UserMessages" element={<UserMessages />} />
						<Route path="/registration" element={<Registration />} />
					</Routes>
					<Footer />
				</Container>
			</Suspense>
		</Router>
	);
};

export default App;
