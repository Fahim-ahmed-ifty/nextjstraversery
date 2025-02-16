import React, { ReactNode } from 'react';

interface AboutLayoutProps {
	children: ReactNode;
}

const AboutLayout = ({ children }: AboutLayoutProps) => {
	return (
		<div>
			<h1>This is the about layout</h1>
			{children}
		</div>
	);
};

export default AboutLayout;
