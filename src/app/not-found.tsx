import Link from "next/link";
import { Ship, Home } from "lucide-react";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="min-h-screen gradient-navy flex flex-col items-center justify-center text-center px-4">
      <Ship className="h-20 w-20 text-gold-500 mb-6" />
      <h1 className="text-6xl md:text-8xl font-bold text-white">404</h1>
      <p className="mt-4 text-xl text-navy-300 max-w-md">
        Looks like this page drifted off course.
      </p>
      <p className="mt-2 text-navy-400">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <Link href="/" className="mt-8">
        <Button variant="primary" size="lg" icon={<Home className="h-5 w-5" />}>
          Back to Home
        </Button>
      </Link>
    </div>
  );
}
