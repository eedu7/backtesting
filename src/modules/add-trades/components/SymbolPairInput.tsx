import React from "react";

import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export const SymbolPairInput = () => {
    return (
        <div className="space-y-2">
            <Label>Symbol Pair</Label>
            <Select>
                <SelectTrigger className="w-full">
                    <SelectValue placeholder="Symbol Pair" />
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                        <SelectItem value="BTC/USD">BTC/USD</SelectItem>
                        <SelectItem value="ETH/USD">ETH/USD</SelectItem>
                        <SelectItem value="BTC/INR">BTC/INR</SelectItem>
                        <SelectItem value="ETH/INR">ETH/INR</SelectItem>
                        <SelectItem value="BTC/EUR">BTC/EUR</SelectItem>
                        <SelectItem value="ETH/EUR">ETH/EUR</SelectItem>
                        <SelectItem value="BTC/GBP">BTC/GBP</SelectItem>
                        <SelectItem value="ETH/GBP">ETH/GBP</SelectItem>
                        <SelectItem value="BTC/JPY">BTC/JPY</SelectItem>
                        <SelectItem value="ETH/JPY">ETH/JPY</SelectItem>
                    </SelectGroup>
                </SelectContent>
            </Select>
        </div>
    );
};
