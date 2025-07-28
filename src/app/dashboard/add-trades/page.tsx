"use client";

import React from "react";

import { DateTimePickerInput } from "@/modules/dashboard/add-trades/components/DateTimePickerInput";
import NewsDaySwitchInput from "@/modules/dashboard/add-trades/components/NewsDaySwitchInput";
import { SymbolPairInput } from "@/modules/dashboard/add-trades/components/SymbolPairInput";
import { TagInput } from "@/modules/dashboard/add-trades/components/TagInput";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";

/**
 * Symbol (pair) -> Custom -> Selection -> save  in preference
 * Action/Tag -> Long/short/both -> Selection
 * Entry Time -> DateTime -> Default Today - (11:22AM 27 july 2025)
 * Exit Time -> DateTime -> Default tody
 * Entry Price
 * Exit Price
 * Trade Status -> win/loss -> use entry price and exit price and action to automatically fill this input
 * Risk to Reward Ratio -> Calculate Automatically -> Tanveer will give the formula
 * Actual Risk to Reward Ratio -> User input
 * Trade Profit/Loss -> Custom Input in dollars
 * Trade Grade -> A+, A, A-, B+, B, B-, ..... e.t.c,
 * Checkbox -> news day
 * Impact of New Day -> Positive/Negative/Neutral
 * Mistake -> TextArea -> CustomInput
 * Strategy Description -> TextArea -> Custom Input
 * Learning -> TextArea -> CustomInput
 * */

export default function AddTradesPage() {
    return (
        <div className="flex min-h-screen items-center justify-center">
            <Card className="w-full max-w-3xl">
                <CardHeader>
                    <CardTitle>Add New Trade Entry</CardTitle>
                    <CardDescription>
                        Log a completed trade with entry/exit details, performance metrics, and personal reflections.
                    </CardDescription>
                </CardHeader>

                <Separator className="w-full" />
                <CardContent>
                    <form className="space-y-4">
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
                        <Button className="w-full cursor-pointer">Add Trade</Button>
                    </form>
                </CardContent>
            </Card>
        </div>
    );
}
