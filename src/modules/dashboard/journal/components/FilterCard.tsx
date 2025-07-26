import React from "react";

import { Label } from "@/components/ui/label";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

type Value = {
    value: string;
    label: string;
};

interface FilterCardProps {
    label: string;
    placeholder: string;
    values: Value[];
    // TODO: Added the onChange method
    // onChange: (value: string) => void;
}

export const FilterCard = ({ label, placeholder, values }: FilterCardProps) => {
    return (
        <div className="w-full space-y-2">
            <Label>{label}</Label>
            <Select>
                <SelectTrigger className="min-w-44">
                    <SelectValue placeholder={placeholder || `Select a ${label}`} />
                </SelectTrigger>
                <SelectContent className="max-h-96">
                    <SelectGroup>
                        <SelectLabel>{label}</SelectLabel>
                        {values.map(({ value, label }, index) => (
                            <SelectItem
                                value={value}
                                key={index}
                            >
                                {label}
                            </SelectItem>
                        ))}
                    </SelectGroup>
                </SelectContent>
            </Select>
        </div>
    );
};
