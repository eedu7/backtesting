"use client";

import React from "react";

import { Plus } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { SidebarMenuSubButton, SidebarMenuSubItem } from "@/components/ui/sidebar";

export const AddSymbolPairDialog = () => {
    return (
        <SidebarMenuSubItem>
            <Dialog>
                <form>
                    <DialogTrigger asChild>
                        <SidebarMenuSubButton className="cursor-pointer">
                            <Plus />
                            Add Symbol Pair
                        </SidebarMenuSubButton>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px]">
                        <DialogHeader>
                            <DialogTitle>Add Symbol Pair</DialogTitle>
                            <DialogDescription>
                                Add a new trading symbol pair to your journal. You can modify or remove it later.
                            </DialogDescription>
                        </DialogHeader>
                        <div className="grid gap-4">
                            <div className="grid gap-3">
                                <Label htmlFor="name-1">Symbol Pair</Label>
                                <Input
                                    id="name-1"
                                    name="name"
                                    defaultValue="BTC/USD"
                                />
                            </div>
                        </div>
                        <DialogFooter>
                            <DialogClose asChild>
                                <Button
                                    variant="outline"
                                    className="cursor-pointer"
                                >
                                    Cancel
                                </Button>
                            </DialogClose>
                            <Button
                                type="submit"
                                className="cursor-pointer"
                            >
                                Add Symbol Pair
                            </Button>
                        </DialogFooter>
                    </DialogContent>
                </form>
            </Dialog>
        </SidebarMenuSubItem>
    );
};
