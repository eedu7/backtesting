import React from "react";

import { SkeletonFilterCard } from "@/modules/dashboard/journal/components/SkeletonFilterCard";

export const Filters = () => {
    return (
        <div className="flex items-center gap-4">
            <SkeletonFilterCard />
            <SkeletonFilterCard />
            <SkeletonFilterCard />
            <SkeletonFilterCard />
        </div>
    );
};
