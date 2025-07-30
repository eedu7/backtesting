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
import { Form } from "@/components/ui/form";
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
                            <SymbolPairInput />
                            <TagInput />
                            <div className="space-y-2">
                                <Label>Entry Time</Label>
                                <DateTimePickerInput />
                            </div>
                            <div className="space-y-2">
                                <Label>Exit Time</Label>
                                <DateTimePickerInput />
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <Label>Entry Price</Label>
                                    <Input type="number" />
                                </div>
                                <div className="space-y-2">
                                    <Label>Exit Price</Label>
                                    <Input type="number" />
                                </div>
                            </div>
                            <div className="w-full space-y-2">
                                <Label>Trade Status</Label>
                                <Select>
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
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <Label>RR%</Label>
                                    <Input type="number" />
                                </div>
                                <div className="space-y-2">
                                    <Label>Actual RR%</Label>
                                    <Input type="number" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <Label>RT $</Label>
                                <Input type="number" />
                            </div>
                            <div className="grid grid-cols-3 gap-4">
                                <div className="col-span-2 space-y-2">
                                    <Label>Profit/Loss</Label>
                                    <Input type="number" />
                                </div>
                                <div className="space-y-2">
                                    <Label>Trade Grade</Label>
                                    <Select>
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
                                </div>
                            </div>
                            <div className="grid grid-cols-3 gap-4">
                                <NewsDaySwitchInput />
                                <div className="col-span-2 space-y-2">
                                    <Label>Impact of News day</Label>
                                    <Select>
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
                                </div>
                            </div>
                            <div className="space-y-2">
                                <Label>Mistake</Label>
                                <Textarea placeholder="What mistake did you make in this trade?" />
                            </div>
                            <div className="space-y-2">
                                <Label>Strategy Description</Label>
                                <Textarea placeholder="Describe the strategy you followed for this trade." />
                            </div>
                            <div className="space-y-2">
                                <Label>Learning</Label>
                                <Textarea placeholder="What did you learn from this trade?" />
                            </div>
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
