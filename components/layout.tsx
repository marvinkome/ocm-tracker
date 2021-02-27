import Head from "next/head"

export function Layout({ children, title }: { children: any; title: string }) {
    return (
        <div>
            <Head>
                <title>{`${title ? title + " -" : ""} OCM Tracker`}</title>
            </Head>

            {children}
        </div>
    )
}
