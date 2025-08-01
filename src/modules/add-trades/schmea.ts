import { TradeGrade, TradeStatus, TradeTags } from "@/modules/trades/trades.constants";
import { z } from "zod";

export const tradeSchema = z.object({
    symbol: z.string(),
    tag: z.enum(TradeTags),
    entryTime: z.string(),
    exitTime: z.string(),
    entryDate: z.preprocess((val: Date) => new Date(val), z.date()),
    exitDate: z.preprocess((val: Date) => new Date(val), z.date()),
    entryPrice: z.number(),
    exitPrice: z.number(),
    tradeStatus: z.enum(TradeStatus),
    riskToReward: z.number(),
    actualRiskToReward: z.number(),
    riskToTrade: z.number(),
    profitNLoss: z.number(),
    tradeGrade: z.enum(TradeGrade),
    newsDay: z.boolean(),
    impactOfNewsDay: z.string(),
    mistakeDescription: z.string(),
    strategyDescription: z.string(),
    learningDescription: z.string(),
});
