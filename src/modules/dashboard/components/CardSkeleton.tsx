import React from "react";

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export const CardSkeleton = () => {
    return (
        <Card>
            <CardHeader>
                <CardTitle>
                    <Skeleton className="h-8 w-20 lg:w-52" />
                </CardTitle>
                <CardDescription>
                    <Skeleton className="h-6 w-24 lg:w-72" />
                </CardDescription>
            </CardHeader>
            <CardContent className="flex-1">
                <Skeleton className="h-full w-full" />
            </CardContent>
            <CardFooter className="flex flex-col gap-2">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-full" />
            </CardFooter>
        </Card>
    );
};
