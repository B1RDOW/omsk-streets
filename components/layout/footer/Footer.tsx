import Link from "next/link";

export default function Footer() {
	return (
		<footer className="border-t py-3 border-zinc-100 dark:border-zinc-800 bg-white dark:bg-zinc-900/80 backdrop-blur-xl backdrop-saturate-150">
			<div className="container px-6 mx-auto grid grid-flow-col gap-x-3 justify-center items-center font-medium">
				<Link href="https://github.com/B1RDOW/omsk-streets" className="text-teal-700 hover:text-teal-600 transition" target="_blank" rel="noreferrer noopener">Исходный код</Link>
				<p className="text-teal-700 hover:text-teal-600 transition select-none">|</p>
				<Link href="https://vanilla-plus.ru" className="text-teal-700 hover:text-teal-600 transition" target="_blank" rel="noreferrer noopener">Другие проекты</Link>
			</div>
		</footer>
	)
}