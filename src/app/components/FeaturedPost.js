import Image from "next/image";
import InfoPost from "./InfoPost";
import Link from "next/link";

export default function FeaturedPost() {
	return (
		<article>
			<div className="flex lg:items-center items-start -mx-4 flex-wrap">
				<div className="px-4 lg:w-8/12 md:w-7/12 w-full">
					<Link href="/detail">
						<Image
							src="/featured.png"
							alt="Featured Image"
							className="rounded-xl w-full mb-4 md:mb-0"
							width={710}
							height={389}
						/>
					</Link>
				</div>
				<div className="px-4 lg:w-4/12 md:w-5/12 w-full">
					<InfoPost
						category="UI Design"
						date="July 2, 2021"
						title="Understanding color theory: the color wheel and finding complementary colors"
						shortDescription="Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum."
						authorAvatar="/author-1.png"
						authorAvaAlt="author-1"
						authorName="Leslie Alexander"
						authorJob="UI Designer"
					/>
				</div>
			</div>
			<hr className="border-white/10 mt-10 md:hidden" />
		</article>
	);
}
