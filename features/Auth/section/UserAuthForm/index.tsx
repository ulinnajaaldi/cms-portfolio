"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { type AuthFormValue, authSchema } from "@/domain/Auth";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useAuthLoginMutation } from "../../hook";

const UserAuthForm: React.FC = () => {
  const defaultValues = {
    username: "",
    password: "",
  };

  const form = useForm<AuthFormValue>({
    resolver: zodResolver(authSchema),
    defaultValues,
  });

  const { mutate, isPending } = useAuthLoginMutation();

  return (
    <>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit((data) => {
            mutate(data);
          })}
          className="w-full space-y-2"
        >
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    type="text"
                    placeholder="Enter your username..."
                    disabled={isPending}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input
                    type="password"
                    placeholder="****"
                    disabled={isPending}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button disabled={isPending} className="ml-auto w-full" type="submit">
            Login
          </Button>
        </form>
      </Form>
    </>
  );
};

export default UserAuthForm;
