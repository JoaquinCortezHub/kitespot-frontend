"use client";

import localFont from "next/font/local";
import "./globals.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";
import { ToastContainer } from "react-toastify";

const geistSans = localFont({
	src: "./fonts/GeistVF.woff",
	variable: "--font-geist-sans",
	weight: "100 900",
});
const geistMono = localFont({
	src: "./fonts/GeistMonoVF.woff",
	variable: "--font-geist-mono",
	weight: "100 900",
});

export default function ClientLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const [queryClient] = useState(() => new QueryClient());

	return (
		<html lang="en" suppressHydrationWarning>
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen`}
			>
				<QueryClientProvider client={queryClient}>
					<div>
						{children}
					</div>
					<ToastContainer />
				</QueryClientProvider>
			</body>
		</html>
	);
}
