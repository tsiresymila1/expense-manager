"use client"

import { upsertSetting } from "@/app/actions/setting/action"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Loader } from "lucide-react"
import { useAction } from "next-safe-action/hooks"
import { useForm } from "react-hook-form"
import { toast } from "sonner"

type SettingProps = {
    settings: Record<string, string | null>
}
type FormValue = {
    currency: string | null
    currency_symbol: string | null
}
export default function SettingPreference({ settings }: SettingProps) {
    const { register, handleSubmit } = useForm<FormValue>({
        defaultValues: {
            currency: settings['currency'],
            currency_symbol: settings['currency_symbol']
        }
    })
    const { executeAsync, isExecuting, isPending } = useAction(upsertSetting)
    const onSubmit = async (data: FormValue) => {
        const res = await executeAsync({
            data: [
                {
                    key: 'currency',
                    value: data.currency
                },
                {
                    key: 'currency_symbol',
                    value: data.currency_symbol
                }
            ]
        })
        if (res?.data) {
            toast.success(`Setting updated`);
        } else {
            toast.error("Error", {
                description: res?.serverError ?? res?.validationErrors?._errors
            })
        }

    }
    return <form
        onSubmit={e => {
            e.preventDefault();
            handleSubmit(onSubmit)(e)
        }}
        className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
                <label className="block text-sm font-medium text-gray-700">
                    Default Currency
                </label>
                <Input
                    defaultValue={settings['currency'] ?? ''}
                    type="text"
                    placeholder="Enter currency name"
                    className="mt-1"
                    {...register("currency")}
                />
            </div>
            <div>
                <label className="block text-sm font-medium text-gray-700">
                    Default Currency Symbol
                </label>
                <Input
                    defaultValue={settings['currency_symbol'] ?? ''}
                    type="text"
                    placeholder="Enter currency name"
                    className="mt-1"
                    {...register("currency_symbol")}
                />
            </div>
        </div>
        <div className="flex justify-start">
            <Button
                disabled={isExecuting || isPending} type="submit"
                className="w-full md:w-auto bg-expense-500 hover:bg-expense-600 text-white">
                {isExecuting || isPending ? <Loader color="white" className="animate-spin" /> : null}
                Save Preferences
            </Button>
        </div>
    </form>
}