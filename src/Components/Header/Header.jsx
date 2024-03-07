import React from "react";
import classes from "./Header.module.css";
import { SlLocationPin } from "react-icons/sl";
import { BsSearch } from "react-icons/bs";
import { BiCart } from "react-icons/bi";
import LowerHeader from "./LowerHeader";
const Header = () => {
	return (
		<section>
			<section>
				<div className={classes.header__container}>
					<div className={classes.logo__container}>
						{/* amazon logo */}
						<a href="">
							<img
								src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
								alt="amazon logo"
							/>
						</a>
						{/* delivery */}
						<div className={classes.delivery}>
							<span>
								<SlLocationPin size={20} />
							</span>
							<div>
								<p>Delivered to</p>
								<span>Ethiopia</span>
							</div>
						</div>
					</div>

					<div className={classes.search}>
						{/* search*/}
						<select name="" id="">
							<option value="">All</option>
						</select>
						<input type="text" name="" id="" placeholder="Search product" />
						<BsSearch size={25} />
					</div>
					<div className={classes.order__container}>
						<div className={classes.language}>
							<img
								src="https://media.istockphoto.com/id/1394197218/vector/american-usa-flag-with-real-proportions-and-colors.jpg?s=612x612&w=0&k=20&c=uzSZuRnAqtrCgYmWzW9opveCTzaJOkj2RAAdll7cd98="
								alt=""
							/>
							<select>
								<option value="">EN</option>
							</select>
						</div>
						{/* three components */}
						<a href="">
							<div>
								<p>Sign In </p>
								<span>Account & Lists</span>
							</div>
						</a>
						{/* orders */}
						<a href="">
							<p>returns</p>
							<span>& Orders</span>
						</a>
						{/* cart */}
						<a to={"/cart"} className={classes.cart}>
							<BiCart size={35} />
							<span>0</span>
						</a>
					</div>
				</div>
			</section>
			<LowerHeader />
		</section>
	);
};

export default Header;
