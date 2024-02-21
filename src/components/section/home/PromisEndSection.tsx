'use client'
import React from 'react'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

const formSchema = z.object({
    username: z.string().min(2, {
      message: "Username must be at least 2 characters.",
    }),
})

export default function PromisEndSection() {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
          username: "",
        },
      })

      function onSubmit(values: z.infer<typeof formSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values)
      }

  return (
    <>
    <section className="p-spacer-b-2">
		<div className="container">
			<div className="row justify-content-between align-items-lg-center">
				<div className="col-lg-6 col-xl-5 p-spacer-b-2 pb-lg-0">
					<h2 className="p-spacer-b h2-small">Love to hear from you get in Touch</h2>

                    <Form {...form} >
                        <form onSubmit={form.handleSubmit(onSubmit)} className="contact-form form-style">
                            <FormField
                            control={form.control}
                            name="username"
                            render={({ field }) => (
                                <FormItem>
                                <FormLabel>Username</FormLabel>
                                <FormControl>
                                    <Input placeholder="shadcn" {...field} />
                                </FormControl>
                                <FormDescription>
                                    This is your public display name.
                                </FormDescription>
                                <FormMessage />
                                </FormItem>
                            )}
                            />
                            <Button type="submit">Submit</Button>
                        </form>
                    </Form>

					{/* <form className="contact-form form-style" action="#">
						<div className="row">
						  <div className="col-md-6 mt-md-4">
							<label for="name">Your Name</label>
							<input type="text" className="form-control" id="name" name="name" placeholder="Name, Surename">
						  </div>
						  <div className="col-md-6 mt-4">
							<label for="email">E-Mail</label>
							<input type="email" className="form-control" id="email" name="email" placeholder="Your E-Mail Adress">
						  </div>
						</div>
						<div className="row">
						  <div className="col-md-6 mt-4">
							<label for="phone">Your Phone Number</label>
							<input type="tel" className="form-control" id="phone" name="phone" placeholder="+33 6 513 28 45">
						  </div>
						  <div className="col-md-6 mt-4">
							<label for="company">Company Name</label>
							<input type="text" className="form-control" id="company" name="company" placeholder="Ychtmaster ">
						  </div>
						</div>
						<div className="row mt-4">
						  <div className="col-md-12">
							<label for="message">Message</label>
							<textarea className="form-control" id="message" name="message" rows="4" placeholder="Enter your message here"></textarea>
						  </div>
						</div>
						<div className="row mt-4 spacer-b-small">
						  <div className="col-md-12 d-flex align-items-center">
							<input type="checkbox" className="form-check-input" id="terms" name="terms">
							<label className="form-check-label" for="terms">I agree with the Terms</label>
						  </div>
						</div>
						<div className="row mt-4">
						  <div className="col-md-12">
							<button type="submit" className="button" disabled>Send Now</button>
						  </div>
						</div>
					</form> */}

				</div>
				<div className="col-lg-5 col-xl-6">
					<picture>
                        <img className="img-fluid rounded-5" src="/sys_img/img/power_catermaran.jpg" alt="Krabi Islands Drone Picture" />
					</picture>
		
				</div>
			</div>
		</div>
	</section>
    </>
  )
}
