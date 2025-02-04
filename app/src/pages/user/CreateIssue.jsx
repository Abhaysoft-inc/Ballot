import Navbar from '@/components/Navbar'
import React from 'react'
import { useForm } from 'react-hook-form';
import { IssueSchema } from './schema/issueSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { Card, CardTitle } from '@/components/ui/card';

function CreateIssue() {

    const form = useForm({
        resolver: zodResolver(IssueSchema),
        defaultValues: {
            title: "",
            desc: "",
            issueLocation: "",


        }

    })
    return (
        <>



            <Navbar />

            <div className="mx-20">

                <Card>
                    <CardTitle></CardTitle>


                </Card>






            </div>





        </>
    )
}

export default CreateIssue