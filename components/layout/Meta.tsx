import Head from "next/head";

export default function Meta({ title, description, keywords }) {
    return (
		<Head>
			<title>{title}</title>
			<meta name="title" content={title} />
			<meta property="twitter:title" content={title} />
			<meta property="og:title" content={title} />
			<meta property="og:description" content={description} />
			<meta property="twitter:description" content={description} />
			<meta name="description" content={description} />
			<meta name="keywords" content={keywords} />
        </Head>
	)
}