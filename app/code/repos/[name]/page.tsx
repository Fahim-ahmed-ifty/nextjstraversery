import Repo from '@/app/components/Repo';
import Link from 'next/link';
import React from 'react';

interface RepoPageProps {
	params: {
		name: string;
	};
}
const RepoPage = ({ params: { name } }: RepoPageProps) => {
	return (
		<div className='card'>
			<Link href='/code/repos' className='btn btn-back '>
				Back to Reposotories
			</Link>
			<Repo name={name} />
		</div>
	);
};

export default RepoPage;
