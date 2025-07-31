import { boolean, date, integer, pgEnum, pgTable, text, varchar } from "drizzle-orm/pg-core";

export const symbolsPairs = pgTable("symbolsPairs", {
    id: integer().primaryKey().generatedByDefaultAsIdentity(),
    name: varchar({ length: 20 }).notNull(),
});

export const TradeTag = pgEnum("tradeTag", ["long", "short", "both"]);
export const TradeStatus = pgEnum("tradeStatus", ["win", "loss", "tie"]);
export const TradeGrade = pgEnum("tradeGrade", ["A", "B", "C", "D", "E", "F"]);

export const trade = pgTable("trade", {
    id: integer().primaryKey().generatedByDefaultAsIdentity(),
    clerkUserID: varchar({ length: 255 }).notNull(),
    symbol: varchar({ length: 20 }).notNull(),
    tag: TradeTag(),
    entryTime: varchar({ length: 30 }),
    exitTime: varchar({ length: 30 }),
    entryDate: date(),
    exitDate: date(),
    entryPrice: integer(),
    exitPrice: integer(),
    tradeStatus: TradeStatus(),
    riskToReward: integer(),
    actualRiskToReward: integer(),
    riskToTrade: integer(),
    profitNLoss: integer(),
    tradeGrade: TradeGrade(),
    newsDay: boolean().default(false),
    impactOfNewsDay: varchar({ length: 20 }),
    mistakeDescription: text(),
    strategyDescription: text(),
    learningDescription: text(),
});
