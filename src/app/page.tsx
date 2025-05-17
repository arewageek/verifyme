import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="h-screen w-screen flex items-center justify-center p-10">
      <Card className="w-full lg:w-1/3 text-center flex justify-center">
        <CardHeader className="font-bold text-lg">
          You're not authenticated
        </CardHeader>
        <CardContent>
          <Link href="/signin" className="px-6 py-3 rounded-lg bg-black text-sm text-white">
            Signin
          </Link>
        </CardContent>
      </Card>
    </div>
  );
}
