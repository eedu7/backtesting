import { z } from "zod";

export const tradeSchema = z.object({
    symbol: z.string(),
    tag: z.enum(["long", "short", "both"]),
    entryTime: z.string(),
    exitTime: z.string(),
    entryDate: z.preprocess((val) => new Date(val as string), z.date()),
    exitDate: z.preprocess((val) => new Date(val as string), z.date()),
    entryPrice: z.number(),
    exitPrice: z.number(),
    tradeStatus: z.enum(["win", "loss", "tie"]),
    riskToReward: z.number(),
    actualRiskToReward: z.number(),
    riskToTrade: z.number(),
    profitNLoss: z.number(),
    tradeGrade: z.enum(["A", "B", "C", "D", "E", "F"]),
    newsDay: z.boolean(),
    impactOfNewsDay: z.string(),
    mistakeDescription: z.string(),
    strategyDescription: z.string(),
    learningDescription: z.string(),
});
