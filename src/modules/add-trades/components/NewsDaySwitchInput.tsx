"use client";

import { useId } from "react";

import { FormItem } from "@/components/ui/form";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

interface NewsDaySwitchInputProps {
    checked: boolean;
    onCheckedChange: (checked: boolean) => void;
}

export default function NewsDaySwitchInput({ checked, onCheckedChange }: NewsDaySwitchInputProps) {
    const id = useId();

    return (
        <FormItem className="inline-flex items-center gap-2">
            <Switch
                id={id}
                checked={checked}
                onCheckedChange={onCheckedChange}
                aria-label="Toggle switch"
            />
            <Label
                htmlFor={id}
                className="text-sm font-medium"
            >
                News Day
            </Label>
        </FormItem>
    );
}
