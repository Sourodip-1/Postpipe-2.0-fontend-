'use client';
import React from 'react';
import { Button, buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useScroll } from '@/hooks/use-scroll';
import Link from 'next/link';
import { AuthButton } from '../layout/auth-button';
import { Logo } from '../icons/logo';

export function Header2() {
	const scrolled = useScroll(10);

	const links = [
		{ href: "/dashboard/forms", label: "Forms" },
		{ href: "/dashboard/workflows", label: "Workflows" },
		{ href: "#pricing", label: "Pricing" },
		{ href: "#docs", label: "Docs" },
	  ];

	return (
		<header
			className={cn(
				'sticky top-0 z-50 w-full border-b transition-all ease-out',
				{
					'bg-background/95 supports-[backdrop-filter]:bg-background/50 border-border backdrop-blur-lg':
						scrolled,
				},
			)}
		>
			<div className="container mx-auto px-4">
				<nav
					className={cn(
						'flex h-16 w-full items-center justify-between transition-all ease-out'
					)}
				>
					<Link href="/" className="flex items-center gap-2">
						<Logo className="size-6 text-primary" />
						<span className="font-bold font-headline">PostPipe Pro</span>
					</Link>
					<div className="hidden items-center gap-2 md:flex">
						{links.map((link, i) => (
							<Link key={i} className={buttonVariants({ variant: 'ghost' })} href={link.href}>
								{link.label}
							</Link>
						))}
						<AuthButton />
					</div>
					{/* Mobile menu can be added here if needed */}
				</nav>
			</div>
		</header>
	);
}
