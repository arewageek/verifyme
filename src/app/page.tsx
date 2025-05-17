"use client"
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { LoginLink } from "@kinde-oss/kinde-auth-nextjs";
import Link from "next/link";

export default function Home() {
  return (
    <div className="h-screen w-screen flex items-center justify-center p-10">
      <Card className="w-full lg:w-1/3 text-center flex justify-center">
        <CardHeader className="font-bold text-lg">
          You're not authenticated
        </CardHeader>
        <CardContent>
          <LoginLink className="cursor-pointer">
            <Button variant="default">
              Sign in
            </Button>
          </LoginLink>
        </CardContent>
      </Card>
    </div>
  );
}
