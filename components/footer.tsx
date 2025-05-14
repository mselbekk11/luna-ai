import Link from "next/link";
import { LogoTwo } from "./logo-two";

export default function FooterSection() {
  return (
    <footer className="py-16 md:py-32">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mb-4">
          <Link
            href="/"
            aria-label="go home"
            className="mx-auto block size-fit"
          >
            <LogoTwo />
          </Link>
        </div>
        <span className="text-muted-foreground block text-center text-sm">
          {" "}
          © {new Date().getFullYear()} Luna AI, All rights reserved
        </span>
      </div>
    </footer>
  );
}
