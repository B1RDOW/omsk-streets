import Meta from "./Meta";

export default function Layout({ children, title, description, keywords }) {
    return (
		<>
			<Meta title={title} description={description} keywords={keywords} />
			<main>
                {children}
            </main>
		</>
	)
}