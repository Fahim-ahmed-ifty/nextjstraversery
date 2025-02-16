import Link from 'next/link';
import React from 'react';

interface RepoProps {
	name: string;
}

interface RepoContent {
	type: string;
	path: string;
}

async function fetchRepoContents({
	name
}: RepoProps): Promise<RepoContent[]> {
	await new Promise(resolve => setTimeout(resolve, 3000));

	const response = await fetch(
		`https://api.github.com/repos/fahim-ahmed-ifty/${name}/contents`
	);

	if (!response.ok) {
		throw new Error(
			`Failed to fetch contents: ${response.statusText}`
		);
	}

	const contents: RepoContent[] = await response.json();
	return contents;
}
const RepoDirs = async ({ name }: RepoProps) => {
	try {
		const contents = await fetchRepoContents({ name });
		const dirs = contents.filter(content => content.type === 'dir');

		return (
			<>
				<h3>Directories</h3>
				<ul>
					{dirs.map(dir => (
						<li key={dir.path}>
							<Link href={`/code/repos/${name}/${dir.path}`}>
								{dir.path}
							</Link>
						</li>
					))}
				</ul>
			</>
		);
	} catch (error) {
		console.error(error);
		return <div>Error loading directories.</div>;
	}
};

export default RepoDirs;
