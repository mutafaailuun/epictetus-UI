"use client";
import CardPost from "../components/CardPost";
import Head from "next/head";
import mockPosts from "../../utils/posts.json";
import { useState } from "react";
import Layout from "../components/Layout";
import Container from "../components/Container";
import SectionHeader from "../components/SectionHeader";
export default function Posts() {
	const [posts, setPosts] = useState(mockPosts);
	return (
		<Layout>
			<Head>
				<title>Posts &mdash; Epictetus</title>
			</Head>
			<Container>
				<SectionHeader>UI Design</SectionHeader>
				{!posts.length ? (
					<div className="text-center">
						<h1 className="text-6xl">No result 😥</h1>
						<p className="text-white/60 mt-4 text-xl md:w-6/12 w-full mx-auto">
							We couldn&appos;t find any posts with the keyword `yahahahayuk`.
							Please try another keyword.
						</p>
					</div>
				) : (
					<div className="flex -mx-4 flex-wrap mt-6">
						{posts.map((post) => (
							<div key={post.id} className="md:w-4/12 w-full px-4 py-6">
								<CardPost {...post} />
							</div>
						))}
					</div>
				)}
			</Container>
		</Layout>
	);
}
