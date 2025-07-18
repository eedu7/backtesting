import React from "react";

export default function AuthLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="min-h-screen flex">
            <main className="flex-1 flex justify-center items-center border border-purple-600">{children}</main>
        </div>
    );
}
