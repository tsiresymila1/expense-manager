"use client";

import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { DropdownMenuItem, DropdownMenuShortcut } from "./ui/dropdown-menu";

export default function LogoutButton() {
  const router = useRouter()
  return (
    <DropdownMenuItem onClick={async () => {
      const logout = await authClient.signOut()
      if (logout.data?.success) {
        router.replace('/auth/login')
      }
    }
    }>
      Log out
      <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
    </DropdownMenuItem >

  );
}
