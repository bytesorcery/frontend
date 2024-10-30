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
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { useState } from "react"
import FormLoading from "@/components/custom/FormLoading"

export default function Contact() {
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const formSchema = z.object({
        firstName: z.string().min(1, "First name is required"),
        lastName: z.string().min(1, "Last name is required"), 
        eMail: z.string().email("Invalid email address"),
        phoneNumber: z.string().optional(),
        message: z.string().min(1, "Message is required")
    })

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            firstName: "",
            lastName: "",
            eMail: "",
            phoneNumber: "",
            message: ""
        }
    })

    function cleanInput(values: z.infer<typeof formSchema>) {
        //clean phoneNumber number
        values.phoneNumber = values.phoneNumber?.replace(/[^0-9]/g, '')
        return values
    }

    function onSubmit(values: z.infer<typeof formSchema>) {
        
        // Show loading state
        setIsLoading(true);
        
        const cleanedValues = cleanInput(values)
        console.log(cleanedValues)
        const formData = new FormData();
        for (const [key, value] of Object.entries(cleanedValues)) {
            formData.append(key, value || '');
        }
        
        fetch("http://localhost:5000/api/submit-contact", {
            method: "POST",
            body: formData
        })
            .then(async (response) => {
                if (!response.ok) {
                    throw new Error('Submission failed');
                }
                // Handle success (e.g., show success message, reset form)
                form.reset();
            })
            .catch((error) => {
                // Handle error (e.g., show error message)
                console.error('Submission error:', error);
                setError("Failed to send message. Please try again.");
            })
            .finally(() => {
                setIsLoading(false);
            });
    }

    return (
        <>
        {isLoading && <FormLoading />}
        <div className="flex justify-center items-center min-h-screen">
            <div className="w-96">
            <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
                control={form.control}
                name="firstName"
                render={({ field }) => (
                <FormItem>
                    <FormLabel>First Name</FormLabel>
                    <FormControl>
                    <Input placeholder="John" {...field} />
                    </FormControl>
                    <FormDescription>
                    </FormDescription>
                    <FormMessage />
                </FormItem>
                )}
            />
            <FormField
                control={form.control}
                name="lastName"
                render={({ field }) => (
                <FormItem>
                    <FormLabel>Last Name</FormLabel>
                    <FormControl>
                    <Input placeholder="Doe" {...field} />
                    </FormControl>
                    <FormDescription>
                    </FormDescription>
                    <FormMessage />
                </FormItem>
                )}
            />
            <FormField
                control={form.control}
                name="eMail"
                render={({ field }) => (
                <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                    <Input placeholder="example@example.com" {...field} />
                    </FormControl>
                    <FormDescription>
                    </FormDescription>
                    <FormMessage />
                </FormItem>
                )}
            />
            <FormField
                control={form.control}
                name="phoneNumber"
                render={({ field }) => (
                <FormItem>
                    <FormLabel>Phone Number</FormLabel>
                    <FormControl>
                    <Input placeholder="800-888-8888" {...field} />
                    </FormControl>
                    <FormDescription>
                    </FormDescription>
                    <FormMessage />
                </FormItem>
                )}
            />
            <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                <FormItem>
                    <FormLabel>Message</FormLabel>
                    <FormControl>
                    <Input placeholder="Message" {...field} />
                    </FormControl>
                    <FormDescription>
                    </FormDescription>
                    <FormMessage />
                </FormItem>
                )}
            />
            <Button type="submit">Submit</Button>
            </form>
        </Form>
        <h2 className="error text-center text-red-500 mt-4">{error}</h2>
        </div>
      </div>
    </>
    )
}