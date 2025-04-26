import { getUser } from "@/app/actions/get-user";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import prisma from "@/lib/prisma";
import SettingNotification from "./components/setting-notification";
import SettingPreference from "./components/setting-preference";

export default async function SettingsPage() {
    const user = await getUser()
    const settingsData = await prisma.setting.findMany({
        where: {
            userId: user?.id
        }
    })
    const settings = settingsData.reduce<Record<string, string | null>>((p, next) => {
        p[next.key.replace(`${user?.id ?? ''}_`, '')] = next.value;
        return p;
    }, {})

    return (
        <div className="space-y-12 pb-6">
            <div data-aos="fade-left" data-aos-offset="20">
                <h1 className="text-2xl font-bold tracking-tight">Settings</h1>
                <p className="text-muted-foreground text-md">
                    Manage your account settings and preferences here.
                </p>
            </div>
            <Card data-aos="fade-up" className="bg-transparent rounded-lg border border-expense-100/80 dark:border-expense-900/80 shadow-sm">
                <CardContent>
                    <Tabs defaultValue="preference">
                        <TabsList className="rounded-sm">
                            <TabsTrigger className="rounded-sm" value="preference">
                                Preferences
                            </TabsTrigger>
                            <TabsTrigger className="rounded-sm" value="notification">
                                Notification
                            </TabsTrigger>
                        </TabsList>
                        <TabsContent className="py-6" value="preference">
                            <SettingPreference settings={settings} />
                        </TabsContent>
                        <TabsContent className="py-6" value="notification">
                            <SettingNotification settings={settings} />
                        </TabsContent>
                    </Tabs>
                </CardContent>
            </Card>
        </div>
    );
}
