import React from "react";

import { FormControl, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface SymbolPairInputProps {
    value: string;
    onValueChange: (value: string) => void;
}

export const SymbolPairInput = (props: SymbolPairInputProps) => {
    return (
        <FormItem>
            <FormLabel>Symbol Pair</FormLabel>
            <FormControl>
                <Select {...props}>
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
            </FormControl>
            <FormMessage />
        </FormItem>
    );
};
