import { Suspense, lazy } from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";

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

const App = () => {
	return (
		<Router>
			<Suspense fallback={<div>Loading...</div>}>
				<Header />
				<Routes>
					<Route path="/" element={<AboutDutyFree />} />
					<Route path="/MainPage" element={<MainPage />} />
					<Route path="/BrandDutyFree" element={<BrandDutyFree />} />
					<Route path="/Production" element={<Production />} />
					<Route path="/Order" element={<Order />} />
					<Route path="/Analyze" element={<Analyze />} />
					<Route path="/MyOrdering" element={<MyOrdering />} />
					<Route path="/MyOrders" element={<MyOrders />} />
					<Route path="/TopPerformers" element={<TopPerformers />} />
					<Route path="/FeaturedPerformer" element={<FeaturedPerformer />} />
					<Route path="/CompleteOrder" element={<CompleteOrder />} />
					<Route path="/Balance" element={<Balance />} />
					<Route path="/Help" element={<Help />} />
					<Route path="/Profile" element={<Profile />} />
					<Route path="/ContactInfo" element={<ContactInfo />} />
					<Route path="/LastOrders" element={<LastOrders />} />
					<Route path="/Orders" element={<Orders />} />
					<Route path="/DMyOrders" element={<DMyOrders />} />
					<Route path="/DCompleteOrder" element={<DCompleteOrder />} />
					<Route path="/RealProfile" element={<RealProfile />} />
					<Route path="/Catalog" element={<Catalog />} />
					<Route path="/MoreInfo" element={<MoreInfo />} />
					<Route path="/OService" element={<OService />} />
					<Route path="/CurrencyConvert" element={<CurrencyConvert />} />
					<Route path="/ForWho" element={<ForWho />} />
					<Route path="/Alcohol" element={<Alcohol />} />
				</Routes>
				<Footer />
			</Suspense>
		</Router>
	);
};

export default App;
