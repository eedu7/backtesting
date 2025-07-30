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
    url: string;
    icon: LucideIcon;
    disable?: boolean;
};
// TODO: Add proper url
export const sidebarItems: Item[] = [
    {
        title: "Dashboard",
        url: "/dashboard",
        icon: LayoutDashboard,
    },
    // {
    //     title: "Reports",
    //     url: "/dashboard/reports",
    //     disable: true,
    //     icon: BarChart3,
    // },
    {
        title: "Journal",
        url: "/dashboard/journal",
        icon: Notebook,
    },
    // {
    //     title: "Trades",
    //     url: "/dashboard/trades",
    //     icon: Search,
    //     disable: true,
    // },
    // {
    //     title: "Playlists",
    //     url: "/dashboard/playlists",
    //     icon: ListMusic,
    //     disable: true,
    // },
    // {
    //     title: "Market Replay",
    //     url: "/dashboard/market-replay",
    //     icon: RefreshCw,
    //     disable: true,
    // },
    // {
    //     title: "Strategies",
    //     url: "/dashboard/strategies",
    //     icon: BrainCog,
    //     disable: true,
    // },
    // {
    //     title: "Trading Plan",
    //     url: "/dashboard/trading-plan",
    //     icon: ClipboardList,
    //     disable: true,
    // },
];

type SidebarFooterItem = {
    title: string;
    icon: LucideIcon;
    disable?: boolean;
};

export const sidebarFooterItems: SidebarFooterItem[] = [
    {
        title: "Add trades",
        icon: PlusCircle,
        disable: true,
    },
    {
        title: "Configuration",
        icon: Settings,
        disable: true,
    },
];
