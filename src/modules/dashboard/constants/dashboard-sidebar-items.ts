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
};

export const sidebarItems: Item[] = [
    {
        title: "Dashboard",
        url: "#",
        icon: LayoutDashboard,
    },
    {
        title: "Reports",
        url: "#",
        icon: BarChart3,
    },
    {
        title: "Journal",
        url: "#",
        icon: Notebook,
    },
    {
        title: "Trades",
        url: "#",
        icon: Search,
    },
    {
        title: "Playlists",
        url: "#",
        icon: ListMusic,
    },
    {
        title: "Market Replay",
        url: "#",
        icon: RefreshCw,
    },
    {
        title: "Strategies",
        url: "#",
        icon: BrainCog,
    },
    {
        title: "Trading Plan",
        url: "#",
        icon: ClipboardList,
    },
];

export const sidebarFooterItems: Item[] = [
    {
        title: "Add trades",
        url: "#",
        icon: PlusCircle,
    },
    {
        title: "Configuration",
        url: "#",
        icon: Settings,
    },
];
