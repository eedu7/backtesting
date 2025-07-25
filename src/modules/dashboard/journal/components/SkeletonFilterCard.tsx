import { Skeleton } from "@/components/ui/skeleton";

export const SkeletonFilterCard = () => {
    return (
        <div className="space-y-2">
            <Skeleton className="h-3 w-24" />
            <Skeleton className="h-10 w-48" />
        </div>
    );
};
