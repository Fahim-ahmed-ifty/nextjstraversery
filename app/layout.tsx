import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import Header from './components/Header';
import './globals.css';

const poppins = Poppins({
	weight: ['400', '700'],
	subsets: ['latin']
});

export const metadata: Metadata = {
	title: 'ZettaByte Media Traversery By FahimIfty',
	description: 'Web Developement',
	keywords:
		'web developement, web browser, web design, javascript,typescript,html,css'
};

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body className={poppins.className}>
				<Header />
				<main className='container'>{children}</main>
			</body>
		</html>
	);
}
