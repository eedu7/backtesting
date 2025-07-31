import React from "react";

import { FormControl, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface TagInputProps {
    value: string;
    onValueChange: (value: string) => void;
}

export const TagInput = (props: TagInputProps) => {
    return (
        <FormItem>
            <FormLabel>Tag</FormLabel>
            <FormControl>
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
            </FormControl>
            <FormMessage />
        </FormItem>
    );
};
