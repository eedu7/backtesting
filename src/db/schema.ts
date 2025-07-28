import { boolean, integer, pgEnum, pgTable, text, varchar } from "drizzle-orm/pg-core";

export const symbolsPairs = pgTable("symbolsPairs", {
    id: integer().primaryKey().generatedByDefaultAsIdentity(),
    name: varchar({ length: 20 }).notNull(),
});

export const TradeTag = pgEnum("tradeTag", ["long", "short", "both"]);
export const TradeStatus = pgEnum("tradeStatus", ["win", "loss", "tie"]);
export const TradeGrade = pgEnum("tradeGrade", ["A", "B", "C", "D", "E", "F"]);

export const trade = pgTable("trade", {
    id: integer().primaryKey().generatedByDefaultAsIdentity(),
    symbol: varchar({ length: 20 }).notNull(),
    tag: TradeTag(),
    entry_time: varchar({ length: 30 }),
    exit_time: varchar({ length: 30 }),
    entry_price: integer(),
    exit_price: integer(),
    trade_status: TradeStatus(),
    risk_to_reward: integer(),
    actual_risk_to_reward: integer(),
    risk_to_trade: integer(),
    profit_loss: integer(),
    trade_grade: TradeGrade(),
    news_day: boolean().default(false),
    impact_of_news_day: integer(),
    mistake: text(),
    strategy_description: text(),
    learning_description: text(),
});
