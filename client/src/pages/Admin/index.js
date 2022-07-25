import React from "react";
import "./styles.css";

import { Box } from "@chakra-ui/react";
import { Link, Router, Route, BrowserRouter, Routes,useMatch } from "react-router-dom";

import Home from "./Home";
import Products from "./Products";
import Orders from "./Orders";
import ProductDetail from "./ProductDetail";
import NewProduct from "./Products/new";

function Admin() {
	const { path, url } = useMatch();

	return (
		<div>
			<nav>
				<ul className="admin-menu">
					<li>
						<Link to={url}>Home</Link>
					</li>
					<li>
						<Link to={`${url}/orders`}>Orders</Link>
					</li>
					<li>
						<Link to={`${url}/products`}>Products</Link>
					</li>
				</ul>
			</nav>

			<Box mt="10">
				<Routes>
					<Route exact path={path} component={Home} />
					<Route path={`${path}/orders`} component={Orders} />
					<Route exact path={`${path}/products`} component={Products} />
					<Route exact path={`${path}/products/new`} component={NewProduct} />
					<Route
						path={`${path}/products/:product_id`}
						component={ProductDetail}
					/>
				</Routes>
			</Box>
		</div>
	);
}

export default Admin;
