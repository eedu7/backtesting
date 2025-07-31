"use client";

import React from "react";

import NewsDaySwitchInput from "@/modules/add-trades/components/NewsDaySwitchInput";
import { SymbolPairInput } from "@/modules/add-trades/components/SymbolPairInput";
import { TagInput } from "@/modules/add-trades/components/TagInput";
import { tradeSchema } from "@/modules/add-trades/schmea";
import { zodResolver } from "@hookform/resolvers/zod";
import { format } from "date-fns";
import { ChevronDownIcon } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";

export default function AddTradesPage() {
    function getDate() {
        return new Date();
    }

    const today = getDate();

    const form = useForm<z.infer<typeof tradeSchema>>({
        resolver: zodResolver(tradeSchema),
        defaultValues: {
            symbol: "",
            tag: "",
            entryTime: "",
            exitTime: "",
            entryDate: today,
            exitDate: today,
            entryPrice: 0,
            exitPrice: 0,
            tradeStatus: "",
            riskToReward: 0,
            actualRiskToReward: 0,
            riskToTrade: 0,
            profitNLoss: 0,
            tradeGrade: "",
            newsDay: false,
            impactOfNewsDay: "",
            mistakeDescription: "",
            strategyDescription: "",
            learningDescription: "",
        },
    });

    const onSubmit = (data: z.infer<typeof tradeSchema>) => {
        alert("Form is submitted with the following data:");
        alert(JSON.stringify(data, null, 2));
    };

    const [open, setOpen] = React.useState(false);

    const [date, setDate] = React.useState<Date | undefined>(undefined);

    const [entryOpen, setEntryOpen] = React.useState(false);
    const [entryDate, setEntryDate] = React.useState<Date | undefined>(undefined);

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
                    <form onSubmit={form.handleSubmit(onSubmit)}>
                        <Separator className="w-full" />
                        <CardContent className="my-4 space-y-4">
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
                            {/*TODO: The value is not set for the date*/}
                            <div className="flex w-full gap-4">
                                <FormField
                                    name="entryDate"
                                    control={form.control}
                                    render={({ field }) => (
                                        <FormItem className="flex w-full flex-col gap-3">
                                            <Popover
                                                open={entryOpen}
                                                onOpenChange={setEntryOpen}
                                            >
                                                <PopoverTrigger asChild>
                                                    <Button
                                                        variant="outline"
                                                        className="w-full justify-between font-normal"
                                                    >
                                                        {field.value
                                                            ? format(field.value, "dd-MM-yyyy")
                                                            : "Select date"}

                                                        <ChevronDownIcon />
                                                    </Button>
                                                </PopoverTrigger>
                                                <PopoverContent
                                                    className="w-auto p-0"
                                                    align="start"
                                                >
                                                    <Calendar
                                                        mode="single"
                                                        selected={field.value}
                                                        captionLayout="dropdown"
                                                        onSelect={(date) => {
                                                            field.onChange(date); // ✅ Sync to form
                                                            setEntryOpen(false);
                                                        }}
                                                    />
                                                </PopoverContent>
                                            </Popover>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <FormField
                                    name="entryTime"
                                    render={({ field }) => (
                                        <FormItem className="flex w-full flex-col gap-3">
                                            <Input
                                                type="time"
                                                id="time-picker"
                                                step="1"
                                                {...field}
                                                className="bg-background w-full appearance-none [&::-webkit-calendar-picker-indicator]:hidden [&::-webkit-calendar-picker-indicator]:appearance-none"
                                            />
                                        </FormItem>
                                    )}
                                />
                            </div>
                            {/*TODO: The value is not set for the date*/}

                            <div className="flex w-full gap-4">
                                <FormField
                                    name="exitDate"
                                    control={form.control}
                                    render={({ field }) => (
                                        <FormItem className="flex w-full flex-col gap-3">
                                            <Popover
                                                open={open}
                                                onOpenChange={setOpen}
                                            >
                                                <PopoverTrigger asChild>
                                                    <Button
                                                        variant="outline"
                                                        className="w-full justify-between font-normal"
                                                    >
                                                        {field.value
                                                            ? format(field.value, "dd-MM-yyyy")
                                                            : "Select date"}

                                                        <ChevronDownIcon />
                                                    </Button>
                                                </PopoverTrigger>
                                                <PopoverContent
                                                    className="w-auto p-0"
                                                    align="start"
                                                >
                                                    <Calendar
                                                        mode="single"
                                                        selected={field.value}
                                                        captionLayout="dropdown"
                                                        onSelect={(date) => {
                                                            field.onChange(date); // ✅ Sync to form
                                                            setOpen(false);
                                                        }}
                                                    />
                                                </PopoverContent>
                                            </Popover>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <FormField
                                    name="exitTime"
                                    render={({ field }) => (
                                        <FormItem className="flex w-full flex-col gap-3">
                                            <Input
                                                type="time"
                                                id="time-picker"
                                                step="1"
                                                {...field}
                                                className="bg-background w-full appearance-none [&::-webkit-calendar-picker-indicator]:hidden [&::-webkit-calendar-picker-indicator]:appearance-none"
                                            />
                                        </FormItem>
                                    )}
                                />
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <FormField
                                    name={"entryPrice"}
                                    control={form.control}
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Entry Price</FormLabel>
                                            <FormControl>
                                                <Input
                                                    type="number"
                                                    value={field.value}
                                                    onChange={(e) => field.onChange(e.target.valueAsNumber)}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    name={"exitPrice"}
                                    control={form.control}
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Exit Price</FormLabel>
                                            <FormControl>
                                                <Input
                                                    type="number"
                                                    value={field.value}
                                                    onChange={(e) => field.onChange(e.target.valueAsNumber)}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
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
                                        <FormMessage />
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
                                                    type="number"
                                                    value={field.value}
                                                    onChange={(e) => field.onChange(e.target.valueAsNumber)}
                                                />
                                            </FormControl>
                                            <FormMessage />
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
                                                    type="number"
                                                    value={field.value}
                                                    onChange={(e) => field.onChange(e.target.valueAsNumber)}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>
                            <FormField
                                name="riskToTrade"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>RT $</FormLabel>
                                        <FormControl>
                                            <Input
                                                type="number"
                                                value={field.value}
                                                onChange={(e) => field.onChange(e.target.valueAsNumber)}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <div className="grid grid-cols-3 gap-4">
                                <FormField
                                    name="profitNLoss"
                                    render={({ field }) => (
                                        <FormItem className="col-span-2">
                                            <FormLabel>Profit/Loss</FormLabel>
                                            <FormControl>
                                                <Input
                                                    type="number"
                                                    value={field.value}
                                                    onChange={(e) => field.onChange(e.target.valueAsNumber)}
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
                                    name="impactOfNewsDay"
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
