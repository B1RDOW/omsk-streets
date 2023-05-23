import { CardAnimation } from "@/components/utils/MotionPrefabs"
import { Dialog, Transition } from "@headlessui/react"
import Image from "next/image"
import { Fragment, useState } from "react"

export default function StreetCard({ streetJSON }) {
	let [isOpen, setIsOpen] = useState(false)

	const [page, setPage] = useState("street");

	function closeFirstModal() { setIsOpen(false) }
	function openFirstModal() { setIsOpen(true) }

	return (
		<>
			<CardAnimation onClick={openFirstModal} className="group relative overflow-hidden rounded-xl max-h-48 lg:max-h-56 cursor-pointer">
				<div className="bg-cover select-none overflow-hidden w-full h-full">
					<Image src={streetJSON.streetImage} className="w-full h-full transition duration-300 ease-in-out transform group-hover:scale-105" width="1000" height="1000" alt="" />
				</div>
				<div className="absolute inset-0 bg-black/20"></div>
				<div className="z-10 absolute bottom-0 left-0 group items-start justify-between w-full pl-8 pb-8">
					<h3 className="font-semibold text-white text-2xl">{streetJSON.street}</h3>
					<p className="text-md text-zinc-200">{streetJSON.biography}</p>
				</div>
			</CardAnimation>
			<Transition appear show={isOpen} as={Fragment}>
				<Dialog as="div" className="relative z-50" onClose={closeFirstModal}>
					<Transition.Child as={Fragment} enter="ease-out duration-300" enterFrom="opacity-0" enterTo="opacity-100" leave="ease-in duration-200" leaveFrom="opacity-100" leaveTo="opacity-0">
						<div className="fixed inset-0 transition bg-zinc-400/50 dark:bg-zinc-800/75 backdrop-blur opacity-100" />
					</Transition.Child>
					<div className="fixed inset-0 overflow-hidden">
						<div className="absolute inset-0 overflow-hidden">
							<div className="pointer-events-none fixed inset-0 justify-center flex max-w-full items-center">
								<Transition.Child as={Fragment} enter="ease-out duration-300" enterFrom="opacity-0 scale-95" enterTo="opacity-100 scale-100" leave="ease-in duration-200" leaveFrom="opacity-100 scale-100" leaveTo="opacity-0 scale-95">
									<Dialog.Panel className="pointer-events-auto relative w-screen p-3 md:p-6 max-w-3xl translate-x-0">
										<div className="relative z-30 h-fit max-h-screen pb-5 overflow-y-auto scrollbar-hide text-left transform shadow-xl transition-all rounded-2xl bg-white dark:bg-zinc-800 ring-1 ring-zinc-100 dark:ring-zinc-700/75">
											<div className="sticky top-0 z-20 grid w-full grid-flow-col items-center justify-between gap-6 bg-white/75 px-4 py-4 text-lg backdrop-blur dark:bg-zinc-800/80">
												<div className="grid grid-flow-col gap-4">
													<button onClick={() => setPage("street")} type="button" className="grid grid-flow-col items-center w-full rounded-xl font-medium justify-start transition select-none p-3 gap-3 dark:text-zinc-100 text-zinc-900 hover:bg-zinc-200/70 dark:hover:bg-zinc-700/90 bg-zinc-200/50 dark:bg-zinc-700/40 ring-1 ring-inset ring-black/10 dark:ring-zinc-600/30 focus:outline-none">
														<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true" className="h-5 w-5">
															<path stroke-linecap="round" stroke-linejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z" />
														</svg><p className="text-base hidden sm:block">История улицы</p>
													</button>
													<button onClick={() => setPage("person")} type="button" className="grid grid-flow-col items-center w-full rounded-xl font-medium justify-start transition select-none p-3 gap-3 dark:text-zinc-100 text-zinc-900 hover:bg-zinc-200/70 dark:hover:bg-zinc-700/90 bg-zinc-200/50 dark:bg-zinc-700/40 ring-1 ring-inset ring-black/10 dark:ring-zinc-600/30 focus:outline-none">
														<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true" className="h-5 w-5">
															<path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
														</svg><p className="text-base hidden sm:block">Биография</p>
													</button>
													<button onClick={() => setPage("map")} type="button" className="grid grid-flow-col items-center w-full rounded-xl font-medium justify-start transition select-none p-3 gap-3 dark:text-zinc-100 text-zinc-900 hover:bg-zinc-200/70 dark:hover:bg-zinc-700/90 bg-zinc-200/50 dark:bg-zinc-700/40 ring-1 ring-inset ring-black/10 dark:ring-zinc-600/30 focus:outline-none">
														<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true" className="h-5 w-5">
															<path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
															<path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
														</svg><p className="text-base hidden md:block">Карта</p>
													</button>
												</div>
												<button onClick={closeFirstModal} type="button" className="grid grid-flow-col items-center w-full rounded-full font-medium justify-start transition select-none p-3 gap-3 dark:text-zinc-100 text-zinc-900 hover:bg-zinc-200/70 dark:hover:bg-zinc-700/90 bg-zinc-200/50 dark:bg-zinc-700/40 ring-1 ring-inset ring-black/10 dark:ring-zinc-600/30 focus:outline-none">
													<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" aria-hidden="true" className="h-5 w-5">
														<path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"></path>
													</svg>
												</button>
											</div>
											<div>
												<div className="grid gap-5 px-5 py-1">
													<div className="grid grid-flow-col gap-3">
														<div className="grid grid-flow-row gap-3">
															{CardPage(page, streetJSON)}
														</div>
													</div>
												</div>
											</div>
										</div>
									</Dialog.Panel>
								</Transition.Child>
							</div>
						</div>
					</div>
				</Dialog>
			</Transition>
		</>
	)
}

function CardPage(page, streetJSON) {
	if (page === "street") {
		return (
			streetJSON.streetDescription.map((street) => (
				<section key={street.chapter} className="grid grid-flow-row gap-2">
					<h1 className="font-manrope text-xl font-semibold">{street.chapter}</h1>
					<p className="grid gap-2 leading-relaxed text-zinc-600 dark:text-zinc-300 items-center transition">
						{street.body}
					</p>
				</section>
			))
		)
	} else if (page === "person") {
		return (<div>
			<div className="md:float-right text-left md:text-center w-fit h-fit pl-2 pb-2">
				<Image src={streetJSON.biographyImage} className="rounded-2xl md:mx-auto h-60 w-fit" alt="" width={1920} height={1080} />
				<p className="text-sm text-zinc-700 dark:text-zinc-300">{streetJSON.biography}</p>
			</div>
			{streetJSON.biographyDescription.map((biography) => (
				<section key={biography.chapter} className="grid grid-flow-row gap-2">
					<h1 className="font-manrope text-xl font-semibold">{biography.chapter}</h1>
					<p className="grid gap-2 truncate whitespace-pre-wrap leading-relaxed text-zinc-600 dark:text-zinc-300 items-center transition">
						{biography.body}
					</p>
				</section>
			))}
		</div>)
	} else {
		return (<>
			<iframe className="w-full h-96 rounded-xl" src={streetJSON.mapLink} width="560" height="400" frameBorder="1" allowFullScreen={true}></iframe>
		</>)
	}
}