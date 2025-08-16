"use client"

import React, { useState } from 'react'
import Image from 'next/image'
import ShinyText from '@/components/modules/ShinyText'

import { Loader2, OctagonAlertIcon } from 'lucide-react'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { authClient } from "@/lib/auth-client";
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from '@/components/ui/card'
import { Alert, AlertTitle } from '@/components/ui/alert'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import Link from 'next/link'
import { useRouter } from 'next/navigation'


const formSchema = z.object({
  email: z.string().email(),
  password: z.string().min(1, { message: "The password is required" })
})

const Signin = () => {
  const router = useRouter();
  const [error, setError] = useState<String | null>(null);
  const [pending, setPending] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  })

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    setError(null);
    setPending(true);

    authClient.signIn.email({
      email: data.email,
      password: data.password,
      callbackURL: "/dashboard"
    }, {
      onSuccess: () => {
        router.push("/dashboard");
        setPending(false);
      },
      onError: ({ error }) => {
        setPending(false);
        setError(error.message);
      }
    }
    )
  }
  return (
    <div>
      <div className='flex flex-col gap-6'>
        <Card className='overflow-hidden p-0'>
          <CardContent className='grid md:grid-cols-2 gap-5 p-0'>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8" autoComplete='off'>
                <div className='flex items-center justify-center font-bold text-3xl py-2'>
                  Welcome Back
                </div>
                <div className='flex flex-col px-3 py-4 gap-4'>
                  <div>
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input type="email" placeholder="m@example.com" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div>
                    <FormField
                      control={form.control}
                      name="password"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Password</FormLabel>
                          <FormControl>
                            <Input type="password" placeholder="********" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  {!!error && (
                    <Alert className='bg-destructive/10 border-none'>
                      <OctagonAlertIcon className='h-4 w-4 !text-destructive' />
                      <AlertTitle className='text-destructive'>{error}</AlertTitle>
                    </Alert>
                  )}
                  <Button type="submit" disabled={pending}>
                    {pending ? <Loader2 className='animate-spin' /> : "Sign In"}
                  </Button>
                </div>
                <div className='after:border-border relative text-center text-sm after:absolute-after:inset-0
                after:top-1/2 after:z-0 after:flex after:items-center after:border-t px-2'>
                  <span className='bg-card text-muted-foreground relative z-10 px-2'>
                    Or continue with
                  </span>
                </div>
                <div className='grid grid-cols-2 gap-4 items-center px-4'>
                  <Button
                    variant="outline"
                    type='button'
                    className='w-full'
                    disabled={pending}>
                    Google
                  </Button>
                  <Button
                    variant="outline"
                    type='button'
                    className='w-full'
                    disabled={pending}>
                    Github
                  </Button>
                </div>
                <div className='text-center text-sm py-2'>
                  Don&apos;t have an account?{" "}
                  <Link href="/sign-up" className='underline underline-offset-4'>
                    Sign up
                  </Link>
                </div>
              </form>
            </Form>
            <div className='flex flex-col items-center justify-center bg-secondary'>
              <Image
                src="/logo.svg"
                alt="logo"
                width={100}
                height={100}
                className='h-[92px] w-[92px]' />
              <span><ShinyText baseColor="rgb(0, 0, 0)"
                shineColor="rgb(20, 22, 27)"
                direction="top-to-bottom"
                speed={10} size="2xl" weight="bold">
                VIRA
              </ShinyText></span>
            </div>
          </CardContent>
        </Card>
        <div className='text-muted-foreground *:[a]:hover:text-primary text-center text-xs
          text-balance *:[a]:underline *:[a]:underline-offset-4'>
          By clicking continue, you agree to our <a href='#'>Terms of Service</a> and <a href='#'>Privacy Policy</a>
        </div>
      </div>
    </div>
  )
}

export default Signin