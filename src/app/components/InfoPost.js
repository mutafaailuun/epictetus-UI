import Image from "next/image";
import PostMetaTitle from "./PostMetaTitle";
import PostAuthor from "./PostAuthor";
export default function InfoPost({
	category,
	date,
	title,
	shortDescription,
	authorAvatar,
	authorAvaAlt,
	authorName,
	authorJob,
}) {
	return (
		<>
			<PostMetaTitle category={category} date={date} title={title} />
			<p className="w-10/12 text-white/60 mt-4">{shortDescription}</p>
			<PostAuthor
				authorAvaAlt={authorAvaAlt}
				authorAvatar={authorAvatar}
				authorName={authorName}
				authorJob={authorJob}
			/>
		</>
	);
}
