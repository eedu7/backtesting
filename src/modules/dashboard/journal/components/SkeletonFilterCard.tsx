import { Skeleton } from "@/components/ui/skeleton";

export const SkeletonFilterCard = () => {
    return (
        <div className="space-y-2">
            <Skeleton className="h-3 w-full" />
            <Skeleton className="h-10 w-full" />
        </div>
    );
};
