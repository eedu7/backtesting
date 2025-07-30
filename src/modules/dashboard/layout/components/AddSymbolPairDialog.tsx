"use client";

import React, { useState } from "react";

import { trpc } from "@/trpc/client";
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
    const utils = trpc.useUtils();
    const [symbolPair, setSymbolPair] = useState<string>("BTC/USD");
    const addMutation = trpc.symbolPair.add.useMutation({
        onSuccess: () => {
            utils.symbolPair.getMany.invalidate();
            alert("Symbol Pair added!");
        },
        onError: (error) => {
            console.error(error);
            alert(`Error adding symbol pair: ${error}`);
        },
    });

    const handleSubmit = () => {
        alert("Submitting symbol pair...");
        addMutation.mutate({
            name: symbolPair,
        });
    };

    return (
        <SidebarMenuSubItem>
            <Dialog>
                {/*<form onSubmit={(e) => handleSubmit(e)}>*/}
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
                    <div className="grid gap-3">
                        <Label htmlFor="symbol-pair">Symbol Pair</Label>
                        <Input
                            id="symbol-pair"
                            name="symbol-pair"
                            value={symbolPair}
                            onChange={(event) => setSymbolPair(event.target.value)}
                        />
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
                            onClick={handleSubmit}
                        >
                            Add Symbol Pair
                        </Button>
                    </DialogFooter>
                </DialogContent>
                {/*</form>*/}
            </Dialog>
        </SidebarMenuSubItem>
    );
};
