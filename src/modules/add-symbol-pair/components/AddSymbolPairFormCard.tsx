"use client";

import React from "react";

import { symbolPairFormSchema } from "@/modules/add-symbol-pair/schema";
import { trpc } from "@/trpc/client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";

export const AddSymbolPairFormCard = () => {
    const form = useForm<z.infer<typeof symbolPairFormSchema>>({
        resolver: zodResolver(symbolPairFormSchema),
        defaultValues: {
            name: "",
        },
        mode: "all",
    });

    const utils = trpc.useUtils();
    const addMutation = trpc.symbolPair.add.useMutation({
        onSuccess: () => {
            utils.symbolPair.getMany.invalidate();
            toast.success(`Symbol pair added successfully`);
        },
        onError: (error) => {
            toast.error(`Failed to add symbol pair: ${error}`);
        },
    });

    const onSubmit = ({ name }: z.infer<typeof symbolPairFormSchema>) => {
        addMutation.mutate({
            name,
        });
    };

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
                <Card
                    className="max-w-[425px]"
                    id="add-symbol-pair"
                >
                    <CardHeader>
                        <CardTitle>Add Symbol Pair</CardTitle>
                        <CardDescription>
                            Add a new trading symbol pair to your journal. You can modify or remove it later.
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <FormField
                            name="name"
                            control={form.control}
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Symbol Pair</FormLabel>
                                    <FormControl>
                                        <Input
                                            {...field}
                                            placeholder="e.g. BTC/USD"
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </CardContent>
                    <CardFooter>
                        <Button
                            type="submit"
                            className="w-full cursor-pointer"
                            disabled={addMutation.isPending}
                        >
                            {addMutation.isPending ? "Adding..." : "Add Symbol Pair"}
                        </Button>
                    </CardFooter>
                </Card>
            </form>
        </Form>
    );
};
