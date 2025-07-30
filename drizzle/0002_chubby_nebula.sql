ALTER TABLE "trade" ADD COLUMN "clerkUserID" varchar(255) NOT NULL;--> statement-breakpoint
ALTER TABLE "trade" ADD COLUMN "entryTime" varchar(30);--> statement-breakpoint
ALTER TABLE "trade" ADD COLUMN "exitTime" varchar(30);--> statement-breakpoint
ALTER TABLE "trade" ADD COLUMN "entryPrice" integer;--> statement-breakpoint
ALTER TABLE "trade" ADD COLUMN "exitPrice" integer;--> statement-breakpoint
ALTER TABLE "trade" ADD COLUMN "tradeStatus" "tradeStatus";--> statement-breakpoint
ALTER TABLE "trade" ADD COLUMN "riskToReward" integer;--> statement-breakpoint
ALTER TABLE "trade" ADD COLUMN "actualRiskToReward" integer;--> statement-breakpoint
ALTER TABLE "trade" ADD COLUMN "riskToTrade" integer;--> statement-breakpoint
ALTER TABLE "trade" ADD COLUMN "profitNLoss" integer;--> statement-breakpoint
ALTER TABLE "trade" ADD COLUMN "tradeGrade" "tradeGrade";--> statement-breakpoint
ALTER TABLE "trade" ADD COLUMN "newsDay" boolean DEFAULT false;--> statement-breakpoint
ALTER TABLE "trade" ADD COLUMN "impactOfNewsDay" integer;--> statement-breakpoint
ALTER TABLE "trade" ADD COLUMN "mistakeDescription" text;--> statement-breakpoint
ALTER TABLE "trade" ADD COLUMN "strategyDescription" text;--> statement-breakpoint
ALTER TABLE "trade" ADD COLUMN "learningDescription" text;--> statement-breakpoint
ALTER TABLE "trade" DROP COLUMN "entry_time";--> statement-breakpoint
ALTER TABLE "trade" DROP COLUMN "exit_time";--> statement-breakpoint
ALTER TABLE "trade" DROP COLUMN "entry_price";--> statement-breakpoint
ALTER TABLE "trade" DROP COLUMN "exit_price";--> statement-breakpoint
ALTER TABLE "trade" DROP COLUMN "trade_status";--> statement-breakpoint
ALTER TABLE "trade" DROP COLUMN "risk_to_reward";--> statement-breakpoint
ALTER TABLE "trade" DROP COLUMN "actual_risk_to_reward";--> statement-breakpoint
ALTER TABLE "trade" DROP COLUMN "risk_to_trade";--> statement-breakpoint
ALTER TABLE "trade" DROP COLUMN "profit_loss";--> statement-breakpoint
ALTER TABLE "trade" DROP COLUMN "trade_grade";--> statement-breakpoint
ALTER TABLE "trade" DROP COLUMN "news_day";--> statement-breakpoint
ALTER TABLE "trade" DROP COLUMN "impact_of_news_day";--> statement-breakpoint
ALTER TABLE "trade" DROP COLUMN "mistake";--> statement-breakpoint
ALTER TABLE "trade" DROP COLUMN "strategy_description";--> statement-breakpoint
ALTER TABLE "trade" DROP COLUMN "learning_description";