import { trade } from "@/db/schema";
import { tradeSchema } from "@/modules/add-trades/schmea";
import { baseProcedure, createTRPCRouter } from "@/trpc/init";
import { auth } from "@clerk/nextjs/server";

export const tradeProcedures = createTRPCRouter({
    getMany: baseProcedure.query(async ({ ctx }) => {
        return await ctx.db.query.trade.findMany();
    }),

    add: baseProcedure.input(tradeSchema).mutation(async ({ input, ctx }) => {
        const { userId } = await auth();

        if (!userId) {
            throw new Error("User not found");
        }

        await ctx.db.insert(trade).values({
            ...input,
            entryDate: input.entryDate.toISOString().split("T")[0],
            exitDate: input.exitDate.toISOString().split("T")[0],
            clerkUserID: userId,
        });

        return {
            success: true,
        };
    }),
});
