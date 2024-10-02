"use client";
import { useState } from "react";

export default function Home() {
	const [videoUrl, setVideoUrl] = useState("");
	const [response, setResponse] = useState<string | null>(null);

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();

		// Call your API here
		const res = await fetch("/api/demo", {
			method: "POST",
			headers: {
				// "Content-Type": "application/json",
			},
			body: JSON.stringify({ videoUrl }),
		});

		const data = await res.json();
		setResponse(data.message);
	};

	return (
		<div className="flex flex-col min-h-screen">
			<header className="w-full py-6 bg-blue-600 text-white text-center">
				<h1 className="text-3xl font-bold">The Eagle Eye</h1>
				<p className="text-lg">
					Eyes on Every Corner, Safety in Every Moment
				</p>
			</header>

			<main className="flex-grow flex flex-col items-center justify-center p-4">
				<section className="mt-10 w-full max-w-4xl">
					<h2 className="text-2xl font-semibold text-gray-800">
						Features
					</h2>
					<div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-6">
						<div className="bg-white p-6 rounded-lg shadow-md">
							<h3 className="text-xl font-medium text-gray-700">
								Current Features
							</h3>
							<ul className="mt-2 text-gray-600 list-disc list-inside">
								<li>Real-time crime detection</li>
								<li>Immediate alerts to local police</li>
							</ul>
						</div>

						<div className="bg-white p-6 rounded-lg shadow-md">
							<h3 className="text-xl font-medium text-gray-700">
								Future Features
							</h3>
							<ul className="mt-2 text-gray-600 list-disc list-inside">
								<li>Suspect tracking from crime scenes</li>
								<li>Predictive analysis to prevent crimes</li>
							</ul>
						</div>
					</div>
				</section>

				<section className="mt-10 w-full max-w-md">
					<h2 className="text-2xl font-semibold text-gray-800 text-center">
						See a Demo
					</h2>
					<form
						onSubmit={handleSubmit}
						className="mt-4 flex flex-col space-y-4"
					>
						<input
							type="url"
							className="p-2 border rounded"
							placeholder="Enter video URL"
							value={videoUrl}
							onChange={(e) => setVideoUrl(e.target.value)}
							required
						/>
						<button
							type="submit"
							className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
						>
							Submit
						</button>
					</form>

					{response && (
						<div className="mt-4 p-4 bg-green-100 text-green-800 rounded">
							{response}
						</div>
					)}
				</section>
			</main>

			<footer className="w-full py-6 text-center bg-gray-200 text-gray-600">
				<p>© 2024 The Eagle Eye. All rights reserved.</p>
			</footer>
		</div>
	);
}
