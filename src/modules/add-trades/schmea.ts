import { z } from "zod";

export const tradeSchema = z.object({
    symbol: z.string(),
    tag: z.string(),
    entryTime: z.string(),
    exitTime: z.string(),
    entryDate: z.date(),
    exitDate: z.date(),
    entryPrice: z.number(),
    exitPrice: z.number(),
    tradeStatus: z.string(),
    riskToReward: z.number(),
    actualRiskToReward: z.number(),
    riskToTrade: z.number(),
    profitNLoss: z.number(),
    tradeGrade: z.string(),
    newsDay: z.boolean(),
    impactOfNewsDay: z.string(),
    mistakeDescription: z.string(),
    strategyDescription: z.string(),
    learningDescription: z.string(),
});
