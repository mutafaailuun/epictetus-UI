import Image from "next/image";
import InfoPost from "./InfoPost";
import Link from "next/link";
export default function CardPost({ thumbnail, ...infoPost }) {
	return (
		<article>
			<Link href="/detail">
				<Image
					src={thumbnail}
					alt="thumbnail"
					className="w-full rounded"
					width={500}
					height={500}
				/>
			</Link>
			<InfoPost {...infoPost} />
		</article>
	);
}
