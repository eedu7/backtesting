import React from "react";

export default function AuthLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="min-h-screen flex">
            <main className="flex-1 flex justify-center items-center">{children}</main>
        </div>
    );
}
