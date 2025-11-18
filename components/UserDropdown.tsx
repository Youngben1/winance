"use client";

import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {LogOut} from "lucide-react";
import NavItems from "./NavItems";

const UserDropdown = () => {
	const router = useRouter();

	const handleSignOut = async () => {
		router.push("/sign-in");
	};

	const user = {
		firstName: "Benny",
		lastName: "Renny",
		email: "benrenny@gmail.cum",
	};

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button
					variant="ghost"
					className="flex items-center gap-3 text-gray-400 hover:text-yellow-500"
				>
					<Avatar className="h-8 w-8">
						<AvatarImage
							src="https://avatars.githubusercontent.com/u/78955253?v=4"
							alt="@shadcn"
						/>
						<AvatarFallback className="text-sm font-bold text-yellow-900 bg-yellow-500">
							{user.firstName[0]}
							{user.lastName[0]}
						</AvatarFallback>
					</Avatar>
					<div className="hidden md:flex flex-col items-start">
						<span className="text-base font-medium text-gray-400">
							{user.firstName}
						</span>
					</div>
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent className="text-gray-400">
				<DropdownMenuLabel>
					<div className="relative py-2 gap-3 flex items-center">
						<Avatar className="h-10 w-10">
							<AvatarImage
								src="https://avatars.githubusercontent.com/u/78955253?v=4"
								alt="@shadcn"
							/>
							<AvatarFallback className="text-sm font-bold text-yellow-900 bg-yellow-500">
								{user.firstName[0]}
								{user.lastName[0]}
							</AvatarFallback>
						</Avatar>
						<div className="flex flex-col">
							<span className="text-base font-medium text-gray-400">
								{user.firstName}
							</span>
							<span className="text-sm text-gray-500">{user.email}</span>
						</div>
					</div>
				</DropdownMenuLabel>
				<DropdownMenuSeparator className="bg-gray-600" />
                <DropdownMenuItem onClick={handleSignOut} className="text-gray-400 text-md font-medium focus:bg-transparent focus:text-yellow-500 transition-colors cursor-pointer ">
                    <LogOut className="hidden mr-2 h-4 w-4 sm:block" />
                    LogOut
                </DropdownMenuItem>
                <DropdownMenuSeparator className="bg-gray-600 hidden sm:block" />
                <nav className="sm:hidden">
                    <NavItems />
                </nav>
			</DropdownMenuContent>
		</DropdownMenu>
	);
};

export default UserDropdown;
