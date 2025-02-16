import Repo from '@/app/components/Repo';
import RepoDirs from '@/app/components/RepoDirs';
import Link from 'next/link';
import React, { Suspense } from 'react';

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
			<Suspense fallback={<div>Loading Repo ...</div>}>
				<Repo name={name} />
			</Suspense>
			<Suspense fallback={<div>Loading Directories ...</div>}>
				<RepoDirs name={name} />
			</Suspense>
		</div>
	);
};

export default RepoPage;
