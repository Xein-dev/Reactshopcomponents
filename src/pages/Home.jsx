import React from 'react';
import Header from '../components/Header.jsx'
import {Link} from 'react-router-dom'
import '../styles/Home.scss'
const Home = () => {
	return (
		<React.Fragment>
	 	<Header/>

		 <div className='containersito'>
		
		<h1 className='title1'> Soy el home, React Shop. </h1>

		<h2 className='title2'>Todas las pages de la app</h2>
		
		<div className='container_pages'>
		<Link className='link_page' to ="/login">Login </Link>
		<Link className='link_page' to ="/create-account">Create account</Link>
		<Link className='link_page' to ="/my-account">My account</Link>
		<Link className='link_page' to ="/new-password">New password</Link>
		<Link className='link_page' to ="/recovery-password">Recovery password</Link>
		<Link className='link_page' to ="/mobile-menu">Mobile-menu</Link>
		<Link className='link_page' to ="/my-order">My order</Link>
		<Link className='link_page' to ="/my-orders">My orders</Link>
		<Link className='link_page' to ="/my-order-detail">My order detail</Link>
		<Link className='link_page' to ="/product-detail">Product detail</Link>
		<Link className='link_page' to ="/product-list">Product list</Link>
		<Link className='link_page' to ="*">Not Found</Link>
		</div>

		</div>

		</React.Fragment>

	);
}

export default Home;

/* https://www.reactshop.co/
 example como quedaria la react shop */