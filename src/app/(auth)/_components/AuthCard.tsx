import React from "react";

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import SocialLogin from "@/app/(auth)/_components/SocialLogin";

interface AuthCardProps {
    title: string;
    description: string;
    children: React.ReactNode;
}

export const AuthCard = ({ title, description, children }: AuthCardProps) => {
    return (
        <Card className="w-[350px]">
            <CardHeader>
                <CardTitle>{title}</CardTitle>
                <CardDescription>{description}</CardDescription>
            </CardHeader>
            <CardContent>{children}</CardContent>

            <CardFooter className="flex-col space-y-2">
                <Separator />
                <SocialLogin />
            </CardFooter>
        </Card>
    );
};
