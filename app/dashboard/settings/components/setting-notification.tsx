"use client"

import { upsertSetting } from "@/app/actions/setting/action"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Loader } from "lucide-react"
import { useAction } from "next-safe-action/hooks"
import { Controller, useForm } from "react-hook-form"
import { toast } from "sonner"

type SettingProps = {
    settings: Record<string, string | null>
}
type FormValue = {
    expense_limit: string | null
    notification_email: string | null
    notification_sms: string | null
}
export default function SettingNotification({ settings }: SettingProps) {
    const { register, control, handleSubmit } = useForm<FormValue>({
        defaultValues: {
            expense_limit: settings['expense_limit'],
            notification_email: settings['notification_email'],
            notification_sms: settings['notification_sms']
        }
    })
    const { executeAsync, isExecuting, isPending } = useAction(upsertSetting)
    const onSubmit = async (data: FormValue) => {
        const values = [{
            key: 'expense_limit',
            value: data.expense_limit
        }, {
            key: 'notification_email',
            value: data.notification_email
        }, {
            key: 'notification_sms',
            value: data.notification_sms
        }]
        console.log(values);
        const res = await executeAsync({
            data: values
        })
        if (res?.data) {
            toast.success(`Setting updated`);
        } else {
            console.log(res);
            toast.error("Error", {
                description: res?.serverError ?? res?.validationErrors?.data?._errors?.join(', ')
            })
        }
    }
    return <form
        onSubmit={e => {
            e.preventDefault();
            handleSubmit(onSubmit)(e)
        }}
        className="space-y-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div>
                <label className="block text-sm font-medium text-gray-700">
                    Monthly Expense Limit
                </label>
                <Input
                    type="number"
                    placeholder="Enter max monthly expense"
                    className="mt-1"
                    {...register("expense_limit")}

                />
            </div>
            <div className="flex flex-col gap-4">
                <label className="block text-sm font-medium text-gray-700">
                    Notification Preferences
                </label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex items-center">
                        <Controller
                            control={control}
                            name="notification_email"
                            render={({ field }) => <Checkbox checked={field.value != null} onCheckedChange={(e) => {
                                field.onChange(e ? "1" : null)
                            }} id="email-notifications" />}
                        />
                        <label
                            htmlFor="email-notifications"
                            className="ml-2 block text-sm text-gray-700"
                        >
                            Email Notifications
                        </label>
                    </div>
                    <div className="flex items-center">
                        <Controller
                            control={control}
                            name="notification_sms"
                            render={({ field }) => <Checkbox
                                checked={field.value != null}
                                onCheckedChange={(e) => {
                                    field.onChange(e ? "1" : null)
                                }}
                                id="sms-notifications"
                            />}
                        />
                        <label
                            htmlFor="sms-notifications"
                            className="ml-2 block text-sm text-gray-700"
                        >
                            SMS Notifications
                        </label>
                    </div>
                </div>
            </div>

        </div>
        <Button
            disabled={isExecuting || isPending} type="submit"
            className="w-full md:w-auto bg-expense-500 hover:bg-expense-600 text-white">
            {isExecuting || isPending ? <Loader color="white" className="animate-spin" /> : null} Save Notifications
        </Button>
    </form>
}   