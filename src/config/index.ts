export default {
    serviceAccount: {
        client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
        private_key: ((process.env.GOOGLE_PRIVATE_KEY as string) || "").replace(/\\n/g, "\n"),
    },
    leagues: {
        premierLeague: {
            id: "premier-league",
            name: "Premier League",
            logo: "/images/pl-logo.png",
            link: "/premier-league",
            sheetsInfo: {
                sheetsId: "1318M_NNO65U4nt4boaNbzNqsoseQwxsSSNsYcGOWffM",
                managersTabId: "2144170355",
            },
        },

        championship: {
            id: "championship",
            name: "Championship",
            logo: "/images/efl-logo.png",
            link: "/championship",
            sheetsInfo: {
                sheetsId: "13mebTP0t7wktz5t43ERDIJPQmHqhl2Mk2OhDQ2KmSZU",
                managersTabId: "2144170355",
            },
        },

        bundesliga: {
            id: "bundesliga",
            name: "Bundesliga",
            logo: "/images/bundesliga-logo.png",
            link: "/bundesliga",
            sheetsInfo: {
                sheetsId: "",
                managersTabId: "2144170355",
            },
        },
    },
}
