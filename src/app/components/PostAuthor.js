import Image from "next/image";
export default function PostAuthor({
	authorAvaAlt,
	authorAvatar,
	authorName,
	authorJob,
}) {
	return (
		<>
			<div className="flex mt-4">
				<Image
					src={authorAvatar}
					alt={authorAvaAlt}
					width={50}
					height={50}
					className=" object-cover rounded-full"
				/>
				<div className="ml-4">
					<h3>{authorName}</h3>
					<div className="text-white/60 text-sm">{authorJob}</div>
				</div>
			</div>
		</>
	);
}
