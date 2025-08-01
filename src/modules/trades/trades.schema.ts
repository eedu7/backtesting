import { TradeGrade, TradeStatus, TradeTags } from "@/modules/trades/trades.constants";
import { z } from "zod";

export const TradeSchema = z.object({
    symbol: z.string(),
    tag: z.enum(TradeTags),
    entryTime: z.string(),
    exitTime: z.string(),
    entryDate: z.date(),
    exitDate: z.date(),
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
