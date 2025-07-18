import {
    BarChart3,
    BrainCog,
    ClipboardList,
    LayoutDashboard,
    ListMusic,
    LucideIcon,
    Notebook,
    PlusCircle,
    RefreshCw,
    Search,
    Settings,
} from "lucide-react";

type Item = {
    title: string;
    url?: string;
    icon: LucideIcon;
};

export const sidebarItems: Item[] = [
    {
        title: "Dashboard",
        url: "/dashboard",
        icon: LayoutDashboard,
    },
    {
        title: "Reports",
        url: "/dashboard/reports",
        icon: BarChart3,
    },
    {
        title: "Journal",
        url: "/dashboard/journal",
        icon: Notebook,
    },
    {
        title: "Trades",
        url: "/dashboard/trades",
        icon: Search,
    },
    {
        title: "Playlists",
        url: "/dashboard/playlists",
        icon: ListMusic,
    },
    {
        title: "Market Replay",
        url: "/dashboard/market-replay",
        icon: RefreshCw,
    },
    {
        title: "Strategies",
        url: "/dashboard/strategies",
        icon: BrainCog,
    },
    {
        title: "Trading Plan",
        url: "/dashboard/trading-plan",
        icon: ClipboardList,
    },
];

export const sidebarFooterItems: Item[] = [
    {
        title: "Add trades",
        url: "/dashboard/add-trades",
        icon: PlusCircle,
    },
    {
        title: "Configuration",
        url: "/dashboard/configuration",
        icon: Settings,
    },
];
