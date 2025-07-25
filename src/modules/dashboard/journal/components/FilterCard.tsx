import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import React from "react";

export const FilterCard = () => {
    return (
        <div className="space-y-2">
            <Label>Symbol</Label>
            <Input
                placeholder="AAPL"
                value="AAPL"
                readOnly
            />
        </div>
    );
};
