import React from "react";

import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export const NETPNLCard = () => {
    // TODO: Add a line chart
    return (
        <Card>
            <CardHeader>
                <CardDescription>Net Accumulative P&L</CardDescription>
                <CardTitle className="text-xl">$2,386.88</CardTitle>
            </CardHeader>
        </Card>
    );
};
