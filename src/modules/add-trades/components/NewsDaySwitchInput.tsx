"use client";

import { useId } from "react";

import { FormControl, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Switch } from "@/components/ui/switch";

interface NewsDaySwitchInputProps {
    checked: boolean;
    onCheckedChange: (checked: boolean) => void;
}

export default function NewsDaySwitchInput({ checked, onCheckedChange }: NewsDaySwitchInputProps) {
    const id = useId();

    return (
        <FormItem>
            <div className="inline-flex items-center gap-2">
                <FormControl>
                    <Switch
                        id={id}
                        checked={checked}
                        onCheckedChange={onCheckedChange}
                        aria-label="Toggle switch"
                    />
                </FormControl>
                <FormLabel
                    htmlFor={id}
                    className="text-sm font-medium"
                >
                    News Day
                </FormLabel>
            </div>
            <FormMessage />
        </FormItem>
    );
}
