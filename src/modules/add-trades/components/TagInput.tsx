import React from "react";

import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface TagInputProps {
    value: string;
    onValueChange: (value: string) => void;
}

export const TagInput = (props: TagInputProps) => {
    return (
        <div className="space-y-2">
            <Label>Tag</Label>
            <Select {...props}>
                <SelectTrigger className="w-full">
                    <SelectValue placeholder="Tag" />
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                        <SelectItem value="long">Long</SelectItem>
                        <SelectItem value="short">Short</SelectItem>
                        <SelectItem value="both">Both</SelectItem>
                    </SelectGroup>
                </SelectContent>
            </Select>
        </div>
    );
};
