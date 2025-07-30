"use client";

import React from "react";

import { DateTimePickerInput } from "@/modules/add-trades/components/DateTimePickerInput";
import NewsDaySwitchInput from "@/modules/add-trades/components/NewsDaySwitchInput";
import { SymbolPairInput } from "@/modules/add-trades/components/SymbolPairInput";
import { TagInput } from "@/modules/add-trades/components/TagInput";
import { tradeSchema } from "@/modules/add-trades/schmea";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";

export default function AddTradesPage() {
    const form = useForm<z.infer<typeof tradeSchema>>({
        resolver: zodResolver(tradeSchema),
        defaultValues: {
            actualRiskToReward: 0,
            entryPrice: 0,
            exitPrice: 0,
            entryTime: "",
            exitTime: "",
            impactOfNewsDay: "",
            learningDescription: "",
            mistakeDescription: "",
            newsDay: false,
            riskToTrade: 0,
            profitNLoss: 0,
            riskToReward: 0,
            tag: "",
            tradeGrade: "",
            tradeStatus: "",
            strategyDescription: "",
            symbol: "",
        },
    });

    const onSubmit = (data: z.infer<typeof tradeSchema>) => {
        alert(JSON.stringify(data, null, 2));
    };

    return (
        <div className="flex min-h-screen items-center justify-center">
            <Card className="w-full max-w-3xl">
                <CardHeader>
                    <CardTitle>Add New Trade Entry</CardTitle>
                    <CardDescription>
                        Log a completed trade with entry/exit details, performance metrics, and personal reflections.
                    </CardDescription>
                </CardHeader>
                <Form {...form}>
                    <form
                        onSubmit={form.handleSubmit(onSubmit)}
                        className="space-y-4"
                    >
                        <Separator className="w-full" />
                        <CardContent>
                            <FormField
                                name={"symbol"}
                                control={form.control}
                                render={({ field }) => (
                                    <SymbolPairInput
                                        value={field.value}
                                        onValueChange={field.onChange}
                                    />
                                )}
                            />
                            <FormField
                                name={"tag"}
                                control={form.control}
                                render={({ field }) => (
                                    <TagInput
                                        value={field.value}
                                        onValueChange={field.onChange}
                                    />
                                )}
                            />
                            {/*TODO: Add onChange and value*/}
                            <FormField
                                name={"entryTime"}
                                control={form.control}
                                render={({ field }) => (
                                    <div className="space-y-2">
                                        <Label>Entry Time</Label>
                                        <DateTimePickerInput />
                                    </div>
                                )}
                            />
                            {/*TODO: Add onChange and value*/}
                            <FormField
                                name={"exitTime"}
                                control={form.control}
                                render={({ field }) => (
                                    <div className="space-y-2">
                                        <Label>Exit Time</Label>
                                        <DateTimePickerInput />
                                    </div>
                                )}
                            />
                            <div className="grid grid-cols-2 gap-4">
                                <FormField
                                    name={"entryPrice"}
                                    control={form.control}
                                    render={({ field }) => (
                                        <div className="space-y-2">
                                            <Label>Entry Price</Label>
                                            <Input
                                                type="number"
                                                {...field}
                                            />
                                        </div>
                                    )}
                                />
                                <FormField
                                    name={"entryPrice"}
                                    control={form.control}
                                    render={({ field }) => (
                                        <div className="space-y-2">
                                            <Label>Exit Price</Label>
                                            <Input
                                                type="number"
                                                {...field}
                                            />
                                        </div>
                                    )}
                                />
                            </div>
                            <FormField
                                name="tradeStatus"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Trade Status</FormLabel>
                                        <FormControl>
                                            <Select
                                                value={field.value}
                                                onValueChange={field.onChange}
                                            >
                                                <SelectTrigger className="w-full">
                                                    <SelectValue placeholder="Win/Loss" />
                                                </SelectTrigger>
                                                <SelectContent className="w-full">
                                                    <SelectGroup>
                                                        <SelectItem value="win">Win</SelectItem>
                                                        <SelectItem value="loss">Loss</SelectItem>
                                                    </SelectGroup>
                                                </SelectContent>
                                            </Select>
                                        </FormControl>
                                    </FormItem>
                                )}
                            />

                            <div className="grid grid-cols-2 gap-4">
                                <FormField
                                    name="riskToReward"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>RR%</FormLabel>
                                            <FormControl>
                                                <Input
                                                    {...field}
                                                    type="number"
                                                />
                                            </FormControl>
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    name="actualRiskToReward"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Actual RR%</FormLabel>
                                            <FormControl>
                                                <Input
                                                    {...field}
                                                    type="number"
                                                />
                                            </FormControl>
                                        </FormItem>
                                    )}
                                />
                            </div>
                            <FormField
                                name="tradeStatus"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>RT $</FormLabel>
                                        <FormControl>
                                            <Input
                                                {...field}
                                                type="number"
                                            />
                                        </FormControl>
                                    </FormItem>
                                )}
                            />
                            <div className="grid grid-cols-3 gap-4">
                                <FormField
                                    name="tradeStatus"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Profit/Loss</FormLabel>
                                            <FormControl>
                                                <Input
                                                    {...field}
                                                    type="number"
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    name="tradeGrade"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Trade Grade</FormLabel>
                                            <FormControl>
                                                <Select
                                                    value={field.value}
                                                    onValueChange={field.onChange}
                                                >
                                                    <SelectTrigger className="w-full">
                                                        <SelectValue placeholder="Grade" />
                                                    </SelectTrigger>
                                                    <SelectContent className="w-full">
                                                        <SelectGroup>
                                                            <SelectItem value="A">A</SelectItem>
                                                            <SelectItem value="B">B</SelectItem>
                                                            <SelectItem value="C">C</SelectItem>
                                                            <SelectItem value="D">D</SelectItem>
                                                        </SelectGroup>
                                                    </SelectContent>
                                                </Select>
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>
                            <div className="grid grid-cols-3 gap-4">
                                <FormField
                                    name="newsDay"
                                    render={({ field }) => (
                                        <NewsDaySwitchInput
                                            checked={field.value}
                                            onCheckedChange={field.onChange}
                                        />
                                    )}
                                />
                                <FormField
                                    name="newsDayImpact"
                                    render={({ field }) => (
                                        <FormItem className="col-span-2 space-y-2">
                                            <FormLabel>Impact of News day</FormLabel>
                                            <FormControl>
                                                <Select
                                                    value={field.value}
                                                    onValueChange={field.onChange}
                                                >
                                                    <SelectTrigger className="w-full">
                                                        <SelectValue placeholder="Impact" />
                                                    </SelectTrigger>
                                                    <SelectContent className="w-full">
                                                        <SelectGroup>
                                                            <SelectItem value="Positive">Positive</SelectItem>
                                                            <SelectItem value="Negative">Negative</SelectItem>
                                                            <SelectItem value="Neutral">Neutral</SelectItem>
                                                        </SelectGroup>
                                                    </SelectContent>
                                                </Select>
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>
                            <FormField
                                name="mistakeDescription"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Mistake Description</FormLabel>
                                        <FormControl>
                                            <Textarea
                                                {...field}
                                                placeholder="What mistake did you make in this trade?"
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                name="strategyDescription"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Strategy Description</FormLabel>
                                        <FormControl>
                                            <Textarea
                                                {...field}
                                                placeholder="Describe the strategy you followed for this trade."
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                name="learningDescription"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Learning Description</FormLabel>
                                        <FormControl>
                                            <Textarea
                                                {...field}
                                                placeholder="What did you learn from this trade?"
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
                            >
                                Add Trade
                            </Button>
                        </CardFooter>
                    </form>
                </Form>
            </Card>
        </div>
    );
}
