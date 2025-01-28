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
import AuthNav from './AuthNav';
import { LoginSchema } from './schema/loginSchema';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useNavigate } from 'react-router-dom';


function LoginPage() {
    const navigate = useNavigate();

    const form = useForm({
        resolver: zodResolver(LoginSchema),
        defaultValues: {
            username: "",
            password: "",
        }

    })

    const onSubmit = () => {
        console.log("submitted");
        navigate('/user/trackboard')
    }

    return (
        <>
            <AuthNav />

            <div className="main mt-20 flex justify-center geist">
                <Card className="w-[300px]  border border-white bg-transparent">

                    <CardTitle className="text-white px-6 mt-6">Login</CardTitle>
                    <CardContent className="mt-10">
                        <Form {...form} >
                            <form onSubmit={form.handleSubmit(onSubmit)}>
                                <FormField
                                    control={form.control}
                                    name="username"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel className="text-white">Username</FormLabel>
                                            <FormControl>
                                                <Input placeholder="Username" {...field} />
                                            </FormControl>
                                            {/* <FormDescription>This is your public display name.</FormDescription> */}
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField className=""
                                    control={form.control}
                                    name="password"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel className="text-white mt-4">Password</FormLabel>
                                            <FormControl>
                                                <Input placeholder="Password" type="password"  {...field} />
                                            </FormControl>
                                            {/* <FormDescription>This is your public display name.</FormDescription> */}
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <Button className="mt-4 bg-white text-black">Login</Button>


                            </form>

                        </Form>




                    </CardContent>



                </Card>

            </div>
        </>
    );
}

export default LoginPage;
