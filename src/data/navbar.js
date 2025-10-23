export const navbarData = [
    {
        name: "Start",
        path: "/",
        submenu: null,
    },
    {
        name: "O nas",
        path: "/o-nas",
        submenu: [
            {
                name: "O Teatrze",
                path: "/o-nas",
                description: "Poznaj historię i misję CTM Movimento",
            },
            {
                name: "Dołącz do nas",
                path: "/o-nas/dolacz",
                description: "Zapisz się do naszej szkoły tańca",
            },
        ],
    },
    {
        name: "Instruktorzy",
        path: "/instruktorzy",
        submenu: null,
    },
    {
        name: "Kalendarz",
        path: "/kalendarz",
        submenu: [
            {
                name: "Wszystkie wydarzenia",
                path: "/kalendarz",
                description: "Zobacz pełny kalendarz wydarzeń",
            },
            {
                name: "Aktualne",
                path: "/kalendarz/aktualne",
                description: "Nadchodzące wydarzenia i zajęcia",
            },
            {
                name: "Archiwalne",
                path: "/kalendarz/archiwalne",
                description: "Historia naszych wydarzeń",
            },
        ],
    },
    /*{
        name: "Galeria",
        path: "/galeria",
        submenu: null,
    },*/
];