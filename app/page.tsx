import Link from 'next/link';
import React from 'react';

const HomePage = () => {
	return (
		<div>
			<h1>Welcome to ZettaByte Media</h1>
			<ul>
				<li className='hover:text-blue-300'>
					<Link href='/'>Home</Link>
				</li>
				<li className='hover:text-blue-300'>
					<Link href='/about'>About</Link>
				</li>
				<li className='hover:text-blue-300'>
					<Link href='/about/team'>Team</Link>
				</li>
			</ul>
		</div>
	);
};

export default HomePage;
