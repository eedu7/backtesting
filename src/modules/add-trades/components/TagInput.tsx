import React from "react";

import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export const TagInput = () => {
    return (
        <div className="space-y-2">
            <Label>Tag</Label>
            <Select>
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
