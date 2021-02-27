import Head from "next/head"

export function Layout({ children, title }: { children: any; title: string }) {
    return (
        <div>
            <Head>
                <title>{`${title ? title + " -" : ""} OCM Tracker`}</title>
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,600;1,400;1,600&display=swap"
                    rel="stylesheet"
                />
            </Head>

            {children}
        </div>
    )
}
