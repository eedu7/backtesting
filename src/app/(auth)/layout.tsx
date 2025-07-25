import React from "react";

export default function AuthLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex min-h-screen flex-col">
            <main className="flex h-full w-full flex-1 items-center justify-center">{children}</main>
        </div>
    );
}
