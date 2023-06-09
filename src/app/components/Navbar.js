"use client";
import { useState } from "react";
import Container from "./Container";
import Link from "next/link";

export default function Navbar() {
	const [dropdown, setDropdown] = useState(false);
	const [offcanvas, setOffcanvas] = useState(false);
	const [search, setSearch] = useState(false);
	const dropdownList = [
		{ text: "Internet", href: "/posts" },
		{ text: "Books", href: "/posts" },
		{ text: "Open Source", href: "/posts" },
	];
	return (
		<nav className="py-10">
			<Container>
				<div className="flex items-center">
					<div className="w-3/12 lg:hidden">
						<button onClick={() => setOffcanvas(!offcanvas)}>
							<svg
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<g opacity="0.4">
									<path
										d="M3 12H21"
										stroke="white"
										strokeWidth="2"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
									<path
										d="M3 6H21"
										stroke="white"
										strokeWidth="2"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
									<path
										d="M3 18H21"
										stroke="white"
										strokeWidth="2"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
								</g>
							</svg>
						</button>
					</div>

					<div className="lg:w-2/12 w-6/12 ">
						<Link
							href="/"
							className="flex items-center justify-center lg:justify-start"
						>
							<div className="w-10 h-10 bg-emerald-600 rounded flex items-center justify-center mr-4 shadow-2xl">
								E
							</div>
							Epictetus
						</Link>
					</div>

					<div className="w-3/12 text-right lg:hidden">
						<button onClick={() => setSearch(!search)}>
							<svg
								className="inline-block"
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<g opacity="0.4">
									<path
										d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z"
										stroke="white"
										strokeWidth="2"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
									<path
										d="M21 21L16.65 16.65"
										stroke="white"
										strokeWidth="2"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
								</g>
							</svg>
						</button>
					</div>

					<div
						className={`lg:w-7/12 bg-gradient-to-b from-emerald-800 to-emerald-950 lg:bg-none lg:static w-full top-0 h-full lg:h-auto lg:p-0 fixed p-10 transition-all ${
							offcanvas ? "left-0" : "-left-full"
						} `}
					>
						<button
							onClick={() => setOffcanvas(false)}
							className="absolute top-10 right-10 lg:hidden"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
								class="feather feather-x"
							>
								<line x1="18" y1="6" x2="6" y2="18"></line>
								<line x1="6" y1="6" x2="18" y2="18"></line>
							</svg>
						</button>
						<ul className="lg:space-x-14 flex lg:items-center flex-col lg:flex-row space-y-4 lg:space-y-0">
							<li>
								<Link href="/posts" className="hover:underline">
									UI Design
								</Link>
							</li>
							<li>
								<a href="/posts" className="hover:underline">
									Front-End
								</a>
							</li>
							<li>
								<a href="/posts" className="hover:underline">
									Back-End
								</a>
							</li>
							<li className="relative">
								<a
									className="hover:underline cursor-pointer flex items-center"
									onClick={() => setDropdown(!dropdown)}
								>
									Lainnya
									<svg
										className="ml-1 mt-1"
										width="16"
										height="16"
										viewBox="0 0 16 16"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M4 6L8 10L12 6"
											stroke="white"
											strokeWidth="2"
											strokeLinecap="round"
											strokeLinejoin="round"
										/>
									</svg>
								</a>
								{dropdown && (
									<ul className="absolute w-[200px] bg-gray-800 rounded shadow-2xl mt-3">
										{dropdownList.map(({ text, href }) => (
											<li
												key={text}
												className="border-b border-white/5 last:child-0"
											>
												<Link
													href={href}
													className="flex py-2 px-6 hover:bg-gray-700/60"
												>
													{text}
												</Link>
											</li>
										))}
									</ul>
								)}
							</li>
						</ul>
					</div>
					<div
						className={`lg:w-3/12 absolute w-full left-0 px-8 transition-all lg:static lg:px-0 ${
							search ? "top-10" : "-top-40"
						} `}
					>
						<input
							className="bg-emerald-700 py-2 px-6 w-full lg:rounded-full rounded-lg bg-search pl-10"
							placeholder="Search..."
						/>
						<button
							onClick={() => setSearch(false)}
							className="absolute top-2 right-10 lg:hidden"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
								class="feather feather-x"
							>
								<line x1="18" y1="6" x2="6" y2="18"></line>
								<line x1="6" y1="6" x2="18" y2="18"></line>
							</svg>
						</button>
					</div>
				</div>
			</Container>
		</nav>
	);
}
