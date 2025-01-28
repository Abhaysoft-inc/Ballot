import { CornerDownRight } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router-dom';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
    Form,
    FormControl,

    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardTitle } from '@/components/ui/card';

// Define the schema using zod
const FormSchema = z.object({
    username: z.string().min(2, {
        message: 'Username must be at least 2 characters.',
    }),
    password: z.string().min(6),
    fullname: z.string(),
    address: z.string(),
    mobile: z.string(),
    email: z.string(),
});

function SignUpPage() {
    // Set up the form using React Hook Form and Zod resolver
    const form = useForm({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            username: '',
            password: '',
        },
    });

    // Function to handle form submission
    function onSubmit(data) {
        console.log({
            msg: data,
        });
    }

    return (
        <>
            {/* Navigation Bar */}
            <nav className="flex justify-between text-white px-14 py-6 items-center">
                <Link to={'/'}>
                    <p className="space-grotesk text-2xl font-bold"> ballot.</p>
                </Link>
                <Link to={'/login'}>
                    <p className="geist flex gap-3 items-center">
                        <CornerDownRight /> Login
                    </p></Link>
            </nav>

            {/* Main Content */}
            <div className="main mt-20 flex justify-center geist">
                <Card className="w-[450px]  border border-white bg-transparent">

                    <CardTitle className="text-white px-6 mt-6">Create an Account</CardTitle>
                    <CardContent className="mt-10">
                        <Form {...form}>




                            <FormField
                                control={form.control}
                                name="fullname"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="text-white">Full Name</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Full Name" {...field} />
                                        </FormControl>
                                        {/* <FormDescription>This is your public display name.</FormDescription> */}
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <div className="flex gap-3 mt-3">
                                <FormField className=""
                                    control={form.control}
                                    name="email"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel className="text-white mt-4">Email</FormLabel>
                                            <FormControl>
                                                <Input placeholder="Email" type="email"  {...field} />
                                            </FormControl>
                                            {/* <FormDescription>This is your public display name.</FormDescription> */}
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField className=""
                                    control={form.control}
                                    name="phone"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel className="text-white mt-4">Phone</FormLabel>
                                            <FormControl>
                                                <Input placeholder="Phone" type="number"  {...field} />
                                            </FormControl>
                                            {/* <FormDescription>This is your public display name.</FormDescription> */}
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                            </div>

                            <FormField className=""
                                control={form.control}
                                name="address"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="text-white mt-4">Address</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Address" type="text"  {...field} />
                                        </FormControl>
                                        {/* <FormDescription>This is your public display name.</FormDescription> */}
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <Button className="mt-4 bg-white text-black">Signup</Button>




                        </Form>




                    </CardContent>



                </Card>

            </div>
        </>
    );
}

export default SignUpPage;
