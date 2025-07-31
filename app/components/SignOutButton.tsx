"use client";

import { Button } from "@/components/ui/button";
import { signOut } from "@/lib/actions/auth.action";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

const SignOutButton = () => {
  const router = useRouter();

  const handleSignOut = async () => {
    try {
      const result = await signOut();
      
      if (result.success) {
        toast.success("Signed out successfully");
        router.push('/sign-in');
        router.refresh();
      } else {
        toast.error("Failed to sign out");
      }
    } catch (error) {
      console.error("Error signing out:", error);
      toast.error("An error occurred while signing out");
    }
  };

  return (
    <Button 
      onClick={handleSignOut}
      variant="outline"
      className="text-sm"
    >
      Sign Out
    </Button>
  );
};

export default SignOutButton; 