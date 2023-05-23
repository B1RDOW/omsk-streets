import { useTheme } from "next-themes";

export default function Header() {
	return (
		<header className="fixed z-50 grid p-4 select-none items-center transition bg-opacity-0">
			<ThemeSwitcher />
		</header>
	)
}

function ThemeSwitcher() {
	const { resolvedTheme, theme, setTheme } = useTheme();
	if (theme === 'dark' || resolvedTheme === 'dark') {
		return (
			<div className="grid grid-flow-col items-center gap-1">
				<button onClick={() => setTheme('light')} className="grid overflow-hidden rounded-full p-2 transition hover:bg-zinc-200/25 dark:hover:bg-zinc-600/20" aria-label="Цветовая тема" title="Цветовая тема" type="button" aria-haspopup="true" aria-expanded="false">
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true" className="h-6 w-6">
						<path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
				</button>
			</div>
		)
	} else {
		return (
			<div className="grid grid-flow-col items-center gap-1">
				<button onClick={() => setTheme('dark')} className="grid overflow-hidden rounded-full p-2 transition hover:bg-zinc-200/25 dark:hover:bg-zinc-600/20" aria-label="Цветовая тема" title="Цветовая тема" type="button" aria-haspopup="true" aria-expanded="false">
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true" className="h-6 w-6">
						<path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" /></svg>
				</button>
			</div>
		)
	}
}